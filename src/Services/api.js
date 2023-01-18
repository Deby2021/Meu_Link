import axios from "axios";

export const key = "c8be8f8da0cdc633bba0445f0ae50fa76d42ffb0";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;

//baseURL:https://api-ssl.bitly.com/v4/shorten

//minha chave:c8be8f8da0cdc633bba0445f0ae50fa76d42ffb0
