import { Navigate, useLocation } from 'react-router-dom';

import { localStorageService } from 'utils/localStorageService';
import { HOME_SCREEN } from 'routes/routes';

type PublicRouteType = {
  children: JSX.Element,
};

const PublicRoute = ({ children }: PublicRouteType) => {
  const isAuth = localStorageService.getToken();
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={HOME_SCREEN} state={{ from: location }} replace />;
  }

  return children;
};

export default PublicRoute;
