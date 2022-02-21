import React from 'react';
import '../scss/about.scss';
import '../scss/home.scss';
import { Link } from 'react-router-dom';

function SellWork() {
  return (
    <div className='SellWork'>
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
            Selling App Source Code and Templates
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
                <h3>
                  <strong>Are you a mobile developer? </strong>
                  <strong>Turn your passion into passive income.</strong>
                </h3>
                <p>
                  If you're a Mobile Application developer, SellAnyCode.com is a
                  great new opportunity for your work and your wallet.
                </p>
                <p>
                  Like a stock photo agency, but for Mobile development, we
                  handle marketing, promotion, ordering and customer service.
                  You provide great scripts, code, components for Mobile
                  application development.
                </p>
                <p>
                  Every App Template you publish has a dedicated landing page
                  that is professionally designed and optimized for conversions
                  for different browsers. We use our design expertise and user
                  experiences to help prospective buyers make purchase
                  decisions.
                </p>
                <p>
                  We take care of all order processing and support, and you get
                  paid each and every time your designs sell.
                </p>
                <p>You can join us and start selling right away!</p>
                <p>Sign to start selling!</p>
                <h5>
                  <strong>
                    Anyone can contribute to Mobile Development at the
                    SellAnyCode.com marketplace in just a few easy steps:
                  </strong>
                </h5>
                <ul className='hollow'>
                  <li>
                    <a href='../user/register.php'>- Sign up as an Author</a>
                  </li>
                  <li>- Create a new item, follow instructions</li>
                  <li>
                    - Upload your item files in just 5 minutes with few simple
                    steps
                  </li>
                  <li>&nbsp;</li>
                </ul>
                <p>
                  Our staff will review your work and once it’s accepted,
                  SellAnyCode.com visitors get to see the products for sale in
                  the marketplace. Every package you publish has a dedicated
                  landing page that is professionally designed and optimized for
                  conversions for different browsers.
                  <br />
                  We use our expertise in design and user experience to help
                  prospective buyers make a purchase decision. Customers can
                  always purchase items 24-7, from anywhere and get instant
                  deliveries.
                </p>
                <p>
                  We take care of all the processing and support aspects, as
                  well as send you payments when your products are sold. You can
                  join us and start selling right now!
                </p>
                <p>
                  To sell your Items on SellAnyCode.com you need to be a member
                  of our authoring program. The author program is open to all
                  developers with the necessary skills to produce high quality
                  items. Any developer can set up an account for free.
                  <br />
                  You need to be at least 10 years of age and must agree to our
                  terms and conditions. Once you're signed up and have uploaded
                  your work, you are set to start earning money on every sale.
                </p>
                <p>
                  <strong>
                    You can join up and start selling right now!&nbsp;
                    <a href='../sell-your-code'>Sign up to start selling!</a>
                  </strong>
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

export default SellWork;
