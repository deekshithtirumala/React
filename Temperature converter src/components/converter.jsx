import React, { Component } from "react";
import "./converter.css";
class Converter extends Component {
  state = {
    inputValue : "",
    result: "Enter something....",
    convertTo: "Ferinheit",//incomming is feriheit
    symbol: " °C",
    resultIcon: " °F"
  };
  calculate =()=>{
    console.log(this.state);
    let value = this.state.inputValue;
    if(value===''){
      value = "Enter Something";
    }
    else if(this.state.convertTo==="Celsius"){
      //entered value is in ferinheit
      value = (value - 32)*(5/9);
      value+=this.state.resultIcon;
    }
    else{
      value = value*(9/5)+32;
      value+=this.state.resultIcon;
    }
    this.setState({ result: value});
  }
  handleInputChange = (event) => {
    this.state.inputValue = event.target.value;
    //console.log("input changed", event.target.value," state", this.state.inputValue);
    this.calculate();
  };
  handleDropdown = (event) =>{
    if(event.target.value==="Celsius"){
      this.setState({symbol: " °F"});
      this.state.resultIcon= " °C";
    }
    else{
      this.setState({symbol: " °C"});
      this.state.resultIcon= " °F";
    }
    this.setState({convertTo : event.target.value}, this.calculate());
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-outer">
          <div className="container-middle">
            <div className="container-heading text-center pb-3">
              <h1 className="title">Temperature Converter</h1>
            </div>
            <div className="container d-flex justify-content-center">
              <input
                id="input"
                className="p-2 m-2"
                type="number"
                placeholder="Enter Value"
                onChange={this.handleInputChange}
              />
              <span>{this.state.symbol}</span>
            </div>
            <div className="container d-flex justify-content-center">
              <select name="type" className="p-2 m-2" id="type-selector" value={this.state.convertTo} onChange={this.handleDropdown}>
                <option value="Ferinheit">Ferinheit</option>
                <option value="Celsius">Celsius</option>
              </select>
            </div>

            <br />
            <span id="result" className="m-3 text-center">
              {this.state.result}
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Converter;
