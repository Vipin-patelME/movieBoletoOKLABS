import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../features/users/userSlice";
const store = configureStore({
    reducer:{
        user:userAuthReducer
    }
})

export default store;