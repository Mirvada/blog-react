import { Route, Routes } from 'react-router';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  );
};
