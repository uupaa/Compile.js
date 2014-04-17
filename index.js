// @name: Compile.js
// @require: none
// @cutoff: @assert @node
//
// Closure Compiler Service
//  http://closure-compiler.appspot.com/home

(function(global) {

// --- variable --------------------------------------------
var fs = require("fs");
var childProcess = require("child_process");

// --- define ----------------------------------------------
// --- interface -------------------------------------------
function Compile() { // @help: Compile
}

Compile["repository"] = "https://github.com/uupaa/Compile.js";
Compile["exec"] = Compile_exec; // Compile.exec(input:PathString, output:PathString,
                                //              options:String, callback:Function):void

// --- implement -------------------------------------------
function Compile_exec(input,      // @arg PathString:
                      output,     // @arg PathString:
                      options,    // @arg String:
                      callback) { // @arg Function: callback(err, stdout, stderr):void
                                  // @help: Compile.exe

    var command = "java -jar ../vendor/compiler.jar" +
                  " --js_output_file " + output +
                  " --js "             + input +
                  options.join(" ");

    childProcess.exec(command, function(err, stdout, stderr) {
        if (err || stderr) {
            callback(new Error(stderr));
        } else {
            callback(null);
        }
    });
}

// --- export ----------------------------------------------
//{@node
if (global["process"]) { // node.js
    module["exports"] = Compile;
}
//}@node
if (global["Compile"]) {
    global["Compile_"] = Compile; // already exsists
} else {
    global["Compile"]  = Compile;
}

})((this || 0).self || global);

