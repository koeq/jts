import fetch from "node-fetch";
// sind promises das aufstückeln der async-callback variante?

const asyncFunc = (callback) => {
  setTimeout(() => callback("hello world"), 500);
};

const printResult = (result) => {
  console.log(result);
};

// asyncFunc(printResult);

// promise

const url = "https://api2.binance.com/api/v3/ticker/24hr";

const res = fetch(url);
res
  .then((res) => res.json())
  .then((obj) => obj())
  // .then((result) => console.log(result))
  .catch((err) => console.log({ err }));

// await

const r = await fetch(url);
const result = await r.json();
console.log(result);
