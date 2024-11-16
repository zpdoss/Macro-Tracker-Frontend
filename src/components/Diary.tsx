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

    return(
        <>
            <div className="diary">
                <h2 className="diaryHeader">Welcome to your food diary</h2>
            
                <div className="diaryWrap">
                    <div className="diaryInput">
                        <div className="diaryItem">
                            <label>Search Food Database:</label>
                            <input type="text" placeholder="Apple"/>
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


                        <button onClick={toggleFoodModal} className="secondaryBtn">Add Custom Food</button>
                        
                        {foodModal && (
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

                                    <button className="modalClose" onClick={toggleFoodModal}>
                                    CLOSE
                                    </button>

                                    <button className="modalFoodBtn" onClick={toggleFoodModal}>
                                        Add Custom Food
                                    </button>
                                </div>
                            </div>
                        )}

                    </div>

                    <div className="foodList">
                        <div className="foodListHeader">
                            <h3>Foods</h3>
                            <p>Calories</p>
                            <p>Protien(g)</p>
                            <p>Carbs(g)</p>
                            <p>Fat(g)</p>
                            <button className="clearBtn">Clear</button>
                        </div>
                        <div className="foodListItem">
                            <span><h3>apple</h3></span>
                            <span><p>100</p></span>
                            <span><p>10</p></span>
                            <span><p>20</p></span>
                            <span><p>5</p></span>
                            <button className="clearBtn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
};
export default Diary;