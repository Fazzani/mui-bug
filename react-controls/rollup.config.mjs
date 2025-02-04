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

const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "jsxRuntime",
  "@mui/material/TextField": "TextField",
  "@mui/material/Button": "Button",
  "@mui/material/styles": "styles",
};

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        globals,
        interop: (id) => {
          if (id === "@emotion/styled") {
            return "esModule";
          }
          return "default";
        },
      },
      {
        format: "esm",
        preserveModulesRoot: "src",
        inlineDynamicImports: true,
        sourcemap: true,
        file: packageJson.module,
        globals,
        interop: (id) => { if (id === '@emotion/styled') { return 'esModule'; } return 'default'; }
      },
    ],
    plugins: [
      // peerDepsExternal(),
      resolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        skip: ["react", "react-dom"],
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.test.tsx?", "src/**/*.stories.tsx"],
        sourceMap: true,
      }),
      svgr({ icon: true }),
      preserveDirectives({ suppressPreserveModulesWarning: true }),
      // terser(),
      progress(),
      replace({
        preventAssignment: true,
        "process.env.MUI_X_LICENSE_KEY": JSON.stringify(
          process.env.MUI_X_LICENSE_KEY,
        ),
      }),
    ],
    external: [
      ...Object.keys(packageJson.peerDependencies),
      "react/jsx-runtime",
    ],
    onwarn(warning, warn) {
      if (
        warning.code === "MODULE_LEVEL_DIRECTIVE" &&
        warning.message.includes("use client")
      ) {
        return;
      }

      warn(warning);
    },
  },
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "dist",
        format: "esm",
        preserveModules: true,
        preserveModulesRoot: "src",
      },
    ],
    plugins: [dts(), progress()],
    external: [/\.css$/],
  },
];
