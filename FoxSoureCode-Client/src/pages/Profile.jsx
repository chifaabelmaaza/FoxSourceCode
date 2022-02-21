import '../scss/profile.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Moment from 'react-moment';
import productService from '../services/Product.service';
import userService from '../services/User.service';
import { Avatar } from '@mui/material';

export default function Profile() {

  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  function stringAvatar(name) {
    // console.log(name);
    return {
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  useEffect(() => {
    
    userService
    .getUserById(id)
    .then((res) => {
      // console.log(res.user);
      setUser(res.user);
      // setLoading(false);
    })
    .catch((err) => {
      // logout();
      console.log(err);
    });

    productService
        .getProductsByUser(id)
        .then((res) => {
          console.log(res);
          setProduct(res?.data.products);
        })
        .catch((err) => {});
     
  }, []);
  
  return (
    <div className='profile'>
      <div
        className='bg-light text-dark text-left mb-3 mt-0 p-4 rounded-0 box-shadow'
        style={{ borderBottom: '1px solid #e5e5e5' }}
      >
        <div className='overlay rounded-0 box-shadow'></div>
        <div className='container'>
          <div className='author-info-row'>
            <div className='first-col d-flex flex-row'>
              {
                          user?.avatar ? (
                            <Avatar
                              alt='Remy Sharp'
                              src={
                                'http://localhost:3001/uploads/avatar/' +
                                user?.avatar
                              }
                              sx={{ width: 90, height: 90 }}
                              className='avatar'
                            />
                          ) : (
                            /*user?.fullName ? ( */
                            <Avatar
                              alt='Remy Sharp'
                              {...stringAvatar('User User')}
                              sx={{ width: 90 , height: 90 }}
                              className='avatar'
                            />
                          )
                          /*) : null*/
                        }
              <div className='author-title'>
                <div className='name'> {user?.fullName} </div>
                <div className='type'> {user?.devloperType ? user?.devloperType : 'Not mentioned'}</div>
                <a href={`mailto: ${user?.email}`}>
                  <button className='btn btn-primary btn-lg btn-block font-bold mt-4'>
                    Contact this author
                  </button>
                </a>
              </div>
            </div>
            <div className='second-col'>
              <div className='author-rating' style={{ display: 'none' }}>
                <span className='exact-rating'>1.0</span>
                <div className='rating' style={{ fontSize: '15px' }}>
                  ★★★★★
                </div>
                (Likes)
              </div>
              <div className='author-meta-row'>
                Member since: <strong><Moment format='MMMM ,DD YYYY'>{user?.createdAt}</Moment></strong>
              </div>
              <div className='author-meta-row'>
                Expert in: <strong>{user?.frameworks ? user?.frameworks : 'Not Mentioned'}</strong>
              </div>
              <div className='author-meta-row'>
                Developing experience: <strong>{user?.devlopingExperience ? user?.devlopingExperience : 'Not Mentioned'}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container author-products'>
        <div className='wrapper mb-3 mt-3'>
          <span
            className='font-weight-bold h4 m-t-sm'
            style={{ fontSize: '27px', position: 'relative', left: '-6px' }}
          >
            Products
          </span>
        </div>
        <div className='row rowgames'>
        {product && product.map((item, key) => (
          <div className='col-sm-3 mb-4' key={key}>
            <div className='card box-shadow h-100'>
              <Link to={`/item/${item?.id}`}>
                <div className='relativel'>
                  <button
                    type='button'
                    className='btn btn-primary btn-sm float-right font-weight-bold buttonprice text-white'
                  >
                    ${item?.priceSingle}
                  </button>
                  <img
                    className='card-img-top'
                    src={`http://127.0.0.1:3001/uploads/product/${item?.preview}`}
                      alt={item?.preview}
                  />
                </div>
                <div className='card-body text-center'>
                  <h5 className='card-title mb-3'>
                  {item?.name}
                  </h5>
                </div>
              </Link>
            </div>
          </div>
         ))}
        </div>
      </div>
    </div>
  );
}
