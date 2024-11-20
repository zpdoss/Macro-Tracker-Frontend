import { useState, useEffect } from 'react';
import kitchen from '../assets/kitchen.png';

function Recipes() {
    const [mealName, setMealName] = useState('');
    const [meals, setMeals] = useState<any[]>([]);
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const [userId, setUserId] = useState('');
    const [foodModal, setFoodModal] = useState<any>(null);
    const [addFoodModal, setAddFoodModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // State to track edit mode

    // Effect to get user data from localStorage
    useEffect(() => {
        const userDataString = localStorage.getItem('user_data');
        if (userDataString) {
            const userDataArray = JSON.parse(userDataString);
            if (userDataArray && userDataArray.id) {
                setUserId(userDataArray.id);
            }
        }
        else if (!userDataString){
            window.location.href = '/';
        }
    }, []);

    useEffect(() => {
        // Only call searchMeal after userId has been set
        if (userId) {
            searchMeal();
        }
    }, [userId]); // This will run only when userId is updated

    // Handle input change for meal name search
    const handleSetMealName = (e: any) => setMealName(e.target.value);

    // Handle input changes for meal creation
    const handleSetCalories = (e: any) => setCalories(e.target.value);
    const handleSetProtein = (e: any) => setProtein(e.target.value);
    const handleSetCarbs = (e: any) => setCarbs(e.target.value);
    const handleSetFats = (e: any) => setFats(e.target.value);

    // Toggle food modal
    const toggleFoodModal = (meal: any) => {
        setFoodModal(meal);
        setIsEditing(false); // Reset to non-editing mode when a new meal is clicked
    };

    // Toggle add food modal
    const toggleAddFoodModal = () => setAddFoodModal(!addFoodModal);

    // Search function to fetch meals from the API
    async function searchMeal(): Promise<void> {
        if (!mealName) {
            setMeals([]); // Reset meals when search field is empty
        }
        try {
            const response = await fetch(
                `http://COP4331-t23.xyz:5079/api/searchmeal?userId=${userId}&search=${mealName}`,
                { method: 'GET', headers: { 'Content-Type': 'application/json' } }
            );
            const res = await response.json();
            if (res.success && res.meals) {
                setMeals(res.meals);
            } else {
                console.log(res.message || "No meals found.");
                setMeals([]);
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
        try {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/createmeal', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            });
            const res = await response.json();
            if (res.success) {
                console.log('Meal added successfully\n');
                setMeals(prevMeals => [...prevMeals, res.meal]);
            } else {
                console.log(res.message || "An error occurred sending the meal.");
            }
        } catch (error: any) {
            alert(error.toString());
            return;
        }
        toggleAddFoodModal();
    }

    // Function to update a meal
    async function updateMeal(mealId: string): Promise<void> {
        const updatedMeal = {
            name: mealName,
            cal: calories,
            prot: protein,
            carb: carbs,
            fat: fats
        };
        try {
            const response = await fetch(`http://COP4331-t23.xyz:5079/api/updatemeal/${mealId}`, {
                method: 'PUT',
                body: JSON.stringify(updatedMeal),
                headers: { 'Content-Type': 'application/json' }
            });
            const res = await response.json();
            if (res.success) {
                console.log("Meal updated successfully");
                // Update the meal in the state after a successful update
                setMeals((prevMeals) => 
                    prevMeals.map((meal) => 
                        meal._id === mealId ? { ...meal, ...updatedMeal } : meal
                    )
                );
                setIsEditing(false); // Set to non-editing mode after update
            } else {
                console.log(res.message || "An error occurred updating the meal.");
            }
        } catch (error: any) {
            alert(error.toString());
        }
    }

    // Function to delete a meal by its ID
    const deleteMeal = async (mealId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete meal?");
        if (!confirmDelete) {
            // User clicked cancel, do not proceed with deletion
            return;
        }
        try {
            const response = await fetch(
                `http://COP4331-t23.xyz:5079/api/deletemeal/${mealId}`,
                { method: 'DELETE', headers: { 'Content-Type': 'application/json' } }
            );
            const res = await response.json();
            if (res.success) {
                console.log("Meal deleted successfully.");
                setMeals((prevMeals) => prevMeals.filter(meal => meal._id !== mealId));
            } else {
                console.log(res.message || "An error occurred while deleting the meal.");
            }
        } catch (error: any) {
            alert(error.toString());
        }
    };

    const localStorageMeal = (meal: any) => {
        setMealName(meal.name);
        setCalories(meal.cal);
        setProtein(meal.prot);
        setCarbs(meal.carb);
        setFats(meal.fat);

        const user = { name: meal.name, cal: meal.cal, prot: meal.prot, carb: meal.carb, fat: meal.carb};
        localStorage.setItem('user_meal', JSON.stringify(user));

        localStorage.setItem('meal_status', "1")

        window.location.href = '/Diary';
    };

    // Sync input fields with the selected meal in editing mode
    const handleEditClick = (meal: any) => {
        setMealName(meal.name);
        setCalories(meal.cal);
        setProtein(meal.prot);
        setCarbs(meal.carb);
        setFats(meal.fat);
        setIsEditing(true);
    };

    return (
        <>
            <div className="diary">
                <h2 className="diaryHeader">Custom Foods</h2>
                <div className="diaryWrap" style={{ backgroundImage:`url(${kitchen})`, backgroundSize: "cover"}}>
                    <div className="diaryInput">
                        <div className="customItem">
                            <label>Search Custom Foods:</label>
                            <input
                                className="search"
                                type="text"
                                placeholder="Gyoza"
                                onChange={handleSetMealName}
                                onKeyUp={searchMeal}
                            />
                        </div>
                    </div>
                    <div className="diaryBtnArea">
                        <button onClick={toggleAddFoodModal} className="secondaryBtn">New Custom Food</button>
                        
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
                                                <h2 className="modalHeader">
                                                    {isEditing ? (
                                                        <input
                                                            type="text"
                                                            value={mealName}
                                                            onChange={(e) => setMealName(e.target.value)}
                                                        />
                                                    ) : (
                                                        meal.name
                                                    )}
                                                </h2>

                                                <h3 className="modalSubHeader">Calories:</h3>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={calories}
                                                        onChange={(e) => setCalories(e.target.value)}
                                                    />
                                                ) : (
                                                    <span>{meal.cal}</span>
                                                )}
                                                <br />

                                                <h3 className="modalSubHeader">Protein(g):</h3>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={protein}
                                                        onChange={(e) => setProtein(e.target.value)}
                                                    />
                                                ) : (
                                                    <span>{meal.prot}</span>
                                                )}
                                                <br />

                                                <h3 className="modalSubHeader">Carbohydrates(g):</h3>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={carbs}
                                                        onChange={(e) => setCarbs(e.target.value)}
                                                    />
                                                ) : (
                                                    <span>{meal.carb}</span>
                                                )}
                                                <br />

                                                <h3 className="modalSubHeader">Fats(g):</h3>
                                                {isEditing ? (
                                                    <input
                                                        type="text"
                                                        value={fats}
                                                        onChange={(e) => setFats(e.target.value)}
                                                    />
                                                ) : (
                                                    <span>{meal.fat}</span>
                                                )}
                                                <br />

                                                <button
                                                    className="modalClose"
                                                    onClick={() => toggleFoodModal(null)}
                                                >
                                                    CLOSE
                                                </button>

                                                <button
                                                    className="editBtn"
                                                    onClick={() => {
                                                        if (isEditing) {
                                                            updateMeal(meal._id);
                                                        } else {
                                                            handleEditClick(meal);
                                                        }
                                                    }}
                                                >
                                                    {isEditing ? 'Done' : 'Edit'}
                                                </button>

                                                <button onClick={() => {localStorageMeal(meal)}} className="toDiaryBtn">Add to Diary</button>
                                            </div>
                                        </div>
                                    )}

                                    <div>
                                        <button className="listBtn" onClick={() => deleteMeal(meal._id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No meals found.</p>
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
