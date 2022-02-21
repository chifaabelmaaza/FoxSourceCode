import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../scss/biblio.scss';
import productService from '../services/Product.service';
import Paginator from 'react-hooks-paginator';

export default function Store() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState({});

  // let { path, url } = useRouteMatch();

  const search = () => {
    if (name !== '') {
      productService
        .getProductsByName(name)
        .then((res) => {
          setProducts(res?.products);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(true);
          console.log(err);
        });
    } else {
      getAllProducts();
    }
  };

  const getProductByCategory = () => {
    if (selectedCategory !== '') {
      productService
        .getProductsByCategory(selectedCategory?.id)
        .then((res) => {
          setProducts(res?.products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(true);
        });
    }
  };

  const getProductBySubategory = () => {
    if (selectedSubcategory !== '') {
      productService
        .getProductsBySubcategory(selectedSubcategory?.id)
        .then((res) => {
          setProducts(res?.products);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(true);
        });
    }
  };

  const getAllCategories = () => {
    productService
      .getCategories()
      .then((res) => {
        setCategories(res?.categories);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };
  const getSubcategories = () => {
    productService
      .getSubcategoriesByCategory(selectedCategory?.id)
      .then((res) => {
        setSubcategories(res?.subcategories);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        console.log(err);
      });
  };

  const getAllProducts = () => {
    productService
      .getAllProducts()
      .then((res) => {
        
        setProducts(res?.products);
        setLoading(false);
        setSelectedCategory(null)
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();

    // const url = window.location.href.split('/');

    // if (url[url.length - 2] === 'category') {
    //   const cat = url[url.length - 1].replaceAll('%20', ' ').toLowerCase();

    //   productService
    //     .getProductsByCategoryName(cat)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => console.log(err));
    // }
  }, []);

  useEffect(() => {
    if (selectedCategory !== null) {
      getSubcategories();
      getProductByCategory();
    } else {
      getAllProducts();
      setSelectedCategory(null);
    }
  }, [selectedCategory]);

  useEffect(() => {
    getProductBySubategory();
  }, [selectedSubcategory]);

  const PAGE_LIMIT = 20;
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    setCurrentData(products.slice(offset, offset + PAGE_LIMIT));
  }, [offset, products]);

  
  if (!loading)
    return (
      <div className='GamBibli-page'>
        <div className='bg-light text-dark text-left mt-0  rounded-0 box-shadow textarea shadow-sm p-3 mb-5 bg-body rounded'>
          <div className='overlay rounded-0 box-shadow '></div>
          <div className='container '>
            <h1 className='mb-1 font-weight-light p-15 title'>
              All Source Codes
            </h1>
            <h5 className='mb-1 font-weight-light p-15 description'>
              Browse the best 2152 source codes & enjoy premium support from the
              innovative developers community! We connect the best developers
              with top buyers on a highly secure marketplace SellAnyCode.com!
              Enjoy large selection of high quality Game Templates & Themes &
              Plugins & Websites & Graphics & App Templates & Scripts
            </h5>
          </div>
        </div>
        <div className='container'>
          <div className='row p-15'>
            <div className='col-lg-3 mb-3'>
              <div
                className='card box-shadow'
                style={{ marginBottom: '12px', borderTop: '0px' }}
              >
                <div className='form-inline my-2 my-lg-0'>
                  <div
                    className='input-group mb-0'
                    style={{ width: '100%', height: '32px' }}
                  >
                    <input
                      type='text'
                      className='form-control form-control-sm input-form header-search shadow-sm bg-body rounded'
                      placeholder='Search in 2152 codes...'
                      aria-label='Search in 2152 codes...'
                      minLength='3'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <div className='input-group-append'>
                      <button
                        className='btn header-searchcustombtn btn-sm btn-primary'
                        style={{
                          height: '34px',
                          marginLeft: '-15px',
                          width: '40px',
                          borderRadius: '2px',
                        }}
                        onClick={search}
                        id='button-addon2'
                      >
                        <i
                          className='fas fa-search text-white '
                          style={{ fontSize: '15px'}}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='card box-shadow '
                style={{ marginBottom: '12px', borderTop: '0px' }}
              >
                <div className='card-header font-weight-bold bg-light'>
                  All Categories
                </div>
                <div className='list-group bg-light '>
                  {/* {console.log(categories)} */}
                  <button
                    className='list-group-item list-group-item-action menu-item'
                    onClick={() => setSelectedCategory(null)}
                    key={'k'}
                  >
                    <span
                      className='ml-2 font-weight-bold'
                      style={{ textTransform: 'capitalize' }}
                    >
                      <i
                        className='fas fa-code'
                        style={{ paddingRight: '20px', paddinLeft: '20px' }}
                      />
                      All items
                    </span>
                  </button>
                  {categories.map((item, key) => (
                    <button
                      className='list-group-item list-group-item-action menu-item'
                      onClick={() => setSelectedCategory(item)}
                      key={key}
                    >
                      <span
                        className='ml-2 font-weight-bold'
                        style={{ textTransform: 'capitalize' }}
                      >
                        <i
                          className='fas fa-code'
                          style={{ paddingRight: '20px', paddinLeft: '20px' }}
                        />
                        {item?.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              <div className='card box-shadow mb-3'>
                <div className='card-header font-weight-bold bg-light'>
                  Current Category
                </div>
                <div className='list-group bg-light'>
                  <div
                    className='list-group-item list-group-item-action active'
                    style={{ cursor: 'pointer', textTransform: 'capitalize' }}
                  >
                    <span className='ml-2 font-weight-bold text-white'>
                      <i
                        className='fas fa-code'
                        style={{ paddingRight: '20px', paddinLeft: '20px' }}
                      />
                      {selectedCategory?.name
                        ? selectedCategory?.name
                        : 'All Source Code'}
                    </span>
                  </div>
                  {subcategories.map((item, key) => (
                    <button
                      className='list-group-item list-group-item-action menu-item'
                      onClick={() => setSelectedSubcategory(item)}
                      key={key}
                    >
                      <span className='ml-3'>
                        <i
                          className='fas fa-folder-open ms-3'
                          style={{ paddingRight: '20px', paddinLeft: '20px' }}
                        ></i>
                        {item?.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className='col-lg-9 galerie'>
              <div className='row'>
                {currentData.map((item, key) => (
                  <div className='col-lg-3 col-md-6 mb-4' key={key}>
                    <div className='card h-100 box-shadow'>
                      <Link to={`/item/${item?.id}`}>
                        <div className='relativel'>
                          <img
                            className='card-img-top'
                            src={`http://127.0.0.1:3001/uploads/product/${item?.preview}`}
                            alt={item?.name}
                            style={{ height: '150px' }}
                          />
                        </div>
                      </Link>
                      <div className='card-body text-center'>
                        <Link to={`/item/${item?.id}`}>
                          <h6 className='card-title  text-truncate mb-3'>
                            {item?.name}
                          </h6>
                        </Link>
                      </div>
                      <div className='card-footer d-flex flex-row justify-content-between w-100'>
                        <span
                          className='btn btn-sm float-left pr-0'
                          style={{ fontSize: '15px', paddingLeft: '0px' }}
                        >
                          <i className='fas fa-eye ' aria-hidden='true' />{' '}
                          {item?.views}
                        </span>
                        <button
                          className='btn btn-primary btn-sm float-right font-weight-bold'
                          style={{ fontSize: '15px', padding: '3px 11px' }}
                        >
                          $ {item?.priceSingle}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
               
              
                {/* Pagination */}
              </div>
              <Paginator
                totalRecords={products.length}
                pageLimit={PAGE_LIMIT}
                pageNeighbours={2}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  else return <div>loading ...</div>;
}
