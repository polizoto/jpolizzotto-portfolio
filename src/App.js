import React from 'react';
import './App.css';
import './components/Pages/Social';
import Social from './components/Pages/Social';

function App() {
  return (
    <div>
      <header>
      <a className="skip-main" href="#main-content">Skip to main content</a>
      <h1>Joseph Polizzotto</h1>
      <div className='header'>
      <h2>accessibility, coding, and teaching</h2>  
      <Social></Social>
      </div>
      </header>
      <main className="App" id="main-content">
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
