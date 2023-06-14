import "./cards.sass";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { recipes__makeFavourite, recipes__removeFromFavourites } from "../../store/slices/recipes";
import { useState } from "react";

interface CardsProps {
    recipes: any;
    extended?: boolean;
    canRemove?: boolean;
}

const Cards = ({ recipes, extended, canRemove }: CardsProps): JSX.Element => {
    const dispatch = useDispatch();
    const [favCardIndex, setFavCardIndex] = useState<any>([]);

    const addToFav = (id: string) => {
        dispatch(recipes__makeFavourite(id));
        setFavCardIndex((oldArray: any) => [...oldArray, id]);
    };
    const removeFromFav = (id: string) => {
        dispatch(recipes__removeFromFavourites(id));
    };

    const showRecipes = recipes.map((item: any) => (
        <Card
            sx={{ maxWidth: 365, border: favCardIndex.indexOf(item.id) > -1 ? "1px solid yellow" : null }}
            key={item.id}>
            {extended && (
                <Button
                    variant='contained'
                    onClick={() => addToFav(item.id)}
                    sx={{ fontSize: "14px", marginBottom: "1rem" }}>
                    Save recipe
                </Button>
            )}
            {canRemove && (
                <Button
                    variant='contained'
                    onClick={() => removeFromFav(item.id)}
                    color='error'
                    sx={{ fontSize: "14px", marginBottom: "1rem" }}>
                    Remove
                </Button>
            )}
            <CardMedia
                sx={{ height: 240 }}
                image={item.image}
                title='green iguana'
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant='h6'
                    component='div'>
                    {item.timeCooking} minutes
                </Typography>
                <Typography
                    gutterBottom
                    variant='h3'
                    component='div'>
                    {item.title}
                </Typography>
                <Typography
                    variant='h6'
                    color='text.secondary'>
                    {item.description.slice(0, 200) + "..."}
                </Typography>
                <Typography
                    gutterBottom
                    variant='h4'
                    component='div'>
                    Ingredients:
                </Typography>
                <Typography
                    variant='h6'
                    color='text.secondary'>
                    {item.ingredients.map((ingredient: string, index: number) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </Typography>
                <Typography
                    gutterBottom
                    variant='h4'
                    component='div'>
                    Instructions:
                </Typography>
                <Typography
                    variant='h6'
                    color='text.secondary'>
                    {item.instructions.map((instruction: string, index: number) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </Typography>
            </CardContent>
        </Card>
    ));

    return (
        <>
            <ul className='cards'>{showRecipes}</ul>
        </>
    );
};

export default Cards;
