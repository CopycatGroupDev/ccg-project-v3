import express from 'express';
import path, { dirname } from 'path';
const app = express();

app.use(express.static(path.resolve('./')));
app.get('*', (req, res) => res.sendFile(path.resolve('./index.html')));

app.listen(3000, () => console.log('Server started on port 3000'));