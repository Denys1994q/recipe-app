import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import { recipes } from "./recipesData";

const initialState = {
    recipes: recipes,
    favouriteRecipes: [] as any,
    searchedRecipes: [] as any
};

const RecipesSlice = createSlice({
    name: "recipes",
    initialState,
    reducers: {
        recipes__makeFavourite: (state, action: PayloadAction<string>) => {
            const recipe = recipes.find(item => item.id === action.payload)
            if (recipe) {
                state.favouriteRecipes.push(recipe)
            }
        },
        recipes__removeFromFavourites: (state, action: PayloadAction<string>) => {
            state.favouriteRecipes = state.favouriteRecipes.filter((item: any) => item.id !== action.payload)
        },
        recipes__searchRecipes: (state, action: PayloadAction<string>) => {
            state.searchedRecipes = state.recipes.filter((item: any) => {
                if (item.title.toLowerCase().indexOf(action.payload.toLowerCase()) > -1) {
                    return  item
                } 
            }  )
        },
        recipes__sortRecipes: (state) => {
            state.searchedRecipes.sort((a: any, b: any) => a.timeCooking - b.timeCooking)
        },
        recipes__stopSortingRecipes: (state) => {
            state.searchedRecipes = state.recipes
        },
    },
});

const { actions, reducer } = RecipesSlice;

export default reducer;

export const {recipes__makeFavourite, recipes__removeFromFavourites, recipes__searchRecipes, recipes__sortRecipes, recipes__stopSortingRecipes
} = actions;