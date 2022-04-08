import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
// import Home from './components/pages/Home';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import Social from './components/pages/Social';
import Work from './components/pages/Work';


export default function App() {

  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    // if (currentPage === 'Home') {
    //   return <Home />;
    // }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
      <a className="skip-main" href="#main-content">Skip to main content</a>
      <h1>Joseph Polizzotto</h1>
      <div className='header'>
      <h2>accessibility, coding, and teaching</h2>  
      <Social></Social>
      </div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <main className="App" id="main-content">
      {renderPage()}
      </main>
      <footer>
      <p>&copy; Copyright 2022 | Joseph Polizzotto | Built with<a href="https://reactjs.org/" title="React" rel="noreferrer" target="_blank">React</a></p>
      </footer>
    </div>
  );
}

