import React from 'react';
import { Link } from 'react-router-dom';
import "../../scss/user.scss"

function TransactionList({ url, active, setActive }) {


    return (

        <nav className="navbar navbar-expand-lg bg-primary text-white rounded bg-danger box-shadow">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse justify-content-md-center collapse" id="navbarsExample08">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className={`nav-link  ${active === 'transactions' ? 'active text-white' : 'text-muted'}`} to={`/user/transactions`} onClick={() => setActive('transactions')}>Transactions</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link  ${active === 'my-earns' ? 'active text-white' : 'text-muted'}`} to={`/user/my-earns`} onClick={() => setActive('my-earns')}>My Income</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link  ${active === 'withdraw-money' ? 'active text-white' : 'text-muted'}`} to={`/user/withdraw-money`} onClick={() => setActive('withdraw-money')}>Withdraw Money</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link  ${active === 'withdraw-past' ? 'active text-white' : 'text-muted'}`} to={`/user/withdraw-past`} onClick={() => setActive('withdraw-past')}>Previous Withdraws</Link>
                    </li>
                </ul>
            </div>
        </nav>


    )


}

export default TransactionList;
