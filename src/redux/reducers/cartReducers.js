import { ADD_CART, DELETE_CART, GET_CART, UPDATE_CART } from "../constants/cartConstants";

export const cartReducers = (state = {}, action) => {
    switch (action.type) {
        case GET_CART:
            return { state }
        case ADD_CART:
            let data = []
            if (state == null) {
                data.push(action.payload)
            } else {
                data = [...state, action.payload]
            } 
            return data
        case DELETE_CART:
            if(state){
                let result = state.filter(s => {
                    return s.name != action.payload
                })
                return result
            } else {
                return state
            }
        case UPDATE_CART:
            if(state){
                let result = state.filter(s => {
                    if(s.name == action.payload.name){
                        s.qty = action.payload.qty
                    }
                    return s
                })
                return result
            } else {
                return state
            }
        default:
            return state;
    }
}


