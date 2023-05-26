import React from 'react';
import { Button, TextField, Container } from '@material-ui/core';

const MyForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container maxWidth="sm">
        <h2>Form with material UI</h2>
      <form onSubmit={handleSubmit}>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default MyForm;
