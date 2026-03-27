import { Suspense } from 'react';
import { Link, Route, Routes } from "react-router";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { cn } from 'shared/lib/cn';
import { useTheme } from 'app/providers/ThemeProvider';
import './styles/index.scss'

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App;