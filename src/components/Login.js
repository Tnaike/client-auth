import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const Login = () => {
  return (
    <>
      <form className='loginForm'>
        <h3 className='form-title'>Account Login</h3>
        <div className='wrap-input'>
          <input
            type='text'
            name='email'
            className='input-field'
            placeholder='Email'
          />
          <span className='input-label' data-placeholder='Email'></span>
          <span className='input-icon'>
            <i className='fa fa-envelope-o'></i>
          </span>
        </div>
        <div className='wrap-input'>
          <input
            type='password'
            name='pass'
            className='input-field'
            placeholder='Password'
          />
          <span className='input-label' data-placeholder='Password'></span>
          <span className='input-icon'>
            <i className='fa fa-lock'></i>
          </span>
        </div>
        <div className='form-wrap text-right'>
          <Link to='/forgot-password' className='a-link'>
            Forgot password?
          </Link>
        </div>
        <div className='btn-container mb-15'>
          <input
            type='submit'
            value='Log In'
            className='btn-block btn-primary'
          />
        </div>
        <div className='text-center mt-30'>
          <Link to='/register' className='a-link'>
            Create your Account
            <i className='fa fa-long-arrow-right m-l-5' aria-hidden='true'></i>
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
