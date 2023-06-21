import React from "react";

import "./FormAmount.css";

function FormAmount({ onChange }) {
  const handleSelectChange = (e) => {
    const amountToConvert = e.target.value;
    onChange(amountToConvert);
  };
  return (
    <form onChange={handleSelectChange}>
      <div className="Currency-form">
        <label>Amount to Convert</label>
        <input
          type="number"
          // i give up on regex, this is the best i can do
          pattern="[0-9]"
          placeholder="Enter amount to convert"
        ></input>
      </div>
    </form>
  );
}
export default FormAmount;
