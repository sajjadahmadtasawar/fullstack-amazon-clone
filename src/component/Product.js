import React from 'react';
import { useStateValue } from '../StateProvider';
import '../styles/product.css';
import { toast } from 'react-toastify';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast(
      <div className="toast">
        <img className="toast__image" src={image} />
        <p>{title} added to cart.</p>
      </div>
    );
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <i style={{ color: 'orange' }} className="fas fa-star"></i>
            ))}
        </div>
      </div>
      <img src={image} alt={title} />
      <button onClick={addToCart}>Add to basket</button>
    </div>
  );
}

export default Product;
