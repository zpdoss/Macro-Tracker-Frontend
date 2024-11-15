import React, { useState } from 'react';

function Verify()
{
    const [message,setMessage] = useState('');
    const [verificaiton,setVerification] = React.useState('');

    const email = localStorage.getItem('email');

    function handleSetVerification( e: any ) : void
    {
        setVerification( e.target.value );
    }

    async function verifyAccnt(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('Please finish creating an account');
        //window.location.href = '/Account'

        var obj = {code:verificaiton};
        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/verify',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                setMessage('Email verified successfully');
                window.location.href ='/Account'
            }
            else if(res.message === "Invalid or expired verification code"){
                setMessage("Invalid or expired verification code");
            }
            else{
                setMessage(res.message || "An error occurred during registration.");
            }

        }
        catch(error:any)
        {
            alert(error.toString());
            return;
        }


    }

    async function sendCode(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('An email will now be sent with instructions to verify your account');

        var obj = {email};
        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/resendVerification',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                setMessage('User verification resent successfully\n');
            }
            else if(res.message === "User does not already exists"){
                setMessage("User does not exist\n");
            }
            else{
                setMessage(res.message || "An error occurred sending the email.");
            }

        }
        catch(error:any)
        {
            alert(error.toString());
            return;
        }

    }


    return(
        <>
        <div id="loginDiv">
            <br />
                <label htmlFor="Verification">Enter the 6 digit verification code:</label><br />
                <input type="text" id="loginInput" placeholder="123456" onChange={handleSetVerification}/><br />
                <input type="submit" id="loginButtons" className="buttons" value = "Verify Account"
                    onClick={verifyAccnt} /> <br />
                <span id="registerResult">{message}</span>

                <label htmlFor="Verification">Didn't receive an email? Click here to have a new one sent: </label><br />
                <input type="submit" id="loginButtons" className="buttons" value = "Resend"
                    onClick={sendCode} />
            </div>
        </>
    );
};
export default Verify;