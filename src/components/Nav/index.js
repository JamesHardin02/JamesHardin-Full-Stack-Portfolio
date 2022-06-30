import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  // deconstruct properties sent that keep track of section choosen to view
  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props;

  return (
    <ul className="text-center flex-center">
      {categories.map((category) => (
        <li
          className={`text-center section-links ${ //if currentCategory.name is the category iterated on then add navActive class
            currentCategory.name === category.name && `navActive`
            }`}
          key={category.name}
        >
          <span onClick={() => {
              setCurrentCategory(category);
            }}
          >
            {capitalizeFirstLetter(category.name)}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Nav;