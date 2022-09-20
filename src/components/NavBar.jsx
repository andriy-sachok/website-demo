import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './NavBar.module.css';

import { Link } from '@mui/material';

import MuiButton from './MUI Components/Button';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.container}>
      <Link
        href='/'
        variant='h4'
        sx={{
          color: 'black',
          position: 'fixed',
          left: '1rem',
        }}
        underline='none'
      >
        Navigation
      </Link>
      <MuiButton onClick={() => navigate('/home')}>Home</MuiButton>
      <MuiButton onClick={() => navigate('/about')}>About</MuiButton>
      <MuiButton onClick={() => navigate('/contacs')}>Contact</MuiButton>
    </div>
  );
};

export default NavBar;
