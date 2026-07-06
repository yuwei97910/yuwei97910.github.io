import React from 'react';
import { Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to my personal website!
      </Typography>
      <Typography variant="body1">
        This is a sample homepage built with React and Material-UI.
      </Typography>
    </Container>
  );
};

export default HomePage;
