import React from 'react';
import './Card.css';

const Card = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt=""/>
      <div className="container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="card_footer">
          <button className="add_button">Add to Cart</button>
          <p className="price">Rs. {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;