import React from "react";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: "2rem",
      padding: "1rem",
      background: "#282c34",
      color: "white"
    }}>
      <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
      <a href="#projects" style={{ color: "white", textDecoration: "none" }}>Projects</a>
      <a href="#skills" style={{ color: "white", textDecoration: "none" }}>Skills</a>
      <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
    </nav>
  );
}

export default Navbar;
