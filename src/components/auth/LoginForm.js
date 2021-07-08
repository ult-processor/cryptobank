import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { login } from '../../actions/auth';

class LoginForm extends Component {
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

  hiddenField = ({ type, meta: { error } }) => {
    return (
      <div className='field'>
        <input type={type} />
        {error && <div className='ui red message'>{error}</div>}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to='/' />;
    }
    return (
      <div className="col-md-6 m-auto">
      <div className="card card-body mt-5">
        <h2 className="text-center">Login</h2>
          <form
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <div className="form-group">

            <Field
              name='username'
              className="form-control"
              type='text'
              component={this.renderField}
              label='Username'
            />
             </div>

             <div className="form-group">
            <Field
              name='password'
              className="form-control"
              type='password'
              component={this.renderField}
              label='Password'
            />
            </div>

             <div className="form-group">
            <Field
              name='non_field_errors'
              type='hidden'
              component={this.hiddenField}
            />
            </div>
            
              <div className="form-group">
            <button className= "btn btn-primary">Login</button>
            </div>
          </form>
          <p>
            Don't have an account? <Link to='/register'>Register</Link>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

LoginForm = connect(
  mapStateToProps,
  { login }
)(LoginForm);

export default reduxForm({
  form: 'loginForm'
})(LoginForm);
