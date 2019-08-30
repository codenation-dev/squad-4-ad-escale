import {
    creatPet as createPetAction,
    creatPetSuccess,
    creatPetFailed
} from "./actions";
import { apiCreatePet } from "./api";

export function createPet(pet) {
    
    return (dispatch) => {
        dispatch(createPetAction());
        apiCreatePet(pet)
            .then(data => {
                console.log("retorno api> \n" + data);
                dispatch(creatPetSuccess(data.data.success));
            })
            .catch(() => dispatch(creatPetFailed()));
    };
}
