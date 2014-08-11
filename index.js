(function(global) {
"use strict";

// --- dependency modules ----------------------------------
var fs = require("fs");
var path = require("path");
var childProcess = require("child_process");

// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
function Compile() {
}

//{@dev
Compile["repository"] = "https://github.com/uupaa/Compile.js";
//}@dev

Compile["exec"] = Compile_exec; // Compile.exec(input:PathString, output:PathString,
                                //              options:String, callback:Function):void

// --- implements ------------------------------------------
function Compile_exec(input,      // @arg PathString
                      output,     // @arg PathString
                      options,    // @arg String
                      callback) { // @arg Function - callback(err, stdout, stderr):void
    var jar = path.join(__dirname, 'vendor/compiler.jar');

    var command = "java -jar " + jar +
                  " --js_output_file " + output +
                  " --js " + input +
                  " "  + options;

    childProcess.exec(command, function(err, stdout, stderr) {
        callback(err, stdout, stderr);
    });
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------
if (global["process"]) {
    module["exports"] = Compile;
}
global["Compile" in global ? "Compile_" : "Compile"] = Compile; // switch module. http://git.io/Minify

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule

