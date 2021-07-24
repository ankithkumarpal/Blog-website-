import React from   'react';
import ReactDom from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';

ReactDom.render(
    <React.StrictMode>
        <ContextProvider>
        <App/> 
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
