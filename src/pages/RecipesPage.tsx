import Recipes from '../components/Recipes.tsx';
import PageTitle from '../components/PageTitle.tsx';

const RecipesPage = () =>
{
    return(
        <div>
            <PageTitle />
            <Recipes />
        </div>
    );
};

export default RecipesPage;