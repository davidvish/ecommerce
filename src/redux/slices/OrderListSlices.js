const { createSlice } = require("@reduxjs/toolkit");

const OderListSlice =  createSlice({
    name:'order',
    initialState:{
        data:[]
    },
    reducers :{
        AddOrderList (state, action) {
        state.data.push(action.payload)

        }
    }
});

export const {AddOrderList} = OderListSlice.actions;
export default OderListSlice.reducer;