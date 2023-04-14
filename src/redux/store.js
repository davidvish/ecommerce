import ProductReducer from './slices/ProductSlices'

const {configureStore} = require('@reduxjs/toolkit')

// Storing Data into store from ProductSlices
export const store =  configureStore({
    reducer:{
        product:ProductReducer
    }
})