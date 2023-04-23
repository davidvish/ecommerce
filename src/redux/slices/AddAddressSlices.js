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
      let newData =  state.data.filter(item => {
          return item.id !== action.payload;
        })
        state.data = newData;
    },
    updateAddress (state, action){
      let temp = state.data;
      temp.map(item => {
        if(item.id == action.payload.id){
          item.state = action.payload.state,
          item.city = action.payload.city,
          item.pinCode = action.payload.pinCode,
          item.type = action.payload.type
        }
      })

    }
  },
});

export const {addAddress ,removeAddress ,updateAddress} = AddAddressSlice.actions;
export default AddAddressSlice.reducer;
