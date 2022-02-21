import React from 'react';
import '../scss/about.scss';
import '../scss/home.scss';
import { Link } from 'react-router-dom';

function Dmca() {
  return (
    <div className='Dmca'>
      <header
        className='bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow'
        style={{ height: '125px' }}
      >
        <div className='overlay rounded-0 box-shadow'></div>
        <div className='container'>
          <h1 className='mb-1 font-weight-light p-15'>About SourceCode</h1>
          <div className='breadcrumbs'>
            <a href='https://www.sellanycode.com' style={{ color: '#6315b8' }}>
              Buy apps
            </a>
            <i
              className='fa fa-arrow-right text-success fa-fw'
              style={{ marginRight: '5px' }}
            ></i>
            DMCA
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
                <h2>
                  <strong>
                    Copyright Infringements And DMCA TAKEDOWN NOTICES
                  </strong>
                </h2>
                <p>
                  In case you think there had been a copyright violation of your
                  products please email this information to
                  legal@sellanycode.com. Please note to add the following to
                  your email:
                </p>
                <ul>
                  <li>Your name, address, email</li>
                  <li>
                    In case you are a business then – business name, business
                    address
                  </li>
                  <li>
                    A link and an explanation to the located copyrighted
                    materials
                  </li>
                  <li>
                    A proof that you are the owner of the copyrighted material
                  </li>
                </ul>
                <p>
                  We will inquire into your report and ask for more information
                  in case needed to proceed the inquiry.
                </p>
                <p>Contact us at: legal@sellanycode.com</p>
                <p>
                  <strong>DMCA TAKEDOWN NOTICES</strong>
                </p>
                <p>
                  with each product you submit on the SellAnyCode.com
                  marketplace you are approving our terms and conditions which
                  grants us a full power of attorney to file DMCA takedown
                  notices on your behalf.&nbsp;
                </p>
                <p>
                  We do this when you report to us a listing / infringement of
                  your work is found on another website that you didn’t approve
                  it’s sales.
                </p>
                <p>
                  We will be filing these DMCA takedown notices in your behalf
                  as your Representatives.
                </p>
                <h2>
                  <strong>SellAnyCode’s</strong>
                  <strong>&nbsp;Role</strong>
                </h2>
                <p>
                  The developer is the only owner of the codes he/she chooses to
                  list on this site and SellAnyCode has no rights of ownership
                  or to use the uploaded codes. SellAnyCode doesn’t control and
                  will not be held responsible for the quality, legality or
                  safety of the content or codes that are sold and downloaded
                  from this site. SellAnyCode gives no guarantee that any of the
                  materials on the site do not infringe the intellectual
                  property of others. &nbsp;If you suspect a copyright
                  infringement you can submit it in accordance to section 5 in
                  this agreement.
                </p>
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

export default Dmca;
