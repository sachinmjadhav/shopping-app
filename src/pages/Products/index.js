import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import './Products.css';

const Products = props => {
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    fetch('https://5cdd205ab22718001417c389.mockapi.io/api/products')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      });
  }, [])
  
  return (
    <div className="products">
      <h2 className="products_title">Products</h2>
      <div className="cards">
        {products.map(product => <Card product={product} key={product.id} />)}
      </div>
    </div>
  )
}

export default Products;