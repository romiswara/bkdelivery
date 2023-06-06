import { ADD_CART } from "../constants/cartConstants"

export const addCart = (data) => async (dispatch) => {

    dispatch({
        type: ADD_CART,
        payload: data
    })

}
