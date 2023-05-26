import React from 'react';
import Button from '@material-ui/core/Button';

const User = (props) => {
  const name = props.name;
  const fun = props.fun;
  return (
    <>
       <h1>This is User Component {name}</h1>
       <Button variant="outlined" color="secondary" onClick={fun}>Click me</Button>
    </>
  );
};

export default User;