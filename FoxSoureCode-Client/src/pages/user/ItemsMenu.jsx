import React from 'react';
import { Link } from 'react-router-dom';
import "../../scss/user.scss"

function ItemsMenu({ url, active, setActive }) {


    return (

        <nav className="navbar navbar-expand-lg bg-primary text-white rounded bg-danger box-shadow">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse justify-content-md-center collapse" id="navbarsExample08">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className={`nav-link  ${active === 'myitems' ? 'active text-white' : 'text-muted'}`} to={`/user/myitems`} onClick={() => setActive('myitems')}>My Items</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className={`nav-link  ${active === 'my-products' ? 'active text-white' : 'text-muted'}`} to={`/user/my-products`} onClick={() => setActive('my-products')}>Approved Items</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className={`nav-link  ${active === 'my-waiting-products' ? 'active text-white' : 'text-muted'}`} to={`/user/my-waiting-products`} onClick={() => setActive('my-waiting-products')}>Waiting Approval</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className={`nav-link  ${active === 'my-rejected-products' ? 'active text-white' : 'text-muted'}`} to={`/user/my-rejected-products`} onClick={() => setActive('my-rejected-products')}>Rejected Items</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className={`nav-link  ${active === 'add-product' ? 'active text-white' : 'text-muted'}`} to={`/user/add-product`} onClick={() => setActive('add-product')}>Add Item</Link>
                    </li>
                </ul>
            </div>
        </nav>


    )


}

export default ItemsMenu;
