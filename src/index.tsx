import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router/dom";
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { routes } from 'app/providers/routes';

const root = document.getElementById('root');

createRoot(root).render(
  <ThemeProvider>
    <RouterProvider router={routes} />
  </ThemeProvider>
)