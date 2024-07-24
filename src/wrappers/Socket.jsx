import { createContext } from 'react';
import { io } from 'socket.io-client';
export const socket = io(`http://${window.location.hostname}`, { withCredentials: true });
export const SocketContext = createContext(null);

export default function ({ children }) {
    return <SocketContext.Provider value={{ socket }}>
        {children}
    </SocketContext.Provider>
}