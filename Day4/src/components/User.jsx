import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Typography, makeStyles } from '@material-ui/core';

const userStyle = makeStyles((theme) => ({
  wrapper: {
    fontSize: 36,
  },
}));

const User = (props) => {
  const name = props.name;
  const fun = props.fun;
  const classes = userStyle();

  const [age, setAge] = useState(5);

  const updateAge = () => {
    setAge(age + 5);
  };

  return (
    <>
      <h1 className={classes.wrapper}>This is User Component {name}</h1>
      <p>age:{age}</p>
      <Button variant="contained" color="secondary" onClick={updateAge}>
        Click me
      </Button>
    </>
  );
};

export default User;
