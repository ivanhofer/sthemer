import { build } from 'esbuild/lib/main'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const getPath = (file: string) => resolve(__dirname, file)

build({
	entryPoints: ['./package/context.js'],
	bundle: true,
	outfile: getPath(`./package/context.js`),
	platform: 'browser',
	format: 'esm',
	tsconfig: './tsconfig.json',
	allowOverwrite: true,
}).catch(() => process.exit(1))
