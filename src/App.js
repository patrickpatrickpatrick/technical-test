import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { userFetchAction } from './actions/users';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchUsers();
  }
  
  render() {

    console.log(this.props)

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(userFetchAction)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
