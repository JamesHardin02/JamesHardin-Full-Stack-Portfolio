import Nav from '../Nav';
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
    // deconstruct properties sent that keep track of section choosen to view
    const {
      categories = [],
      setCurrentCategory,
      currentCategory
    } = props;
  
  // updated the tab title to the current section the user has clicked to view
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);
  
  return (
    <header className="flex-col-center header">
      <h2 className='margin-top'>
        <a data-testid="link" href="/">
          James Hardin | Full Stack Portfolio
        </a>
      </h2>
      <nav>
        <Nav       
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}>
        </Nav>
      </nav>
    </header>
  );
}

export default Header