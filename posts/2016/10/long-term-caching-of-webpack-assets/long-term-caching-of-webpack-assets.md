--------------------------------
- title: Long-term caching of Webpack Assets
- pageLink: #&#x2F;posts&#x2F;2016&#x2F;10&#x2F;long-term-caching-of-webpack-assets
- publishDate:  2016-10-31 18:00:00
- owner: Christian Kotzbauer
- share: true
- tags: caching,webpack
--------------------------------

If you want to use a solid long-term caching in your web application with Webpack then you have to do a lot of work.
Especially if you are not using the normal setup ;). With "normal setup" I mean that you use html- and css-loaders for 
your HTML and CSS files so Webpack would interpret references to external files and include them in the final distribution.
This is nice because file renamings during the build process (for example add some chunkhash to the filename) will
be reflected back to the source code automatically.

But if you load these files with the raw-loader Webpack would ignore these references. So you have to ensure by yourself
that these files are available at runtime (that's the simple part). And you have to ensure that renamings are handled correctly.

So you need a logic, which can do this path modifications for you. Here is it: The **static-asset-hash-replace-webpack-plugin**.

The name is a little bit cumbersome, but it's easy to use:

Install the plugin with

```
npm install static-asset-hash-replace-webpack-plugin
```

and extend your `webpack.config.js`:

```
var StaticAssetHashReplace = require('static-asset-hash-replace-webpack-plugin');

module.exports = {
  ...
  plugins: [
    new StaticAssetHashReplace()
  ]
  ...
};
```

This will search and replace all occurrences of file references in your bundled assets. An example:

- "../images/button.png" => "../images/button.46e48ce0628835f68a73.png"
- "../images/icon.png" => "../images/46e48ce0628835f68a73-icon.png"


So now you can build your own long-term caching solution with all files you want to ship including static ones.
