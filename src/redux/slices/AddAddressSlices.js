const {createSlice} = require('@reduxjs/toolkit');

const AddAddressSlice = createSlice({
  name: 'addresses',
  initialState: {
    data: [],
   
  },
  reducers: {
    addAddress(state, action) {
      state.data.push(action.payload);
    },
    removeAddress(state, action){
        state.data.splice(action.payload, 1)
    }
  },
});

export const {addAddress ,removeAddress} = AddAddressSlice.actions;
export default AddAddressSlice.reducer;
