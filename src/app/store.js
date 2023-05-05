import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "../features/sign-up-users/user-sign-up-Slice";
import signInUserReducer from "../features/sign-in-user/sign-in-user-slice";
const store = configureStore({
    reducer:{
        user:userAuthReducer,
        signInUSer:signInUserReducer
    }
})

export default store;