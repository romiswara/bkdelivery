import { ADD_CART, DELETE_CART } from "../constants/cartConstants"

export const addCart = (data) => async (dispatch) => {
    dispatch({
        type: ADD_CART,
        payload: data
    })
    let cartItem = await localStorage.getItem('cart')
    if(cartItem){
        cartItem = JSON.parse(cartItem)
        cartItem.push(data)
        await localStorage.setItem('cart',JSON.stringify(cartItem))
    } else {
        await localStorage.setItem('cart',JSON.stringify([data]))
    }
}

export const deleteCart = (name) => async (dispatch) => {
    dispatch({
        type: DELETE_CART,
        payload: name
    })
    let cartItem = await localStorage.getItem('cart')
    if(cartItem){
        cartItem = JSON.parse(cartItem)
        let selectedData = cartItem.filter(item => {
            return item.name != name
        })
        if(selectedData){
            await localStorage.setItem('cart',JSON.stringify(selectedData))
        }
    } 
}
