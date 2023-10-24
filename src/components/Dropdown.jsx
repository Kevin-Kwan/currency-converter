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
  const requestURL = "https://v6.exchangerate-api.com/v6/347f7ad551cab73486725c31/codes";
  const response = await fetch(requestURL);
  const responseJSON = await response.json();
  const list = [];
  for (const item of responseJSON.supported_codes) {
    list.push(`${item[0]} : ${item[1]}`);
  }
  return list;
}

export default Dropdown;
