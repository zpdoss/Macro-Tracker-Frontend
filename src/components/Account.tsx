function Account()
{
    function enterInfo(event:any) : void
    {
        event.preventDefault();
        alert('Button Test - Info should now be saved');
    }

    function resetPass(event:any) : void
    {
        event.preventDefault();
        alert('Button Test - Password should be reset');
        window.location.href = '/NewPass'
    }

    return(
        <>
            <h2 id="accntTitle">Account Page</h2>

            <div id="accountDiv">
                
                <h3 id="accntGoals">Set your goals here:</h3>
                <label htmlFor="Height">Calories:</label><span id="accntRow1">
                <label htmlFor="Weight">Protien(g):</label>
                </span><br/>

                <input type="text" id="registerInput" placeholder="72" /><span id="accntInputSpan">
                <input type="text" id="registerInput" placeholder="250" /></span><br />

                <label htmlFor="Age">Carbs(g):</label><span id="accntRow2">
                <label htmlFor="Sex">Fats(g):</label></span><br />

                <input type="text" id="registerInput" placeholder="21" /><span id="accntInputSpan">
                <input type="text" id="registerInput" placeholder="Male" /></span><br />

                <input type="submit" id="loginButtons" className="buttons" value = "Save"
                onClick={enterInfo} />
                <span id="InfoRestult"></span>

                <input type="submit" id="loginButtons" className="buttons" value = "Reset Password"
                onClick={resetPass} />
            </div>
        </>
    );
};
export default Account;