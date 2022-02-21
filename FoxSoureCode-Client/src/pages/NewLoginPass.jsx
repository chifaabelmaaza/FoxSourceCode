import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/img/Transparent-02.png';
import '../scss/logincard.scss';
import userService from '../services/User.service';
export default function NewLoginPass() {
  const { id, token } = useParams();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const updatePassowrd = () => {
    userService
      .CheckResetPasswordToken({ id: id, token: token })
      .then((res) => {
        console.log(res);
        if (res?.success) {
          userService
            .ResetPassword({ id, password, confirmPassword, token })
            .then((res) => {
              console.log(res);
              setPassword('');
              setConfirmPassword('');
              alert('redirecting in 3 sec');
              setTimeout(() => {
                window.location.href = '/login';
              }, 3000);
            })
            .catch((err) => {
              console.log(err);
              alert('An error occured, please contact the support');
            });
        } else {
          alert('Your Link is expired');
        }
      })
      .catch((err) => {
        console.log(err);
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
              <h4 className='text-center'> Reset Password! </h4>
              {/* <div className="mb-3 " >
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div> */}
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='exampleInputPassword1 ' className='form-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <button
                  type='button'
                  onClick={updatePassowrd}
                  className='btn btn-primary w-100'
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
