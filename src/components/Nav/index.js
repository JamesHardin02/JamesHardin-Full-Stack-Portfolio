import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
    // deconstruct properties sent that keep track of section choosen to view
    const {
      categories = [],
      setCurrentCategory,
      currentCategory
    } = props;

  return (
    <ul className="flex-row">
      {categories.map((category) => (
        <li
          className={`mx-1 ${ //if currentCategory.name is the category iterated on then add navActive class
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