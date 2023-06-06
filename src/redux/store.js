import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userLoginReducer } from './reducers/userReducers'
import { cartReducers } from './reducers/cartReducers'


const reducer = combineReducers({
    cart:cartReducers
})
const middleware = [thunk]
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const cartFromStorage = localStorage.getItem('kerangjang') ? JSON.parse(localStorage.getItem('kerangjang')) : null

const initialState = {
    cart: cartFromStorage,
}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;