import { useState } from "react";
import "./registrationScreen.sass";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const RegistrationScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = (e: any) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password,
            id: 12356,
        };
        console.log(user);
        // if (!window.localStorage.getItem("users")) {
        //     window.localStorage.setItem("users", JSON.stringify([]));
        //     let users = JSON.parse(window.localStorage.getItem("users"));
        //     users.push(user);
        //     window.localStorage.setItem("users", JSON.stringify(users));
        // } else {
        //     let users = JSON.parse(window.localStorage.getItem("users"));
        //     users.push(user);
        //     window.localStorage.setItem("users", JSON.stringify(users));
        // }
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
