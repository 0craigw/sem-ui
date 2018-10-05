import React, { Component } from 'react';
import './App.css';
import { Button } from 'semantic-ui-react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          Semantic UI examples
        </header>
        <div>
          <a href="https://www.npmjs.com/package/semantic-ui-react">semantic-ui-react npm page</a>
        </div>
        <div>
          <Button size='small' color='green'>
              Button
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
