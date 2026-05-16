import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorFallback } from 'widgets/ErrorFallback';
import './app/styles/index.scss';

import 'shared/config/i18n/i18n';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
