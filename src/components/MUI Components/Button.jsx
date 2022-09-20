import React from 'react';
import { Button } from '@mui/material';

const MuiButton = (props) => {
  return (
    <Button
      variant='contained'
      color='success'
      size='large'
      sx={{ margin: '1rem', width: '9rem' }}
    >
      {props.children}
    </Button>
  );
};

export default MuiButton;
