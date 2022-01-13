import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../assets/style.css';
import { useForm } from 'react-hook-form';

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const inputField = document.querySelectorAll('.input-field');

  inputField.forEach((inputLabel) => {
    inputLabel.value
      ? inputLabel.classList.add('has-val')
      : inputLabel.classList.remove('has-val');
  });

  const handleOnSubmit = (data) => {
    // await fetch('http://localhost:3000/api/register', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'Application/json'},
    //   body: JSON.stringify(data)
    // });
    console.log(JSON.stringify(data));
    setRedirect(true);
  };

  if(redirect){
    return <Navigate to='/login'/>
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleOnSubmit)} className='loginForm'>
        <h3 className='form-title'>Create Your Account</h3>
        <div className='wrap-input'>
          <input
            type='text'
            name='fullName'
            className='input-field'
            defaultValue={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{
              borderColor: errors.fullName && '#f00',
            }}
            {...register('fullName', {
              required: true,
              minLength: 3,
            })}
          />
          <span className='input-label' data-placeholder='Full Name'></span>
          <span className='input-icon'>
            <i className='fa fa-user-o'></i>
          </span>
        </div>
        {errors.fullName && (
          <p className='errorMsg'>Please check your Full Name</p>
        )}
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
                /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
