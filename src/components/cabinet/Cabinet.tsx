import { useSelector } from "react-redux";
import Cards from "../cards/Cards";
import "./cabinet.sass";

const Cabinet = (): JSX.Element => {
    const favs = useSelector((state: any) => state.recipesSlice.favouriteRecipes);
    return (
        <>
            <h3 className='heading'>Favorite Recipes</h3>
            <Cards recipes={favs} canRemove={true} />
        </>
    );
};

export default Cabinet;
