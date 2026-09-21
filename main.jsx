import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseMemoExample from './useMemoExample/UseMemoExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseMemoExample />
  </StrictMode>,
);
