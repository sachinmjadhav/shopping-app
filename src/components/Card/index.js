import React from 'react';
import { connect } from 'react-redux';
import './Card.css';

import { addToCart } from '../../actions/cartActions'

const Card = ({ product, addToCart, cartItems }) => {
  return (
    <div className="card">
      <img src={product.image} alt=""/>
      <div className="container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="card_footer">
          <button
            className="add_button" 
            onClick={() => addToCart(product)} 
            disabled={!product.availability}
          >
            { product.availability ? "Add to Cart" : "Not Available"}
          </button>
          <p className="price">Rs. {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({ cartItems: state.cartItems }), { addToCart })(Card);