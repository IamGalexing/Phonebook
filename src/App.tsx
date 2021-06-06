import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import {
  authCurrentUser,
  getIsFetchingCurrentUser,
} from './redux/auth';
import Wrapper from './LayOut/Wrapper';
import Header from './components/Header';
import Loader from './components/Loader';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const App = () => {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCurrentUser());
  }, [dispatch]);

  return (
    <Wrapper>
      {!isFetchingCurrentUser && (
        <>
          <Header />
          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute path="/" exact>
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/login">
                <LoginPage />
              </PublicRoute>
              <PublicRoute path="/register">
                <RegisterPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Wrapper>
  );
};

export default App;
