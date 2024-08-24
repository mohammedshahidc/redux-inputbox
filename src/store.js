import { configureStore } from "@reduxjs/toolkit";
import formslice from "./formslice";
export const store=configureStore({
    reducer:{
        form:formslice
    }
  
})