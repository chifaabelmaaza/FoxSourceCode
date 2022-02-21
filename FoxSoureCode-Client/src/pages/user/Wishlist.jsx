import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import '../../scss/user.scss';
// import TransactionList from './TransactionList';
import whishlistService from '../../services/Whishlist.service';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Tooltip,
} from '@mui/material';


function Wishlist({wishlistprod}) {

  const [open, setOpen] = React.useState(false);
  const [selectedId, setSeectedId] = useState('');

  const handleClickOpen = (id) => {
    setSeectedId(id);
    // console.log(selectedId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeProduct = () => {
    // console.log(selectedId);
    whishlistService
      .removeProductFromWhishlist(selectedId)
      .then((res) => {
        handleClose();
        alert('Product removed successfully');
        setTimeout(() => {
            window.location.reload();
        }, 1000);

      })
      .catch((err) => console.log(err));
  };


  return (
    <div className='wishlist'>
      <div className='my-1 p-3 bg-white rounded box-shadow'>
        <div id='transactions' className='collapse show mt-2'>
          <div className='table-responsive'>
            <table className='table table-striped table-bordered table-hover'>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th width='100'>Price</th>
                  <th width='100'>Actions</th>
                </tr>
              </thead>
              <tbody>
              {wishlistprod && wishlistprod.map((item, key) => (
                  <tr height='58px' key={key} value={item.id}>
                    <td style={{ verticalAlign: 'middle' }}>{item.product.name}</td>
                    <td align='center' style={{ verticalAlign: 'middle' }}>
                    <span
                      className='badge badge-success'
                      style={{ fontSize: '85%' }}
                    >
                      {item.product.priceSingle}
                    </span>
                  </td>
                  <td >  
                    <div className='d-flex align-items-center justify-content-between' >
                      <Tooltip title='View Item' placement='top'>
                        <Link to={'/item/'+item.product.id}>
                          <button className='btn btn-sm btn-warning' style={{ verticalAlign: 'middle' }}>
                            <i className='fas text-white fa-search-plus'></i>
                          </button>
                        </Link>
                      </Tooltip>
                      <Tooltip title='Delete Item' placement='top'>
                          
                          <button
                            className='btn btn-sm btn-danger'
                            onClick={() => handleClickOpen(item?.id)}
                            style={{marginRight:"5px"}}>
                            <i className='fas fa-trash-alt text-white'></i>
                          </button>

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
                            <Button onClick={removeProduct}>
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
    </div>
  );
}

export default Wishlist;
