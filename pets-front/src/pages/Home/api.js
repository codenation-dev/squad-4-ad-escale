import axios from "axios";
const API_URL = "https://5d62c49626d62d0014a38bd4.mockapi.io/petcodes/pets";

export function apiPets() {
  return axios.get(API_URL);
}
