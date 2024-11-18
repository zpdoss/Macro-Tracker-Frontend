import { useState, useEffect } from 'react';

function Recipes() {
    const [mealName, setMealName] = useState('');
    const [meals, setMeals] = useState<any[]>([]); // State to store meals
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const [userId, setUserId] = useState('');
    const [foodModal, setFoodModal] = useState<any>(null); // Store the specific meal data for the modal
    const [addFoodModal, setAddFoodModal] = useState(false);

    // Effect to get user data from localStorage
    useEffect(() => {
        const userDataString = localStorage.getItem('user_data');
        if (userDataString) {
            const userDataArray = JSON.parse(userDataString);
            if (userDataArray && userDataArray.id) {
                setUserId(userDataArray.id); // Set the userId from user_data
                searchMeal();
            }
        }
    }, []);

    // Handle input change for meal name search
    const handleSetMealName = (e: any) => setMealName(e.target.value);

    // Handle input changes for meal creation
    const handleSetCalories = (e: any) => setCalories(e.target.value);
    const handleSetProtein = (e: any) => setProtein(e.target.value);
    const handleSetCarbs = (e: any) => setCarbs(e.target.value);
    const handleSetFats = (e: any) => setFats(e.target.value);

    // Toggle food modal
    const toggleFoodModal = (meal: any) => setFoodModal(meal); // Pass the clicked meal as argument

    // Toggle add food modal
    const toggleAddFoodModal = () => setAddFoodModal(!addFoodModal);

    // Search function to fetch meals from the API
    async function searchMeal(): Promise<void> {
        if (!mealName) {
            setMeals([]); // Reset meals when search field is empty
        }
        try {
            const response = await fetch(
                'http://COP4331-t23.xyz:5079/api/searchmeal?userId=' + userId + '&search=' + mealName,
                { method: 'GET', headers: { 'Content-Type': 'application/json' } }
            );
            const res = await response.json();

            if (res.success && res.meals) {
                setMeals(res.meals); // Set meals if found
            } else {
                console.log(res.message || "No meals found.");
                setMeals([]); // Set empty meals array if no results
            }
        } catch (error: any) {
            console.error("Error fetching meals:", error);
            alert(error.toString());
        }
    }

    // Function to handle new meal creation
    async function enterMeal(event: any): Promise<void> {
        event.preventDefault();

        const obj = {
            userId,
            name: String(mealName),
            cal: Number(calories),
            carb: Number(carbs),
            prot: Number(protein),
            fat: Number(fats)
        };

        // Console log user information
        console.log("User ID:", userId);
        console.log("Meal Information:", obj);

        var js = JSON.stringify(obj);

        try {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/createmeal', {
                method: 'POST',
                body: js,
                headers: { 'Content-Type': 'application/json' }
            });

            var res = JSON.parse(await response.text());

            if (res.success) {
                console.log('Meal added successfully\n');
            } else if (res.message === "CastError") {
                console.log("Doesn't match schema format\n");
            } else {
                console.log(res.message || "An error occurred sending the meal.");
            }

        } catch (error: any) {
            alert(error.toString());
            return;
        }

        // Close the modal after submitting
        toggleAddFoodModal();
    }

    // Function to delete a meal by its ID
    const deleteMeal = async (mealId: string) => {
        try {
            const response = await fetch(
                'http://COP4331-t23.xyz:5079/api/deletemeal/'+mealId,
                { method: 'DELETE', headers: { 'Content-Type': 'application/json' } }
            );

            const res = await response.json();

            if (res.success) {
                console.log("Meal deleted successfully.");
                // Remove the deleted meal from the state
                setMeals((prevMeals) => prevMeals.filter(meal => meal._id !== mealId));
            } else {
                console.log(res.message || "An error occurred while deleting the meal.");
            }
        } catch (error: any) {
            alert(error.toString());
        }
    };

    return (
        <>
            <div className="diary">
                <h2 className="diaryHeader">Custom Foods</h2>

                <div className="diaryWrap">
                    <div className="diaryInput">
                        <div className="diaryItem">
                            <label>Search Custom Foods:</label>
                            <input
                                className="search"
                                type="text"
                                placeholder="Gyoza"
                                onChange={handleSetMealName}
                                onKeyUp={searchMeal}
                            />
                        </div>

                        <div className="diaryItem">
                            <button type="button" className="addFoodBtn">Search</button>
                        </div>
                    </div>

                    <div className="diaryBtnArea">
                        <button onClick={toggleAddFoodModal} className="secondaryBtn">New Custom Food</button>
                        <button className="clearBtn">Clear Custom Foods</button>
                    </div>

                    {/* Display meals */}
                    <div className="customFoodList">
                        {meals.length > 0 ? (
                            meals.map((meal, index) => (
                                <div className="customListItem" key={index}>
                                    <div onClick={() => toggleFoodModal(meal)}>
                                        <h3 className="customFoodName">{meal.name}</h3>
                                        <p className="customFoodCals">Calories: {meal.cal}</p>
                                    </div>

                                    {/* Food Modal to display meal details */}
                                    {foodModal && foodModal.name === meal.name && (
                                        <div className="modal">
                                            <div onClick={() => toggleFoodModal(null)} className="overlay"></div>
                                            <div className="modal-content">
                                                <h2 className="modalHeader">{meal.name}</h2>
                                                <h3 className="modalSubHeader">Calories:</h3>
                                                <label htmlFor="Calories">{meal.cal}</label><br />

                                                <h3 className="modalSubHeader">Protein:</h3>
                                                <label htmlFor="Pro">{meal.prot}</label><br />

                                                <h3 className="modalSubHeader">Carbohydrates:</h3>
                                                <label htmlFor="Carb">{meal.carb}</label><br />

                                                <h3 className="modalSubHeader">Fats:</h3>
                                                <label htmlFor="Fat">{meal.fat}</label><br />

                                                <button className="modalClose" onClick={() => toggleFoodModal(null)}>CLOSE</button>
                                                <button className="editBtn">Edit</button>
                                                <button className="toDiaryBtn">Add to Diary</button>
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <button className="listBtn" onClick={() => deleteMeal(meal._id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No meals found.</p> // Display message when no meals are available
                        )}
                    </div>
                </div>
            </div>

            {/* Modal for adding a new custom food */}
            {addFoodModal && (
                <div className="modal">
                    <div onClick={toggleAddFoodModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Add Custom Food Here:</h2>
                        <label htmlFor="foodName">Custom Food:</label><br />
                        <input type="text" id="loginInput" placeholder="Gyoza" onChange={handleSetMealName}></input>

                        <h2>Per Serving:</h2>
                        <label htmlFor="Calories">Calories:</label><span id="modalRow1">
                        <label htmlFor="Pro">Protein(g):</label>
                        </span><br />

                        <input type="text" id="modalInput" placeholder="150" onChange={handleSetCalories}/><span id="modalInputSpan">
                        <input type="text" id="modalInput" placeholder="10" onChange={handleSetProtein}/></span><br />

                        <label htmlFor="Carb">Carbs(g):</label><span id="modalRow1">
                        <label htmlFor="Fat">Fats(g):</label></span><br />

                        <input type="text" id="modalInput" placeholder="15" onChange={handleSetCarbs}/><span id="modalInputSpan">
                        <input type="text" id="modalInput" placeholder="25" onChange={handleSetFats}/></span><br />

                        <button className="modalClose" onClick={toggleAddFoodModal}>
                            CLOSE
                        </button>

                        <button className="modalFoodBtn" onClick={enterMeal}>
                            Add Custom Food
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Recipes;
