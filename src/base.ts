/// <reference path="typing.d.ts" />
import util = require('util');
import fs = require('fs');


module base {

    export var shelljsCommon = require("shelljs/src/common");

    declare class Error {
        static captureStackTrace(a, b);
        name;
        message;
        constructor(msg: string);
    }

    export class JsshError extends Error {
        dontThrow = false;
        constructor(msg) {
            super(msg);
            //Error.call(this); //super constructor
            Error.captureStackTrace(this, this.constructor);
            this.name = "JsshError";
            this.message = msg;
        }
    }

    export function printError (err) {
        if(err instanceof JsshError) {
            console.log("jssh: Error: " + err.message);
            //console.log(err.stack || err);
        } else if(err instanceof Error) {
            console.log("Error: " + err.message);
            console.log(err.stack || err);
        } else if(typeof err == "string") {
            if(err === '') {
                // `shelljs` throws empty strings on error. Assume that this empty string comes from `shelljs` and
                // do nothing, because it already printed the error msg in console.
            } else {
                console.log("Error: " + err);
            }
        } else {
            console.log(err);
        }
    }

    export function error(msg: string, dont_throw: boolean = false) {
        if(dont_throw) { // continue...
            // TODO: ...
        } else {
            var error = new JsshError(msg);
            error.dontThrow = dont_throw;
            throw error;
        }
    }

    /**
     * A probe object that is inserted into commands that support dependency injection.
     *
     *      func(probe: Probe)
     */
    export class Probe {

        cmdDirectory = __dirname + '/commands/';

        /**
         * Command name.
         * @type {string}
         */
        cmd = "";

        cmdFile = "";

        /**
         * Function help information.
         * @type {string}
         */
        helpFile = '';

        helpText = '';

        /**
         * Collection of all `Probe`s.
         * @type {{}}
         */
        api: any = {};

        constructor(cmd: string) {
            this.cmdFile = this.cmd = cmd;
        }

        /**
         * Error builder. Optionally provide arguments supplied to the command for better error reporting.
         */
        error(...args: any[]);
        error() {
            var args_arr = [];
            if(arguments.length) {
                for(var i = 0; i < arguments.length; i++) {
                    args_arr.push(JSON.stringify(arguments[i]));
                }
            }
            var args_str = args_arr.join(', ');

            return function(msg: string, dont_throw: boolean = false) {
                msg = this.cmd + "(" + args_str + "): " + msg;
                return error(msg, dont_throw);
            }.bind(this);
        }

        dependency(cmd?: string) {
            return this.api[cmd];
        }

        /**
         * Loads command from disk.
         * @returns {*}
         */
        load() {
            var command = require(this.cmdDirectory + this.cmdFile);
            return command(this);
        }

        printError(e) {
            printError(e);
        }

        getHelp() {
            this.load();
            if(this.helpText) return this.helpText;
            try {
                if (this.helpFile) return this.helpText = fs.readFileSync(this.helpFile).toString();
            } catch(e) {
                this.helpFile = '';
            }
        }

        /**
         * Creates a 'shell' function, to avoid loading all commands from disk on startup.
         * @returns {any}
         */
        shell() {

            // DO NOT `.bind()` the returned function to anything, because `to` and `toEnd` commands
            // are attached to `String.prototype`, effectively they have to bound to the new strings.
            var self = this;

            var func: any = function jssh_cmd_wrap() {
                // Load commands from the disk only once they are executed for the first time.
                var func = self.load();
                try {
                    return func.apply(this, arguments);
                } catch(e) {
                    self.printError(e);
                }
            };

            func.help = function jssh_cmd_help() {
                // We read the file from disk only once the actual help requested.
                return self.getHelp();
            };

            this.api[this.cmd] = func;
            return func;
        }

        "return"(data: any) {
            return data;
        }

        returnString(str: string) {
            return this.return(str);
        }

        returnArray(arr: any[]) {
            return this.return(arr);
        }

        returnBoolean(b: boolean) {
            return this.return(b);
        }

        wrap(func, args, with_options = true) {
            if(with_options) {
                // `shelljs` requires the first argument to be options string, staring with `'-'`.
                // Here we add an empty options string if no provided.
                args = [].slice.call(args, 0);
                if ((args.length === 0) || (typeof args[0] !== "string") || (args[0][0] !== '-')) args.unshift('');
            }
            return func.apply(func, args);
        }

        log(msg) {
            console.log(util.inspect(msg, {
                //showHidden: true,
                depth: 3,
                colors: true
            }));
        }

        help(file) {
            this.helpFile = file;
        }
    }

}


export = base;