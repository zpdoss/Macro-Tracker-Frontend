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
            <label htmlFor="Verification">Please enter the 6 digit verification code: </label><br />
            <input type="text" id="Verification" placeholder="123456" /><br />
            <input type="submit" id="Verify" className="buttons" value = "Verify Account"
                onClick={verifyAccnt} /> <br />

            <label htmlFor="Verification">Didn't recieve an email? Click hear to have a new one sent: </label><br />
            <input type="submit" id="Verify" className="buttons" value = "Resend"
                onClick={sendCode} />
        </>
    );
};
export default Verify;