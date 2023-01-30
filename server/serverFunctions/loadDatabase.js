const axios = require('axios')

function getData() {
axios.all ([
    axios.get("https://api.coingecko.com/api/v3/exchange_rates")])
.then(res => {
    const data = res[0].data.rates.usd
    axios.post("http://localhost:8080/", {data : data})
})}

setInterval(getData, 10000)