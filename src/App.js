import React, { useEffect } from 'react';
import './styles/header.css';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './component/Checkout';
import Login from './component/Login';
import { auth } from './firebase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from './StateProvider';
import TopCarousel from './component/TopCarousel';
import Payment from './component/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './component/Orders';

function App() {
  const [state, dispatch] = useStateValue();

  const promise = loadStripe(
    'pk_test_51IqQtzCSlNjX2kFM7tumFJ6Oxv1lQUcVV5i2oT6MZYvdWarQbo4mSkmnlXWAFEL80AxMOIQEUvpI4s042jt1oK0i002gjOA2tt'
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/top">
            <Header />
            <TopCarousel />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
