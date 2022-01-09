import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';

const ForgotPassword = () => {
  return (
    <>
      <form className='loginForm'>
        <h3 className='form-title'>Forgot Password</h3>
        <div className='wrap-input'>
          <input
            type='text'
            name='email'
            className='input-field'
            placeholder='Email Address'
          />
          <span className='input-label' data-placeholder='Email'></span>
          <span className='input-icon'>
            <i className='fa fa-envelope-o'></i>
          </span>
        </div>
        <div className='btn-container mb-15'>
          <input
            type='submit'
            value='Reset Password'
            className='btn-block btn-primary'
          />
        </div>
        <div className='text-center mt-30'>
        <Link to='/login' className='a-link txt-primary'>
            {' '}
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
