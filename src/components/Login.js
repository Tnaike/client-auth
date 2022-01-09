import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/style.css';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputField = document.querySelectorAll('.input-field');

  inputField.forEach((inputLabel) => {
    inputLabel.value
      ? inputLabel.classList.add('has-val')
      : inputLabel.classList.remove('has-val');
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='loginForm'>
        <h3 className='form-title'>Account Login</h3>
        <div className='wrap-input'>
          <input
            type='text'
            name='email'
            className='input-field'
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              borderColor: errors.email && '#f00',
            }}
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          <span className='input-label' data-placeholder='Email'></span>
          <span className='input-icon'>
            <i className='fa fa-envelope-o'></i>
          </span>
        </div>
        {errors.email && <p className='errorMsg'>Please check your Email</p>}
        <div className='wrap-input'>
          <input
            type='password'
            name='password'
            className='input-field'
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              borderColor: errors.password && '#f00',
            }}
            {...register('password', {
              required: true,
            })}
          />
          <span className='input-label' data-placeholder='Password'></span>
          <span className='input-icon'>
            <i className='fa fa-lock'></i>
          </span>
        </div>
        {errors.password && <p className='errorMsg'>Password is required</p>}
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
