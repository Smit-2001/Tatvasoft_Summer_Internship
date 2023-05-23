import React from 'react';

const User = (props) => {
  const name = props.name;
  const fun = props.fun;
  return (
    <>
       <h1>This is User Component {name}</h1>
       <button onClick={fun}>Click me</button>
    </>
  );
};

export default User;