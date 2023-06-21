import logo from "./logo.svg";
import "./Home.css";
import Dropdown from "./components/Dropdown.jsx";

let baseCurrency = "USD";
let transferCurrency = "GBP";

function Home() {
  return (
    <div className="Home">
      <img src={logo} className="Home-logo" alt="logo" />
      <div className="Home-body">
        <div className="Dropdowns-container">
          <div className="Dropdown">
            <Dropdown onSelect={handleBaseDropdownSelect}></Dropdown>
          </div>
          <div className="Dropdown">
            <Dropdown onSelect={handleConvertDropdownSelect}></Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

// make an api call to convert USD to Chinese Yen
async function convertUSD(value) {
  var requestURL =
    `https://api.exchangerate.host/convert?from=${baseCurrency}&to=${transferCurrency}&amount=` +
    value;
  var response = await fetch(requestURL);
  var responseJSON = await response.json();
  return responseJSON.result;
}

async function handleBaseDropdownSelect(currency) {
  baseCurrency = currency;
  console.log(baseCurrency);
  console.log(convertUSD(4));
}

async function handleConvertDropdownSelect(currency) {
  transferCurrency = currency;
  console.log(transferCurrency);
  console.log(convertUSD(4));
}

export default Home;
