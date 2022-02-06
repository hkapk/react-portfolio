import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <div>
        <About></About>
        </div>
        <div>
        <ContactForm></ContactForm>
        </div>
      </main>
        <div>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
