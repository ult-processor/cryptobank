import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import img from '../images/logo.jpg'; // gives image path


export class Navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <li className="nav-item">
          <Link to="/Dashboard" className="nav-link text-light">
           Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wallet/btc" className="nav-link text-light">
           Wallet
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/trade-order" className="nav-link text-light">
           Instant order
          </Link>
        </li>
        <li className="nav-item">
          <button onClick={this.props.logout} className="nav-link btn btn-Danger btn-sm text-light">
            Logout
          </button>
        </li>
        
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link text-light">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link text-light">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/services" className="nav-link text-light">
           Services
          </Link>
        </li>
      </ul>
    );
 
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark"
         style={{backgroundColor: "#2B1867"}} >
          <a  href="/" className="navbar-brand text-white"
            style={{fontSize: "40px"}}>
            <img src={img} width="40px%" height="50px" alt="CryptoBank " /> 
          &nbsp;CryptoBank
            </a>
        <div className="container">
          <button
            className="navbar-toggler btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" 
            style={{backgroundColor: "fff"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {isAuthenticated ? authLinks : guestLinks}
           
          </div>
         
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);