import './App.css';
import AllContacts from './components/AllContacts';
import AddContact from './components/AddContact';
import UpdateContact from './components/UpdateContact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllContacts/>}></Route>
        <Route path="/add" element={<AddContact/>}></Route>
        <Route path="/update/:id" element={<UpdateContact/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
