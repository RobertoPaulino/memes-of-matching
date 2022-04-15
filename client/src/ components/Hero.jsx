import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hero(props) {
  // eslint-disable-next-line react/prop-types
  const { authToken } = props;

  console.log(props);
  const navigate = useNavigate();

  return (
    <div className="onboarding--container">
      <h1 className="onboarding">Find friendship trough memes!</h1>
      <div className="button--container">
        {authToken ? (
          <button
            type="button"
            className="primary--button"
            id="sign"
            name="sign-out"
            onClick={() => navigate('/Signout')}
          >
            Sign out
          </button>
        ) : (
          <button
            type="button"
            className="primary--button"
            id="sign"
            name="sign-in"
            onClick={() => navigate('/Signin')}
          >
            Sign In
          </button>
        )}
        {!authToken && (
          <button
            type="button"
            className="primary--button create--account"
            id="create"
            onClick={() => {
              navigate('/Signup');
            }}
          >
            Create an Account
          </button>
        )}
      </div>
    </div>
  );
}
