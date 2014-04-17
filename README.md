=========
Compile.js
=========

![](https://travis-ci.org/uupaa/Compile.js.png)

Closure Compiler wrapper.

# Document

- [WebModule](https://github.com/uupaa/WebModule) ([Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html))
- [Development](https://github.com/uupaa/WebModule/wiki/Development)
- [Compile.js wiki](https://github.com/uupaa/Compile.js/wiki/Compile)


# How to use

```sh
$ npm install -g uupaa.compile.js
```

```js
// for Node.js
var Compile = require("uupaa.compile.js");
var inputFile = "./input.js";
var outputFile = "./output.js";
var options = "--compilation_level ADVANCED_OPTIMIZATIONS --formatting pretty_print";

Compile.exe(inputFile, outputFile, options, function(err, stdout, stderr) {
    if (err || stderr) {
        console.log("ERR");
    } else {
        console.log("OK");
    }
});
```

