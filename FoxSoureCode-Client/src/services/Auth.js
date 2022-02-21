import axios from 'axios';
const API_URL = 'http://localhost:3001/api/user';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const login = (data) => {
  return instance
    .post('/login', {
      email: data?.email,
      password: data?.password,
    })
    .then((response) => {
      // return console.log('login : '+ response.data)
      localStorage.setItem('user', response.data?.user?.id)
      return response.data;
    })
    .catch((err) => err);
};
const register = (data) => {
  return instance
    .post('/register', data)
    .then((response) => {
      localStorage.setItem('user', response.data?.user?.id)
      return response.data;
    })
    .catch((err) => err);
};

const logout = () => {
  return instance
    .get('/logout')
    .then((response) => {
      localStorage.removeItem('user')
      return response.data;
    })
    .catch((err) => err);
};

const jwt = () => {
  return instance
    .get('/jwt')
    .then((response) => {
      if(response?.data?.user) {
        localStorage.setItem('user', response.data.user);
      }
      return response.data;
    })
    // .catch((err) => window.location.href = "/login");
    .catch((err) => {
      localStorage.removeItem('user')
      console.log(err)
    });
};

const AuthService = {
  login,
  logout,
  register,
  jwt
};
export default AuthService;
