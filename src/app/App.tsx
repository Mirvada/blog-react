import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { cn } from 'shared/lib/cn';
import { useTheme } from './providers/ThemeProvider';
import { Navbar } from 'widgets/Navbar';
import './styles/index.scss'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <button onClick={toggleTheme}>Theme</button>
    </div>
  )
}

export default App;