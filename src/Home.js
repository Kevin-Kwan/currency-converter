import logo from './logo.svg';
import './Home.css';
function Home() {
  console.log(process.env.REACT_APP_TITLE);
  console.log(convertUSD(1));
  console.log(getSymbols());
  return (
    <div className="Home">
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/Home.js</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// make an api call to convert USD to Chinese Yen
async function convertUSD(value) {
  var requestURL =
    'https://api.exchangerate.host/convert?from=USD&to=CNY&amount=' + value;
  var response = await fetch(requestURL);
  var responseJSON = await response.json();
  return responseJSON.result;
}

async function getSymbols() {
  var requestURL = 'https://api.exchangerate.host/symbols';
  var response = await fetch(requestURL);
  var responseJSON = await response.json();
  for (var key in responseJSON.symbols) {
    if (responseJSON.symbols.hasOwnProperty(key)) {
      console.log(key + ' -> ' + responseJSON.symbols[key]);
      // to get country or code, do responseJSON.symbols[key].description or .code
    }
  }
  return responseJSON.symbols;
}

export default Home;
