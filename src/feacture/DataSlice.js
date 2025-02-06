import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./DataThunk";
export const DataSlice=createSlice({
    name:'Data',
    initialState:{
        isLoading:false,
        myData:[]
    },
    reducers:{
    },
    extraReducers:(builder)=>{
       builder.addCase(fetchData.pending,(state)=>{
        state.isLoading=true,
        state.myData=null
       }),
       builder.addCase(fetchData.fulfilled,(state,action)=>{
        state.isLoading=false,
        state.myData=action.payload
       })
    }
})
//export const {}=DataSlice.actions
export default DataSlice.reducer