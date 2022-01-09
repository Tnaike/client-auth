import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputField = document.querySelectorAll('.input-field');

  inputField.forEach((inputLabel) => {
    inputLabel.value
      ? inputLabel.classList.add('has-val')
      : inputLabel.classList.remove('has-val');
  });

  return (
    <>
      <form className='loginForm'>
        <h3 className='form-title'>Create Your Account</h3>
        <div className='wrap-input'>
          <input
            type='text'
            name='fullName'
            className='input-field'
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <span className='input-label' data-placeholder='Full Name'></span>
          <span className='input-icon'>
            <i className='fa fa-user-o'></i>
          </span>
        </div>
        <div className='wrap-input'>
          <input
            type='text'
            name='email'
            className='input-field'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required='required'
          />
          <span className='input-label' data-placeholder='Email'></span>
          <span className='input-icon'>
            <i className='fa fa-envelope-o'></i>
          </span>
        </div>
        <div className='wrap-input'>
          <input
            type='password'
            name='password'
            className='input-field'
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className='input-label' data-placeholder='Password'></span>
          <span className='input-icon'>
            <i className='fa fa-lock'></i>
          </span>
        </div>
        <div className='btn-container mb-15'>
          <input
            type='submit'
            value='Register'
            className='btn-block btn-primary'
          />
        </div>
        <div className='notice text-center'>
          By continuing, you agree to our{' '}
          <span className='txt-primary'>Terms and Conditions</span> and{' '}
          <span className='notice txt-primary'>Privacy Policy</span>
        </div>
        <div className='text-center mt-30'>
          Already have an account?
          <Link to='/login' className='a-link txt-primary'>
            {' '}
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
};

export default Register;
