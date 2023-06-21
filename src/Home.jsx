import logo from "./logo.svg";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const symbols = await getSymbols();
      setSymbols(symbols);
    }
    fetchData();
  }, []);

  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <ul>
          {symbols.map((symbol) => (
            <li key={symbol}>{symbol}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

// make an api call to convert USD to Chinese Yen
async function convertUSD(value) {
  var requestURL =
    "https://api.exchangerate.host/convert?from=USD&to=CNY&amount=" + value;
  var response = await fetch(requestURL);
  var responseJSON = await response.json();
  return responseJSON.result;
}

async function getSymbols() {
  var requestURL = "https://api.exchangerate.host/symbols";
  var response = await fetch(requestURL);
  var responseJSON = await response.json();
  const list = [];
  for (var key in responseJSON.symbols) {
    if (responseJSON.symbols.hasOwnProperty(key)) {
      list.push(key + ": " + responseJSON.symbols[key].description);
    }
  }
  return list;
}

export default Home;
