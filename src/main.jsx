import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Provider from './wrappers/Provider.jsx'
import { BrowserRouter } from 'react-router-dom';
import Socket from './wrappers/Socket.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Socket>
                <Provider>
                    <App />
                </Provider>
            </Socket>
        </BrowserRouter>
    </React.StrictMode>,
)
