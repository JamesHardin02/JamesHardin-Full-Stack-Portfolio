import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  // category sections that a user can navigate to
  const [categories] = useState([
    {
      name: 'about Me',
      description: 'Description of full stack web developer James Hardin',
    },
    { name: 'portfolio', description: 'Projects completed by James Hardin' },
    { name: 'contact', description: 'Provide contact information for James Hardin' },
    { name: 'resume', description: 'A resume of James Hardin\'s web development skills' },
  ]);

  // state to keep track of which section a user has choosen to view
  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Contact></Contact>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
      </main>
    </div>
  );
}

export default App;
