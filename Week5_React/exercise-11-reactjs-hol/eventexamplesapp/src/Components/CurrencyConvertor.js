import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: "",
      currency: "",
    };
  }

  handleAmountChange = (event) => {
    this.setState({
      amount: event.target.value,
    });
  };

  handleCurrencyChange = (event) => {
    this.setState({
      currency: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const euro = (parseFloat(this.state.amount) / 90).toFixed(2);

    alert(
      "Converting to Euro Amount is €" + euro
    );

    this.setState({
      currency: "Euro",
    });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "green" }}>
          Currency Convertor!!!
        </h1>

        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>

          <input
            type="number"
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />

          <br />
          <br />

          <label>Currency: </label>

          <input
            type="text"
            value={this.state.currency}
            onChange={this.handleCurrencyChange}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;