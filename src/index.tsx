import '@/reset.css';
import '@/tailwind.css';
import '@/style.css';

import { render } from 'solid-js/web';
import { Router } from 'solid-app-router';
import App from '@/App';

const dispose: () => void = render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.querySelector('app-main') as HTMLElement,
);

/**
 * Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
 * Learn more: https://www.snowpack.dev/#hot-module-replacement
 *
 * Note: Solid doesn't support state preservation on hot reload as of yet
 */
if (import.meta.env.MODE === 'development') {
  import.meta.hot.accept();
  import.meta.hot.dispose(dispose);
}

if (process.env.NODE_ENV === 'production') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js');
    });
  }
}
