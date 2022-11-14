import { useSelector } from 'react-redux';
import { NavItem } from "./Navigation.styled";

export const Navigation = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <>
            <nav>
                <NavItem to="/">Home</NavItem>
              
                 {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
            </nav>
        </>
    )
};

//  {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}


//<NavLink to="/">Home</NavLink>
              
 //               <NavLink to="/contacts">Contacts</NavLink>