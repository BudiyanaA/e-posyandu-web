import axios from "axios";

export default axios.create({
  baseURL: "https://e-posyandu-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});