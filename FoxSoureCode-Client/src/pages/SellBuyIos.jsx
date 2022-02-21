import React from 'react';
import '../scss/about.scss';
import '../scss/home.scss';
import { Link } from 'react-router-dom';

function SellBuyIos() {
  return (
    <div className='SellBuyIos'>
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
           Create your iPhone and iPad Apps today! 
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
                <h3 className='hero_title'>
                  <strong>Create your iPhone and iPad Apps today!</strong>
                </h3>
                <p>
                  With SellAnyCode.com you can now easily create and launch your
                  iOS Apps, even without any coding or design skills.
                </p>
                <p>
                  Choose between best iOS iPhone App Templates of any kind and
                  create your own mobile app or game today!
                </p>
                <h3 id='what-chupa-header'>
                  <strong>Create your iPhone App or Game Now!</strong>
                </h3>
                <div className='chupa-text-container'>
                  <p>
                    SellAnyCode.com App and Game Templates are easy to
                    customize, fully documented and came pre-installed with all
                    the best AD Network SDKs to let you start earning money in
                    no time.
                  </p>
                  <p>
                    Why start everything from scratch if you can have access to
                    a library of best OS App Templates and Source Code ready to
                    be customized and launched in the AppStore? Launch a new app
                    or game has never been so easy!
                  </p>
                </div>
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

export default SellBuyIos;
