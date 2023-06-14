import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slices/auth'
import recipesSlice from './slices/recipes'

const store = configureStore({
    reducer: {
        authSlice,
        recipesSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export default store;