import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {

  const [projects] = useState([
    {
      name:'Run-Buddy',
      description: 'HTML, CSS, JavaScript..etc'
    },
    {
      name: 'Budget Tracking PWA',
      description: 'Budget Tracking PWA with offline functionality'
    },
    {
      name: 'trippin-worldwide',
      description: 'Group project with integrated frontend and backend.'
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
          <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
