import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { register } from '../../actions/auth';

class RegisterForm extends Component {
  renderField = ({ input, label, type, meta: { touched, error } }) => {
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label>{label}</label>
        <input {...input} type={type} />
        {touched && error && (
          <span className='ui pointing red basic label'>{error}</span>
        )}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.register(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
          <h2 className="text-center">Register</h2>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            
            <div className="form-group"> 
            <label>Username </label>
            <Field
              name='username'
              className="form-control"
              type='text'
              component={this.renderField}
              
              validate={[required, minLength3, maxLength15]}
            />
             </div>


            <div className="form-group">   
            <label>Email </label>
            <Field
              name='email'
              className="form-control"
              type='email'
              component={this.renderField}
             
              validate={required}
            /> 
            </div>

            <div className="form-group"> 
            <label>Password </label>
            <Field
              name='password'
              className="form-control"
              type='password'
              component={this.renderField}
           
              validate={required}
            />
            </div>
            
            <div className="form-group">
            <label>Confirm Password </label>
            <Field
              name='password2'
              className="form-control"
              type='password'
              component={this.renderField}
             
              validate={[required, passwordsMatch]}
            />
            </div>

            <div className="form-group">
            <button className='btn btn-primary'>Register</button>
            </div>
          </form>
          <p>
            Already have an account? <Link to='/login'>Login</Link>
          </p>
        </div>
      </div>
    );
  }
}

const required = value => (value ? undefined : 'Required');

const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

const minLength3 = minLength(3);

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

const maxLength15 = maxLength(15);

const passwordsMatch = (value, allValues) =>
  value !== allValues.password ? 'Passwords do not match' : undefined;

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

RegisterForm = connect(
  mapStateToProps,
  { register }
)(RegisterForm);

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);
