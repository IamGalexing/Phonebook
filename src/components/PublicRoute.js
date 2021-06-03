import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { getIsLoggedIn } from 'redux/auth';

const PublicRoute = ({ children, ...routeProps }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRoute;
