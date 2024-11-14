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

                <label id="firstNameLabel" htmlFor="First Name">First Name</label><span id="registerLabelSpan">
                <label id="emailLabel" htmlFor="Email">Email</label></span><br />
                
                <input type="text" id="firstNameInput" placeholder="John" /><span id="registerInputSpan">
                <input type="text" id="emailInput" placeholder="john.doe@gmail.com" /></span><br />

                <label id="lastNameLabel" htmlFor="Last Name">Last Name</label><span id="registerLabelSpan">
                <label id="passwordLabel" htmlFor="Password">Password</label></span><br />

                <input type="text" id="lastNameInput" placeholder="Doe" /><span id="registerInputSpan">              
                <input type="password" id="passwordInput" placeholder="Password" /></span>  <br />

                <input type="submit" id="registerButton" className="buttons" value = "Sign Up"
                onClick={doRegister} /> <br/>
                <span id="loginResult"></span>

                <input type="submit" id="goToLoginButton" className="buttons" value = "To Login"
                onClick={goToLogin} />
            </div>
        </>
    );
};
export default Register;