import * as types from "../pages/MyPets/types";
import mock from "../_assets/mock.json";

const INITIAL_STATE = {
  meuPet: mock.data.animals
};

export default function reducer(stateStore = INITIAL_STATE, action) {
  switch (action.type) {
    case types.GET_MY_PETS: {
      return {
        ...stateStore,
        loading: true
      };
    }
    case types.SELECT_CARD: {
      return {
        ...stateStore,
        meuPet: mock.results
      };
    }
    case types.SUCCESS_GET_MY_PETS: {
      return {
        ...stateStore,
        loading: false,
        meuPet: action.payload,
        message: ""
      };
    }
    case types.FAILED_GET_MY_PETS: {
      return {
        ...stateStore,
        loading: false,
        meuPet: [],
        message: "Falha ao carregar os seus pets"
      };
    }

    default:
      return stateStore;
  }
}
