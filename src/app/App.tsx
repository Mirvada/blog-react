import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router';
import { AppRouter } from './providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { cn } from 'shared/lib/cn';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { userActions } from 'entities/User';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Suspense
              key={location.key}
              fallback={<PageLoader />}
            >
              <AppRouter />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
