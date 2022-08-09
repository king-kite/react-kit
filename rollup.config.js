import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

import uglify from '@lopatnov/rollup-plugin-uglify';

const packageJson = require('./package.json');

export default [
	{
		externals: ['react', 'react-dom'],
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			postcss({
				config: {
					path: './postcss.config.js',
				},
				extensions: ['.css'],
				minimize: true,
				inject: {
					insertAt: 'top',
				},
			}),
			resolve(),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			uglify(),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
