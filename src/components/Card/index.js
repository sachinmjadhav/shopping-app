import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import './Card.css';

import { addToCart } from '../../actions/cartActions'

const Card = ({ product, addToCart, cart }) => {
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
            { product.availability ? find(cart, (c => c.id === product.id)) ? "Added to cart" : "Add to Cart" : "Not Available"}
          </button>
          <p className="price">Rs. {product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default connect(state => ({ cart: state.cart }), { addToCart })(Card);