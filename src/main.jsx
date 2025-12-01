import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.jsx';
import { AuthContextProvider } from './components/Store/AuthContext.jsx';
import GlobalStyle from './components/GlobalStyle/index.jsx';
createRoot(document.getElementById('root')).render(
    <GlobalStyle>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </GlobalStyle>,
);
