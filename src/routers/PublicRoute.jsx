import propTypes from 'prop-types';
import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';


export const PublicRoute = ({children, restricted = false, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
    children: propTypes.element,
    redirectTo: propTypes.string,
};