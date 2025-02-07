import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./src/feacture/DataSlice"
export const store=configureStore({
    reducer:DataReducer,
})
