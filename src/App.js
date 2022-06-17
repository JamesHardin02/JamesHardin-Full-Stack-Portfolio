import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Description of full stack web developer James Hardin',
    },
    { name: 'Portfolio', description: 'Projects completed by James Hardin' },
    { name: 'Contact', description: 'Provide contact information for James Hardin' },
    { name: 'Resume', description: 'A resume of James Hardin\'s web development skills' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
