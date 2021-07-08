import './App.css';
import Navbar from './components/Navbar';
import React, { Component } from 'react';
import Footer from './components/Footer'

import Home from './components/pages/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Services from './components/pages/Services';
import dashboard from './components/pages/Dashboard';
// import SignUp from './components/pages/SignUp';



import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
 import PrivateRoute from './components/common/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import Trade_order from './components/pages/Trade_order';




class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/dashboard' component={dashboard} />
        <Route exact path='/register' component={RegisterForm} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/trade-order' component={Trade_order} />
      </Switch>
      <Footer />
    </Router>
    </Provider>
    );
  }
}
export default App;
