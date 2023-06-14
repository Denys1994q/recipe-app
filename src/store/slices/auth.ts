import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface User {
    name: string,
    password: string,
    email: string,
    id: string
}

const loggedUserFromStorage: any = JSON.parse(window.localStorage.getItem("user") as any)

const initialState = {
    currentUserId: loggedUserFromStorage,
    loginError: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        auth_registerUser: (state, action: PayloadAction<any>) => {
            window.localStorage.setItem("user", JSON.stringify(action.payload.id));
            state.currentUserId = action.payload.id
        },
        auth_logoutUser: (state) => {
            state.currentUserId = null
        },
        auth_loginUser: (state, action) => {
            const users: any = JSON.parse(window.localStorage.getItem("users") as any)
            const searchedUser = users.find((user: any) => user.email === action.payload.email)
            if (!searchedUser) {
                state.loginError = true 
            } else {
                if (searchedUser.password === action.payload.password) {
                    window.localStorage.setItem("user", JSON.stringify(searchedUser.id));
                    state.currentUserId = searchedUser.id
                    state.loginError = false
                } else {
                    state.currentUserId = null
                    state.loginError = true 
                }
            }
  
        }
    },
});

const { actions, reducer } = AuthSlice;

export default reducer;

export const {auth_registerUser, auth_logoutUser, auth_loginUser
} = actions;