const PORT = 8000;
const express = require('express');
const { MongoClient } = require('mongodb');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const uri =
  'mongodb+srv://RobertPaulino:SDGAE0bffuCQpY01@cluster0.1jubt.mongodb.net/Cluster0?retryWrites=true&w=majority';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json('hello world!');
});

app.post('/Signup', async (req, res) => {
  const client = new MongoClient(uri);
  const { username, password } = req.body;

  const generateduserId = uuidv4();
  const hashedpassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    const existingUser = await users.findOne({ username });

    if (existingUser) {
      return res.status(409).send('user already exist');
    }

    const data = {
      user_id: generateduserId,
      hashed_password: hashedpassword,
      username: username,
    };

    const insertedUser = await users.insertOne(data);

    const token = jwt.sign(insertedUser, {
      expiresIn: 60 * 24,
    });

    res
      .status(201)
      .json({ token, user_id: generateduserId, username: username });
  } catch (err) {
    console.log(err);
  }
});

app.get('/users', async (req, res) => {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const database = client.db('app-data');
    const users = database.collection('users');

    const returnedUsers = await users.find().toArray();
    res.send(returnedUsers);
  } finally {
    await client.close();
  }
});

app.listen(PORT, () => console.log('Server running on PORT ' + PORT));
