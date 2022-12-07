import React, { useState } from "react";
import Layout from "../../layout/Layout";

export default function RegisterForm() {
  const date = new Date();

  const newUserSchema = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    token: date.getTime(),
  };

  const [newUser, setNewUser] = useState(newUserSchema);

  function handleRegisterForm(e) {}

  function handleRegistration(e) {}

  return (
    <div>
      <h1>Registration Form</h1>
      <form>
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
        <button onClick={handleRegistration}>Register</button>
      </form>
    </div>
  );
}
