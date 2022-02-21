import { Alert, Collapse, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Transparent-02.png';
import '../scss/logincard.scss';
import userService from '../services/User.service';
import CloseIcon from '@mui/icons-material/Close';

export default function ResetPassword() {
  // const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('success');
  // const [error, setError] = useState(false);
  const sendEmail = () => {
    setEmail('');
    const data = {
      email: email,
    };
    if (email.length > 0)
      userService
        .ResetPasswordEmail(data)
        .then((res) => {
          console.log(res);
          // setEmailSent(true);
          setType('success');
          // setError(false);
          setMessage(
            'We have sent you an email with your new password! Please check your inbox.'
          );
          setOpen(true);
        })
        .catch((err) => {
          console.elog(err);
          // setError(true);
          setType('error');
          setMessage(
            'An error occurred while sending email, please try again later'
          );
          setOpen(true);
        });
    else {
      setType('error');
      setMessage(
        'Email is required'
      );
      setOpen(true);
    }
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
              <h4 className='text-center'> Forgot Password </h4>
              <div className='mb-3 '>
                <label htmlFor='exampleInputEmail1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div
                  className='form-text text-muted'
                  style={{ fontSize: '15px' }}
                >
                  By clicking "Reset Password" you will get reset link.
                </div>
              </div>
              <div className='mb-3'>
                <button
                  type='button'
                  className='btn btn-primary w-100'
                  onClick={sendEmail}
                >
                  Reset Password
                </button>
              </div>
              <Collapse in={open}>
                <Alert
                  severity={type}
                  action={
                    <IconButton
                      aria-label='close'
                      color='inherit'
                      size='small'
                      onClick={() => {
                        setOpen(false);
                      }}
                    >
                      <CloseIcon fontSize='inherit' />
                    </IconButton>
                  }
                  sx={{ mb: 2 }}
                >
                  {message}
                </Alert>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
