import React, { useState } from 'react';

function ForgotPass()
{
    const [message,setMessage] = useState('');
    const [email,setEmail] = React.useState('');

    function handleSetEmail( e: any ) : void
    {
        setEmail( e.target.value );
    }

    async function recoverPass(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('An email will now be sent with instructions to create a new password');

        // takes email in as argument
        var obj = {email};
        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/forgotPassword',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                setMessage('Password reset link sent to your email\n');
            }
            else if(res.message === "User not found"){
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
            <label htmlFor="Email">Please Enter Email: </label><br />
            <input type="text" id="loginInput" placeholder="john.doe@gmail.com" onChange={handleSetEmail}/><br />
            <input type="submit" id="loginButtons" className="buttons" value = "Send"
                onClick={recoverPass} /> <br />
                <span id="registerResult">{message}</span>

            <label htmlFor="Email">Didn't recieve an email? Click hear to have a new one sent: </label><br />
            <input type="submit" id="loginButtons" className="buttons" value = "Resend"
                onClick={recoverPass} />
                </div>
        </>
    );
};
export default ForgotPass;

