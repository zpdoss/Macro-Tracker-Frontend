function Register()
{
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
                <label id="loginLabel" htmlFor="Email">Email</label></span><br />
                
                <input type="text" id="registerInput" placeholder="John" /><span id="registerInputSpan">
                <input type="text" id="registerInput" placeholder="john.doe@gmail.com" /></span><br />

                <label id="loginLabel" htmlFor="Last Name">Last Name</label><span id="registerLabelSpan">
                <label id="loginLabel" htmlFor="Password">Password</label></span><br />

                <input type="text" id="registerInput" placeholder="Doe" /><span id="registerInputSpan">              
                <input type="password" id="registerInput" placeholder="Password" /></span>  <br />

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