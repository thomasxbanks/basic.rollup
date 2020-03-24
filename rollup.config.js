import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import noderesolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
  },
  plugins: [commonjs(), noderesolve(), json()],
};
