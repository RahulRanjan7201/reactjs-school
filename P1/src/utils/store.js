
import {configureStore} from '@reduxjs/toolkit'
import cardSlice from './cardSlice';
const store = configureStore({
     reducer : {
        cart:cardSlice
     }
})

export default store;