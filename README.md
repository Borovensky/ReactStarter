# React / Webpack Starter

Starter template for react and webpack.

Webpack configuration.
- Compilation with webpack
- React and jsx
- SASS loader
- source-maping

## Installation

Just clone this repo.

``` text
npm install
```

There are 3 scripts in `package.json`

``` test
  "scripts": {
    "start": "node server.js",
    "build": "npx webpack --config webpack.config.babel.js",
    "watch": "npx webpack --watch --config webpack.config.babel.js"
  }
```

To launch the development server run `npm start` and open your browser at `http://localhost:8080/`