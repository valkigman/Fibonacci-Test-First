import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {languageOptions: { globals: {it: "readonly",
    describe: "readonly",} }},
  pluginJs.configs.recommended,
];