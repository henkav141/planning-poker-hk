import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import CardCarousel from './components/CardCarousel';

class App extends Component {
  render() {
    return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Planning Poker</h1>
          </header>

          <CardCarousel/>
          <br/>
          <Button bsStyle="success">Chose card</Button>
      </div>
    );
  }
}

export default App;