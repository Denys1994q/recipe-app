import { useSelector, useDispatch } from "react-redux";
import Cards from "../components/cards/Cards";
import TextField from "@mui/material/TextField";
import { recipes__searchRecipes, recipes__sortRecipes, recipes__stopSortingRecipes } from "../store/slices/recipes";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Home = () => {
    const dispatch = useDispatch();
    const currentUserId = useSelector((state: any) => state.authSlice.currentUserId);
    const searchedRecipes = useSelector((state: any) => state.recipesSlice.searchedRecipes);
    const [searchValue, setSearchValue] = useState("");

    const searchRecipes = (e: any) => {
        setSearchValue(e.target.value);
    };

    useEffect(() => {
        dispatch(recipes__searchRecipes(searchValue));
    }, [searchValue]);

    const sortRecipes = () => {
        dispatch(recipes__sortRecipes());
    };

    const stopSortRecipes = () => {
        setSearchValue("");
        dispatch(recipes__stopSortingRecipes());
    };

    return (
        <>
            <TextField
                value={searchValue}
                id='name'
                label='Enter keywords for a search'
                variant='outlined'
                onChange={searchRecipes}
                autoFocus={true}
                sx={{
                    ".MuiInputLabel-root": { fontSize: "14px" },
                    ".MuiInputBase-input": { fontSize: "14px" },
                    ".Mui-focused": { fontSize: "14px" },
                    width: "30rem",
                    marginBottom: "2rem",
                }}
            />
            <Button
                variant='outlined'
                color='success'
                onClick={sortRecipes}
                sx={{ fontSize: "12px", marginLeft: "2rem" }}>
                Recipes faster to cook
            </Button>
            <Button
                variant='outlined'
                color='error'
                onClick={stopSortRecipes}
                sx={{ fontSize: "12px", marginLeft: "2rem" }}>
                Unsort
            </Button>

            {currentUserId ? (
                <Cards
                    extended={true}
                    recipes={searchedRecipes}
                />
            ) : (
                <Cards recipes={searchedRecipes} />
            )}
        </>
    );
};

export default Home;
