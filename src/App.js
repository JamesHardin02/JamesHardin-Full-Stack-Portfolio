import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Portfolio', description: 'Portraits of people in my life' },
    { name: 'Contact', description: 'Delicious delicacies' },
    { name: 'Resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
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
