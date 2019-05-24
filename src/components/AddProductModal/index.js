import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { addProduct }  from '../../actions/adminActions';
import uuid from 'uuid/v4';
import './AddProductModal.css';

const Modal = ({handleSubmit, addProduct, ...props}) => {

  const submit = ({ id = uuid(), name = '', description = '', price = '' }) => {
    let error = {};
    let isError = false;
  
    if(isEmpty(name)) {
      error.name = 'Required';
      isError = true;
    }
  
    if(isEmpty(description)) {
      error.description = 'Required';
      isError = true;
    }
  
    if(isEmpty(price)) {
      error.price = 'Required';
      isError = true;
    }
  
    if(isError) {
      throw new SubmissionError(error);
    } else {
      addProduct({ id, name, description, price })
      props.close()
    }
  }

  const renderField = ({ type, label, input, meta: { touched, error } }) => (
    <div className="add-item_form-field">
      <label className="add-item_form-field-label">{label}</label>
      <div className="add-item_field">
        {type === 'textarea' 
          ? <textarea {...input} className="textarea"/>
          : <input {...input} type={type} className="inputField" />
        }
        {touched && error &&
          <span className="add-item_error">{error}</span>
        }
      </div>
    </div>
  )
  
  return (
    <div>
      <div className="modal-wrapper"
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modal-header">
          <h3>Add Product</h3>
          <span className="close-modal-btn" onClick={props.close}>×</span>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit(submit)}>
            <Field label="Product Name:" name="name" component={renderField} type="text" />
            <Field label="Description:" name="description" component={renderField} type="textarea" />
            <Field label="Price:" name="price" component={renderField} type="number" />
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn-continue" onClick={handleSubmit(submit)}>ADD</button>
          <button className="btn-cancel" onClick={props.close}>CLOSE</button>
        </div>
      </div>
    </div>
  )
}

const AddProductModal = reduxForm({
  form: 'addProduct'
})(Modal)

export default connect(null, { addProduct })(AddProductModal)