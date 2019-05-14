module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    allowImportExportEverywhere: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    babelOptions: {
      configFile: "src/babel.config.js",
    },
  },
};

//Create-react-app format
/*
{
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-console": "off",
    "strict": ["error", "global"],
    "curly": "warn"
  }
}
*/