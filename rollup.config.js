import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

import uglify from '@lopatnov/rollup-plugin-uglify';

const path = require('path');
const packageJson = require('./package.json');

export default [
	{
		external: ['react', 'react-dom'],
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
			peerDepsExternal(),
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
			resolve({
				alias: {
					react: path.resolve('./node_modules/react'),
				},
			}),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			uglify(),
			babel({ babelHelpers: 'bundled' }),
		],
	},
	{
		input: 'dist/esm/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
		external: [/\.css$/],
	},
];
