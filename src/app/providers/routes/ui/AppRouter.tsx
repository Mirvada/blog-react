import { memo, useCallback } from 'react';
import { Route, Routes } from 'react-router';
import { AppRouterProps, routeConfig } from 'shared/config/routerConfig/routerConfig';
import RequireAuth from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouterProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
};

export default memo(AppRouter);
