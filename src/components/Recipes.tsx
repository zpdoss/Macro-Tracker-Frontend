function Recipes()
{
    function enterRecipe(event:any) : void
    {
        event.preventDefault();
        alert('Now adding food');
    }
    return(
        <>
            <h2>This Is the Recipes/Custom Foods Page</h2>
                <label htmlFor="CustomFood">Food Name: </label>
                <input type="text" id="CustomFood" placeholder="Gyoza" />

                <label htmlFor="Calories">kcal: </label>
                <input type="text" id="Calories" placeholder="150" />

                <label htmlFor="Protein">Protein(g): </label>
                <input type="text" id="Protein" placeholder="10" />

                <label htmlFor="Carb">Carbs(g): </label>
                <input type="text" id="Carb" placeholder="15" />

                <label htmlFor="Fat">Fat(g): </label>
                <input type="text" id="Fat" placeholder="25" />

                <input type="submit" id="InfoEnter" className="buttons" value = "Add Food"
                onClick={enterRecipe} />
                <span id="AddFood"></span>
        </>
    );
};
export default Recipes;