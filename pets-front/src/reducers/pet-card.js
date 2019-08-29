import * as types from '../pages/Home/types'
import mock from '../_assets/mock.json'

const INITIAL_STATE = {
  pets: mock.results,
  cardSelected: null
};


export default function reducer(stateStore = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SELECT_CARD: {
            return {
                ...stateStore,
                cardSelected: action.payload
            }
        }
  
        default:
            return stateStore;

        
    }

}

