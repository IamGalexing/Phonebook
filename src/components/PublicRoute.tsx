import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router';
import { getIsLoggedIn } from '../redux/auth';

type TChildren = {
  children: JSX.Element | JSX.Element[];
};

const PublicRoute = ({
  children,
  ...routeProps
}: RouteProps & TChildren) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to="/contacts" /> : children}
    </Route>
  );
};

export default PublicRoute;
