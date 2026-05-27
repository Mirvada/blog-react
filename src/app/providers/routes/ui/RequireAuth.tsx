import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { getUserAuthData } from 'entities/User';
import { RouterPath } from 'shared/config/routerConfig/routerConfig';

function RequireAuth({ children }: { children: ReactNode; }) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RouterPath.main}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default RequireAuth;
