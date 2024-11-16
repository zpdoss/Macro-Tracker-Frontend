import {useState} from 'react';


function Recipes()
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
                <h2 className="diaryHeader">Custom Foods</h2>
            
                <div className="diaryWrap">
                    <div className="diaryInput">
                        <div className="diaryItem">
                            <label>Search Custom Foods:</label>
                            <input type="text" placeholder="Gyoza"/>
                        </div>

                        <div className="diaryItem">
                            <button type="button" className="addFoodBtn">Search</button>
                        </div>

                    </div>

                    <div className="diaryBtnArea">

                        <button onClick={toggleFoodModal} className="secondaryBtn">New Custom Food</button>
                        
                        <button className="clearBtn">Clear Custom Foods</button>
                        
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

                    <div className="customFoodList">
                        <div className="customListItem">
                            <div onClick={toggleMacroModal} >
                                <h3 className="customFoodName">Gyoza (placeholder)</h3>
                                <p className="customFoodCals">Calories: 150 (placeholder)</p>                          
                            
                                {macroModal && (
                                    <div className="modal">
                                        <div onClick={toggleMacroModal} className="overlay"></div>
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

                                            <button className="modalClose" onClick={toggleMacroModal}>
                                            CLOSE
                                            </button>

                                        </div>
                                    </div>
                                )}
                            </div>

                            <div>
                                <button className="listBtn"></button>
                                <button className="listBtn">Edit</button>
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