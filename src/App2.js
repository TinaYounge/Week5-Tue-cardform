import "./App.css";
import React from "react";
import { useState } from "react";

function App2() {
  const [form, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    CoPassword: "",
  });

  const handleAllChange = (event) => {
    setFormData({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.password === form.CoPassword && form.password !== "") {
      return console.log("good");
    } else return console.log("please wrong");
  };
  console.log({ form });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={handleAllChange}
          value={form.name}
        />
        <br />
        <label htmlFor="age">Age: </label>
        <input
          type="number"
          name="age"
          onChange={handleAllChange}
          value={form.age}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          onChange={handleAllChange}
          value={form.email}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleAllChange}
          value={form.password}
        />
        <br />
        <label htmlFor="password">Confirm password:</label>
        <input
          type="password"
          name="CoPassword"
          onChange={handleAllChange}
          value={form.CoPassword}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App2;
