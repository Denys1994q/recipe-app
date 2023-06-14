import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const RegisterBtn = () => {
    return (
        <>
            <Link to='register'>
                <Button
                    variant='outlined'
                    sx={{ fontSize: "16px" }}>
                    Register
                </Button>
            </Link>
        </>
    );
};

export default RegisterBtn;
