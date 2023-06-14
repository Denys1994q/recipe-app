import "./header.sass";
import { Link } from "react-router-dom";
import LoginBtn from "../btns/LoginBtn";
import RegisterBtn from "../btns/RegisterBtn";

const Header = () => {
    return (
        <header className='header'>
            <div>
                <Link to='/'>Home</Link>
            </div>
            <div className="header__btns">
                <LoginBtn />
                <RegisterBtn />
            </div>
        </header>
    );
};

export default Header;
