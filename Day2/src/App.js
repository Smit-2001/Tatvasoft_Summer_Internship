import logo from './logo.svg';
import './App.css';
import React, { components } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, NavLink, BrowserRouter, Routes } from 'react-router-dom';
import { Employee } from './components/Employee';
import User from './components/User'

const Profile = () => {
  return <h1>Profile Component</h1>
}

function App() {
  const clickme = () => alert("clicked");

  return (
    <div>
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
    </div>
  );
}

export default App;
