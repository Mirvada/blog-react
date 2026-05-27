import { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { getUserInitiated, userActions } from 'entities/User';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { cn } from 'shared/lib/cn';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AppRouter } from './providers/routes';

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const initiated = useSelector(getUserInitiated);

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
              {initiated && <AppRouter />}
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
