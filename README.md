# Compile.js [![Build Status](https://travis-ci.org/uupaa/Compile.js.png)](http://travis-ci.org/uupaa/Compile.js)

[![npm](https://nodei.co/npm/uupaa.compile.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.compile.js/)

Closure Compiler wrapper.

## Document

- [Compile.js wiki](https://github.com/uupaa/Compile.js/wiki/Compile)
- [Closure Compiler Service](http://closure-compiler.appspot.com/home)
- [WebModule](https://github.com/uupaa/WebModule)
    - [Slide](http://uupaa.github.io/Slide/slide/WebModule/index.html)
    - [Development](https://github.com/uupaa/WebModule/wiki/Development)

## How to use

### Install

```sh
$ npm install -g uupaa.compile.js
```

### Node.js

```js
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

