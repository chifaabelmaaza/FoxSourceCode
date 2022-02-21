import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Transparent-02.png';
import '../scss/logincard.scss';

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function ResetPasswordConfirm() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className='container logincard'>
      <div className='row justify-content-md-center h-100'>
        <div className='mt-5 card-wrapper d-flex flex-column'>
          <Link to='/Home' className='logo mx-auto'>
            <img className='logo' align='center' src={logo} alt='Logo' />
          </Link>

          <div className='card shadow p-3 mb-5 bg-body rounded '>
            <div className='card-body  '>
              <h4 className='text-center' style={{ marginBottom: '30px' }}>
                Forgot Password
              </h4>
              <form>
                <Collapse in={open}>
                  <Alert
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
                    We have sent you an email with your new password! Please
                    check your inbox.
                  </Alert>
                </Collapse>
                <div className='mb-3 '>
                  <label htmlFor='exampleInputEmail1' className='form-label'>
                    Email address
                  </label>
                  <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                  />
                  <div
                    className='form-text text-muted'
                    style={{ fontSize: '15px' }}
                  >
                    By clicking "Reset Password" you will get reset link.
                  </div>
                </div>
                <div className='mb-3'>
                  <button type='submit' className='btn btn-primary w-100'>
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
