import { ADD_CART, GET_CART } from "../constants/cartConstants";

export const cartReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_CART:
            return { state }
        case ADD_CART:
            console.log("addpayload", action.payload)
            console.log("addstate", state)
            let data = []
            if (state == null) {
                data.push(action.payload)
            } else {
                data = [...state,action.payload]
            }
            return data
        default:
            return state;
    }
}


