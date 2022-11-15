import { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { QueryClient, QueryClientProvider } from "react-query";
// import {QueryClient}

function App() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState([]);
  const [money, setMoney] = useState("");
  const [selected, setSelected] = useState("");

  const coinApi = async () => {
    try {
      await axios.get("https://api.coinpaprika.com/v1/tickers").then((coin) => {
        setCoin(coin.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
    console.log("나와라", selected);
  };

  const handelMoney = (e) => {
    setMoney(e.target.value);
    console.log("나와라2", money);
  };

  useEffect(() => {
    // async () => {};
    //  fetch("https://api.coinpaprika.com/v1/tickers")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCoin(data);
    //     setLoading(data);
    // });
    coinApi();
  }, []);

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       staleTime: Infinity,
  //     },
  //   },
  // });

  return (
    <>
      <h1>The Coins! {loading ? "" : `(${coin.length})`}</h1>
      {loading ? (
        "loading..."
      ) : (
        <>
          <br />
          <select onChange={handleSelect}>
            {coin.map((item) => (
              <option value={item.quotes.USD.ath_price}>
                {item.name} ({item.symbol}) : ${item.quotes.USD.ath_price} USD
              </option>
              // {item.quotes.USD.ath_price}
              // <input placeholder="$20" />
              // <span>총 {coin.quotes.USD.ath_price}</span>
            ))}
          </select>
          <br />
          <br />
          <form>
            내가 가지고 있는 가격: <input onChange={handelMoney}></input>
            <br />살 수 있는 갯수: {Math.floor(money / selected)}
          </form>

          {console.log(typeof selected)}
          {console.log(money)}
        </>
      )}
    </>
    // <QueryClientProvider client={queryClient}>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/edit" element={<Edit />} />
    //     </Routes>
    //   </BrowserRouter>
    // </QueryClientProvider>
  );
}

export default App;
