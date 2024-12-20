import React, { useState } from 'react';
import lBG from '../assets/loginBG.png'

function Login()
{
    const [message,setMessage] = useState('');
    const [loginName,setLoginName] = React.useState('');
    const [loginPassword,setPassword] = React.useState('');

    async function doLogin(event:any) : Promise<void>
    {
        event.preventDefault();
        //alert('Now logging in');
        //window.location.href = '/Diary'

        var obj = {login:loginName,password:loginPassword};
        var js = JSON.stringify(obj);

        try
        {
            const response = await fetch('http://COP4331-t23.xyz:5079/api/login',
                {method:'POST',body:js,headers:{'Content-Type':'application/json'}}
            );

            var res = JSON.parse(await response.text());

            if( res.success == false)
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                const { firstName, lastName, email, _id } = res.user;
                const user = { firstName, lastName, email, id: _id };
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/Diary';
            }
        }
        catch(error:any)
        {
            alert(error.toString());
            return;
        }
    };

    function handleSetLoginName( e: any ) : void
    {
        setLoginName( e.target.value );
    }

    function handleSetPassword( e: any ) : void
    {
        setPassword( e.target.value );
    }

    function goToRegister(event:any) : void
    {
        event.preventDefault();
        window.location.href = '/Register'
    }

    function forgotPass(event:any) : void
    {
        event.preventDefault();
        window.location.href = '/ForgotPass'
    }

    return(
        <> 
            <div id="loginDiv" style={{ backgroundImage:`url(${lBG})`}}>
                
                <br/>
                <label id="loginLabel" htmlFor="username">Username:</label><br />
                <input type="text" id="loginInput" placeholder="Username"
                onChange={handleSetLoginName} /><br />

                <label id="loginLabel" htmlFor="username">Password:</label><br />
                <input type="password" id="loginInput" placeholder="Password"
                onChange={handleSetPassword} /><br />

                <input type="submit" id="loginButtons" className="buttons" value = "Login"
                onClick={doLogin} />
                <span id="loginResult">{message}</span>

                <input type="submit" id="loginButtons" className="buttons" value = "Register"
                onClick={goToRegister} /><br/>

                <input type="submit" id="loginButtons" className="buttons" value = "Forgot Password"
                onClick={forgotPass} />
            </div>
        </>
    );
};
export default Login;