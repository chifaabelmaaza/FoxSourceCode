import React, { useState, useEffect, useContext } from 'react';
import './App.scss';
// import "bootstrap/dist/css/bootstrap.min.css";
import './scss/costum.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navigation from './component/Navigation';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/user/User';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPasswrod from './pages/ResetPassword';
import ResetPasswrodConfirm from './pages/ResetPasswordConfirm';
import Newpasswordlogin from './pages/NewLoginPass';
import Store from './pages/Store';
import AppGmBiblio from './pages/BiblioAppGames';
import ScrCodeBiblio from './pages/BiblioScrCod';
import Upload from './pages/Upload';
import DetailProduct from './pages/user/DetailProduct';
import Footer from './component/Footer';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import DeveloperTermsConditions from './pages/TermsConditions';
import BuyerTermsConditions from './pages/BuyerTermsConditions';
// import ThemesBiblio from './pages/Themes';
// import PluginsBiblio from './pages/Plugins';
// import GamesBiblio from './pages/Games';
// import GraphicBiblio from './pages/Graphics';
// import AppBiblio from './pages/AppTemplates';

import SellBuyIos from './pages/SellBuyIos';
import SellBuyAndroid from './pages/SellBuyAndroid';
import SellWork from './pages/SellWork';

import Profile from './pages/Profile';
import BuildAnApp from './pages/BuildAnApp';
import Dmca from './pages/Dmca';
import Gurantee from './pages/Gurantee';
import { LoginContext } from './LoginContext';
import axios from 'axios';

import Auth from './services/Auth';

const LoginContainer = () => (
  <div>
    <Route path='/login' render={() => <Login />} />
    <Route path='/register' render={() => <Register />} />
    <Route path='/resetpassword' render={() => <ResetPasswrod />} />
    <Route
      path='/resetpasswordconfirm'
      render={() => <ResetPasswrodConfirm />}
    />
    <Route path='/reset-password/:id/:token' render={() => <Newpasswordlogin />} />
    {/* <Route exact path='/' render={() => <Redirect to='/login' />} /> */}
  </div>
);

const DefaultContainer = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    const interval = setInterval(() => {
      Auth.jwt()
        .then((res) => {
          if (res?.data?.user?.id) {
            setLoggedIn(true);
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          clearInterval(interval);
        });
    }, 24000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/home' component={Home} />
      <Route path='/user' render={() => (loggedIn ? <User /> : <Login />)} />

      <Route path='/store' component={Store} />
      {/* <Route path='/store/category/:id' component={Store} /> */}
      {/* <Route path='/store/subcategory/:id' component={Store} /> */}
      {/* Galeries Navigation */}
      {/* <Route path='/apgmbiblio' component={AppGmBiblio} />
      <Route path='/scriptcode' component={ScrCodeBiblio} />
      <Route path='/themes' component={ThemesBiblio} />
      <Route path='/plugins' component={PluginsBiblio} />
      <Route path='/themes' component={ThemesBiblio} />
      <Route path='/gametemplates' component={GamesBiblio} />
      <Route path='/graphics' component={GraphicBiblio} />
      <Route path='/apptemplates' component={AppBiblio} /> */}

      <Route
        path='/sell-your-code'
        render={() => (loggedIn ? <Upload /> : <Login />)}
      />
      <Route path='/item/:id' component={DetailProduct} />
      <Route path='/about' component={About} />
      <Route path='/profile/:id' component={Profile} />
      <Route path='/privacy-policy' component={PrivacyPolicy} />
      <Route
        path='/developer-terms-conditions'
        component={DeveloperTermsConditions}
      />
      <Route path='/buyer-terms-conditions' component={BuyerTermsConditions} />

      <Route path='/build-an-app' component={BuildAnApp} />
      <Route path='/sell-buy-ios-apps' component={SellBuyIos} />
      <Route path='/sell-buy-android-apps' component={SellBuyAndroid} />
      <Route path='/sell-your-work' component={SellWork} />
      <Route path='/dmca' component={Dmca} />
      <Route path='/money-back-guarantee' component={Gurantee} />
      {/* <Route path='/*' render={() => <Redirect to='/' />} /> */}
      <Footer />
    </div>
  );
};

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [API_URL, setAPI_URL] = useState('http://localhost:3001/api');
  // const [user, setUser] = useState(null);

  const toggleLogin = () => {
    setLoggedIn((prevStat) => !prevStat);
  };

  // const updateUser = (user) => {
  //   setUser(user);
  // };

  const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
  });

  useEffect(() => {
    return instance
      .get('/user/jwt')
      .then((response) => {
        if (response?.data?.user) {
          setLoggedIn(true);
        }

        instance
          .post('/user/logged-in')
          .then((res) => {
            // console.log(res.data.user);
            // setUser(res.data.user)}
            if (res?.data?.user) {
              localStorage.setItem('user', res.data.user.id);
            }
          })
          .catch((err) => err);
      })
      .catch((err) => {
        setLoggedIn(false);
      });
  }, []);

  return (
    <PayPalScriptProvider
      options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <LoginContext.Provider
        value={{ loggedIn, setLoggedIn, toggleLogin, API_URL }}
      >
        <Router>
          <div className='App'>
            <Switch>
              <Route
                exact
                path='/(login)'
                render={() =>
                  loggedIn ? <Redirect to='/' /> : <LoginContainer />
                }
              />
              <Route
                exact
                path='/(register)'
                render={() =>
                  loggedIn ? <Redirect to='/' /> : <LoginContainer />
                }
              />
              <Route
                exact
                path='/(resetpassword)'
                render={() =>
                  loggedIn ? <Redirect to='/' /> : <LoginContainer />
                }
              />
              <Route
                exact
                path='/(resetpasswordconfirm)'
                render={() =>
                  loggedIn ? <Redirect to='/' /> : <LoginContainer />
                }
              />
              <Route
                exact
                path='/(reset-password)/:id/:token'
                render={() =>
                  loggedIn ? <Redirect to='/' /> : <LoginContainer />
                }
              />
              <Route render={() => <DefaultContainer loggedIn={loggedIn} />} />
            </Switch>
          </div>
        </Router>
      </LoginContext.Provider>
    </PayPalScriptProvider>
  );
}

export default App;
