import React from "react";
import { Link } from "react-router-dom";

const expenses = () => {
  return (
    <main style={{ padding: "1rem 0" }}>
      <Link to="/">Home</Link>
      <h2>Expenses</h2>
    </main>
  );
};

export default expenses;
