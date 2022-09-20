import React from "react";
import TodoApp from "../TodoApp";

function Form(props) {
  return (
    <form className="form">
      <input className="form-control mb-2 mr-sm-3" type="text" placeholder="Username" />
      <input className="form-control mb-2 mr-sm-3" type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input className="form-control mb-2 mr-sm-3" type="password" placeholder="Confirm Password" />
      )}
      <button className="btn btn-success ml-2 align-center"  type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
