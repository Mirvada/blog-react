import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { routes } from 'app/providers/routes';

import 'shared/config/i18n/i18n';

const root = document.getElementById('root');

createRoot(root).render(
  <ThemeProvider>
    <RouterProvider router={routes} />
  </ThemeProvider>,
);
