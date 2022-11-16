import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import { Avatar } from '@mui/material';
import Person4SharpIcon from '@mui/icons-material/Person4Sharp';
import { UserContainer, UserMenuBtn, UserMenuItem, UserMenuContainer } from './UserMenu.styled'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';

export const UserMenu = () => {

  const dispatch = useDispatch();
  const user = useSelector(selectUserName);
  const navigate = useNavigate();
  

  const onLogOut = () => {
    dispatch(logOut());
    navigate('/');
    
  }

    return (
      <UserMenuContainer>
        <UserContainer>
          <UserMenuItem >Welcome, <span>{user} !</span> </UserMenuItem>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Person4SharpIcon></Person4SharpIcon>
          </Avatar>
        </UserContainer>
        <UserMenuBtn variant="contained" color="error" size="small" type="button" onClick={onLogOut} >
          Logout<LogoutSharpIcon/>
        </UserMenuBtn>
      </UserMenuContainer>
    )
}
