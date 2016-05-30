--------------------------------
- title: Pluggable NPM postprocessing
- pageLink: #&#x2F;posts&#x2F;2016&#x2F;04&#x2F;pluggable-npm-postprocessing
- publishDate:  2016-04-26 20:33:00
- owner: Christian Kotzbauer
- share: true
- tags: npm,ncmp
--------------------------------

Have you ever had the situation that you installed npm packages and have to perform many manual steps after that?
Me too! Each step can be very easy, like copying files from one folder to another. But it worries and is error-prone.

One way around this problem can be to use other package managers which can do some of this tasks out of the box.
JSPM is one example for this. In some cases this would work and you can feel happy with that solution. But I assert
that in the most projects this is too unflexible. If you change something in your project's architecture or its tooling
you want that this part of your infrastructure can also adjust with. What we need is a flexible and pluggable solution.

So I've started the **NCMP** project. The **N**ode **C**lient **M**odules **P**ostprocessor.

"Client" because the project is mainly aimed at client-side Web applications, but can in principle also be
used in other technology worlds.

Link to the [GitHub Organization](https://github.com/ncmp).


## The Basics

The entry point of all is the ncmp package, which manages the config and provides a command-line interface. The
configuration file ```ncmp.json``` stores the node modules you want to process and configures the subsequent plugin
chain. Let's have a look:

```
{
    "packages": {
        "jquery": ["dist/jquery.js", "dist/jquery.min.js"],
        "aurelia-framework": "dist/amd/aurelia-framework.js",
        "aurelia-templating": "dist/amd/aurelia-templating.js"
    },
    "ignore": [
        "bootstrap"
    ],
    "plugins": []
}
```

In this example you want to process the modules "jquery", "aurelia-framework", "aurelia-templating" and want to ignore
"bootstrap". The files, which are mapped to the module name are the ones which should be processed. So generally the
main framework files. To create this configuration file simply use the following command: ```ncmp init```.
This creates the file in your current working directory with the default values.


If you install or uninstall npm packages in your project you do not want to edit this configuration file by hand
every time. Because there is no way in npm to listen to a postinstall event for dependencies I have to write
a standalone command: ```ncmp scan```

This compares the listed packages from the ```dependencies``` section in your ```package.json``` with the ```package```
section in the ```ncmp.json```. Uninstalled packages will be removed. For new installed packages you will be asked
what you want to do:

![scan-prompt](./posts/2016/04/pluggable-npm-postprocessing/scan-prompt.jpg)

Press ...
- enter to accept the shown package file.
- 'i' to ignore this package.

To avoid this prompts you can run the command with the ```-s``` or ```--silent``` option. Then the installed packages
will be automatically accepted.


If you have configured your ncmp instance correctly you want to perform the postprocessing. To be consistent with
most other tools this command is named ```install```. All configured plugins will be executed in a chain.


## The Plugins

### Copy Files

To copy files from one folder to another you have to use the ```ncmp-copy-plugin```:

```
{
    "packages": {
        "jquery": ["dist/jquery.js", "dist/jquery.min.js"],
        "aurelia-framework": "dist/amd/aurelia-framework.js",
        "aurelia-templating": "dist/amd/aurelia-templating.js"
    },
    "destinations": {
        "*.css": "content/components",
        "aurelia-*.js": "scripts/components/aurelia/*",
        "*": "scripts/components",
    },
    "ignore": [
        "bootstrap"
    ],
    "plugins": ["copy"]
}
```

The listed files in "packages" are copied to the matching folder under "destinations". So you have the ability to split
your files after your own conditions. As you can see, you can use globs at any place in the path.


### Module Loading with SystemJS

If your web page uses SystemJS as module loader you have to maintain a additional configuration file. The ncmp plugin
```ncmp-systemjs-plugin``` can automatically extend the existing paths to your libraries:

```
{
    "packages": {
        "jquery": ["dist/jquery.js", "dist/jquery.min.js"],
        "aurelia-framework": "dist/amd/aurelia-framework.js",
        "aurelia-templating": "dist/amd/aurelia-templating.js"
    },
    "destinations": {
        "*.css": "content/components",
        "aurelia-*.js": "scripts/components/aurelia/*",
        "*": "scripts/components",
    },
    "moduleloaders": {
        "systemjs": "config.js"
    },
    "ignore": [
        "bootstrap"
    ],
    "plugins": ["copy", "systemjs"]
}
```

The only thing you have to configure in your ```ncmp.json``` is the plugin and the new "moduleloaders" section.
You have to map "systemjs" to the configuration file relative to your project's root directory. NCMP will modify
your ```config.js``` as following:

```
System.config({
    baseDir: ".",
    defaultJSExtensions: true,
    paths: {
        "aurelia-framework": "scripts/components/aurelia/framework/aurelia-framework",
        "aurelia-templating": "scripts/components/aurelia/templating/aurelia-templating",
        "jquery": "scripts/components/jquery"
    }
});
```

The values from "baseDir" and "defaultJSExtensions" are respected as well.


### Module Loading with RequireJS

The same thing for the RequireJS module loader:

```
"moduleloaders": {
    "requirejs": "requireconfig.js"
},
"plugins": [
    "copy", "requirejs"
]
```

The result is similar to SystemJS.


## Forecast

There are planned additional plugins for TypeScript Definitions or URL-Rewriting in CSS. The core package itself
should preserve an API to access it within a NodeJS-Script.
