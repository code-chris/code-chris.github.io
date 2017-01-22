--------------------------------
- title: Cache-Busting with Webpack
- pageLink: #&#x2F;posts&#x2F;2017&#x2F;01&#x2F;cache-busting-with-webpack
- publishDate:  2017-01-22 15:05:00
- owner: Christian Kotzbauer
- share: true
- tags: caching,webpack
--------------------------------

There are several strategies to implement a caching mechanism. The common way with Webpack is, to change the file 
name and add a content-based hash. The advantage of this is, that the file only needs to be reloaded if its content 
changed. But the disadvantage is (e.g. for Images) that all references in your Source code have to be modified in 
order to match the different file names. Last year, I implemented a Webpack plugin which does the job. See my previous post: 
["Long-term caching of Webpack Assets"](https://code-chris.github.io/posts/2016/10/long-term-caching-of-webpack-assets/index.html)
This worked great until you start generating some paths through variables at runtime. So I reconsidered my strategy.
The result was the usage of a fairly old mechanism: Cache-Busting with a Query-Parameter. To append this parameter
to all the code references, I wrote a custom Webpack Loader.

First, install the loader through npm:
```
npm install cache-bust-loader
```

Assuming, that the list of loaders in your `webpack.config.js` looks similar to this:

```js
[
    { test: /\.css$/, loader: ExtractTextPlugin.extract({ loader: "css-loader" }) },
    { test: /\.html$/, loader: "raw-loader" },
    { test: /\.ts$/, loader: "awesome-typescript-loader" }
]
```

Now, simply add the `cache-bust-loader` to each file-type where you reference other files which you want to be cache-busted:

```js
var cacheBustLoader = `cache-bust-loader?name=bust&value=${bustValue}`;

[
    { test: /\.css$/, loader: ExtractTextPlugin.extract({ loader: `${cacheBustLoader}!css-loader` }) },
    { test: /\.html$/, loader: `${cacheBustLoader}!raw-loader` },
    { test: /\.ts$/, loader: `${cacheBustLoader}!awesome-typescript-loader` }
]
```

The loader has three parameters:

| Parameter   | Mandatory | Data type | Default value                                        |
|-------------|-----------|-----------|------------------------------------------------------|
| name        | True      | String    |                                                      |
| value       | False     | String    |                                                      |
| types       | False     | String    | eot;woff;woff2;svg;ttf;otf;jpg;jpeg;png;ico;gif;json |

The `name` describes the name of the query parameter, the `value` the string which should change every build. 
If the `value` is empty, no parameters are applied (e.g. in development mode). The `types` are file-types
which you want to be cache-busted. Split them with a semicolon.

To generate a short unique string for each build you can fill `bustValue` like this:

```js
bustValue = require("randomstring").generate(5);
```

You then can see your result in the Network tab of your browser:

![network-tab](./posts/2017/01/cache-busting-with-webpack/network-tab.jpg)
