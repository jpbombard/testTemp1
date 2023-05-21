import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {};

export const fetchSingleStudent = createAsyncThunk('singleStudent', async ({ id })=>{
    try {
        const {data} = await axios.get(`/api/students/${id}`);
        return data;
    } catch (err){
        console.log(err)
    }
})

const singleStudentSlice = createSlice({
    name: 'singleStudent',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchSingleStudent.fulfilled, (state, action)=>{
            return action.payload
        })
    }
})

export default singleStudentSlice.reducer;