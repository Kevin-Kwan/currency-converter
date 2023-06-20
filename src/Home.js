import logo from './logo.svg';
import './Home.css';
function Home() {
  console.log(convertUSD(1));
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

export default Home;
