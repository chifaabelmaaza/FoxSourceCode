import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/user.scss';

function UserMenu({ url, active, setActive }) {
  return (
    <div>
      <div className='list-group '>
        <Link
          to={`${url}/dashboard`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActive('dashboard')}
        >
          <i className='fas fa-id-card text-secondary'></i>
          <div className='text'> Dashbaord</div>
        </Link>
        <Link
          to={`${url}/download`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'download' ? 'active' : ''}`}
          onClick={() => setActive('download')}
        >
          <i className='fas fa-cloud-download-alt text-secondary'></i>
          <div className='text'>Downloads</div>
        </Link>
        <Link
          to={`${url}/myitems`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'myitems' ? 'active' : ''}`}
          onClick={() => setActive('myitems')}
        >
          <i className='fas fa-th-list text-secondary'></i>
          <div className='text'>My Items</div>
        </Link>
        <Link
          to={`${url}/transactions`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'transactions' ? 'active' : ''}`}
          onClick={() => setActive('transactions')}
        >
          <i className='fas fa-money-bill-alt text-secondary'></i>
          <div className='text'>Transactions</div>
        </Link>
        <Link
          to={`${url}/my-earns`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'my-earns' ? 'active' : ''}`}
          onClick={() => setActive('my-earns')}
        >
          <i className='fas fa-trophy text-secondary'></i>
          <div className='text'>Earnings</div>
        </Link>
        <Link
          to={`${url}/faq`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'faq' ? 'active' : ''}`}
          onClick={() => setActive('faq')}
        >
          <i className='fas fa-question-circle text-secondary'></i>
          <div className='text'>FAQ</div>
        </Link>
        <Link
          to={`${url}/wishlist`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'wishlist' ? 'active' : ''}`}
          onClick={() => setActive('wishlist')}
        >
          <i className='fas fa-heart text-secondary'></i>
          <div className='text'>Wishlist</div>
        </Link>
        <Link
          to={`${url}/payments`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'Payments' ? 'active' : ''}`}
          onClick={() => setActive('Payments')}
        >
          <i className='fas fa-money-bill-alt text-secondary'></i>
          <div className='text'>Payments</div>
        </Link>
        <Link
          to={`${url}/my-account`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'My account' ? 'active' : ''}`}
          onClick={() => setActive('My account')}
        >
          <i className='fas fa-user text-secondary'></i>
          <div className='text'>My Account</div>
        </Link>
        {/* <Link
          to={`${url}/support`}
          className={`list-group-item list-group-item-action d-flex align-items-center text-secondary 
            ${active === 'support' ? 'active' : ''}`}
          onClick={() => setActive('support')}
        >
          <i className='fas fa-envelope text-secondary'></i>
          <div className='text'>Support</div>
        </Link> */}
      </div>
    </div>
  );
}

export default UserMenu;
