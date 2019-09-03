const genders = {
  FEMALE: "FEMALE",
  MALE: "MALE"
};

const categories = {
  LOST: "LOST",
  FOUND: "FOUND",
  FOSTER: "FOSTER"
};

const species = {
  CAT: "CAT",
  DOG: "DOG",
  FISH: "FISH",
  BIRD: "BIRD",
  RODENT: "RODENT",
  REPTILE: "REPTILE"
};

const sizes = {
  SMALL: "SMALL",
  MEDIUM: "MEDIUM",
  LARGE: "LARGE"
};

export const handlePetGender = gender => {
  switch (gender) {
    case genders.FEMALE:
      return "Fêmea";
    case genders.MALE:
      return "Macho";
    case null:
      return "-";
  }
};

export const handlePetCategory = category => {
  switch (category) {
    case categories.LOST:
      return "Perdido";
    case categories.FOUND:
      return "Encontrado";
    case categories.FOSTER:
      return "Adoção";

    case null:
      return "-";
  }
};

export const handlePetSpecie = specie => {
  switch (specie) {
    case species.CAT:
      return "Gato";
    case species.DOG:
      return "Cachorro";
    case species.FISH:
      return "Peixe";
    case species.BIRD:
      return "Pássaro";
    case species.RODENT:
      return "Roedor";
    case species.REPTILE:
      return "Réptil";
    case null:
      return "-";
  }
};

export const handlePetSize = size => {
  switch (size) {
    case sizes.SMALL:
      return "Pequeno";
    case sizes.MEDIUM:
      return "Médio";
    case sizes.LARGE:
      return "Grande";
    case null:
      return "-";
  }
};

export default {
  handlePetGender,
  handlePetCategory,
  handlePetSpecie,
  handlePetSize
};
