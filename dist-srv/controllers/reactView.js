import path from 'path';
import { fileURLToPath } from 'url';

export default (req, res) => {
    const build = path.resolve(fileURLToPath(import.meta.url), '../../../dist/index.html');
    res.sendFile(build)
}