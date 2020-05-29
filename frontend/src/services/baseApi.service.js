import axios from "axios";

let API_URL = 'http://192.168.99.100:3030';

if (process.env.NODE_ENV === "Production") {
  API_URL = 'http://backend-server:3030';
}

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json"
  }
});