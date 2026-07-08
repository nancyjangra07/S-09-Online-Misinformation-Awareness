import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    color: "white",
    marginRight: "15px",
    textDecoration: "none"
  };

  return (
    <nav style={{ padding: "15px", background: "#1f2937" }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/detect" style={linkStyle}>Detect</Link>
      <Link to="/learn" style={linkStyle}>Learn</Link>
      <Link to="/quiz" style={linkStyle}>Quiz</Link>
      <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
    </nav>
  );
}

export default Navbar;