import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers: {
        // state is inital state , action is data which is coming in 
        addItem: (state, action) => {
            console.log(state, action)
            state.items.push(action.payload)
        },
        removeItem : (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items =[]
        }
    }
})
export const {addItem, clearCart, removeItem} = cartSlice.actions;
export default cartSlice.reducer;