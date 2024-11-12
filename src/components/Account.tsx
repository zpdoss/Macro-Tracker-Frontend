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
            <h2>This Is the Account Page</h2>
            <span id="inner-title">Please Enter Info</span><br />

                <label htmlFor="Height">How tall are you in inches?</label><br />
                <input type="text" id="Height" placeholder="72" /><br />

                <label htmlFor="Weight">How much do you weigh(lbs)?</label><br />
                <input type="text" id="Weight" placeholder="250" /><br />

                <label htmlFor="Age">Whats your age?</label><br />
                <input type="text" id="Age" placeholder="21" /><br />

                <label htmlFor="Sex">What is your Sex?</label><br />
                <input type="text" id="Sex" placeholder="Male" /><br />

                <input type="submit" id="InfoEnter" className="buttons" value = "Register Info"
                onClick={enterInfo} />
                <span id="InfoRestult"></span>

                <input type="submit" id="PassReset" className="buttons" value = "Reset Password"
                onClick={resetPass} />
        </>
    );
};
export default Account;