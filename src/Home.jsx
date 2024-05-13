import logo from "./logo.svg";
import "./Home.css";
import Dropdown from "./components/Dropdown.jsx";
import FormAmount from "./components/FormAmount.jsx";
import { useState } from "react";

let baseCurrency = "AED";
let transferCurrency = "AED";
let inputValue = 0;
let convertedValue = 0;

function Home() {
  const [value, setValue] = useState();

  return (
    <div className="Home">
      <img src={logo} className="Home-logo" alt="logo" />
      <div className="Home-body">
        <div>
          <FormAmount onChange={handleFormAmountChange}></FormAmount>
        </div>
        <div className="Dropdowns-container">
          <div className="Dropdown">
            <a>From:</a>
            <Dropdown onSelect={handleBaseDropdownSelect}></Dropdown>
          </div>
          <div className="Dropdown">
            <a>To:</a>
            <Dropdown onSelect={handleConvertDropdownSelect}></Dropdown>
          </div>
        </div>
        <a className="Input">
          {inputValue !== 0 ? `${value} ${transferCurrency}` : ""}
        </a>
      </div>
    </div>
  );
  // make an api call to convert USD to Chinese Yen
  async function convertUSD(value) {
    // so we don't waste an api call on 0's and the same currency conversion
    if (value === 0 || baseCurrency === transferCurrency) {
      convertedValue = value;
    } else {
      var requestURL =
        `https://v6.exchangerate-api.com/v6/347f7ad551cab73486725c31/pair/${baseCurrency}/${transferCurrency}/${value}`
      var response = await fetch(requestURL);
      var responseJSON = await response.json();
      var data = responseJSON.conversion_result;
      convertedValue = data;
    }
    setValue(convertedValue);
  }

  async function handleBaseDropdownSelect(currency) {
    baseCurrency = currency;
    convertUSD(inputValue);
  }

  async function handleConvertDropdownSelect(currency) {
    transferCurrency = currency;
    convertUSD(inputValue);
  }

  async function handleFormAmountChange(value) {
    inputValue = value;
    convertUSD(inputValue);
  }
}

export default Home;
