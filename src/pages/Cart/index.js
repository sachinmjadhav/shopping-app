import React from 'react';
import './Cart.css';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import _ from 'lodash'

const Cart = ({ cart, removeFromCart, ...props }) => {
  return (
    <React.Fragment>
      
      <div className="cart_backBtn_wrapper">
        <Link to="/" className="cart_backBtn"> <i className="fas fa-hand-point-left"></i> Back</Link>
      </div>

      <div className="cart">
        <h2 className="cart_title">Your Order</h2>
        {
          _.isEmpty(cart) 
            ? (<h2 className="cart_no_items">Your cart is empty. <Link to="/" className="cart_add_item">Add Items.</Link></h2>) 
            : (
              <React.Fragment>
                <ul className="cart_list">
                  <li className="cart_item">
                    <span></span>
                    <h3>Item</h3>
                    <h3 className="cart_item_quantity">Quantity</h3>
                    <h3 className="cart_item_price">Price</h3>
                  </li>
                  <hr />
                  {
                  cart.map(item => (
                      <li key={item.id} className="cart_item">
                        <h3 className="cart_item_remove" onClick={() => removeFromCart(item.id)}>
                          <i className="fas fa-times"></i>
                        </h3>
                        <h3 className="cart_item_title">
                          {item.name}
                        </h3>
                        <h3 className="cart_item_quantity">
                          {item.quantity}
                        </h3>
                        <h3 className="cart_item_price">
                          Rs. {item.price * item.quantity}
                        </h3>
                      </li>))
                  }
                  <hr />
                </ul>
                <div className="cart_total">
                  <h2>Total: Rs. {cart.reduce((total, item) => total += (item.quantity * item.price), 0)}</h2>
                </div>
              </React.Fragment>
            )
        }
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

export default connect(mapStateToProps, { removeFromCart })(Cart);