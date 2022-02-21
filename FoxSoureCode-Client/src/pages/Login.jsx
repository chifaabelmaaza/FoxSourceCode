import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Transparent-02.png';
import '../scss/logincard.scss';
import Alert from '@mui/material/Alert';
import { useForm } from 'react-hook-form';

import AuthService from '../services/Auth';

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    AuthService.login(data)
      .then((res) => {
        setError(null)
        // console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err.response.data?.error);
        setError(err.response.data?.error);
      });
  };

  const [error, setError] = useState(null);

  return (
    <div className='container logincard'>
      <div className='row justify-content-md-center h-100'>
        <div className='mt-3 mb-0 card-wrapper d-flex flex-column'>
          <Link to='/Home' className='logo mx-auto'>
            <img className='logo' align='center' src={logo} alt='Logo' />
          </Link>

          <div className='card shadow p-3 mb-5 bg-body rounded '>
            <div className='card-body  '>
              <h4 className='text-center'> Welcome back!</h4>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="none">
                <div className='mb-3 '>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    // name='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    autoComplete="none"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Email format is not valid',
                      },
                    })}
                  />
                </div>
                <div className=''>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    // name='password'
                    className='form-control'
                    autoComplete="none"
                    id='exampleInputPassword1'
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 8, message: 'Password not valid' },
                    })}
                  />
                </div>
                <div className='mb-3 float-end' style={{ marginbottom: '5px' }}>
                  <Link to='/resetpassword' align='right'>
                    Forget Password
                  </Link>
                </div>
                <br />
                <div className='my-3 w-100'>
                  {errors.email ? (
                    <Alert severity='error' className='mb-2'>
                      {errors.email?.message}
                    </Alert>
                  ) : null}
                  {errors.password ? (
                    <Alert severity='error' className='mb-2'>
                      {errors.password?.message}
                    </Alert>
                  ) : null}
                  {error ? (
                    <Alert severity='error' className='mb-2'>
                      {error}
                    </Alert>
                  ) : null}
                </div>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-primary w-100 text-white'>
                    Sign In
                  </button>
                </div>

                <div
                  className='mb-3'
                  style={{ marginTop: '2px' }}
                  align='center'
                >
                  Don't have an account?
                  <Link to='/register'> Sign Up </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
