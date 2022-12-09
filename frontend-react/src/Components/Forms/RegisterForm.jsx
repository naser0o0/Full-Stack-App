import React, { useState } from "react";
import { register } from "../controller/requestController";

export default function RegisterForm() {
  const newUserSchema = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const [newUser, setNewUser] = useState(newUserSchema);

  function handleRegisterForm(e) {
    setNewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleRegistration(e) {
    e.preventDefault();
    register(newUser);
  }
  console.log(newUser);
  return (
    <>
      <div className="wrapper">
        <form className="form">
          <h1>Registration Form</h1>
          <input
            type="text"
            name="firstname"
            placeholder="firstname"
            required
            onChange={handleRegisterForm}
          />
          <br />
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            required
            onChange={handleRegisterForm}
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="email"
            required
            onChange={handleRegisterForm}
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="password"
            required
            onChange={handleRegisterForm}
          />
          <br />
          <button type="submit" className="button" onClick={handleRegistration}>
            Register
          </button>
        </form>
      </div>
    </>
  );
}
