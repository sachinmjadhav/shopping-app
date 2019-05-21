import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { updateItem } from '../../actions/adminActions';
import './FormField.css';

const FormFields = ({ handleSubmit, pristine, submitting, getProducts, initialValues = [], updateItem, ...props }) => {

  const submit = ({ id, name = '', description = '', price = '', availability }) => {
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
      updateItem({ id, name, description, price, availability })
    }
  }

  const renderField = ({ type, label, input, meta: { touched, error } }) => (
    <div className="form-field">
      <label className="form-field-label">{label}</label>
      <div className="field">
        {type === 'textarea' 
          ? <textarea {...input} className="textarea"/>
          : <input {...input} type={type} className="inputField" />
        }
        {touched && error &&
          <span className="error">{error}</span>
        }
      </div>
    </div>
  )

  const renderSelect = ({ label, input, meta: { touched, error }, updateItem, ...props }) => (
    <div className="form-field">
      <label className="form-field-label">{label}</label>
      <select { ...input } className="select">
        {props.children}
      </select>
      {touched && error &&
        <span className="error">{error}</span>
      }
    </div>
  )

  return (
    <form onSubmit={handleSubmit(submit)} className="form">
      <Field label="Product:" name="name" component={renderField} type="text" />
      <Field label="Description:" name="description" component={renderField} type="textarea" />
      <Field label="Price:" name="price" component={renderField} type="number" />
      <Field label="Availability:" name="availability" component={renderSelect}>
        <option name="true" value={true}>Available</option>
        <option name="false" value={false}>Not Available</option>
      </Field>
      <span></span>
      <button className="form_submit" type="submit" disabled={pristine || submitting}>Submit</button>
    </form>
  )
}

const FormField = reduxForm({
  enableReinitialize: true
})(FormFields);

export default connect(null, { updateItem })(FormField);