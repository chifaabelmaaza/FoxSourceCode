import React, { useState, useEffect } from 'react';
import background from '../assets/img/Logo.png';
import logos from '../assets/img/icons-sellanycode.png';
import '../scss/home.scss';
import { Link } from 'react-router-dom';
import productService from '../services/Product.service';

export default function Home() {
  const [newadded, setNewAdded] = useState([]);
  const [popularItems, setPropularItems] = useState([]);
  const [hotItems, setHotItems] = useState([]);
  const [topSelling, setTopSelling] = useState([]);
  useEffect(() => {
    productService
      .getNewAdded()
      .then((res) => {
        //   console.log(res);
        // console.log(res.products);
        setNewAdded(res?.products);
      })
      .catch((err) => {
        console.log(err);
      });

    productService
      .getPopularItems()
      .then((res) => {
        // console.log(res?.products)
        setPropularItems(res?.products);
      })
      .catch((err) => {
        console.log(err);
      });

    productService
      .getHotItems()
      .then((res) => {
        setHotItems(res?.products);
      })
      .catch((err) => {
        setHotItems(err);
      });

    productService
      .getTopSelling()
      .then((res) => {
        setTopSelling(res?.products);
      })
      .catch((err) => {
        setHotItems(err);
      });
  }, []);
//   console.log(newadded);
  return (
    <div className='home-page'>
      <div
        className='hp-hero'
        style={{ backgroundImage: `url(${background})`, height: '485px', objectFit:'cover' }}
      >
        <div className='content container '>
          <h1 className='title mb-5'>
            Market for selling source codes
          </h1>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


          {/* <div className='input-group mb-5 searchBar'>
            <input
              type='text'
              className='form-control'
              placeholder='Start searching in 2149 codes...'
              aria-label="Recipient's username"
              aria-describedby='button-addon2'
            />
            <button
              className='btn btn-light '
              style={{ background: 'white' }}
              type='button'
              id='button-addon2'
            >
              <i className='fas fa-search' style={{ fontSize: '30px' }}></i>
            </button>
          </div> */}
          <div className='img-logo'>
            <Link to='/about'>
              <img className='' src={logos} alt='' />
            </Link>
          </div>
        </div>
      </div>
      <div className='container cards' style={{ marginTop: '35px' }}>
        <div
          className='wrapper mb-3 mt-3 d-flex flex-row'
          style={{ position: 'relative' }}
        >
          <span
            className='font-weight-bold h4 m-t-sm'
            style={{ fontSize: '27px', position: 'relative', left: '-6px' }}
          >
            New Added Items
          </span>
          <Link to='/store'>
            <div className='mb-3'>
              <button
                type='submit'
                className='btn btn-primary btn-sm px-3  button  text-white'
              >
                <i className='fas fa-eye' style={{ marginRight: '20px' }}></i>
                View All
              </button>
            </div>
          </Link>
        </div>
        <div className='row rowgames'>
          {newadded.map((item, key) => (
            <div className='col-lg-3 col-md-4 col-sm-12 mb-4' key={key}>
              <div className='cards card box-shadow h-100'>
                <Link to={`/item/${item?.id}`}>
                  <div className='relativel'>
                    <button className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'>
                      ${item?.priceSingle}
                    </button>
                    <img
                      className='card-img-top'
                      src={`http://127.0.0.1:3001/uploads/product/${item?.preview}`}
                      alt={item?.preview}
                    ></img>
                  </div>
                  <div className='card-body text-center'>
                    <h5 className='card-title text-truncate text-secondary mb-3'>
                      {item?.name}
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container cards' style={{ marginTop: '35px' }}>
        <div
          className='wrapper mb-3 mt-3 d-flex flex-row'
          style={{ position: 'relative' }}
        >
          <span
            className='font-weight-bold h4 m-t-sm'
            style={{ fontSize: '27px', position: 'relative', left: '-6px' }}
          >
            Top Selling Items
          </span>
          <Link to='/store'>
            <div className='mb-3'>
              <button
                type='submit'
                className='btn btn-primary btn-sm px-3  button text-white'
              >
                <i className='fas fa-eye ' style={{ marginRight: '20px' }}></i>
                View All
              </button>
            </div>
          </Link>
        </div>
        <div className='row rowgames'>
          {topSelling.map((item, key) => (
            <div className='col-lg-3 col-md-4 col-sm-12 mb-4' key={key}>
              <div className='cards card box-shadow h-100'>
                <Link to={`/item/${item?.id}`}>
                  <div className='relativel'>
                    <button className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'>
                      ${item?.priceSingle}
                    </button>
                    <img
                      className='card-img-top'
                      src={`http://127.0.0.1:3001/uploads/product/${item?.preview}`}
                      alt={item?.preview}
                    ></img>
                  </div>
                  <div className='card-body text-center'>
                    <h5 className='card-title text-truncate text-secondary mb-3'>
                      {item?.name}
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='container cards' style={{ marginTop: '35px' }}>
        <div
          className='wrapper mb-3 mt-3 d-flex flex-row'
          style={{ position: 'relative' }}
        >
          <span
            className='font-weight-bold h4 m-t-sm'
            style={{ fontSize: '27px', position: 'relative', left: '-6px' }}
          >
            Hot Items
          </span>
          <Link to='/store'>
            <div className='mb-3'>
              <button
                type='submit'
                className='btn btn-primary btn-sm px-3  button text-white'
              >
                <i className='fas fa-eye ' style={{ marginRight: '20px' }}></i>
                View All
              </button>
            </div>
          </Link>
        </div>
        <div className='row rowgames'>
          {hotItems.map((item, index) => (
            <div className='col-lg-3 col-md-4 col-sm-12 mb-4' key={index}>
              <div className='cards card box-shadow h-100'>
                <Link to={`/item/${item?.id}`}>
                  <div className='relativel'>
                    <button className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'>
                      ${item?.priceSingle}
                    </button>
                    <img
                      className='card-img-top'
                      src={`http://127.0.0.1:3001/uploads/product/${item?.preview}`}
                      alt={item?.preview}
                    ></img>
                  </div>
                  <div className='card-body text-center'>
                    <h5 className='card-title text-truncate text-secondary mb-3'>
                      {item?.name}
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          </div>
      </div>
      <div className='container cards' style={{ marginTop: '35px' }}>
        <div
          className='wrapper mb-3 mt-3 d-flex flex-row'
          style={{ position: 'relative' }}
        >
          <span
            className='font-weight-bold h4 m-t-sm'
            style={{ fontSize: '27px', position: 'relative', left: '-6px' }}
          >
            Popular Items
          </span>
          <Link to='/store'>
            <div className='mb-3'>
              <button
                type='submit'
                className='btn btn-primary btn-sm px-3  button text-white'
              >
                <i className='fas fa-eye ' style={{ marginRight: '20px' }}></i>
                View All
              </button>
            </div>
          </Link>
        </div>
        <div className='row rowgames'>
          {popularItems.map((item, key) => (
            <div className='col-lg-3 col-md-4 col-sm-12 mb-4' key={key}>
              <div className='cards card box-shadow h-100'>
                <Link to={`/item/${item?.id}`}>
                  <div className='relativel'>
                    <button className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'>
                      ${item?.priceSingle}
                    </button>
                    <img
                      className='card-img-top'
                      src={`http://127.0.0.1:3001/uploads/product/${item?.preview}`}
                      alt={item?.preview}
                    ></img>
                  </div>
                  <div className='card-body text-center'>
                    <h5 className='card-title text-truncate text-secondary mb-3'>
                      {item?.name}
                    </h5>
                  </div>
                </Link>
              </div>
            </div>
          ))}
          </div>
      </div>
      <section
        style={{
          border: 'none',
          marginTop: '30px',
          marginBottom: '20px',
          borderTop: '1px solid #e7e7e7',
        }}
      >
        <div className='row'>
          <div
            className='large-12 columns align-center text-center gap-half'
            style={{ marginBottom: '30px !important', marginTop: '40px' }}
          >
            <h3 className='gap-half' style={{ fontSize: '27px' }}>
              Start Selling Your Source Code. Enjoy
              <strong> 80% </strong>
              Revenue Share And
              <strong> 90% </strong>
              For Exclusive Items!
            </h3>
            <Link to='/sell-your-work'>
              <div className='mb-3'>
                <button
                  type='submit'
                  className='btn btn-primary btn-sm px-3  button cta large extrawide tall text-white'
                  style={{ borderRadius: '5px', marginRight: '20px' }}
                >
                  Find out more
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
