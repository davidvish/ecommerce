import ProductReducer from './slices/ProductSlices'
import WishListReducer from './slices/WishListSlices'

const {configureStore} = require('@reduxjs/toolkit')

// Storing Data into store from ProductSlices
export const store =  configureStore({
    reducer:{
        product:ProductReducer,
        wishList:WishListReducer
    }
})