import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const fetchSingleCampus = createAsyncThunk('singleCampus', async ({ id })=>{
    try {
        const {data} = await axios.get(`/api/campuses/${id}`);
        return data;
    } catch (err){
        console.log(err)
    }
})

const singleCampusSlice = createSlice({
    name: 'singleCampus',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampus.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default singleCampusSlice.reducer;