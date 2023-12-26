import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>Login failed. Please try again.</p>
      <Link to="/">Go back to login</Link>
    </div>
  );
};

export default Error;