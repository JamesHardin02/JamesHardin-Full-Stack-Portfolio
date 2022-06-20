//import React, { useState } from 'react';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Resume from '../components/Resume';

const Section = (currentCategory) => {
  if(currentCategory.name === "about Me"){
    return <About></About> 
  }else if (currentCategory.name === "portfolio"){
    return <Portfolio></Portfolio>
  }else if (currentCategory.name === "resume"){
    return <Resume></Resume>
  }else if (currentCategory.name === "contact"){
    return <Contact></Contact>
  }
};

export default Section;