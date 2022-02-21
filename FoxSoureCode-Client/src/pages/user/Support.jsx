import React, { useState } from 'react';
import '../../scss/user.scss';

function Support() {
  return (
    <div className='support'>
      <div className='my-1 p-3 bg-white rounded box-shadow'>
        <form action=''>
          <div className='my-3'>
            <div className='input-group'>
              <span className='input-group-text' id='name'>
                <i className='fas fa-user-circle' aria-hidden='true'></i>
              </span>
              <input
                type='text'
                name='name'
                className='form-control'
                aria-label='Name'
                aria-describedby='name'
                required
                disabled
              />
            </div>
          </div>
          <div className='my-3'>
            <div className='input-group'>
              <span className='input-group-text' id='username'>
                <i className='far fa-address-card' aria-hidden='true'></i>
              </span>
              <input
                type='text'
                name='username'
                className='form-control'
                aria-label='username'
                aria-describedby='username'
                required
                disabled
              />
            </div>
          </div>
          <div className='my-3'>
            <div className='input-group'>
              <span className='input-group-text' id='email'>
                <i className='fas fa-envelope' aria-hidden='true'></i>
              </span>
              <input
                type='email'
                name='email'
                className='form-control'
                aria-label='email'
                aria-describedby='email'
                required
                disabled
              />
            </div>
          </div>
          <div className='my-3'>
            <div className='form-group'>
              <label htmlFor='subject mb-1' className='form-label'>
                Subject
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                className='form-control'
                required
              />
            </div>
          </div>
          <div className='my-3'>
            <div className='form-group'>
              <label htmlFor='message mb-1' className='form-label'>
                Message
              </label>
              <textarea
                name='message'
                className='form-control'
                id='message'
                required='required'
                spellCheck='false'
              ></textarea>
            </div>
          </div>

          <div className='my-3'>
            <div className='d-flex w-100 align-items-center justify-content-start'>
              <button className='btn btn-sm btn-primary' type='submit'>
                Submit Ticket
              </button>
            </div>
          </div>
          <div
            id='result6'
            style={{ fontSize: '12px', marginTop: '15px', fontStyle: 'italic' }}
          >
            Average response time is 24 hours. As well, you can reach us
            directly at:
            <a href='mailto:info@sellanycode.com' style={{ color: '#6315b8' }}>
              info@sellanycode.com
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Support;
