import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/productsAction';
import { Link } from 'react-router-dom';
import Loader from '../../assets/loader.gif';
import { isEmpty } from 'lodash'
import FormField from '../../components/FormField';
import AddProductModal from '../../components/AddProductModal';
import './Admin.css'

const Admin = ({ products, getProducts }) => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const closeModal = () => {
    setIsModalShowing(false);
  }
  
  useEffect(() => {
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
        <button className="add_product" onClick={() => setIsModalShowing(true)}>Add Product</button>
      </div>
      { 
        products.productsList.map(product => (
          <FormField initialValues={product} form={product.id} key={product.id} />
        ))
      }
        <AddProductModal className="modal" show={isModalShowing} close={closeModal} />
    </div>
  )
}

export default connect(state => ({ products: state.products }), { getProducts })(Admin);