import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { cn } from 'shared/lib/cn';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();
  const location = useLocation();

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <div className="page-wrapper">
            <Suspense key={location.key} fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
