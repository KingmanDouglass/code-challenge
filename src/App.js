import React, { Component } from 'react';

import './App.css';

class App extends Component {

  state = {
    value: "",
    firstNumber: "",
    secondNumber: "",
    symbol: "",
  }

  componentDidUpdate = () => {
    console.log('state', this.state);
    
  }

  empty = () => {
  
  }

  handleChange = event => {
    
  }
  
  handleDecimalChange = event => {
    
  }

  handleSymbolChange = event => {
  
  }

  handleZeroChange = event => {
   
  }

  submitEquation = () => {
   
  }


render() {
  return (
    <div className="App">
    <div>
      <div>
        <div>{this.state.input}</div>
      </div>
     <div>
      <button onClick={this.handleChange('input')} value="2">7</button>
      <button onClick={this.handleChange('input')} value="2">8</button>
      <button onClick={this.handleChange('input')} value="2">9</button>
      <button onClick={this.handleSymbolChange('symbol')} value="/">/</button>
     </div>
     <div>
      <button onClick={this.handleChange('input')} value="4">4</button>
      <button onClick={this.handleChange('input')} value="5">5</button>
      <button onClick={this.handleChange('input')} value="6">6</button>
      <button onClick={this.handleSymbolChange('symbol')} value="*">*</button>
     </div>
     <div>
      <button onClick={this.handleChange('input')} value="1">1</button>
      <button onClick={this.handleChange('input')} value="2">2</button>
      <button onClick={this.handleChange('input')} value="3">3</button>
      <button onClick={this.handleSymbolChange('symbol')} value="+">+</button>
     </div>
     <div>
      <button nClick={this.handleDecimalChange('input')} value="3">.</button>
      <button onClick={this.handleZeroChange('input')} value="0">0</button>
      <button onClick={this.submitEquation}>=</button>
      <button onClick={this.handleSymbolChange('symbol')} value="-">-</button>
     </div>
     <div>
      <button onClick={this.empty}>Clear</button>
     </div>
   </div>
  </div>
  );
  }
}

export default App;
