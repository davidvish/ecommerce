const { createSlice } = require("@reduxjs/toolkit");

const CartSlices = createSlice({
    name:'carts',
    initialState:{
        data:[]
    },
    reducers:{
        addItemToCart(state, action){
            let tempData = state.data;
            tempData.push(action.payload);
            state.data = tempData;

        }
    }
})

export const {addItemToCart} = CartSlices.actions;
export default CartSlices.reducer;
