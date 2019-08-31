import * as types from "../pages/Home/types";

const INITIAL_STATE = {
  pets: [],
  cardSelected: null
};

export default function reducer(stateStore = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SELECT_CARD: {
      return {
        ...stateStore,
        cardSelected: action.payload
      };
    }
    case types.GET_PETS: {
      return {
        ...stateStore,
        loading: true
      };
    }
    case types.SUCCESS_GET_PETS: {
      return {
        ...stateStore,
        loading: false,
        pets: action.payload,
        message: ""
      };
    }
    case types.FAILED_GET_PETS: {
      return {
        ...stateStore,
        loading: false,
        pets: [],
        message: "Falha ao carregar os PETS"
      };
    }
    case types.CHANGE_SEARCH: {
      return {
        ...stateStore,
        searchText: action.payload
      };
    }

    default:
      return stateStore;
  }
}
