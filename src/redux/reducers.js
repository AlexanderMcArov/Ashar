import {combineReducers} from 'redux'
import ProductReducer from './products/reducer'
import CartReducer from './cart/reducer'
import AuthReducer from './auth/reducers'

export default combineReducers({
    ProductReducer,
    CartReducer,
    AuthReducer,
})