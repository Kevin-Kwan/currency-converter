import React from 'react';

function FormAmount({ onChange }) {
  const handleSelectChange = (e) => {
    const amountToConvert = e.target.value;
    onChange(amountToConvert);
  };
  return (
    <form onChange={handleSelectChange}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label>Amount to Convert</label>
        <input
          type="number"
          // i give up on regex, this is the best i can do
          pattern="^-?\d+(?:\.\d+)?$"
          placeholder="Enter amount to convert"
        ></input>
      </div>
    </form>
  );
}
export default FormAmount;