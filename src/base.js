var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/// <reference path="typing.d.ts" />
var util = require('util');
var fs = require('fs');
var base;
(function (base) {
    base.shelljsCommon = require("shelljs/src/common");
    var JsshError = (function (_super) {
        __extends(JsshError, _super);
        function JsshError(msg) {
            _super.call(this, msg);
            this.dontThrow = false;
            //Error.call(this); //super constructor
            Error.captureStackTrace(this, this.constructor);
            this.name = "JsshError";
            this.message = msg;
        }
        return JsshError;
    })(Error);
    base.JsshError = JsshError;
    function printError(err) {
        if (err instanceof JsshError) {
            console.log("jssh: Error: " + err.message);
        }
        else if (err instanceof Error) {
            console.log("Error: " + err.message);
            console.log(err.stack || err);
        }
        else if (typeof err == "string") {
            if (err === '') {
            }
            else {
                console.log("Error: " + err);
            }
        }
        else {
            console.log(err);
        }
    }
    base.printError = printError;
    function error(msg, dont_throw) {
        if (dont_throw === void 0) { dont_throw = false; }
        if (dont_throw) {
        }
        else {
            var error = new JsshError(msg);
            error.dontThrow = dont_throw;
            throw error;
        }
    }
    base.error = error;
    /**
     * A probe object that is inserted into commands that support dependency injection.
     *
     *      func(probe: Probe)
     */
    var Probe = (function () {
        function Probe(cmd) {
            /**
             * Command name.
             * @type {string}
             */
            this.cmd = "";
            /**
             * Function help information.
             * @type {string}
             */
            this.helpFile = '';
            this.helpText = '';
            this.cmd = cmd;
        }
        Probe.load = function (probe) {
            var command = require('./commands/' + probe.cmd);
            return command(probe);
        };
        Probe.prototype.error = function () {
            var args_arr = [];
            if (arguments.length) {
                for (var i = 0; i < arguments.length; i++) {
                    args_arr.push(JSON.stringify(arguments[i]));
                }
            }
            var args_str = args_arr.join(', ');
            return function (msg, dont_throw) {
                if (dont_throw === void 0) { dont_throw = false; }
                msg = this.cmd + "(" + args_str + "): " + msg;
                return error(msg, dont_throw);
            }.bind(this);
        };
        Probe.prototype.dependency = function (cmd) {
            var probe = new Probe(cmd);
            return probe.load();
        };
        /**
         * Loads command from disk.
         * @returns {*}
         */
        Probe.prototype.load = function () {
            return Probe.load(this);
        };
        Probe.prototype.printError = function (e) {
            printError(e);
        };
        Probe.prototype.getHelp = function () {
            this.load();
            if (this.helpText)
                return this.helpText;
            try {
                if (this.helpFile)
                    return this.helpText = fs.readFileSync(this.helpFile).toString();
            }
            catch (e) {
                this.helpFile = '';
            }
        };
        /**
         * Creates a 'shell' function, to avoid loading all commands from disk on startup.
         * @returns {any}
         */
        Probe.prototype.shell = function () {
            // DO NOT `.bind()` the returned function to anything, because `to` and `toEnd` commands
            // are attached to `String.prototype`, effectively they have to bound to the new strings.
            var self = this;
            var func = function jssh_cmd_wrap() {
                // Load commands from the disk only once they are executed for the first time.
                var func = self.load();
                try {
                    return func.apply(this, arguments);
                }
                catch (e) {
                    self.printError(e);
                }
            };
            func.help = function jssh_cmd_help() {
                // We read the file from disk only once the actual help requested.
                return self.getHelp();
            };
            return func;
        };
        Probe.prototype["return"] = function (data) {
            return data;
        };
        Probe.prototype.returnString = function (str) {
            return this.return(str);
        };
        Probe.prototype.returnArray = function (arr) {
            return this.return(arr);
        };
        Probe.prototype.returnBoolean = function (b) {
            return this.return(b);
        };
        Probe.prototype.wrap = function (func, args, with_options) {
            if (with_options === void 0) { with_options = true; }
            if (with_options) {
                // `shelljs` requires the first argument to be options string, staring with `'-'`.
                // Here we add an empty options string if no provided.
                args = [].slice.call(args, 0);
                if ((args.length === 0) || (typeof args[0] !== "string") || (args[0][0] !== '-'))
                    args.unshift('');
            }
            return func.apply(func, args);
        };
        Probe.prototype.log = function (msg) {
            console.log(util.inspect(msg, {
                //showHidden: true,
                depth: 3,
                colors: true
            }));
        };
        Probe.prototype.help = function (file) {
            this.helpFile = file;
        };
        return Probe;
    })();
    base.Probe = Probe;
})(base || (base = {}));
module.exports = base;
