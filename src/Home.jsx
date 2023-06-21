import logo from "./logo.svg";
import "./Home.css";
import Dropdown from "./components/Dropdown.jsx";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <div className="Dropdowns">
          <Dropdown className="Base"></Dropdown>
          <Dropdown className="Converted"></Dropdown>
        </div>
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

export default Home;
