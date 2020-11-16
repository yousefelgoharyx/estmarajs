import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    output: [
        {
            file: `cjs/${pkg.name}.min.js`,
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: `esm/${pkg.name}.min.js`,
            format: 'esm',
            sourcemap: true,
        },
        {
            file: `umd/${pkg.name}.min.js`,
            format: 'umd',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**',
        }),
        commonjs(),
    ],
    external: ['react', 'react-dom'],
};
