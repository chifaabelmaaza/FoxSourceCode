import React, { useState } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import '../../scss/user.scss';
import { Alert, Tooltip } from '@mui/material';
import TransactionList from './TransactionList';

function NewWithdraw() {
  let { path, url } = useRouteMatch();
  const [active, setActive] = useState('withdraw-money');

  return (
    <div className='my-items'>
      <TransactionList url={url} active={active} setActive={setActive} />

      <div className='my-1 p-3 bg-light rounded box-shadow'>
        <form action='' id='whithdraw'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>Total Earnings</th>
                  <th scope='col'>Total Withdraws</th>
                  <th scope='col'>withdrawable value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>$</td>
                  <td>$</td>
                  <td>
                    you don't have enough withdrawable earnings <br /> Minimal
                    withdraw amount is 30$
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='my-3'>
            <label htmlFor='paypal-email' className='form-label'>
              PayPal Email
            </label>
            <div className='input-group'>
              <span className='input-group-text' id='paypal-email'>
                <i className='fab fa-paypal' aria-hidden='true'></i>
              </span>
              <input
                type='email'
                name='paypalEmail'
                className='form-control'
                aria-label='PayPal Email'
                aria-describedby='paypal-email'
                required
              />
            </div>
          </div>
          <div className='my-3'>
            <label htmlFor='amount' className='form-label'>
              Withdraw Amount (Minimal withdraw amount is $30)
            </label>
            <div className='input-group'>
              <span className='input-group-text' id='amount'>
                $
              </span>
              <input
                type='number'
                min='30'
                name='amount'
                className='form-control'
                placeholder='min 30$'
                aria-label='Withdraw Amount (Minimal withdraw amount is $30)'
                aria-describedby='paypal-email'
                required
              />
            </div>
          </div>
          <div className='d-flex w-100 align-items-center justify-content-between'>
            <button className='btn btn-sm  btn-primary' type='submit'>
              Submit
            </button>
            <Link to={`/user/withdraw-past`} className='text-center'>
              <button className='btn btn-sm  btn-primary'>
                Check your withdraws
              </button>
            </Link>
          </div>
          <div
            id='result6'
            style={{ fontSize: '12px', marginTop: '15px', fontStyle: 'italic' }}
          >
            Withdrawals are always sent to your PayPal within 4-7 days. For more
            info, reach us at:{' '}
            <a href='mailto:info@sellanycode.com' style={{ color: '#6315b8' }}>
              info@sellanycode.com{' '}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewWithdraw;
