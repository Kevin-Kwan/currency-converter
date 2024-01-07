import React from 'react';

import './FormAmount.css';

function FormAmount({ onChange }) {
  const handleSelectChange = (e) => {
    let amountToConvert = e.target.value;
    if (amountToConvert === '' || amountToConvert < 0) {
      amountToConvert = 0;
    }
    onChange(amountToConvert);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onInput={handleSelectChange} onSubmit={handleSubmit}>
      <div className="Currency-form">
        <label>Amount to Convert</label>
        <input
          type="number"
          min="0"
          placeholder="Enter amount to convert"
        ></input>
      </div>
    </form>
  );
}
export default FormAmount;
