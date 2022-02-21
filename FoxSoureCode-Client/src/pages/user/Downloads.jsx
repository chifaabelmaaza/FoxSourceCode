import { Alert, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/user.scss';
import productService from '../../services/Product.service';
import { saveAs } from 'file-saver';

function Downloads() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = localStorage.getItem('user');

  useEffect(() => {
    productService
      .userProducts()
      .then((res) => {
        setProducts(res?.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const downloadfile = (file) => {
    if (file) return saveAs(`http://127.0.0.1:3001/uploads/product/${file}`, file);
    else return alert('No file to download');
  };

  if (!loading)
    return (
      <div className='dashbaord'>
        <div className='my-1 p-3 bg-white rounded box-shadow'>
          <h4 className='pb-2 mb2'>My Downloads</h4>
          <div id='transactions' className='collapse show'>
            <div className='table-responsive'>
              <table className='table table-striped table-bordered'>
                <thead>
                  <tr>
                    <th scope='col' width='90%'>
                      Item Name
                    </th>
                    <th scope='col'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((item, key) => (
                      <tr key={key}>
                        <td>{item?.name}</td>
                        <td>
                          <button
                            className='btn btn-primary'
                            onClick={() => downloadfile(item?.mainZip)}
                          >
                            <i className='fas fa-cloud-download-alt text-white'></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
                <tfoot>
                  {products.length === 0 ? (
                    <tr>
                      <th colSpan='5'>
                        <Alert severity='warning' className='my-2'>
                          You have not purchased anything! Just browse in{' '}
                          <Link to='/catalog'>the catalog here!</Link> 🚀🙂
                        </Alert>
                      </th>
                    </tr>
                  ) : null}
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  else return <div>Loading ...</div>;
}

export default Downloads;
