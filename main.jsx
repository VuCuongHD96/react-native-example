import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import UseEffectExample from './UseEffectExample.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseEffectExample />
  </StrictMode>,
);
