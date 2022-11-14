import propTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PrivateRoute.propTypes = {
    children: propTypes.element,
    redirectTo: propTypes.string,
};