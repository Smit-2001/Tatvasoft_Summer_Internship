import logo from './logo.svg';
import './App.css';
import React, { components } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, NavLink, BrowserRouter, Routes } from 'react-router-dom';
import { Employee } from './components/Employee';
import User from './components/User';
import { ThemeProvider, createTheme } from '@material-ui/core';
import ExampleComponent from './components/ExampleComponent';

const Profile = () => {
  const userName = 'Smit';
  return <h1 className="profile-cmp">Profile Component {userName}</h1>;
};

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#f458",
    },
    secondary: {
       main: "#2fc30b",
    },
  },
  typography: {
    h1: {
      fontSize: "90px",
    },
  },
});

function App() {
  const clickme = () => alert('clicked');

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <NavLink to="/">home</NavLink>
          <br />
          <NavLink to="/emp">Employee</NavLink>
          <br />
          <NavLink to="/profile">Profile</NavLink>
          <Routes>
            <Route path="/" element={<User name="Smit" fun={clickme} />} />
            <Route path="/emp" element={<Employee />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
        <ExampleComponent />
      </ThemeProvider>
    </div>
  );
}

export default App;
