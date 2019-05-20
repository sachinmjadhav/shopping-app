import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card';
import './Products.css';
import Loader from '../../assets/loader.gif';
import { Link } from 'react-router-dom';
import { getProducts } from '../../actions/productsAction';
import _ from 'lodash';

const Products = ({products, loading, getProducts, ...props}) => {

  useEffect(() => {
    getProducts();
  }, [getProducts])

  if(loading || _.isEmpty(products)) {
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
        <Link to="/cart" className="cart_link"> <i className="fas fa-shopping-cart"></i> Cart</Link>
      </div>
      <div className="cards">
        {products && products.productsList.map(product => <Card product={product} key={product.id} />)}
      </div>
    </div>
  )
} 

export default connect(state => ({ products: state.products }), { getProducts })(Products);