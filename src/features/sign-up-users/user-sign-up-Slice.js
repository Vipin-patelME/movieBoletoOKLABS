import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/helper";

const initialState = {
    loading:false,
    error:"",
    success:false,
    users:{},
    token:""
}

export const signUpAsync = createAsyncThunk(
    "auth/signup",
    async(options)=>{
        const res = await fetch(`${BASE_URL}/api/auth/local/register`,options)
        const data = await res.json()
        return data
        // if (res.ok === true){
        //     //console.log("data", data)
        //     return data.data
        // }
        // else{
        //     //console.log("response not found")
        //     //console.log(data.error.message)
        //     return data.error.message;
        // }
    }
)

export const userAuthSlice = createSlice({
    name:"uaerAuth",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(signUpAsync.pending, (state, {payload})=>{
            //console.log("pending", payload)
            state.loading = true
        })
        .addCase(signUpAsync.fulfilled, (state, {payload})=>{
            state.loading = false
            //console.log("fullfilled", payload)
            if (payload.data === null){
                state.success=false
                state.error = payload.error.message
            }
            else{
                state.success=true
                state.error = ""
                state.users= payload.user
                state.token = payload.jwt
            }
            

        })
        .addCase(signUpAsync.rejected, (state, {payload})=>{
            //console.log("rejected", payload)

        })
    }
})


export default userAuthSlice.reducer