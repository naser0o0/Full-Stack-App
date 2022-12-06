import React, { useState } from "react";
// import { loginRequest } from '../controller/requestController';
import "./FromStyle.css";


export default function LoginForm() {
  // const newUserSchema = {
  //     username: "",
  //     password: "",

  // }

  // const [user, setUser]=useState();

  // function handleLoginForm (e){
  //    setUser(prev=>({...prev, [e.target.name]: e.target.value}))
  // }

  // function handleLogin (e){
  //     e.preventDefault();
  //     loginRequest(user); // post request to server
  // }

  return (
    <>
      <div className='wrapper'>

        <form className='form'>
          <h1>Login form </h1>
          <label>
            <b>Username</b>
          </label>
          <input type='text' name='username' placeholder='username' required />
          <br />
          <label>
            <b>Password</b>
          </label>
          <input
            type='password'
            name='password'
            placeholder='password'
            required
          />
          <br />
          <button type='submit' className='button'>
            Login
          </button>
        </form>

      </div>
    </>
  );
}
