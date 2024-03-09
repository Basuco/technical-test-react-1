import { createRoot } from 'react-dom/client';
import App from './App.tsx';
const $app : HTMLElement | null = document.getElementById('app');
if ($app) {
  const root = createRoot($app);
  root.render(<App></App>);
}