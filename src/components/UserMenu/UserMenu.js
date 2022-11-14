import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logOut} from 'redux/auth/operations';

export const UserMenu = () => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user.name);
  const navigate = useNavigate();
  

  const onLogOut = () => {
    dispatch(logOut());
    navigate('/');
    
  }

    return (
        <div >
      <p >Welcome, <span>{user} !</span> </p>
      <button variant="contained" color="error" size="small" type="button" onClick = {onLogOut} >
        Logout
      </button>
    </div>
    )
}
