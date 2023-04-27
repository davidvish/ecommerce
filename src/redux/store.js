import AddAddressReducer from './slices/AddAddressSlices'
import CartReducer from './slices/CartSlices'
import OrderReducer from './slices/OrderListSlices'
import ProductReducer from './slices/ProductSlices'
import WishListReducer from './slices/WishListSlices'

const {configureStore} = require('@reduxjs/toolkit')

// Storing Data into store from ProductSlices
export const store =  configureStore({
    reducer:{
        product:ProductReducer,
        wishList:WishListReducer,
        cart:CartReducer,
        address:AddAddressReducer,
        order:OrderReducer
    }
})