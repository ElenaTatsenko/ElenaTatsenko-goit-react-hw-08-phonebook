
import { AuthNavItem } from "./AuthNav.styled";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import HowToRegSharpIcon from '@mui/icons-material/HowToRegSharp';

export const AuthNav = () => {

    return (
        <div>
            <AuthNavItem to="/register">Register<HowToRegSharpIcon/></AuthNavItem>
            <AuthNavItem to="/login">Log In<LoginSharpIcon/></AuthNavItem>
        </div>
    )
};
