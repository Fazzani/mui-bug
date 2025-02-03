import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import preserveDirectives from 'rollup-plugin-preserve-directives';
import terser from '@rollup/plugin-terser';
import { dts } from 'rollup-plugin-dts';
import svgr from '@svgr/rollup';

// This is required to read package.json file when
// using Native ES modules in Node.js
// https://rollupjs.org/command-line-interface/#importing-package-json
import { createRequire } from 'node:module';
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile('./package.json');
import replace from '@rollup/plugin-replace';
import progress from 'rollup-plugin-progress';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        format: 'esm',
        preserveModulesRoot: 'src',
        inlineDynamicImports: true,
        sourcemap: true,
        file: packageJson.module,
        exports: 'named',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        skip: ['react', 'react-dom'],
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', exclude: ['**/*.test.tsx?', 'src/**/*.stories.tsx'], sourceMap: true }),
      svgr({ icon: true }),
      preserveDirectives({ suppressPreserveModulesWarning: true }),
      // terser(),
      progress(),
      replace({
        preventAssignment: true,
        'process.env.MUI_X_LICENSE_KEY': JSON.stringify(process.env.MUI_X_LICENSE_KEY),
      }),
    ],
    external: [...Object.keys(packageJson.peerDependencies),  "react/jsx-runtime"],
    onwarn(warning, warn) {
      if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.message.includes('use client')) {
        return;
      }

      warn(warning);
    },
  },
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [dts(), progress()],
    external: [/\.css$/],
  },
];
