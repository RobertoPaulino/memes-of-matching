import React from 'react';

export default function Hero(props) {
  // eslint-disable-next-line react/prop-types
  const { authToken } = props;
  return (
    <div className="onboarding--container">
      <h1 className="onboarding">Find friendship trough memes!</h1>
      <div className="button--container">
        <button type="button" className="primary--button" id="sign">
          {authToken ? 'Sign Out' : 'Sign In'}
        </button>
        {!authToken && (
          <button
            type="button"
            className="primary--button create--account"
            id="create"
          >
            Create an Account
          </button>
        )}
      </div>
    </div>
  );
}
