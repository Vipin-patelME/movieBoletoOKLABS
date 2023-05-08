
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/helper";

const initialState = {
    loading:false,
    error:"",
    success:false,
    users:{},
    token:""
}

export const signInAsync = createAsyncThunk(
    "user/signIn",
    async(options)=>{
        //console.log("options----->", options)
        const res = await fetch(`${BASE_URL}/api/auth/local`, options)
        
        const data = await res.json()
        console.log("------>",data)
        const jwtToken = data.jwt;
        localStorage.setItem("userData", JSON.stringify(data.user))
        //console.log(jwtToken)
        localStorage.setItem("jwtToken",jwtToken)
        // console.log(data)
        return data
    }
)

export const signInUserSlice = createSlice({
    name:"sign-In",
    initialState,
    reducers:{
        resetState:(state)=>{
            state.error = ""
            state.loading = false
            state.success=false
        },
        signout: (state)=>{
            localStorage.clear();
            state.loading=false;
            state.error="";
            state.success=false;
            state.users={};
            state.token=""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(signInAsync.pending, (state)=>{
            //console.log("pending", payload)
            state.loading = true
        })
        .addCase(signInAsync.fulfilled, (state, {payload})=>{
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
        .addCase(signInAsync.rejected, (state, {payload})=>{
            //console.log("rejected", payload)

        })
    }
})

export const {resetState, signout} = signInUserSlice.actions

export default signInUserSlice.reducer