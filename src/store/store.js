import { configureStore } from "@reduxjs/toolkit";
import cartslice from './Cartslice'

const store = configureStore({
    reducer:{
cart: cartslice,
    }
})

export default store;