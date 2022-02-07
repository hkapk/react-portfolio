import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {

  const [projects] = useState([
    {
      name: 'Budget Tracking PWA',
      description: 'Budget Tracking PWA with offline functionality'
    },
    {
      name: 'Tech-Blog',
      description: 'A Tech Blog for Tech Bloggers'
    },
    {
      name: 'trippin-worldwide',
      description: 'Group project with integrated frontend and backend.'
    },
    {
      name: 'Zoo-Keeper',
      description: 'A front-end and back-end zoo-keeper app.'
    },
    {
      name: 'Note-Taker App',
      description: 'note note notetaker'
    }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Nav>
        projects={projects}
        setCurrentProject={setCurrentProject}
        currentProject={currentProject}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      </Nav>
      <main>
        <div>
        <About></About>
        </div>
        <div>
        <ContactForm></ContactForm>
        </div>
      </main>
      <div>
        <Portfolio></Portfolio>
      </div>
        <div>
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
