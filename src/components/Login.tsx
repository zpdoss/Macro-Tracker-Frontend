//import React, { useState } from 'react';

function Login()
{
   /* const [message,setMessage] = useState('');
    const [loginName,setLoginName] = React.useState('');
    const [loginPassword,setPassword] = React.useState('');

    const app_name='cop4331-t23.xyz';
    function buildPath(route:string) : string
    {
        if(process.env.NODE_ENV != 'development')
        {
            return 'http://' + app_name + ':5000/' + route;
        }
        else
        {
            return 'http://localhost:5000/' + route;
        }
    }


    async function doLogin(event:any) : Promise<void>
    {
        event.preventDefault();

        var obj = {login:loginName,password:loginPassword};
        var js = JSON.stringify(obj);
  
        try
        {    
            const response = await fetch(buildPath('api/login'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});
  
            var res = JSON.parse(await response.text());
  
            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
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
    }*/


    function doLogin(event:any) : void
    {
        event.preventDefault();
        alert('Now going to diary page');
        window.location.href = '/Diary'
    }

    function goToRegister(event:any) : void
    {
        event.preventDefault();
        alert('Now going to the register page');
        window.location.href = '/Register'
    }

    function forgotPass(event:any) : void
    {
        event.preventDefault();
        alert('Now going to the forgot password page');
        window.location.href = '/ForgotPass'
    }

    return(
        <> 
            <div id="loginDiv">
                
                <br/>
                <label id="loginLabel" htmlFor="username">Username:</label><br />
                <input type="text" id="loginInput" placeholder="Username" /><br />

                <label id="loginLabel" htmlFor="username">Password:</label><br />
                <input type="password" id="loginInput" placeholder="Password" /><br />

                <input type="submit" id="loginButtons" className="buttons" value = "Login"
                onClick={doLogin} />
                <span id="loginResult"></span>

                <input type="submit" id="loginButtons" className="buttons" value = "Register"
                onClick={goToRegister} /><br/>

                <input type="submit" id="loginButtons" className="buttons" value = "Forgot Password"
                onClick={forgotPass} />
            </div>
        </>
    );
};
export default Login;