export default function initFetchBTC() {}
fetch("https://www.blockchain.com/pt/ticker")
  .then((response) => response.json())
  .then((json) => {
    const btcPreco = document.querySelector(".btc-preco");
    btcPreco.innerText = (100 / json.BRL.sell).toFixed(4);
  })
  .catch((erro) => console.log(Error(erro)));
