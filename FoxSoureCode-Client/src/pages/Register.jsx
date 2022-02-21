import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Transparent-02.png';
import '../scss/logincard.scss';
import { useForm } from 'react-hook-form';
import Alert from '@mui/material/Alert';
import AuthService from '../services/Auth';

export default function Register() {
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    AuthService.register(data)
      .then((res) => {
        setError(null);
        // console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        // console.log(err.response.data?.error);
        setError(err.response.data?.error);
      });
  };

  return (
    <div className='container logincard'>
      <div className='row justify-content-md-center h-100'>
        <div className='mt-5 card-wrapper d-flex flex-column'>
          <Link to='/Home' className='logo mx-auto'>
            <img className='logo' align='center' src={logo} alt='Logo' />
          </Link>

          <div className='card shadow p-3 mb-5 bg-body rounded '>
            <div className='card-body  '>
              <h4 className='text-center mb-4'> Join SellAnyCode.com </h4>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3 '>
                  <label htmlFor='exampleName1' className='form-label'>
                    First and Last Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleName1'
                    aria-describedby='emailHelp'
                    {...register('fullName', {
                      required: 'Full name is required',
                    })}
                  />
                </div>
                <div className='mb-3 '>
                  <label htmlFor='exampleInputUserName1' className='form-label'>
                    Username
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='exampleInputUserName1'
                    aria-describedby='emailHelp'
                    {...register('username', {
                      required: 'username is required',
                    })}
                  />
                </div>
                <div className='mb-3 '>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Email format is not valid',
                      },
                    })}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='exampleInputPassword1' className='form-label'>
                    Password
                  </label>
                  <input
                    type='password'
                    className='form-control'
                    id='exampleInputPassword1'
                    {...register('password', {
                      required: 'password is required',
                      minLength: { value: 8, message: 'Password not valid' },
                    })}
                  />
                </div>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-primary w-100 text-white'>
                    Sign Up
                  </button>
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
                <div
                  className='mb-3'
                  style={{ marginTop: '2px' }}
                  align='center'
                >
                  Already have an account ?<Link to='/login'> Sign In </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
