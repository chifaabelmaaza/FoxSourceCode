import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/user.scss';
import userService from '../../services/User.service';
import productService from '../../services/Product.service';
import Moment from 'react-moment';

function Dashboard({ url }) {
  const [active, setActive] = useState('myitems');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSeectedId] = useState('');

  const handleClickOpen = (id) => {
    setSeectedId(id);
    // console.log(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('user');

    productService
      .getProductsByUser(user)
      .then((res) => {
        // console.log(res.data?.products);
        if (res.data?.products.length > 5) {
          setProducts(res.data?.products.slice(0, 5));
        } else {
          setProducts(res.data?.products);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(true);
    userService
      .transactions()
      .then((res) => {
        if (res?.transactions.length > 5) {
          setTransactions(res?.transactions.slice(0, 5));
        } else {
          setTransactions(res?.transactions);
        }
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteProduct = () => {
    // return console.log(selectedId);
    productService
      .deleteProduct(selectedId)
      .then((res) => {
        handleClose();
        alert('Product deleted successfully');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  if (!loading)
    return (
      <div className='dashbaord'>
        <div className='my-1 p-3 bg-white rounded box-shadow'>
          <h4 className='pb-2 mb2'>Last Transactions</h4>
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
                            <Moment format='YYYY/MM/DD'>
                              {item?.createdAt}
                            </Moment>
                          </td>
                          <td
                            align='center'
                            style={{ verticalAlign: 'middle' }}
                          >
                            {item?.type}
                          </td>
                          <td
                            align='center'
                            style={{ verticalAlign: 'middle' }}
                          >
                            {item?.product?.name}
                          </td>
                          <td>{item?.amount}</td>
                          <td>
                            {item?.status.toLowerCase() === 'success' ? (
                              <Tooltip title='Success' placement='top'>
                                <button className='btn btn-sm btn-success'>
                                  <i className='fas fa-check text-white'></i>
                                </button>
                              </Tooltip>
                            ) : item?.status.toLowerCase() === 'failed' ? (
                              <Tooltip title='Failed' placement='top'>
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

          <div className='row justify-content-md-center align-items-center'>
            <Link to={`/user/transactions`} className='text-center'>
              <button className='btn btn-sm  btn-primary text-white'>
                View All Trancations
              </button>
            </Link>
          </div>
        </div>

        <div className='mt-4 mb-1 p-3 bg-white rounded-box-shadow'>
          <h4 className='pb-2 mb-2'>Your Items for Sale</h4>

          <div id='transactions' className='collapse show'>
            <div className='table-responsive'>
              <table className='table table-striped table-bordered table-hover'>
                <thead>
                  <tr>
                    <th width='87'></th>
                    <th width='190'>Item Name</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Sales</th>
                    <th width='55'>Views</th>
                    <th style={{ width: '88px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr height='58px' key={index}>
                      <td>
                        <img
                          className='card-img-top'
                          style={{
                            width: '45px',
                            borderRadius: '3px',
                            position: 'relative',
                            left: '9px',
                            verticalAlign: 'middle',
                          }}
                          src={`http://127.0.0.1:3001/uploads/product/${item?.icon}`}
                          alt=''
                        />
                      </td>
                      <td>{item?.name}</td>
                      <td align='center' style={{ verticalAlign: 'middle' }}>
                        {item.priceSingle > 0 ? (
                          <>{item.priceSingle}</>
                        ) : (
                          <Tooltip title='Free Item' placement='top'>
                            <span className='badge bg-primary text-white'>
                              Free
                            </span>
                          </Tooltip>
                        )}
                      </td>
                      <td align='center' style={{ verticalAlign: 'middle' }}>
                        <Tooltip title='New Item' placement='top'>
                          <span className='badge bg-primary text-white'>
                            {item?.status}
                          </span>
                        </Tooltip>
                      </td>
                      <td>{item?.views}</td>
                      <td>{item?.sales}</td>
                      <td>
                        <div className='d-flex align-items-center'>
                          <Tooltip title='View Item' placement='top'>
                            <Link to={`/item/${item?.id}`}>
                              <button className='btn btn-sm btn-success'>
                                <i className='fas fa-search-plus text-white'></i>
                              </button>
                            </Link>
                          </Tooltip>

                          <Tooltip title='Edit Item' placement='top'>
                            <Link to={`/user/edit-product/${item?.id}`}>
                              <button className='btn btn-sm btn-primary'>
                                <i className='fas fa-pencil-alt text-white'></i>
                              </button>
                            </Link>
                          </Tooltip>
                          <Tooltip title='Delete Item' placement='top'>
                            {/* <Link to='/delete/item'> */}
                            <button
                              className='btn btn-sm btn-danger'
                              onClick={() => handleClickOpen(item?.id)}
                            >
                              <i className='fas fa-trash-alt text-white'></i>
                            </button>

                            {/* </Link> */}
                          </Tooltip>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby='alert-dialog-title'
                            aria-describedby='alert-dialog-description'
                          >
                            <DialogTitle id='alert-dialog-title'>
                              {"Use Google's location service?"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id='alert-dialog-description'>
                                Are you sure you want to remove This item ?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose} autoFocus>
                                Cancel
                              </Button>
                              <Button onClick={deleteProduct}>Delete</Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='d-flex w-100 align-items-center justify-content-between'>
              <Link to={`/user/add-product`} className='text-center'>
                <button className='btn btn-sm  btn-primary text-white'>
                  + Upload Code
                </button>
              </Link>
              <Link to={`/user/myitems`} className='text-center'>
                <button className='btn btn-sm  btn-primary text-white'>
                  View All Items
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  else return <div>Loading ...</div>;
}

export default Dashboard;
