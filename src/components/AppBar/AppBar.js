import { UserMenu } from "components/UserMenu/UserMenu";
import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { Header } from "./AppBar.styled";
import { useSelector } from 'react-redux';



export const AppBar = () => {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <Header>
            <Navigation />

           {isLoggedIn ? <UserMenu /> : <AuthNav />}
            
        </Header>
    )
};

  //{isLoggedIn ? <UserMenu /> : <AuthNav />}

  //<UserMenu />