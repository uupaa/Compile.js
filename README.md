# Compile.js [![Build Status](https://travis-ci.org/uupaa/Compile.js.png)](http://travis-ci.org/uupaa/Compile.js)

[![npm](https://nodei.co/npm/uupaa.compile.js.png?downloads=true&stars=true)](https://nodei.co/npm/uupaa.compile.js/)

[Closure Compiler](https://github.com/google/closure-compiler) wrapper.

## Document

- [Compile.js wiki](https://github.com/uupaa/Compile.js/wiki/Compile)
- [Closure Compiler](https://github.com/google/closure-compiler)
    - [Compiler Service](http://closure-compiler.appspot.com/home)
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

## History

- Compiler.js version 0.2.2 -       with Closure Compiler v20160619
- Compiler.js version 0.2.1 -       with Closure Compiler v20141120
- Compiler.js version 0.2.0 -       with Closure Compiler v20140923
    - support new feature
        - `--language_in ECMASCRIPT6` and `--language_in ECMASCRIPT6_STRICT`
        - `--language_out ECMASCRIPT5` and `--language_out ECMASCRIPT5_STRICT`
- Compiler.js version 0.0.0 - 0.1.7 with Closure Compiler v20131014

