import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PropsExample from './PropsExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PropsExample />
  </StrictMode>,
);
