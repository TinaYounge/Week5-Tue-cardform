import React from "react";

const Button = ({ handle, value }) => {
  return <button onClick={() => handle(value)}>{value}</button>;
};

export default Button;
