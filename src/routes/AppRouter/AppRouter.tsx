import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from 'pages/Auth/Auth';
import { SignIn } from 'pages/Auth/screens/SignIn/SignIn';
import { Main } from 'pages/Main/Main';
import { Home } from 'pages/Main/screens/Home/Home';
import { Product } from 'pages/Main/screens/Product/Product';
import { Shop } from 'pages/Main/screens/Shop/Shop';

import { history } from 'routes/historyHelper/history';
import HistoryRouter from 'routes/HistoryRouter/HistoryRouter';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import {
  HOME_SCREEN,
  PRODUCT_SCREEN,
  SHOP_SCREEN,
  SIGN_IN_SCREEN,
} from 'routes/routes';

export const AppRouter = () => {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route element={<PrivateRoute><Main /></PrivateRoute>}>
          <Route path={HOME_SCREEN} element={<Home />} />
          <Route path={SHOP_SCREEN} element={<Shop />} />
          <Route path={PRODUCT_SCREEN} element={<Product />} />
          <Route path="*" element={<Navigate to={HOME_SCREEN} />} />
        </Route>
        <Route element={<PublicRoute><Auth /></PublicRoute>}>
          <Route path={SIGN_IN_SCREEN} element={<SignIn />} />
          <Route path="*" element={<Navigate to={SIGN_IN_SCREEN} />} />
        </Route>
      </Routes>
    </HistoryRouter>
  );
};
