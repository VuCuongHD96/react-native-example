import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseContextExample from './useContextExample/UseContextExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseContextExample />
  </StrictMode>,
);
