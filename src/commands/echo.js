function echo(jssh) {
    //function echo(...msgs: any[]) {
    //    jssh.log.apply(jssh, msgs);
    //}
    function echo(msg) {
        jssh.log(msg);
    }
    return echo;
}
module.exports = echo;
