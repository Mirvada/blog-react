import { Suspense } from 'react';
import { Link, Route, Routes } from "react-router";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { useTheme } from './theme/useTheme';
import { cn } from './shared/lib/cn';
import './styles/index.scss'

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageLazy />} />
          <Route path="/about" element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}