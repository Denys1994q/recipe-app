import {useState} from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (e: any) => {
        e.preventDefault();
    }

    return (
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
                Register
            </Button>
        </form>
    );
};

export default LoginScreen;
