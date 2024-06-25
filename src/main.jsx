import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Provider from './wrappers/Provider.jsx'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
)
