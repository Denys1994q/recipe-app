import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { auth_loginUser } from "../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";

const LoginScreen = () => {
    const currentUserId = useSelector((state: any) => state.authSlice.currentUserId);
    const loginError = useSelector((state: any) => state.authSlice.loginError);
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e: any) => {
        e.preventDefault();
        const user = {
            email,
            password,
        };
        dispatch(auth_loginUser(user));
    };

    return (
        <>
            <form
                onSubmit={login}
                className='registerForm'>
                <div className='registerForm__item'>
                    <TextField
                        id='email'
                        label='Email'
                        variant='outlined'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        sx={{
                            ".MuiInputLabel-root": { fontSize: "14px" },
                            ".MuiInputBase-input": { fontSize: "14px" },
                            ".Mui-focused": { fontSize: "14px" },
                            width: "30rem",
                        }}
                    />
                </div>
                <div className='registerForm__item'>
                    <TextField
                        id='password'
                        label='Password'
                        variant='outlined'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        sx={{
                            ".MuiInputLabel-root": { fontSize: "14px" },
                            ".MuiInputBase-input": { fontSize: "14px" },
                            ".Mui-focused": { fontSize: "14px" },
                            width: "30rem",
                        }}
                    />
                </div>
                <Button
                    disabled={!email || !password}
                    type='submit'
                    variant='outlined'
                    sx={{ fontSize: "16px" }}>
                    Login
                </Button>
            </form>
            {currentUserId ? (
                <h4>
                    Авторизація успішна. Перейти на - <Link to='/'>Головна сторінка</Link>{" "}
                </h4>
            ) : null}
            {loginError && <h4>Помилка, неправильний емейл або пароль</h4>}
        </>
    );
};

export default LoginScreen;
