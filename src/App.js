import './App.css';
import React from 'react';
import Photo from './photos.js';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src="/sebong.jpg" className="logo" alt="logo" />
        <p className="sebong-header">SEVENTEEN</p>
      </header>

      <Photo /> {/* This will render the photos component */}

      <h1 className="sebong">MOTIVATION</h1>
      <p>
        To the 13 shining stars of SEVENTEEN, <br />
        Your music isn’t just sound — it’s comfort, it’s strength, and it’s magic.
        Every beat, every lyric, every smile you send out to the world… feels like a warm hug on the worst days and fireworks on the best.
        <br />
        Whether it’s the energy of “HOT”, the emotion in “Don’t Wanna Cry”, or the healing in “Together”, you never miss.
        You don’t just perform — you pour your hearts into everything, and that makes you legends in the making.
        <br />
        From your chaotic crackhead energy 😂 to your jaw-dropping choreography 🔥 — you’re not just idols, you're artists, brothers, and the blueprint of hard work.
        <br />
        Thank you for existing, for inspiring, and for always showing us how powerful love, teamwork, and authenticity can be.
        You’re not just SEVENTEEN — you’re forever.
        <br />
        With all the love in the Caratland galaxy,<br />— Erza 🌙
      </p>
    </div>
  );
}

export default App;
