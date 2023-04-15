const { createSlice } = require("@reduxjs/toolkit");

// Creating Slice with help of Create Slice
// 1. Create Slice
const WishListSlice = createSlice({
    name:'wishList',
    initialState:{
        data:[]
    },
    // Add Product into wishlist
    //2. Create Function and into Reducer
    reducers:{
         addItemToWishList (state, action) {
            let tempData = state.data;
            tempData.push(action.payload);
            state.data = tempData;

        }
    }

});

// AddItem to Wish List to WishListSlice.actions
//3. Export Function into WishlistSlice -> action
export const {addItemToWishList} = WishListSlice.actions;
//4. Export WishListSlice and reducer
export default  WishListSlice.reducer;