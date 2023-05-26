import logo from './logo.svg';
import './App.css';
import React, { components } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, NavLink, BrowserRouter, Routes } from 'react-router-dom';
import { Employee } from './components/Employee';
import User from './components/User';
import MyForm from './components/MyForm';
import ContainedPrimaryButton from './components/ContainedPrimaryButton';
import OutlinedSecondaryButton from './components/OutlinedSecondaryButton';
import TextDefaultButton from './components/TextDefaultButton';
import DisabledButton from './components/DisabledButton';
import ColorToggleButton from './components/ColorToggleButton';


const Profile = () => {
  const userName = 'Smit';
  return <h1 className="profile-cmp">Profile Component {userName}</h1>;
};

function App() {
  const clickme = () => alert('clicked');

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
      <MyForm />
      <h2>Buttons</h2>
      <ContainedPrimaryButton />
      <br />
      <br />
      <OutlinedSecondaryButton />
      <br />
      <br />
      <TextDefaultButton />
      <br />
      <br />
      <DisabledButton />
      <br />
      <br />
      <h2>ToggleButton</h2>
      <ColorToggleButton />
      </div>
  );
}

export default App;
