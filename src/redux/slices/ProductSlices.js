const { createSlice } = require("@reduxjs/toolkit");

// create initialState with help of slice
const ProductSlices = createSlice({
    name:'products',
    initialState:{
        data: null,
        isLoading:false
    },
   
    reducers:{
         // Add Product Function
        addProduct(state, action) {
            state.data = action.payload;
        }
    }
});
// Performing Action
export const {addProduct} = ProductSlices.actions;
// Storing add Product data into product Slices -> reducer
export default ProductSlices.reducer;