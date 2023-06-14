import { useState } from "react";
import "./registrationScreen.sass";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { auth_registerUser } from "../store/slices/auth";
import { User } from "../store/slices/auth";
import { useNavigate } from "react-router-dom";

const RegistrationScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e: any) => {
        e.preventDefault();
        const user: User = {
            name,
            email,
            password,
            id: uuidv4(),
        };

        if (!window.localStorage.getItem("users")) {
            window.localStorage.setItem("users", JSON.stringify([]));
            let users: any = JSON.parse(window.localStorage.getItem("users") as any);
            users.push(user);
            window.localStorage.setItem("users", JSON.stringify(users));
            dispatch(auth_registerUser(user));
            navigate("/");
        } else {
            let users: any = JSON.parse(window.localStorage.getItem("users") as any);
            users.push(user);
            window.localStorage.setItem("users", JSON.stringify(users));
            dispatch(auth_registerUser(user));
            navigate("/");
        }
    };

    return (
        <>
            <form
                onSubmit={registerUser}
                className='registerForm'>
                <div className='registerForm__item'>
                    <TextField
                        id='name'
                        label='Name'
                        variant='outlined'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        autoFocus={true}
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
                    disabled={!name || !email || !password}
                    type='submit'
                    variant='outlined'
                    sx={{ fontSize: "16px" }}>
                    Register
                </Button>
            </form>
        </>
    );
};

export default RegistrationScreen;
