import React from 'react';

function Features() {
  return (
    <section id="features" className="features fade">
      <div className="container">
        <h2>Why Choose Us</h2>

        <div className="cards">
          <div className="card">
            <h1>⚡</h1>
            <h3>Fast</h3>
            <p>Optimized performance apps</p>
          </div>

          <div className="card">
            <h1>🎨</h1>
            <h3>UI/UX</h3>
            <p>Modern design</p>
          </div>

          <div className="card">
            <h1>🔒</h1>
            <h3>Secure</h3>
            <p>Safe systems</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;