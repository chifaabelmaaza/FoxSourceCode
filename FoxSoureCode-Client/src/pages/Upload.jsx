import React, { useState } from 'react';
import screen from '../assets/img/sellanycode-screen.png';
import screen2 from '../assets/img/sellanycode-chart.png';
import { Link } from 'react-router-dom';
import '../scss/upload.scss';

function Upload() {
  const [revenu0, setRevenu0] = useState(0);
  const [revenu1, setRevenu1] = useState(0);
  //   const [revenu80, setRevenu80] = useState(0);
  //   const [revenu90, setRevenu90] = useState(0);

  return (
    <div className='upload'>
      <header
        className='bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow'
        style={{ height: '125px' }}
      >
        <div className='overlay rounded-0 box-shadow'></div>
        <div className='container'>
          <h1 className='mb-1 font-weight-light'>
            Sell Your Code - Become a Seller!
          </h1>
          <div className='breadcrumbs'>
            <a href='https://www.sellanycode.com' style={{ color: '#6315b8' }}>
              SellAnyCode.com
            </a>
            <i
              className='fa fa-arrow-right text-success fa-fw'
              style={{ marginRight: '5px' }}
            ></i>
            Sell Your Code
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
              <div
                className='card-body'
                style={{
                  fontSize: '31px',
                  textAlign: 'center',
                  lineHeight: '47px',
                }}
              >
                Start making money by selling your Scripts, Themes, App Source
                Codes and Games to the thousands of buyers on SellAnyCode.com!
                🚀🙂
              </div>

              <div className='bg-white'>
                <div className='container'>
                  <div className='row m-t-xl m-b-xxl'>
                    <div className='col-sm-5'>
                      <img src={screen} alt='screen' className='w-100' />
                    </div>
                    <div
                      className='col-sm-7 text-lg'
                      style={{ lineHeight: '32px' }}
                    >
                      <h3 className='text-dark font-bold m-b-lg'>
                        Start selling in just a few steps - Just 5 minutes!
                      </h3>
                      <div className='text-dark'>
                        <strong>1.</strong> Sign up for free on SellAnyCode.com!
                        <br />
                        <strong>2.</strong> Upload your item up to 1.5GB with
                        256-bit encryption
                        <br />
                        <strong>3.</strong> Our team will review your item,
                        approval takes 24 hours from the submission
                        <br />
                        <strong>4.</strong> Once your item has been approved it
                        will appear on SellAnyCode.com
                        <br />
                        <strong>5.</strong> Have your earnings transferred to
                        you by Paypal or Wire Transfer immediately
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-light' style={{ marginTop: '50px' }}>
                  <div className='container'>
                    <div className='row m-t-xl m-b-xxl'>
                      <div className='col-7'>
                        <h3 className='text-dark font-bold m-b-lg'>
                          Enjoy your 80% revenue share without any restrictions!
                        </h3>
                        <ul className='list-unstyled m-t-xl listrevenue'>
                          <li>
                            <i className='icon-check pull-left text-lg m-r m-t-xs text-success'></i>
                            <p className='clear m-b-md text-lg'>
                              <i className='fa fa-check-circle text-success fa-fw'></i>
                              Receive a commission rate of <strong>80%</strong>
                              and withdraw earnings immediately.
                            </p>
                          </li>
                          <li>
                            <i className='icon-check pull-left text-lg m-r m-t-xs text-success'></i>
                            <p className='clear m-b-md text-lg'>
                              <i className='fa fa-check-circle text-success fa-fw'></i>
                              <strong>For Exclusive items</strong>
                              <strong>90%</strong> revenue share!
                            </p>
                          </li>
                          <li>
                            <i className='icon-check pull-left text-lg m-r m-t-xs text-success'></i>
                            <p className='clear m-b-md text-lg'>
                              <i className='fa fa-check-circle text-success fa-fw'></i>
                              <strong>No minimum</strong> number of sales
                              required to get payout.
                            </p>
                          </li>

                          <li>
                            <i className='icon-check pull-left text-lg m-r m-t-xs text-success'></i>
                            <p className='clear m-b-md text-lg'>
                              <i className='fa fa-check-circle text-success fa-fw'></i>
                              <strong>No exclusivity</strong> required. Feel
                              free to keep selling your products on your own
                              website.
                            </p>
                          </li>
                          <li>
                            <i className='icon-check pull-left text-lg m-r m-t-xs text-success'></i>
                            <p className='clear m-b-md text-lg'>
                              <i className='fa fa-check-circle text-success fa-fw'></i>
                              <strong>And what's more?</strong> Dedicated
                              support by our sales assistant almost 24/7!
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className='col-sm-5 text-center'>
                        <img
                          src={screen2}
                          alt='screen 2'
                          className='w-lg'
                          style={{ width: '260px' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='bg-white'
                  style={{ marginTop: '45px', marginBottom: '100px' }}
                >
                  <div className='container itemlist'>
                    <h3
                      className='text-dark font-bold m-b-xxl'
                      style={{
                        textAlign: 'center',
                        fontSize: '31px',
                        marginBottom: '30px',
                      }}
                    >
                      Try Calculate Your Earnings Now!
                    </h3>

                    <div className='row m-t-xl m-b-xxl text-center'>
                      <form action='' className='earnings'>
                        <div className='row'>
                          <h5 className='text-dark font-bold text-start m-b-xxl titles'>
                            Regular sales: (
                            <span style={{ color: '#6315b8' }}>80%</span> your
                            earnings)
                          </h5>

                          <div className='span4'>
                            <label>Price Your Item ($) </label>
                            <input
                              placeholder='Type your price eg. 150, 300'
                              className='form-control'
                              type='number'
                              value={revenu0}
                              onChange={(e) => {
                                setRevenu0(e.target.value);
                                // setRevenu80((revenu0 / 100) * 80);
                              }}
                            />
                          </div>
                          <div className='span4'>
                            <label>Your Revenue Paid By SellAnyCode.com</label>
                            <input
                              className='form-control'
                              type='number'
                              value={(revenu0 / 100) * 80}
                              readOnly
                            />
                          </div>
                        </div>
                      </form>
                      <form action='' className='my-3 earnings'>
                        <div className='row'>
                          <h5 className='text-dark font-bold text-start m-b-xxl titles'>
                            Regular sales: (
                            <span style={{ color: '#6315b8' }}>90%</span> your
                            earnings)
                          </h5>

                          <div className='span4'>
                            <label>Price Your Item ($) </label>
                            <input
                              placeholder='Type your price eg. 150, 300'
                              className='form-control'
                              type='number'
                              value={revenu1}
                              onChange={(e) => {
                                setRevenu1(e.target.value);
                                // setRevenu90((revenu1 / 100) * 90);
                              }}
                            />
                          </div>
                          <div className='span4'>
                            <label>Your Revenue Paid By SellAnyCode.com</label>
                            <input
                              className='form-control'
                              type='number'
                              value={(revenu1 / 100) * 90}
                              readOnly
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div
                  className='bg-white'
                  style={{ marginTop: '70px', marginBottom: '100px' }}
                >
                  <div className='container itemslist'>
                    <h3
                      className='text-dark font-bold m-b-xxl'
                      style={{
                        textAlign: 'center',
                        fontSize: '31px',
                        marginBottom: '30px',
                      }}
                    >
                      What can you sell?
                    </h3>
                    <div className='row m-t-xl m-b-xxl text-center'>
                      <div className='col-sm-3 text-center fadeInUp animated my2'>
                        <span className='text-3x text-muted'>
                          <i
                            style={{ fontSize: '50px' }}
                            className='fa fa-code text-2x'
                          ></i>
                        </span>
                        <br />
                        <span className='text-lg '>Scripts &amp; Code</span>
                      </div>
                      <div
                        className='col-sm-3 text-center fadeInUp animated my2'
                        data-ride='animated'
                        data-animation='fadeInUp'
                        data-delay='600'
                      >
                        <span className='text-3x text-muted'>
                          <i
                            style={{ fontSize: '50px' }}
                            className='fa fa-paint-brush text-2x'
                          ></i>
                        </span>
                        <br />
                        <span className='text-lg '>Themes &amp; graphics</span>
                      </div>
                      <div
                        className='col-sm-3 text-center fadeInUp animated my2'
                        data-ride='animated'
                        data-animation='fadeInUp'
                        data-delay='900'
                      >
                        <span className='text-3x text-muted'>
                          <i
                            style={{ fontSize: '50px' }}
                            className='fa fa-plug text-2x'
                          ></i>
                        </span>
                        <br />
                        <span className='text-lg '>Plugins &amp; Files</span>
                      </div>
                      <div
                        className='col-sm-3 text-center fadeInUp animated my2'
                        data-ride='animated'
                        data-animation='fadeInUp'
                        data-delay='1200'
                      >
                        <span className='text-3x text-muted'>
                          <i
                            style={{ fontSize: '50px' }}
                            className='fa fa-mobile text-2x'
                          ></i>
                        </span>
                        <br /> <span className='text-lg '>App Source Code</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white container text-center mb-5'>
                  <h3 className='gap-half last-h3'>
                    Just join us and you will not regret it! 100% satisfaction
                    guaranteed!❤️✋
                  </h3>
                  <Link to='/register'  >
                    <button className='btn btn-primary px-5 my-3'>Joins Us Now!</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
