import axios from "axios";
const API_URL = "https://5d62c49626d62d0014a38bd4.mockapi.io/petcodes";

export function apiRegister(parameters) {
  return axios.get(API_URL + "/register");
}
