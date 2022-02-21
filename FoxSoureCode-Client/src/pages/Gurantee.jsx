import React from 'react';
import '../scss/about.scss';
import '../scss/home.scss';
import { Link } from 'react-router-dom';
import guar from '../assets/img/money-back-guarantee-icon.png';

function Gurantee() {
  return (
    <div className='Gurantee'>
      <header
        className='bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow'
        style={{ height: '125px' }}
      >
        <div className='overlay rounded-0 box-shadow'></div>
        <div className='container'>
          <h1 className='mb-1 font-weight-light p-15'>About Foxsorcecode</h1>
          <div className='breadcrumbs'>
            <a href='https://www.sellanycode.com' style={{ color: '#6315b8' }}>
              Buy apps
            </a>
            <i
              className='fa fa-arrow-right text-success fa-fw'
              style={{ marginRight: '5px' }}
            ></i>
           Money Back Guarantee
            <i className='fa fa-check-circle text-success fa-fw'></i>
          </div>
        </div>
      </header>
      <div className='container'>
        <div className='row p-15'>
          <div
            className='col-sm-12'
            style={{ padding: '0px', marginBottom: '50px' }}
          >
            <div className='card mt-3 box-shadow'>
              <div className='card-body'>
                <h1 className='mb-1 font-weight-light p-15 text-center'>
                  <strong>WE GOT YOU COVERED! </strong>
                </h1>
                <h3 className='mb-1 font-weight-light p-15 text-center'>
                  <strong>We provide 100% Buyer protection </strong>&amp;
                  <strong>guarantee</strong>
                </h3>
                <p className='text-center' style={{ textAlign: 'left' }}>
                  <img
                    className='money-back-icon'
                    src={guar}
                    alt=''
                    width='200'
                    height='200'
                  />
                </p>
                <p className='text-center' style={{ textAlign: 'left' }}>
                  When you buy an item on Sell Any Code you can rest assure you
                  will get exactly what you paid for!
                </p>
                <p className='text-center' style={{ textAlign: 'left' }}>
                  We offer buyer protection for cases in which the product
                  doesn’t work as advertised in the product description page.
                </p>
                <h4 className='text-center' style={{ textAlign: 'left' }}>
                  <strong>Terms to request a refund:</strong>
                </h4>
                <ul>
                  <li style={{ textAlign: 'left' }}>
                    You must request the refund no longer than 14 days of the
                    original purchase date.
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    You must request the refund by addressing to our support
                    only at&nbsp;
                    <a href='mailto:info@sellanycode.com'>
                      info@sellanycode.com
                    </a>
                    .
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    The product doesn't work as advertised on the listing page.
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    You must detail the issues experienced using the comments
                    tab on the product page.
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    The author or our team didn't reply to your message in the
                    inbox within your dashboard within 48 hours.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section
        style={{ border: 'none', marginTop: '30px', marginBottom: '20px' }}
      >
        <div className='row'>
          <div
            className='large-12 columns align-center text-center gap-half'
            style={{ marginBottom: '30px !important', marginTop: '40px' }}
          >
            <h3 className='gap-half mb-4' style={{ fontSize: '30px' }}>
              Make Great Money with your Apps & Codes. Start Selling your Source
              Code.
            </h3>
            <Link to='/sell-your-code'>
              <div className='mb-3'>
                <button
                  type='submit'
                  className='btn btn-primary btn-sm px-3  button cta large extrawide tall '
                  style={{
                    borderRadius: '5px',
                    marginRight: '20px',
                    fontSize: '20px',
                  }}
                >
                  Become seller!
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gurantee;
