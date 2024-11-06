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
        alert('doIt()');
    }

    return(
        <>
            
            <div id="loginDiv">
                <span id="inner-title">PLEASE LOG IN</span><br />

                <label htmlFor="username">Username</label><br />
                <input type="text" id="loginName" placeholder="Username" /><br />

                <label htmlFor="username">Password</label><br />
                <input type="password" id="loginPassword" placeholder="Password" /><br />

                <input type="submit" id="loginButton" className="buttons" value = "Do It"
                onClick={doLogin} />
                <span id="loginResult"></span>

                <input type="submit" id="goToRegister" className="buttons" value = "Register"
                onClick={doLogin} />
            </div>
        </>
    );
};
export default Login;