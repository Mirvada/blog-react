import { Suspense } from 'react';
import { useLocation } from 'react-router';
import { AppRouter } from './providers/routes';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { cn } from 'shared/lib/cn';

function App() {
  const location = useLocation();

  return (
    <div className={cn('app')}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Suspense key={location.key} fallback={<PageLoader />}>
              <AppRouter />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
