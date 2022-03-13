import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';

const Fallback = () => (
  <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    rowGap: '20px',
  }}
  >
    <img src={Logo} alt="anime" />
    <h3>Sorry, There is an Error!</h3>
    <Link to="/">Back to Homepage</Link>
  </div>
);

export default Fallback;
