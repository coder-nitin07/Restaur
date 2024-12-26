import { useState } from 'react';
import '../assets/style/Login.css'
import googleLogo from '../assets/images/google-logo.png'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form Validation
    if (username === '' || password === '') {
      setError('Username and password are required!');
    } else {
      setError('');
      alert('Login successful');
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="login-container">
        <div>
          <h1 className='heading'>Login Page for Restaurent</h1>
          
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <label htmlFor="username">Email Address</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
             {error && <p className="error">{error}</p>}
            </div>
            <div className="forgot">
                <div className="checbox">
                    <input type="checkbox" id="check" onChange={handleCheckboxChange}  />
                    <label htmlFor="check" style={{ color: isChecked ? 'black' : 'gray' }}>
                      {isChecked ? 'Remember me' : 'Remember me'}
                    </label>
                </div>
                <p>Forgot Password?</p>
            </div>
            <button type="submit" className='submit'>Create an Account</button>
            <div className="or-container">
                <div className="line"></div>
                <span className="or-text">or</span>
                <div className="line"></div>
            </div>
            <button type="submit" className='submit google-login-btn'>
                <img src={ googleLogo } alt="" className='logo' />
                Continue with Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
