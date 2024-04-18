import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer, //this big reducer contains small reducer(ie cartReducer)
    },
});

export default appStore;