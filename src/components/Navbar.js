import React from 'react';

function Navbar() {
  return (
    <div className="container navbar">
      <h2>ZenithYuga</h2>
      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

export default Navbar;