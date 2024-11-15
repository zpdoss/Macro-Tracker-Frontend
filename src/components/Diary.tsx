
function Diary()
{
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
                        <button className="secondaryBtn">Consumed Foods</button>
                        <button className="secondaryBtn">Current Macros</button>
                        <button className="secondaryBtn">Add Custom Food</button>
                        
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
                            <h3>apple</h3>
                            <p>100</p>
                            <p>10</p>
                            <p>20</p>
                            <p>5</p>
                            <button className="clearBtn">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            

        </>
    );
};
export default Diary;