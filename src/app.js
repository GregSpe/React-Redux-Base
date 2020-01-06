import React, { Component } from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import PostForm from './components/Postform';

import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <h1>hello</h1>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <PostForm />
            <Posts />
          </div>
        </Provider>
      </div>      
    );
  }
}

export default App;
