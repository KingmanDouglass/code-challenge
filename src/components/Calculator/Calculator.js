import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './App.css';

class App extends Component {
  
  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_CALC' });
}

  state = {
    value: "",
    firstNumber: "",
    secondNumber: "",
    symbol: "",
  }

  componentDidUpdate = () => {
    console.log('componentDidUpdate - state read', this.state);
    if(this.state.value !== "" &&
      this.state.firstNumber !== "" &&
      this.state.secondNumber !== "" &&
      this.state.symbol !== "") {
        console.log('DID THIS WORK????', this.state);
        this.props.dispatch({ type: 'ADD_CALC', payload: this.state })
        this.empty();
    }
  }

  empty = () => {
    this.setState({ value: "" })
    this.setState({ firstNumber: "" })
    this.setState({ secondNumber: "" })
    this.setState({ symbol: "" })
  }

  handleChange = number => event => {
    this.setState({
      value: this.state.value + event.target.value,
  })
  }
  
  handleDecimalChange = number => event => {
    if (this.state.value.indexOf(".") == -1) {
      this.setState({
        value: this.state.value + event.target.value })
    }
  }

  handleSymbolChange = number => event => {
    this.state.firstNumber = this.state.value
    this.setState({value: "" })
    this.state.symbol = event.target.value
  }

  handleZeroChange = number => event => {
    if (this.state.value !== "") {
      this.setState({ 
        value: this.state.value + event.target.value})
    }
  }

  handleZeroChange = number => event => {
    if (this.state.value !== "") {
      this.setState({ 
        value: this.state.value + event.target.value})
    }
  }

  submitEquation = () => {
    this.state.secondNumber = this.state.value
    if (this.state.symbol == "+") {
      this.setState({
        value: Number(this.state.firstNumber) + Number(this.state.secondNumber) 
      })
    } else if (this.state.symbol == "-") {
        this.setState({
          value: Number(this.state.firstNumber) - Number(this.state.secondNumber) 
        })
    } else if (this.state.symbol == "/") {
      this.setState({
        value: Number(this.state.firstNumber) / Number(this.state.secondNumber) 
      })
    } else if (this.state.symbol == "*") {
      this.setState({
        value: Number(this.state.firstNumber) * Number(this.state.secondNumber) 
      })
    }
    this.logState();
    // this.empty();
    // console.log('CLICK EQUALS STATE', this.state);
  }

  logState = () => {
    console.log('CLICK EQUALS STATE', this.state);
  }


render() {
  return (
    <div className="App">
    <div>
      <div>
        <div>{this.state.value}</div>
      </div>
     <div>
      <button onClick={this.handleChange('value')} value="7">7</button>
      <button onClick={this.handleChange('value')} value="8">8</button>
      <button onClick={this.handleChange('value')} value="9">9</button>
      <button onClick={this.handleSymbolChange('symbol')} value="/">/</button>
     </div>
     <div>
      <button onClick={this.handleChange('value')} value="4">4</button>
      <button onClick={this.handleChange('value')} value="5">5</button>
      <button onClick={this.handleChange('value')} value="6">6</button>
      <button onClick={this.handleSymbolChange('symbol')} value="*">*</button>
     </div>
     <div>
      <button onClick={this.handleChange('value')} value="1">1</button>
      <button onClick={this.handleChange('value')} value="2">2</button>
      <button onClick={this.handleChange('value')} value="3">3</button>
      <button onClick={this.handleSymbolChange('symbol')} value="+">+</button>
     </div>
     <div>
      <button onClick={this.handleDecimalChange('value')} value=".">.</button>
      <button onClick={this.handleZeroChange('value')} value="0">0</button>
      <button onClick={this.submitEquation}>=</button>
      <button onClick={this.handleSymbolChange('symbol')} value="-">-</button>
     </div>
     <div>
      <button onClick={this.empty}>Clear</button>
     </div>
   </div>

   <div>
     Entry History
      {this.props.reduxState.calculationsReducer.map((calc) =>
        <div className="bioCard">
            <ul>{calc.firstNumber}{calc.symbol}{calc.secondNumber}={calc.value}</ul>  
        </div>
      )}
   </div>
  </div>
  );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
  });

export default connect(mapReduxStateToProps)(App);
