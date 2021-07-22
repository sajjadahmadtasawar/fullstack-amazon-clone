import React from 'react';
import FlipMove from 'react-flip-move';
import { useStateValue } from '../StateProvider';
import '../styles/checkoutProduct.css';
function CheckoutProduct({ id, image, title, rating, price, hideButton }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img alt={title} src={image} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <i style={{ color: 'orange' }} className="fas fa-star"></i>
            ))}
        </div>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
