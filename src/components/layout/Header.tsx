import "./header.sass";
import { Link } from "react-router-dom";
import LoginBtn from "../btns/LoginBtn";
import RegisterBtn from "../btns/RegisterBtn";
import { useSelector, useDispatch } from "react-redux";
import { auth_logoutUser } from "../../store/slices/auth";
import Button from "@mui/material/Button";

const Header = () => {
    const dispatch = useDispatch();
    const currentUserId = useSelector((state: any) => state.authSlice.currentUserId);

    const logout = () => {
        dispatch(auth_logoutUser());
        window.localStorage.removeItem("user");
    };

    return (
        <header className='header'>
            <div>
                <Link to='/'>Home</Link>
            </div>
            {currentUserId ? (
                <div className='authBtns'>
                    <Button
                        onClick={logout}
                        variant='outlined'
                        sx={{ fontSize: "16px" }}>
                        LogOut
                    </Button>
                    <Link to='cabinet'>
                        <Button
                            variant='contained'
                            color='secondary'
                            sx={{ fontSize: "16px" }}>
                            My cabinet
                        </Button>
                    </Link>
                </div>
            ) : (
                <div className='header__btns'>
                    <LoginBtn />
                    <RegisterBtn />
                </div>
            )}
        </header>
    );
};

export default Header;
