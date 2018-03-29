import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './sass/styles.css';
import { sayHelloThunk } from './actions/sayHello';

const App = props => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To make sure that Redux and redux-thunk work press the button below and
      wait 1.5s
    </p>
    <p className="App-intro">
      Try switch routes to make sure that react-router works correctly
    </p>
    <button onClick={props.sayHello}>Say Hello</button>
    <p className="hello">{props.hello}</p>
  </div>
);

App.propTypes = {
  hello: PropTypes.string,
  sayHello: PropTypes.func,
};

App.defaultProps = {
  hello: 'Hello from Redux!!',
  sayHello: () => undefined,
};

function mapStateToProps(state) {
  return {
    hello: state.helloReducer.text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sayHello: () => dispatch(sayHelloThunk()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
