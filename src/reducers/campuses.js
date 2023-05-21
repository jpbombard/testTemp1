import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = [];

export const fetchCampuses = createAsyncThunk('campuses', async ()=>{
    try {
        const {data} = await axios.get('/api/campuses');
        return data;
    } catch (err){
        console.log(err)
    }
})



const campusSlice = createSlice({
    name: 'campuses',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCampuses.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})


export default campusSlice.reducer;