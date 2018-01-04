import axios from "axios";

const api = axios.create({
   baseURL: "https://api.fixer.io"
});

export function getCurrency(symbol) {
   return api.get(`/latest?base=${symbol}`).then(res => {
      // console.log(`I'm from CurrencyGetter.js`);
      // console.log(res.data);
      return res.data;
   });
}

const api2 = axios.create({
   baseURL: "http://localhost:7000"
});

export function listArtists() {
   return api2.get("/artists")
   .then(res => {
      return res.data;
   });
}

export function createArtist(data) {
   return api2.post('/artists', data)
     .then((res) => res.data)
 }
 