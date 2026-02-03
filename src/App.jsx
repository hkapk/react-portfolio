import { useState } from 'react'
import Nav from './components/Nav';
import Home from "./components/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home handlePageChange={handlePageChange} />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio handlePageChange={handlePageChange} />;
    }

    if (currentPage === 'Contact') {
      return <Contact />;
    }

    if (currentPage === 'Resume') {
      return <Resume />
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />

      <main className="flex-grow  pt-24 sm:pt-12">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
}

export default App
