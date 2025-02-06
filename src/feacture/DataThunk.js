import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData=createAsyncThunk('fetchData',async (username)=>{
    try {
        const response=await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
        if(!response.ok)
            throw new Error("server not responding");

        const data=await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("Server side Error 404",error)
        return error;
    }
})