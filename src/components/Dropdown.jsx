import React, { useState, useEffect } from "react";

function Dropdown({ onSelect }) {
  const [symbols, setSymbols] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const symbols = await getSymbols();
      setSymbols(symbols);
    }
    fetchData();
  }, []);

  const handleSelectChange = (e) => {
    onSelect(e.target.value.substring(0, 3));
  };

  return (
    <select onChange={handleSelectChange}>
      {symbols.map((symbol) => (
        <option key={symbol}>{symbol}</option>
      ))}
    </select>
  );
}

async function getSymbols() {
  const requestURL = "https://api.exchangerate.host/symbols";
  const response = await fetch(requestURL);
  const responseJSON = await response.json();
  const list = [];
  for (const key in responseJSON.symbols) {
    if (responseJSON.symbols.hasOwnProperty(key)) {
      list.push(key + ": " + responseJSON.symbols[key].description);
    }
  }
  return list;
}

export default Dropdown;
