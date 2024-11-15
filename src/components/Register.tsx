import React, { useState } from 'react';

function Register()
{
    const [message,setMessage] = useState('');
    const [firstName,setFirstName] = React.useState('');
    const [lastName,setLastName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');

    function handleSetFirstName( e: any ) : void
    {
        setFirstName( e.target.value );
    }

    function handleSetLastName( e: any ) : void
    {
        setLastName( e.target.value );
    }

    function handleSetEmail( e: any ) : void
    {
        setEmail( e.target.value );
    }

    function handleSetUsername( e: any ) : void
    {
        setUsername( e.target.value );
    }

    function handleSetPassword( e: any ) : void
    {
        setPassword( e.target.value );
    }

    async function doRegister(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('Now going to the verificaiton page');
        //window.location.href = '/Verify'

        // Client-side validation for empty fields
        if (!firstName || !lastName || !email || !username || !password) {
            setMessage("All fields are required");
            return;
        }

        var obj = {firstName,lastName,email,login:username,password};
        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/register',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if(res.success){
                setMessage('');

                // store data locally for other apis
                localStorage.setItem("firstName", firstName);
                localStorage.setItem("lastName", lastName);
                localStorage.setItem("email", email);
                localStorage.setItem("id", res.id);

                window.location.href ='/Verify'
            }
            else if(res.message === "User already exists"){
                setMessage("User already exists");
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
    function goToLogin(event:any) : void
    {
        event.preventDefault();
        alert('Now going to the login page');
        window.location.href = '/'
    }

    return(
        <>
            
            <div id="registerDiv">
                <br />

                <label id="loginLabel" htmlFor="First Name">First Name</label><span id="registerLabelSpan">
                <label id="loginLabel" htmlFor="Username">Username</label></span><br />
                
                <input type="text" id="registerInput" placeholder="John" onChange={handleSetFirstName}/><span id="registerInputSpan">
                <input type="text" id="registerInput" placeholder="username" onChange={handleSetUsername}/></span><br />

                <label id="loginLabel" htmlFor="Last Name">Last Name</label><span id="registerLabelSpan">
                <label id="loginLabel" htmlFor="Password">Password</label></span><br />

                <input type="text" id="registerInput" placeholder="Doe" onChange={handleSetLastName}/><span id="registerInputSpan">              
                <input type="password" id="registerInput" placeholder="Password" onChange={handleSetPassword}/></span>  <br />

                <label id="loginLabel" htmlFor="Email">Email</label><br />
                <input type="text" id="registerInput" placeholder="john.doe@gmail.com" onChange={handleSetEmail}/> <br />

                <input type="submit" id="loginButtons" className="buttons" value = "Sign Up"
                onClick={doRegister} /> <br/>
                <span id="registerResult">{message}</span>

                <input type="submit" id="loginButtons" className="buttons" value = "To Login"
                onClick={goToLogin} />
            </div>
        </>
    );
};
export default Register;