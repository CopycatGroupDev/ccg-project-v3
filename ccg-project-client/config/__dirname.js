import path, { dirname } from "path";
import { fileURLToPath } from "url";

export default path.resolve(dirname(fileURLToPath(import.meta.url)), '../..')