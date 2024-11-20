
function ResetPass()
{
    function resetPassword(event:any) : void
    {
        event.preventDefault();
        alert('Now going back to the login page');
        window.location.href = '/'
    }
    
    return(
        <>
            
            <div id="loginDiv">
            <br />

                <span id="inner-title">Enter New Password here:</span><br />

                <label htmlFor="NewPass">New Password:</label><br />
                <input type="password" id="loginInput" placeholder="Password123*" /><br />

                <label htmlFor="ConfirmNewPass">Confirm New Password:</label><br />
                <input type="password" id="loginInput" placeholder="Password123*" /><br />

                <span id="reset password"></span><br/>

                <input type="submit" id="loginButtons" className="buttons" value = "Create New Pasword"
                onClick={resetPassword} /><br/>

                <input type="submit" id="loginButtons" className="buttons" value = "Resend Link"
                onClick={resetPassword} />
                
            </div>
        </>
    );
};
export default ResetPass;