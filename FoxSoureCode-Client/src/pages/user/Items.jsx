import React, { useState, useEffect } from 'react';
import { useRouteMatch, Switch, Route, Link } from 'react-router-dom';
import ItemsMenu from './ItemsMenu';
import '../../scss/user.scss';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from '@mui/material';
import productService from '../../services/Product.service';

function Items() {
  let { path, url } = useRouteMatch();
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
  useEffect(() => {
    const user = localStorage.getItem('user');

    productService
      .getProductsByUser(user)
      .then((res) => {
        // console.log(res.data?.products);
        setProducts(res.data?.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!loading)
    return (
      <div className='my-items'>
        <ItemsMenu url={url} active={active} setActive={setActive} />
        <div id='transactions' className='collapse show mt-2'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered table-hover'>
              <thead>
                <tr>
                  <th width='87'></th>
                  <th width='190'>Item Name</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th width='55'>Views</th>
                  <th>Sales</th>
                  <th style={{ width: '88px' }}>Actions</th>
                </tr>
              </thead>
              <tbody style={{ verticalAlign: 'middle' }}>
                {products.map((item, index) => (
                  <tr height='58px' key={index}>
                    <td >
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
                    <td align='center' >
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
                    <td align='center'>
                      <Tooltip title='New Item' placement='top'>
                        <span className='badge bg-primary text-white'>{item?.status}</span>
                      </Tooltip>
                    </td>
                    <td align='center'>{item?.views}</td>
                    <td align='center'>{item?.sales}</td>
                    <td>
                      <div className='d-flex align-items-center justify-content-between'>
                        <Tooltip title='View Item' placement='top'>
                          <Link to={`/item/${item?.id}`}>
                            <button className='btn btn-sm btn-success' style={{marginRight:"5px"}}>
                              <i className='fas fa-search-plus text-white'></i>
                            </button>
                          </Link>
                        </Tooltip>

                        <Tooltip title='Edit Item' placement='top'>
                          <Link to={`/user/edit-product/${item?.id}`}>
                            <button className='btn btn-sm btn-primary' style={{marginRight:"5px"}}>
                              <i className='fas fa-pencil-alt text-white'></i>
                            </button>
                          </Link>
                        </Tooltip>
                        <Tooltip title='Delete Item' placement='top'>
                          {/* <Link to='/delete/item'> */}
                          <button
                            className='btn btn-sm btn-danger'
                            onClick={() => handleClickOpen(item?.id)}
                            style={{marginRight:"5px"}}>
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
                            <Button onClick={deleteProduct}>
                              Delete
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  else return <div>Loading ...</div>;
}

export default Items;
