
function ForgotPass()
{
    function recoverPass(event:any) : void
    {
        event.preventDefault();
        alert('An email will now be sent with instructions to create a new password');
    }

    return(
        <>
        <div id="loginDiv">
        <br />
            <label htmlFor="Email">Please Enter Email: </label><br />
            <input type="text" id="loginInput" placeholder="john.doe@gmail.com" /><br />
            <input type="submit" id="loginButtons" className="buttons" value = "Send"
                onClick={recoverPass} /> <br />

            <label htmlFor="Email">Didn't recieve an email? Click hear to have a new one sent: </label><br />
            <input type="submit" id="loginButtons" className="buttons" value = "Resend"
                onClick={recoverPass} />
                </div>
        </>
    );
};
export default ForgotPass;

