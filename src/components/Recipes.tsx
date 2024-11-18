import React, {useState, useEffect} from 'react';


function Recipes()
{
    //const [message,setMessage] = useState('');
    const [mealName,setMealName] = React.useState('');
    const [calories,setCalories] = React.useState('');
    const [protein,setProtein] = React.useState('');
    const [carbs,setCarbs] = React.useState('');
    const [fats,setFats] = React.useState('');
    const [userId, setUserId] = useState('');

    useEffect(() => {
        // Parse user_data array from local storage
        const userDataString = localStorage.getItem('user_data');
        if (userDataString) {
            const userDataArray = JSON.parse(userDataString);
            if (userDataArray && userDataArray.id) {
                setUserId(userDataArray.id); // Set the userId from user_data
            }
        }
    }, []);

    function handleSetMealName( e: any ) : void
    {
        setMealName( e.target.value );
    }

    function handleSetCalories( e: any ) : void
    {
        setCalories( e.target.value );
    }

    function handleSetProtein( e: any ) : void
    {
        setProtein( e.target.value );
    }

    function handleSetCarbs( e: any ) : void
    {
        setCarbs( e.target.value );
    }

    function handleSetFats( e: any ) : void
    {
        setFats( e.target.value );
    }
    
    const [foodModal, setFoodModal] = useState(false);
    const toggleFoodModal = () => {
        setFoodModal(!foodModal)
    }

    const [addFoodModal, setAddFoodModal] = useState(false);
    const toggleAddFoodModal = () => {
        setAddFoodModal(!addFoodModal)
    }

    async function enterMeal(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('Button Test - Info should now be saved');

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

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/createmeal',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                console.log('Meal added successfully\n');
            }
            else if(res.message === "CastError"){
                console.log("Doesn't macth schema format\n");
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

        // Close the modal after submitting
        toggleAddFoodModal();
    }

    async function searchMeal() : Promise<void>
    {
        //event.preventDefault();
        //alert('Button Test - Info should now be saved');

        // Console log user information
        console.log("User ID:", userId);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/searchmeal',
                {method:'GET',headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                console.log(res.message + '\n');
            }
            else if(res.message === "CastError"){
                console.log("Doesn't macth schema format\n");
            }
            else{
                console.log("An error occurred sending the email.");
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
                <h2 className="diaryHeader">Custom Foods</h2>
            
                <div className="diaryWrap">
                    <div className="diaryInput">
                        <div className="diaryItem">
                            <label>Search Custom Foods:</label>
                            <input className="search" type="text" placeholder="Gyoza" onKeyUp={searchMeal}/>
                        </div>

                        <div className="diaryItem">
                            <button type="button" className="addFoodBtn">Search</button>
                        </div>

                    </div>

                    <div className="diaryBtnArea">

                        <button onClick={toggleAddFoodModal} className="secondaryBtn">New Custom Food</button>
                        
                        <button className="clearBtn">Clear Custom Foods</button>
                        
                        {addFoodModal && (
                            <div className="modal">
                                <div onClick={toggleAddFoodModal} className="overlay"></div>
                                <div className="modal-content">
                                    <h2>Add Custom Food Here:</h2>
                                    <label htmlFor="foodName">Custom Food:</label><br />
                                    <input type="text" id="loginInput" placeholder="Gyoza" onChange={handleSetMealName}></input>

                                    <h2>Per Serving:</h2>
                                    <label htmlFor="Calories">Calories:</label><span id="modalRow1">
                                    <label htmlFor="Pro">Protien(g):</label>
                                    </span><br/>

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

                    </div>

                    <div className="customFoodList">
                        <div className="customListItem">
                            <div onClick={toggleFoodModal} >
                                <h3 className="customFoodName">Gyoza (placeholder)</h3>
                                <p className="customFoodCals">Calories: 150 (placeholder)</p> 
                                     
                            
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
                                            
                                            <button className="editBtn">Edit</button>
                                            <button onClick={toggleFoodModal} className="toDiaryBtn">Add to Diary</button>  
                                            

                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button className="listBtn">Delete</button>  
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
            

        </>
    );
};
export default Recipes;   