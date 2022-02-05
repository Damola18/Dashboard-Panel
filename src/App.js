import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import AddUser from './views/AddUser';
import EditUser from './views/EditUser';
import './index.css'
import Modal from './components/DeleteModal';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/addUser' element={<AddUser />} exact />
        <Route path='/editUser/:id' element={<EditUser />} exact />
      </Routes>
    </Router>
  )
}
    