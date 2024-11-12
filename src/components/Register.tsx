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
            
            <div id="loginDiv">
                <span id="inner-title">REGISTER HERE</span><br />

                <label htmlFor="First Name">First Name</label><br />
                <input type="text" id="FirstName" placeholder="John" /><br />

                <label htmlFor="Last Name">Last Name</label><br />
                <input type="text" id="LastName" placeholder="Doe" /><br />

                <label htmlFor="Email">Email</label><br />
                <input type="text" id="Email" placeholder="john.doe@gmail.com" /><br />

                <label htmlFor="Password">Password</label><br />
                <input type="password" id="loginPassword" placeholder="Password" /><br />

                <input type="submit" id="loginButton" className="buttons" value = "Sign Up"
                onClick={doRegister} />
                <span id="loginResult"></span>

                <input type="submit" id="goToRegister" className="buttons" value = "Login"
                onClick={goToLogin} />
            </div>
        </>
    );
};
export default Register;