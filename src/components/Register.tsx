//import React, { useState } from 'react';

/*
const [message,setMessage] = useState('');
const [firstName,setFirstName] = React.useState('');
const [lastName,setLastName] = React.useState('');
const [email,setEmail] = React.useState('');
const [username,setUsername] = React.useState('');
const [password,setPassword] = React.useState('');
*/

function Register()
{
    /*
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
    */

    function doRegister(event:any) : void
    {
        event.preventDefault();
        alert('Now going to the verificaiton page');
        window.location.href = '/Verify'
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
                
                <input type="text" id="registerInput" placeholder="John" /*onChange={handleSetFirstName}*//><span id="registerInputSpan">
                <input type="text" id="registerInput" placeholder="Username" /*onChange={handleSetUsername}*//></span><br />

                <label id="loginLabel" htmlFor="Last Name">Last Name</label><span id="registerLabelSpan">
                <label id="loginLabel" htmlFor="Password">Password</label></span><br />

                <input type="text" id="registerInput" placeholder="Doe" /*onChange={handleSetLastName}*//><span id="registerInputSpan">              
                <input type="password" id="registerInput" placeholder="Password" /*onChange={handleSetPassword}*//></span>  <br />

                <label id="loginLabel" htmlFor="Email">Email</label><br />
                <input type="password" id="registerInput" placeholder="john.doe@gmail.com" /*onChange={handleSetUsername}*//> <br />

                <input type="submit" id="loginButtons" className="buttons" value = "Sign Up"
                onClick={doRegister} /> <br/>
                <span id="loginResult"></span>

                <input type="submit" id="loginButtons" className="buttons" value = "To Login"
                onClick={goToLogin} />
            </div>
        </>
    );
};
export default Register;