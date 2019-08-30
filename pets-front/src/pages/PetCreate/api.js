import axios from "axios";
const API_URL = "https://5d62c49626d62d0014a38bd4.mockapi.io/petcodes";

export function apiCreatePet(pet) {
  const { type, urlImage, size, gender, category, localization, description } = pet;
  
  return axios.post(API_URL + "/createPet", {
    insertDate: new Date().getDate(),
    species: type,
    name: "",
    category: category,
    size: size,
    city: localization,
    gender: gender,
    details: description,
    image: urlImage
  });
}
