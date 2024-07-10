import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    ignores: ["**/*.d.ts", "**/*.test.ts", "**/.nuxt/**", "**/dist/**", "**/.output/**", "**/coverage/**"],
    languageOptions: { globals: globals.deno },
  },
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];