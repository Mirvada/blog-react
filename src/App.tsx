import { Suspense } from 'react';
import { Link, Route, Routes } from "react-router";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";
import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import './index.scss'

export function App() {
  return (
    <div className="app">
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