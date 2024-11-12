import Recipes from '../components/Recipes.tsx';
import PageTitle from '../components/PageTitle.tsx';
import NavBar from '../components/NavBar.tsx'

const RecipesPage = () =>
{
    return(
        <div>
            <NavBar />
            <PageTitle />
            <Recipes />
        </div>
    );
};

export default RecipesPage;