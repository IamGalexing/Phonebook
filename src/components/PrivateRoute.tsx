import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { getIsLoggedIn } from '../redux/auth';

interface PrivateRouteProps extends RouteProps {
  children: JSX.Element | JSX.Element[];
  redirectTo?: string;
}

const PrivateRoute = ({
  children,
  redirectTo = '/',
  ...routeProps
}: PrivateRouteProps) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;
