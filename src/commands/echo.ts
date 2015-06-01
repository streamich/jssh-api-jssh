import base = require("../base");


function echo(jssh: base.Probe) {


    //function echo(...msgs: any[]) {
    //    jssh.log.apply(jssh, msgs);
    //}
    function echo(msg: any) {
        jssh.log(msg);
    }
    return echo;
}

export = echo;