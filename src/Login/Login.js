import React from "react";
import Form from "./Form";
// import './App.css';

var userIsRegistered = false;

function Login() {
  return (
    <div className="container my-4 py-1 border bg-info">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default Login;
