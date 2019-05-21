import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, incrementItemCount, decrementItemCount } from '../../actions/cartActions';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash'
import './Cart.css';

const Cart = ({ cart, removeFromCart, incrementItemCount, decrementItemCount, ...props }) => {
  return (
    <React.Fragment>
      
      <div className="cart_backBtn_wrapper"> 
        <Link to="/" className="cart_backBtn"> <i className="fas fa-hand-point-left"></i> Back</Link>
      </div>

      <div className="cart">
        <h2 className="cart_title">Your Order</h2>
        {
          isEmpty(cart) 
            ? (<h2 className="cart_no_items">Your cart is empty. <Link to="/" className="cart_add_item">Add Items.</Link></h2>) 
            : (
              <React.Fragment>
                <ul className="cart_list">
                  <li className="cart_item">
                    <h3>Item</h3>
                    <h3>Quantity</h3>
                    <h3>Price</h3>
                    <span></span>
                  </li>
                  <hr />
                  {
                  cart.map(item => (
                      <li key={item.id} className="cart_item">
                        <h3 className="cart_item_title">
                          {item.name}
                        </h3>
                        <div className="cart_item_quantity">
                          <button className="cart_item_button" disabled={item.quantity === 1} onClick={() => decrementItemCount(item.id)}>
                            <i className="fa fa-minus cart_item_decrement"></i>
                          </button>
                          <h3>
                            {item.quantity}
                          </h3>
                          <button className="cart_item_button"  onClick={() => incrementItemCount(item.id)}>
                            <i className="fa fa-plus cart_item_increment"></i>
                          </button>
                        </div>
                        <h3 className="cart_item_price">
                          Rs. {item.price * item.quantity}
                        </h3>
                        <h3 className="cart_item_remove" onClick={() => removeFromCart(item.id)}>
                          <i className="fas fa-times"></i>
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

export default connect(mapStateToProps, { removeFromCart, incrementItemCount, decrementItemCount })(Cart);