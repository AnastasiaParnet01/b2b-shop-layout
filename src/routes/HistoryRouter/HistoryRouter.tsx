import type { BrowserHistory } from 'history';
import React, { useLayoutEffect, ReactNode } from 'react';
import { Router } from 'react-router-dom';

type HistoryPropsType = {
  children?: ReactNode;
  basename?: string;
  history: BrowserHistory;
};

const HistoryRouter = ({ children, basename, history }: HistoryPropsType) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      location={state.location}
      navigator={history}
      navigationType={state.action}
      basename={basename}
    >
      {children}
    </Router>
  );
};

HistoryRouter.defaultProps = {
  children: <div />,
  basename: '',
};

export default HistoryRouter;
