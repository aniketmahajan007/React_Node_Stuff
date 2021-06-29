import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: 0
};

export const test = createSlice({
   name: "counttest",
    initialState,
    reducers: {
       incre: (state, action) => {
           console.log('calling');
           state.value +=1;
       },
        decre: (state, action) => {
           state.value -=1;
        }
    }
});

export const {incre, decre} =test.actions;

export default test.reducer;
