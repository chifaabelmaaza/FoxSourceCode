import axios from 'axios';
const API_URL = 'http://localhost:3001/api';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const loggedInUser = () => {
  return instance
    .post('/user/logged-in')
    .then((res) => res.data)
    .catch((err) => err);
};
const getUserById = (id) => {
  return instance
    .get(`/user/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

const updateUSer = (data) => {
  return instance
    .put('/user/', data)
    .then((res) => res)
    .catch((err) => err);
};
const updatePassword = (data) => {
  return instance
    .put('/user/password', data)
    .then((res) => res)
    .catch((err) => err);
};
const updateAvatar = (data) => {
  return instance
    .put('/user/avatar', data)
    .then((res) => res)
    .catch((err) => err);
};

const transactions = () => {
  return instance
    .get('/transaction/userTransactions')
    .then((res) => res?.data)
    .catch((err) => err);
};
const transactionsSuccess = () => {
  return instance
    .get('/transaction/userTransactions/success')
    .then((res) => res?.data)
    .catch((err) => err);
};

const ResetPasswordEmail = (data) => {
  return instance
    .post('/user/reset-password', data)
    .then((res) => res?.data)
    .catch((err) => err);
};

const CheckResetPasswordToken = (data) => {
  return instance
    .post(`/user/reset-password/${data?.id}/${data?.token}`)
    .then((res) => res?.data)
    .catch((err) => err);
};
const ResetPassword = (data) => {
  return instance
    .put(`/user/reset-password/`, data)
    .then((res) => res?.data)
    .catch((err) => err);
};

const userService = {
  loggedInUser,
  getUserById,
  updateUSer,
  updatePassword,
  updateAvatar,
  transactions,
  transactionsSuccess,
  ResetPasswordEmail,
  CheckResetPasswordToken,
  ResetPassword
};
export default userService;
