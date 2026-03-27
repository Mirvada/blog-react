import { createRoot } from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router';
import ThemeProvider from './theme/ThemeProvider';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
)