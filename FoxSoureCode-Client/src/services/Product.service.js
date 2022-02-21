import axios from 'axios';
const API_URL = 'http://localhost:3001/api';


const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const getCategories = () => {
  return instance
    .get('/category')
    .then((res) => res.data)
    .catch((err) => err);
};
const getSubcategories = () => {
  return instance
    .get('/subcategory')
    .then((res) => res.data)
    .catch((err) => err);
};
const getSubcategoriesByCategory = (id) => {
  return instance
    .get('/subcategory/category/' + id)
    .then((res) => res.data)
    .catch((err) => err);
};
const addProduct = (data) => {
  return instance
    .post(`/product`, data)
    .then((res) => res.data)
    .catch((err) => err);
};

const updateProduct = (data, id) => {
  return instance
    .put('/product/' + id, data)
    .then((res) => res)
    .catch((err) => err);
};
const getProductById = (id) => {
  return instance
    .get('/product/'+id)
    .then((res) => res)
    .catch((err) => err);
};
const getProductsByUser = (id) => {
  return instance
    .get('/product/user/'+id)
    .then((res) => res)
    .catch((err) => err);
};
const deleteProduct = (id) => {
  return instance
    .delete('/product/'+id)
    .then((res) => res)
    .catch((err) => err);
};
const addProductToWishlist = (data) => {
  return instance
    .post('/product/whishlist_prod/', data)
    .then((res) => res)
    .catch((err) => err);
};
const isProductInWishlist = (data) => {
  return instance
    .post('/product/inwhishlist', data)
    .then((res) => res)
    .catch((err) => err);
};
const deleteFromWishlist = (data) => {
  return instance
    .delete('/product/rmwhislistprod', {data: data})
    .then((res) => res)
    .catch((err) => err);
};
const likeProduct = (data) => {
  return instance
    .post('/product/likeprod', data)
    .then((res) => res)
    .catch((err) => err);
};
const checkSales = (data) => {
  return instance
    .post('/sales/checkSales', data)
    .then((res) => res)
    .catch((err) => err);
};
const addComment = (data) => {
  return instance
    .post('/product/comment', data)
    .then((res) => res)
    .catch((err) => err);
};
const addReview = (data) => {
  return instance
    .post('/product/review', data)
    .then((res) => res)
    .catch((err) => err);
};

const loadComments = (data)=> {
  return instance
    .post('/product/allcomments', data)
    .then((res) => res)
    .catch((err) => err);
}
const loadReviews = (data)=> {
  return instance
    .post('/product/allreviews', data)
    .then((res) => res)
    .catch((err) => err);
}
const getNewAdded = () => {
  return instance
    .post('/product/newaddedproduct')
    .then((res) => res.data)
    .catch((err) => err);
};
const getSimilaritems = (data) => {
  return instance
    .post('/product/simillaritems/',data)
    .then((res) => res.data)
    .catch((err) => err);
};
const getPopularItems = () => {
  return instance
    .post('/product/popularproduct')
    .then((res) => res.data)
    .catch((err) => err);
};
const getHotItems = () => {
  return instance
    .post('/product/hotproduct')
    .then((res) => res.data)
    .catch((err) => err);
};
const getTopSelling = () => {
  return instance
    .post('/product/topsellingproduct')
    .then((res) => res.data)
    .catch((err) => err);
};

const getProductsByName = (name) => {
  return instance
    .get('/product/name/'+name)
    .then((res) => res.data)
    .catch((err) => err);
};
const getAllProducts = () => {
  return instance
    .get('/product/')
    .then((res) => res.data)
    .catch((err) => err);
};
const getProductsByCategory = (category) => {
  return instance
    .get('/product/category/'+category)
    .then((res) => res.data)
    .catch((err) => err);
};
const getProductsBySubcategory = (subcategory) => {
  return instance
    .get('/product/subcategory/' + subcategory)
    .then((res) => res.data)
    .catch((err) => err);
};
const getProductsByCategoryName = (category) => {
  return instance
    .post('/product/categoryName/' + category)
    .then((res) => res.data)
    .catch((err) => err);
};

const userProducts = () => {
  return instance
    .get('/sales/sold/')
    .then((res) => res.data)
    .catch((err) => err);
};

const salesSize = () => {
  return instance
    .get('/sales/userSelsSize/')
    .then((res) => res.data)
    .catch((err) => err);
};
const wishlistSize = () => {
  return instance
    .post('/product/wishlistSize/')
    .then((res) => res.data)
    .catch((err) => err);
};
const productnumber = () => {
  return instance
    .post('/product/productnumber')
    .then((res) => res.data)
    .catch((err) => err);
};



const productService = {
  getCategories,
  getSubcategories,
  getSubcategoriesByCategory,
  addProduct,
  updateProduct,
  getProductById,
  getProductsByUser,
  deleteProduct,
  addProductToWishlist,
  isProductInWishlist,
  deleteFromWishlist,
  likeProduct,
  checkSales,
  addComment,
  loadComments,
  addReview,
  loadReviews,
  getNewAdded,
  getSimilaritems,
  getHotItems,
  getPopularItems,
  getTopSelling,
  getProductsByName,
  getAllProducts,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductsByCategoryName,
  userProducts,
  salesSize,
  wishlistSize,
  productnumber,
};
export default productService;
