import { useSelector } from 'react-redux';
import { NavItem } from "./Navigation.styled";
import { selectIsLoggedIn } from 'redux/auth/selectors';
import CabinSharpIcon from '@mui/icons-material/CabinSharp';
import Groups2SharpIcon from '@mui/icons-material/Groups2Sharp';

export const Navigation = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <nav>
                <NavItem to="/">Home <CabinSharpIcon/></NavItem>
              
                 {isLoggedIn && <NavItem to="/contacts">Contacts <Groups2SharpIcon/></NavItem>}
            </nav>
        </>
    )
};

