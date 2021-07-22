import React from 'react';
import '../styles/checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from '../StateProvider';
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          alt="banner ad"
          src="https://easyaffiliate.com/wp-content/uploads/2018/03/nba-website-1.jpg"
          className="banner__ad"
        />
        <div>
          <h3>Hello {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              title={item.title}
              image={item.image}
              id={item.id}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
