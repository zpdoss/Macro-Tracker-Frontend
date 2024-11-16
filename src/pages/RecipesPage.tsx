import Recipes from '../components/Recipes.tsx';
import NavBar from '../components/NavBar.tsx'

const RecipesPage = () =>
{
    return(
        <div>
            <NavBar />
            <Recipes />
        </div>
    );
};

export default RecipesPage;