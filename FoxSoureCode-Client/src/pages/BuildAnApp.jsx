import React from 'react';
import '../scss/about.scss';
import '../scss/home.scss';
import { Link } from 'react-router-dom';

function BuildAnApp() {
  return (
    <div className='buildAnApp'>
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
            How to Make an Mobile App?
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
                  <strong>Have your ever Dreamt to Make an App?</strong>
                </h3>
                <p>
                  SellAnyCode.com gives you everything you need to make a
                  stunning App or a Game, right at your fingertips. We make it
                  fun to create and launch your own App, it's hassle-free, and
                  you don't need any coding or design skills.
                </p>
                <p>
                  Make your App and start building your own App portfolio today,
                  get discovered in the App-Marketplaces and make money in
                  no-time!
                </p>
                <h3 className='section_title'>
                  <strong>The App Market</strong>
                </h3>
                <p>
                  Over the past four years, the App market has exploded. The use
                  of mobile apps grew by 120% in 2015 and the average user
                  downloads 8.8 apps per month, in the US alone.
                </p>
                <p>
                  Now you too can create an app for your business, to promote
                  your product or for any other reason. An app is a useful
                  marketing tool to drive traffic and revenue.
                  <br />
                  <br />
                </p>
                <h3 className='section_title'>
                  <strong>The Biggest Players in the App Industry</strong>
                </h3>
                <p>
                  There are companies that have built an empire thanks to this
                  market.
                  <br />
                  Rovio with their Angry Birds game, King.com with Candy Crush,
                  Instagram, Supercell and dozens of others have created
                  companies worth over a billion dollars in 3-4 years. A billion
                  dollars with a simple app.
                </p>
                <p>&nbsp;</p>
                <h3 className='section_title'>
                  <strong>How much does it cost to create an App?</strong>
                </h3>
                <p>
                  Many believe that creating an app is too expensive. Another
                  problem is that people often have no idea where to start. But
                  there are good news. It is not as expensive as you think and
                  it's not really hard to start a business in the App and games
                  market. With Chupamobile, for example, you can create an app
                  with less than $100. But before explaining, let’s start from
                  the basics.
                  <br />
                  <br />
                </p>
                <h3 className='section_title'>
                  <strong>Which Kind of Apps can I create?</strong>
                </h3>
                <p>
                  There are different types of applications and games that can
                  be developed. Below you can find two categories of apps that
                  are very successful in the store and will allow you to make
                  the most amount of money:
                </p>
                <p>
                  <strong>Games</strong>&nbsp;- These have the largest range of
                  complexity, from something as simple as a PONG type (imagine
                  the old Atari game) up to super complex 3D games that you can
                  see using your console.
                </p>
                <p>
                  <strong>Apps for editing/improving</strong>&nbsp;- These apps
                  are among the most popular. To get an idea, imagine Instagram
                  or any other app that allows you to touch up your photos.
                  <br />
                  <br />
                  With SellAnyCode.com you can have access to ready Apps and
                  Games, which will allow you to enter this multi-billion dollar
                  business in a very short amount of time and with very low
                  costs. To start, take a look at the 3 simple steps below and
                  have fun browsing through our catalog and choosing the app
                  that you like the most.
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

export default BuildAnApp;
