import {readFileSync} from 'fs'
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const getInputFile = (basePath: string, filePath: string): string => {
    const inputPath = path.join(dirname(fileURLToPath(basePath)), filePath)
    return readFileSync(inputPath, 'utf-8')
}

export default getInputFile
