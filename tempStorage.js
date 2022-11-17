// COIN TRACKER CHALLENGE

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [moneyAmount, setMoneyAmount] = useState(0);
  const [coinPrice, setCoinPrice] = useState(0);
  const [coinSymbol, setCoinSymbol] = useState("");

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    setMoneyAmount(event.target.value);
  };

  const onSelect = (event) => {
    const price = coins[event.target.selectedIndex].quotes.USD.price;
    const symbol = coins[event.target.selectedIndex].symbol;
    setCoinPrice(price);
    setCoinSymbol(symbol);
  };

  return (
    <div>
      <h1>Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading . . . </strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => (
            <option key={index}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <input onChange={onChange} type="number" placeholder="enter amount"></input>
      <hr />
      <p>
        {moneyAmount === 0 || coinPrice === 0
          ? "Select a coin type and enter USD amount."
          : `You can buy ${moneyAmount / coinPrice} ${coinSymbol} with ${moneyAmount} USD.`}
      </p>
    </div>
  );
}

export default App;
