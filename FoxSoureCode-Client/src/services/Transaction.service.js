import axios from 'axios';
const API_URL = 'http://localhost:3001/api';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const isOwner = (data) => {
  return instance
    .post('/transaction/isOwner', data)
    .then((res) => res?.data)
    .catch((err) => err);
};

const successTransactions = (data) => {
  return instance
    .post('/transaction/successTransaction', data)
    .then((res) => res?.data)
    .catch((err) => err);
};
const failedTransaction = (data) => {
  return instance
    .post('/transaction/failedTransaction', data)
    .then((res) => res?.data)
    .catch((err) => err);
};
const hasProduct = (data) => {
  return instance
    .post('/transaction/hasProduct', data)
    .then((res) => res?.data)
    .catch((err) => err);
};

const transactionService = {
  isOwner,
  successTransactions,
  failedTransaction,
  hasProduct
};
export default transactionService;
