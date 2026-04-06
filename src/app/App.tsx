import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { cn } from 'shared/lib/cn';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="page-wrapper">
              <Outlet />
            </div>
          </Suspense>
        </div>
      </Suspense>
    </div>
  );
}

export default App;
