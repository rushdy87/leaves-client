import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import { AuthContextProvider } from './context/auth-context';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
