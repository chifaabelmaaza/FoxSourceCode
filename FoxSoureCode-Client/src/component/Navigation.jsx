import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/img/Logo.png';
import logo from '../assets/img/Transparent-022.png';
import MenuIcon from '@mui/icons-material/Menu';
import { NavDropdown } from 'react-bootstrap';
import '../scss/navbar.scss';
import { LoginContext } from '../LoginContext';
import AuthService from '../services/Auth';
import userService from '../services/User.service';
import productService from '../services/Product.service';


export default function Navigation() {
  const [toggled, setToggled] = useState(false);
  const [user, setUser] = useState(null);
  const { loggedIn, toggleLogin } = useContext(LoginContext);
  const [prodnumb, setProdNmb] = useState(0);


  useEffect(() => {
    // console.log(loggedIn)
    AuthService.jwt()
      .then((res) => {
        // console.log(res.success);
        if (!res.success) {
          // toggleLogin();
        }
      })
      .catch((err) => {
        console.error(err.response?.data?.error);
      });

    userService
      .getUserById(localStorage.getItem('user'))
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => console.error(err.response.data?.error));
      // while (true) {
      setTimeout(() => {
        if (loggedIn) {
          AuthService.jwt()
          .then((res) => {
              // console.log(res.success);
              if (!res.success) {
                toggleLogin();
              }
            })
            .catch((err) => {
              console.error(err.response.data?.error);
            });
        }
      }, 240000);
    // }

    productService
      .productnumber()
      .then((res) => setProdNmb(res?.productNumber))
      .catch((err) => console.log(err));

  }, []);


  const logout = () => {
    AuthService.logout()
      .then((res) => {
        // console.log(res);
        toggleLogin();
        window.location.reload();
      })
      .catch((err) => {
        console.error(err.response.data?.error);
      });
  };
  return (
    <>
      <nav className='bg-white navbar navbar-expanded-lg border-bottom'>
        <div className='container d-flex align-items-center justify-content-between'>
          <Link to='/' className='navbar-brand'>
            <img className='logo' src={logo} alt='Logo' style={{ height: '55px' }} />
          </Link>
          <button
            className='btn btn-outline-primary collapse-button'
            onClick={() => setToggled(!toggled)}
          >
            <MenuIcon />
          </button>
          <div className='items d-flex align-items-center'>
            <ul className='main-menu'>
              <li className=' menu-item' style={{ position: 'relative' }}>
                <Link
                  to={`/store`}
                  className='text-secondary'
                  style={{ fontWeight: 300, fontSize: '19px' }}
                >
                  App & Game Templates
                </Link>
                <span
                  className='nav-sub-soon text-primary'
                  style={{
                    top: '0px',
                    right: '10px',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: '11px',
                    // color: '#6315b8',
                    letterSpacing: 0,
                    opacity: 0.8,
                  }}
                >
                  ({prodnumb})
                </span>
                <div className='sub-menu d-flex justify-content-around flex-column'>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      iOS
                    </Link>
                  </div>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      Android
                    </Link>
                  </div>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      Unity
                    </Link>
                  </div>
                </div>
              </li>
              <li className=' menu-item' style={{ position: 'relative' }}>
                <Link
                  to='/store'
                  className='text-secondary'
                  style={{ fontWeight: 300, fontSize: '19px' }}
                >
                  Scripte & Codes
                </Link>
                <div className='sub-menu d-flex justify-content-around flex-column'>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      javaScript
                    </Link>
                  </div>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      Php
                    </Link>
                  </div>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      Python
                    </Link>
                  </div>
                  <div className='my-1 mx-1 item'>
                    <Link to='/store' className='text-secondary'>
                      Java
                    </Link>
                  </div>
                </div>
              </li>
              <li
                className=' menu-item text-secondary'
                style={{ position: 'relative' }}
              >
                <Link
                  to='/sell-your-code'
                  className='text-secondary'
                  style={{ fontWeight: 300, fontSize: '19px' }}
                >
                  Upload your code{loggedIn}
                </Link>
                <span
                  className='nav-sub-soon text-primary'
                  style={{
                    top: '0px',
                    right: '10px',
                    position: 'absolute',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: '11px',
                    // color: '#6315b8',
                    letterSpacing: 0,
                    opacity: 0.8,
                  }}
                >
                  SELL!
                </span>
              </li>
            </ul>
          </div>

          <div
            className={`connection d-flex align-items-center justify-content-center ${
              loggedIn ? 'd-none' : ''
            }`}
          >
            <Link to='/login' className='text-secondary'>
              <button className='btn login-button text-uppercase mx-1'>
                Login
              </button>
            </Link>
            <Link to='/register' className='text-secondary'>
              <button className='btn login-button text-uppercase '>
                sign up
              </button>
            </Link>
          </div>

          <div className={`dropdown ${!loggedIn ? 'd-none' : ''}`}>
            <Link
              className='btn dropdown-toggle text-secondary'
              to='/'
              role='button'
              id='dropdownMenuLink'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Hi, {user?.fullName}
              <span className='badge bg-primary mx-1'>
                $ {parseFloat((user?.income + user?.withdraw).toFixed(2))}
              </span>
            </Link>

            <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
              <li>
                <Link
                  className='dropdown-item my-1 text-secondary'
                  to='/user/dashboard'
                >
                  <i className='far fa-address-card me-2'></i>Dashbaord
                </Link>
              </li>
              <li>
                <Link
                  className='dropdown-item my-1 text-secondary'
                  to='/user/download'
                >
                  <i className='fas fa-cloud-download-alt me-2'></i>Downloads
                </Link>
              </li>
              <NavDropdown.Divider />
              <li>
                <Link
                  className='dropdown-item my-1 text-secondary'
                  to='/user/myitems'
                >
                  <i className='fas fa-th-list me-2'></i>My Items
                </Link>
              </li>
              <li>
                <Link
                  className='dropdown-item my-1 text-secondary'
                  to='/user/add-product'
                >
                  <i className='fas fa-cloud-upload-alt me-2'></i>Sell Items
                </Link>
              </li>
              <NavDropdown.Divider />
              <li
                onClick={logout}
                className='dropdown-item my-1 text-secondary'
                style={{ cursor: 'pointer' }}
              >
                <i className='fas fa-sign-out-alt me-2'></i>Log out
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`${!toggled ? 'd-none' : ''} vertical-menu`}>
        <div className='items d-flex align-items-center'>
          <ul className='main-menu'>
            <li className=' menu-item' style={{ position: 'relative' }}>
              <Link
                to='/category'
                className='text-secondary'
                style={{ fontWeight: 300, fontSize: '19px' }}
              >
                App & Game Templates
              </Link>
              <span
                className='nav-sub-soon text-primary'
                style={{
                  top: '0px',
                  right: '10px',
                  position: 'absolute',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontSize: '11px',
                  letterSpacing: 0,
                  opacity: 0.8,
                }}
              >
                (2148)
              </span>
              <div className='sub-menu d-flex justify-content-around flex-column'>
                <div className='my-1 mx-1 item'>
                  <Link to='/category/ios' className='text-secondary'>
                    iOS
                  </Link>
                </div>
                <div className='my-1 mx-1 item'>
                  <Link to='/category/android' className='text-secondary'>
                    Android
                  </Link>
                </div>
                <div className='my-1 mx-1 item'>
                  <Link to='/category/unity' className='text-secondary'>
                    Unity
                  </Link>
                </div>
              </div>
            </li>
            <li className=' menu-item' style={{ position: 'relative' }}>
              <Link
                to='/category'
                className='text-secondary'
                style={{ fontWeight: 300, fontSize: '19px' }}
              >
                Scripte & Codes
              </Link>
              <div className='sub-menu d-flex justify-content-around flex-column'>
                <div className='my-1 mx-1 item'>
                  <Link to='/subcat/javaScript' className='text-secondary'>
                    javaScript
                  </Link>
                </div>
                <div className='my-1 mx-1 item'>
                  <Link to='/subcat/php' className='text-secondary'>
                    Php
                  </Link>
                </div>
                <div className='my-1 mx-1 item'>
                  <Link to='/subcat/python' className='text-secondary'>
                    Python
                  </Link>
                </div>
                <div className='my-1 mx-1 item'>
                  <Link to='/subcat/java' className='text-secondary'>
                    Java
                  </Link>
                </div>
              </div>
            </li>
            <li
              className=' menu-item text-secondary'
              style={{ position: 'relative' }}
            >
              <Link
                to='/sell-your-code'
                className='text-secondary'
                style={{ fontWeight: 300, fontSize: '19px' }}
              >
                Upload your code
              </Link>
              <span
                className='nav-sub-soon text-primary'
                style={{
                  top: '0px',
                  right: '10px',
                  position: 'absolute',
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontSize: '11px',
                  // color: '#6315b8',
                  letterSpacing: 0,
                  opacity: 0.8,
                }}
              >
                SELL!
              </span>
            </li>
          </ul>
        </div>

        <div
          className={`connection d-flex align-items-center justify-content-center ${
            loggedIn ? 'd-none' : ''
          }  `}
        >
          <Link to='/login' className='text-secondary'>
            <button className='btn login-button text-uppercase mx-1'>
              Login
            </button>
          </Link>
          <Link to='/signup' className='text-secondary'>
            <button className='btn login-button text-uppercase '>
              sign up
            </button>
          </Link>
        </div>

        <div className={`dropdown ms-4 ${!loggedIn ? 'd-none' : ''}`}>
          <Link
            className='btn dropdown-toggle text-secondary'
            to='/'
            role='button'
            id='dropdownMenuLink'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            Hi, {user?.fullName}
            <span className='badge bg-primary'>
              $ {parseFloat((user?.income + user?.withdraw).toFixed(2))}
            </span>
          </Link>

          <ul className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <li>
              <Link className='dropdown-item my-1 text-secondary' to='/'>
                <i className='far fa-address-card me-2'></i>Dashbaord
              </Link>
            </li>
            <li>
              <Link className='dropdown-item my-1 text-secondary' to='/'>
                <i className='fas fa-cloud-download-alt me-2'></i>Downloads
              </Link>
            </li>
            <NavDropdown.Divider />
            <li>
              <Link className='dropdown-item my-1 text-secondary' to='/'>
                <i className='fas fa-th-list me-2'></i>My Items
              </Link>
            </li>
            <li>
              <Link className='dropdown-item my-1 text-secondary' to='/'>
                <i className='fas fa-cloud-upload-alt me-2'></i>Sell Items
              </Link>
            </li>
            <NavDropdown.Divider />
            <li>
              <Link className='dropdown-item my-1 text-secondary' to='/'>
                <i className='fas fa-sign-out-alt me-2'></i>Log out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
