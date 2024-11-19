//import addCustomFood from '../components/addCustomFood.tsx';
import {useState, useEffect} from 'react';
import food from '../assets/greyFood.png';


function Diary()
{
    const [userId, setUserId] = useState('');
    const [calories, setCalories] = useState('');
    const [protein, setProtein] = useState('');
    const [carbs, setCarbs] = useState('');
    const [fats, setFats] = useState('');
    const [macroData, setMacroData] = useState({
        calories: 0,
        protein: 0,
        carbohydrates: 0,
        fat: 0
    });

    // Effect to get user data from localStorage
    useEffect(() => {
        const userDataString = localStorage.getItem('user_data');
        const userHealthString = localStorage.getItem('user_health');
        if (userDataString) {
            const userDataArray = JSON.parse(userDataString);
            if (userDataArray && userDataArray.id) {
                setUserId(userDataArray.id);
            }
        }
        if (userHealthString) {
            const userHealthArray = JSON.parse(userHealthString);
            if (userHealthArray && userHealthArray.cal) {
                setCalories(userHealthArray.cal);
            }
            if (userHealthArray && userHealthArray.prot) {
                setProtein(userHealthArray.prot);
            }
            if (userHealthArray && userHealthArray.carb) {
                setCarbs(userHealthArray.carb);
            }
            if (userHealthArray && userHealthArray.fat) {
                setFats(userHealthArray.fat);
            }
        }

    }, []);

    useEffect(() => {
        // Only call searchMeal after userId has been set
        if (userId) {
            createMacro();
            getMacro();
        }
    }, [userId]); // This will run only when userId is updated

    const [foodModal, setFoodModal] = useState(false);
    const toggleFoodModal = () => {
        setFoodModal(!foodModal)
    }

    const [macroModal, setMacroModal] = useState(false);
    const toggleMacroModal = () => {
        setMacroModal(!macroModal)
    }

    const [addFoodModal, setAddFoodModal] = useState(false);
    const toggleAddFoodModal = () => {
        setAddFoodModal(!addFoodModal)
    }
    
    // Function to handle new meal creation
    async function createMacro(): Promise<void> {
        const obj = {userId};

        if (!userId) {
            alert('User ID is missing!');
            return;
        }

        try {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/createmacro', {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json' }
            });
            const res = await response.json();
            if (res.success) {
                console.log('Macro added successfully\n');
            } else {
                console.log(res.message || "An error occurred sending the meal.");
            }
        } catch (error: any) {
            alert(error.toString());
            return;
        }
    }

    async function getMacro(id = userId) : Promise<void>
    {
        try
        {
            //const obj = {userId};
            //var js = JSON.stringify(obj);

            console.log("USER ID FOR DISPLAY IS: ", id);

            const url = 'http://COP4331-t23.xyz:5079/api/getmacro/' + id;
            console.log("full api url: " + url);
            const response = await fetch(`${url}`,
                {method:'GET', headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());
            

            if(res.success){
                console.log("Properly displaying macro health to user.")
                setMacroData({
                    calories: res.Macro.cal || 0,
                    protein: res.Macro.prot || 0,
                    carbohydrates: res.Macro.carb|| 0,
                    fat: res.Macro.fat || 0
                });
            }
            else if(res.message === "userId format doesn't conform with schema"){
                console.log("userId format doesn't conform with schema\n");
            }
            else{
                console.log(res.message || "An error occurred sending the email.");
            }

        }
        catch(error:any)
        {
            alert(error.toString());
            return;
        }
    }

    return(
        <>
            <div className="diary">
                <h2 className="diaryHeader">Welcome to your food diary</h2>
            
                <div className="diaryWrap" style={{ backgroundImage:`url(${food})`}}>
                    <div className="diaryInput">
                        <div className="diaryItem">
                            <label>Search Food Database:</label>
                            <input className="search" type="text" placeholder="Apple"/>
                        </div>

                        <div className="diaryItem">
                            <button type="button" className="addFoodBtn">Add Food</button>
                        </div>

                    </div>

                    <div className="diaryBtnArea">

                        <button onClick={toggleMacroModal} className="secondaryBtn">Current Macros</button>

                        {macroModal && (
                            <div className="modal">
                                <div onClick={toggleMacroModal} className="overlay"></div>
                                <div className="modal-content">
                                    <h2 className="modalHeader">Calories and Macros displayed here:</h2>
                                    
                                    <h3 className="modalSubHeader">Calories:</h3>
                                    <label htmlFor="Calories">Required: {calories}</label><br/>
                                    <label htmlFor="Calories">Consumed: {macroData.calories}</label><br/>
                                   
                                    <h3 className="modalSubHeader">Protien:</h3>
                                    <label htmlFor="Calories">Required: {protein}</label><br/>
                                    <label htmlFor="Calories">Consumed: {macroData.protein}</label><br/>

                                    <h3 className="modalSubHeader">Carbohydrates:</h3>
                                    <label htmlFor="Calories">Required: {carbs}</label><br/>
                                    <label htmlFor="Calories">Consumed: {macroData.carbohydrates}</label><br/>

                                    <h3 className="modalSubHeader">Fats:</h3>
                                    <label htmlFor="Calories">Required: {fats}</label><br/>
                                    <label htmlFor="Calories">Consumed: {macroData.fat}</label><br/>

                                    <button className="modalClose" onClick={toggleMacroModal}>
                                    CLOSE
                                    </button>
                                </div>
                            </div>
                        )}


                        <button onClick={toggleAddFoodModal} className="secondaryBtn">Add Custom Food</button>
                        
                        {addFoodModal && (
                            <div className="modal">
                                <div onClick={toggleFoodModal} className="overlay"></div>
                                <div className="modal-content">
                                    <h2>Add Custom Food Here:</h2>
                                    <label htmlFor="foodName">Custom Food:</label><br />
                                    <input type="text" id="loginInput" placeholder="Gyoza"></input>

                                    <h2>Per Serving:</h2>
                                    <label htmlFor="Calories">Calories:</label><span id="modalRow1">
                                    <label htmlFor="Pro">Protien(g):</label>
                                    </span><br/>

                                    <input type="text" id="modalInput" placeholder="150" /><span id="modalInputSpan">
                                    <input type="text" id="modalInput" placeholder="10" /></span><br />

                                    <label htmlFor="Carb">Carbs(g):</label><span id="modalRow1">
                                    <label htmlFor="Fat">Fats(g):</label></span><br />

                                    <input type="text" id="modalInput" placeholder="15" /><span id="modalInputSpan">
                                    <input type="text" id="modalInput" placeholder="25" /></span><br />

                                    <button className="modalClose" onClick={toggleAddFoodModal}>
                                    CLOSE
                                    </button>

                                    <button className="modalFoodBtn" onClick={toggleAddFoodModal}>
                                        Add Custom Food
                                    </button>
                                </div>
                            </div>
                        )}

                        <button className="clearBtn">Clear Diary</button>
                    </div>

                    <div className="foodList">
                        <div className="foodListItem">
                            <div onClick={toggleFoodModal} >
                                <h3 className="FoodName">Apple (placeholder)</h3>
                                <p className="FoodCals">Calories: 10(placeholder)</p>                          
                            
                                {foodModal && (
                                    <div className="modal">
                                        <div onClick={toggleFoodModal} className="overlay"></div>
                                        <div className="modal-content">
                                        <h2 className="modalHeader">*Custom Food Name*</h2>
                                            
                                            <h3 className="modalSubHeader">Calories:</h3>
                                            <label htmlFor="Calories">*display cals*</label><br/>
                                        
                                            <h3 className="modalSubHeader">Protien:</h3>
                                            <label htmlFor="Pro">*display pro*</label><br/>

                                            <h3 className="modalSubHeader">Carbohydrates:</h3>
                                            <label htmlFor="Carb">*display carb*</label><br/>

                                            <h3 className="modalSubHeader">Fats:</h3>
                                            <label htmlFor="Fat">*display fat*</label><br/>

                                            <button className="modalClose" onClick={toggleFoodModal}>
                                            CLOSE
                                            </button>

                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button className="diaryDeleteBtn">Delete</button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
};
export default Diary;