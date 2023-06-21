import React from 'react';
import { useState, useEffect } from 'react';

function Dropdown() {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const symbols = await getSymbols();
      setSymbols(symbols);
    }
    fetchData();
  }, []);

  return (
    <select onChange={(e) => console.log(e.target.value)}>
      {symbols.map((symbol) => (
        <option key={symbol}>{symbol}</option>
      ))}
    </select>
    // get the selected value when selected
  );
}

async function getSymbols() {
  var requestURL = 'https://api.exchangerate.host/symbols';
  var response = await fetch(requestURL);
  var responseJSON = await response.json();
  const list = [];
  for (var key in responseJSON.symbols) {
    if (responseJSON.symbols.hasOwnProperty(key)) {
      list.push(key + ': ' + responseJSON.symbols[key].description);
    }
  }
  return list;
}

export default Dropdown;
