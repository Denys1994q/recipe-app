import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const LoginBtn = () => {
    return (
        <>
            <Link to='login'>
                <Button
                    variant='outlined'
                    sx={{ fontSize: "16px" }}>
                    Log in
                </Button>
            </Link>
        </>
    );
};

export default LoginBtn;
