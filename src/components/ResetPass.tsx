import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function ResetPass() {
  const { token } = useParams<{ token: string }>();
  const [isValidToken, setIsValidToken] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (token) {
      console.log('Captured Token:', token);
      setIsValidToken(true); // Simulate token validation here
      console.log(isValidToken);
    }
  }, [token]);

  // Function to handle password reset
  async function resetPassword(event: React.FormEvent) {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage('Passwords do not match. Please try again.');
      return;
    }

    var obj = {password:newPassword};
    var js = JSON.stringify(obj);

    try {
        const response = await fetch(`http://COP4331-t23.xyz:5079/api/reset-password/${token}`, {
            method: 'POST',
            body: js,
            headers: { 'Content-Type': 'application/json' },
          });

      var res = JSON.parse(await response.text());

      if (res.success) {
        setSuccessMessage('Password reset successful. You will be redirected to the login page.');
        setTimeout(() => {
          window.location.href = '/'; // Redirect to login page after successful reset
        }, 3000); // Wait 3 seconds before redirecting
      } else {
        setErrorMessage(res.message || 'An error occurred while resetting the password.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  }

  const resendLink = async (): Promise<void> =>{
    window.location.href = '/ForgotPass';
  }

  return (
    <>
      <div id="loginDiv">
        <br />
        <span id="inner-title">Enter New Password here:</span><br />

        <label htmlFor="NewPass">New Password:</label><br />
        <input
          type="password"
          id="loginInput"
          placeholder="Password123*"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        /><br />

        <label htmlFor="ConfirmNewPass">Confirm New Password:</label><br />
        <input
          type="password"
          id="loginInput"
          placeholder="Password123*"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        /><br />

        {errorMessage && <span style={{ color: 'white' }}>{errorMessage}</span>}<br />
        {successMessage && <span style={{ color: 'white' }}>{successMessage}</span>}<br />

        <input
          type="submit"
          id="loginButtons"
          className="buttons"
          value="Create New Password"
          onClick={resetPassword}
        /><br />

        <input
          type="submit"
          id="loginButtons"
          className="buttons"
          value="Resend Link"
          onClick={resendLink}
        />
      </div>
    </>
  );
}

export default ResetPass;
