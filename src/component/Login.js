import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styles/login.css';
import { toast } from 'react-toastify';
import { auth } from '../firebase';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/');
      })
      .catch((error) => toast.error('Invalid email or password!'));
  };
  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        toast.success('your account has been created');
        history.push('/');
      })
      .catch((error) => toast.error('Invalid email or password'));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt="amazon logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input onChange={(e) => setEmail(e.target.value)} type="text" />
          <h5>Password</h5>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={login} className="login__signInButton">
            Signin
          </button>
        </form>
        <p>
          Welcome to Amazon.com. Amazon.com Services LLC and/or its affiliates
          ("Amazon") provide website features and other products and services to
          you when you visit or shop at Amazon.com, use Amazon products or
          services.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
