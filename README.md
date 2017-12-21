# React / Webpack Starter

Starter template for react and webpack.

Webpack configuration.
- Compilation with webpack;
- React and jsx;
- SASS loader;
- source-map.

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
In case you want to change port to what you prefer more, you can change it in `server.js` file. `app.listen(8080)`

Run `npm run build` to build the progect or run `npm run watch` to watch for changes and automatically rebuild the project.

## Result

As a result inside the `dist` folder you will get three files:
- `index.html` (this file is the main html file, it is already in `dist` folder by default);
- `bundle.js` (this file is result of all **.js and **.jsx files from `src` folder);
- `bundle.css` (this file is result of all **.sass files from `src/styles` folder).