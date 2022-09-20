import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from "./Login/Login";
import TodoApp from './TodoApp';

function App() {
  return (
    <>
    <div className="container p-4 mt-2">
    <h2 className="text-center text-primary">Todo Application</h2>
    <nav>
      <ul>
        <li ><Link to="/">Login</Link></li>
        <li><Link to="/todoApp">TodoApp</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/todoApp" element={<TodoApp />} />
      </Routes>
      
    </div>
    </>
  );
}

export default App;
