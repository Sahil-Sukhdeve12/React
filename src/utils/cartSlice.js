import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart", //config name
    initialState:{
        items:[], // giving empty card array
    }, 
    reducers:{ //(object)
        addItem:(state,action)=>{ // this is reducer function
            //mutating the state here (directly modifying it)
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items.length=0; // []
        },
    },
});

export const{addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;