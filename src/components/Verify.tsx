function Verify()
{
    function sendCode(event:any) : void
    {
        event.preventDefault();
        alert('An email will now be sent with instructions to verify your account');
    }
    function verifyAccnt(event:any) : void
    {
        event.preventDefault();
        alert('Please finish creating an account');
        window.location.href = '/Account'
    }


    return(
        <>
        <div id="loginDiv">
            <br />
                <label htmlFor="Verification">Enter the 6 digit verification code:</label><br />
                <input type="text" id="loginInput" placeholder="123456" /><br />
                <input type="submit" id="loginButtons" className="buttons" value = "Verify Account"
                    onClick={verifyAccnt} /> <br />

                <label htmlFor="Verification">Didn't recieve an email? Click hear to have a new one sent: </label><br />
                <input type="submit" id="loginButtons" className="buttons" value = "Resend"
                    onClick={sendCode} />
            </div>
        </>
    );
};
export default Verify;