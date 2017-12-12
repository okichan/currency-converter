import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.fixer.io'
})

export function getCurrency(symbol) {
  return api.get(`/latest?base=${symbol}`)
    .then((res) => {
       res.data
       console.log(`I'm from CurrencyGetter.js`);
       console.log(res.data);
      }
   )
}
