//import addCustomFood from '../components/addCustomFood.tsx';
import {useState} from 'react';

function Diary()
{
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

    return(
        <>
            <div className="diary">
                <h2 className="diaryHeader">Welcome to your food diary</h2>
            
                <div className="diaryWrap">
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
                                    <label htmlFor="Calories">Required: *diplay user cals*</label><br/>
                                    <label htmlFor="Calories">Consumed: *diplay cals consumed from food*</label><br/>
                                   
                                    <h3 className="modalSubHeader">Protien:</h3>
                                    <label htmlFor="Calories">Required: *diplay user pro*</label><br/>
                                    <label htmlFor="Calories">Consumed: *diplay pro consumed from food*</label><br/>

                                    <h3 className="modalSubHeader">Carbohydrates:</h3>
                                    <label htmlFor="Calories">Required: *diplay user carb*</label><br/>
                                    <label htmlFor="Calories">Consumed: *diplay carb consumed from food*</label><br/>

                                    <h3 className="modalSubHeader">Fats:</h3>
                                    <label htmlFor="Calories">Required: *diplay user fat*</label><br/>
                                    <label htmlFor="Calories">Consumed: *diplay fat consumed from food*</label><br/>

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