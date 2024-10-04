import cors from 'cors';

export const corsOptions = {
    origin: [ 'http://localhost:5173', 'http://127.0.0.1:5173', 'http://localhost', 'http://127.0.0.1' ],
    credentials: true
}
export default cors(corsOptions);