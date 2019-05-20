import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import Loader from '../../assets/loader.gif';
import { Link } from 'react-router-dom';
import { getProducts } from '../../actions/productsAction';
import { isEmpty } from 'lodash';
import './Products.css';

const Products = ({products, loading, getProducts, cart, ...props}) => {

  useEffect(() => {
    getProducts();
  }, [getProducts])

  if(loading || isEmpty(products)) {
    return (
      <div className="loader">
        <img src={Loader} alt="" />
      </div>
    )
  }
  
  return (
    <div className="products">
      <div className="products_header">
        <h2 className="products_title">Products</h2>
        <Link to="/cart" className="cart_link">
          <i className="fas fa-shopping-cart">
            <span className="cart_quantity">
              {cart.length > 0 ? cart.length : null}
            </span>
          </i>
            Cart
        </Link>
      </div>
      <div className="cards">
        {products && products.productsList.map(product => <Card product={product} key={product.id} />)}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
  cart: state.cart
})

export default connect(mapStateToProps, { getProducts })(Products);