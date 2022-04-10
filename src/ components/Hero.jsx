import React from 'react';

export default function Hero(props) {
  // eslint-disable-next-line react/prop-types
  const { handleClick, authToken } = props;
  return (
    <div className="onboarding--container">
      <h1 className="onboarding">Find friendship trough memes!</h1>
      <div className="button--container">
        <button
          type="button"
          className="primary--button"
          id="sign"
          onClick={handleClick}
        >
          {authToken ? 'Sign Out' : 'Sign In'}
        </button>
        {!authToken && (
          <button
            type="button"
            className="primary--button create--account"
            id="create"
            onClick={handleClick}
          >
            Create an Account
          </button>
        )}
      </div>
    </div>
  );
}
