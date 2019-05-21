import React from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productsAction';
import FormField from '../../components/FormField';
import { Link } from 'react-router-dom';
import Loader from '../../assets/loader.gif';
import { isEmpty } from 'lodash'
import './Admin.css'

const Admin = ({ products, getProducts }) => {
  React.useEffect(() => {
    getProducts()
  }, [getProducts]);

  if(products.loading || isEmpty(products)) {
    return (
      <div className="loader">
        <img src={Loader} alt="" />
      </div>
    )
  }

  return (
    <div className="admin">
      <div className="admin-header">
        <Link to="/" className="admin-backBtn"> <i className="fas fa-hand-point-left"></i>Products</Link>
        <h2>Admin</h2>
        <span></span>
      </div>
      { 
        products.productsList.map(product => (
          <FormField initialValues={product} form={product.id} key={product.id} />
        ))
      }
    </div>
  )
}

export default connect(state => ({ products: state.products }), { getProducts })(Admin);