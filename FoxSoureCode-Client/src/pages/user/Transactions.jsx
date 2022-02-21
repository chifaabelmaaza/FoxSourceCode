import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import '../../scss/user.scss';
import { Alert, Tooltip } from '@mui/material';
import TransactionList from './TransactionList';
import userService from '../../services/User.service';
import Moment from 'react-moment';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  let { path, url } = useRouteMatch();
  const [active, setActive] = useState('transactions');

  useEffect(() => {
    userService
      .transactions()
      .then((res) => {
        setTransactions(res?.transactions);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!loading)
    return (
      <div className='my-items'>
        <TransactionList url={url} active={active} setActive={setActive} />
        {transactions.length > 0 ? (
          <div id='transactions' className='collapse show mt-2'>
            <div className='table-responsive'>
              <table className='table table-striped table-bordered table-hover'>
                <thead>
                  <tr>
                    <th width='87'>ID</th>
                    <th width='190'>Date</th>
                    <th>Type</th>
                    <th>Detail</th>
                    <th width='55'>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 &&
                    transactions.map((item, key) => (
                      <tr height='58px' key={key}>
                        <td>
                          <b>{item?.id.split('-')[0]}</b>
                        </td>
                        <td>
                          <Moment format='YYYY/MM/DD'>{item?.createdAt}</Moment>
                        </td>
                        <td align='center' style={{ verticalAlign: 'middle' }}>
                          {item?.type}
                        </td>
                        <td align='center' style={{ verticalAlign: 'middle' }}>
                          {item?.product?.name}
                        </td>
                        <td>{item?.amount}</td>
                        <td>
                          {item?.status.toLowerCase() === 'success' ? (
                            <Tooltip title='View Item' placement='top'>
                              <button className='btn btn-sm btn-success'>
                                <i className='fas fa-check text-white'></i>
                              </button>
                            </Tooltip>
                          ) : item?.status.toLowerCase() === 'failed' ? (
                            <Tooltip title='View Item' placement='top'>
                              <button className='btn btn-sm btn-warning'>
                                <i className='fas fa-times text-white'></i>
                              </button>
                            </Tooltip>
                          ) : (
                            '-'
                          )}
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan='7'></th>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        ) : (
          <div className='my-2 p-3 bg-white'>
            <Alert severity='info' className='my-2'>
              No Transaction Found!
            </Alert>
          </div>
        )}
      </div>
    );
  else return <div>Loading ...</div>;
}

export default Transactions;
