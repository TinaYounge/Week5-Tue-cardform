import "./App.css";
import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App2() {
  const [startDate, setStartDate] = useState(new Date());
  const [checked, setChecked] = React.useState({ male: false, female: false });

  const [form, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    password: "",
    CoPassword: "",
    essay: "",
  });

  const handleAllChange = (event) => {
    setFormData({ ...form, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      form.password === form.CoPassword &&
      form.password !== "" &&
      checked.male !== checked.female
    ) {
      return alert("YESSSSSS");
    } else return alert("NOOOOOO");
  };
  console.log({ form });

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="day">Gender: </label>
        <label htmlFor="ck-Male">
          <input
            type="checkbox"
            defaultChecked={checked.male}
            onChange={() => setChecked(!checked.male)}
          />
          Male
        </label>
        <label htmlFor="ck-Female">
          <input
            type="checkbox"
            defaultChecked={checked.female}
            onChange={() => setChecked(!checked.female)}
          />
          Female
        </label>
        <br />
        <label htmlFor="day">Birthday: </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <br />
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
        <label htmlFor="age">Phone: </label>
        <input
          type="number"
          name="phone"
          onChange={handleAllChange}
          value={form.phone}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
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
        <label htmlFor="name">Essay: </label>
        <input
          type="text"
          class="boxT"
          name="essay"
          onChange={handleAllChange}
          value={form.essay}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App2;
