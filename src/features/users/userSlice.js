import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users:{
        name:"Vipin",
        surName:"Patel"
    }
}

export const userAuthSlice = createSlice({
    name:"uaerAuth",
    initialState,
    reducers:{

    },
    extraReducers:{

    }
})


export default userAuthSlice.reducer