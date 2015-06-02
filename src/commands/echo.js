function echo(jssh) {
    //function echo(...msgs: any[]) {
    //    jssh.log.apply(jssh, msgs);
    //}
    function echo(msg) {
        console.log.apply(console, arguments);
    }
    return echo;
}
module.exports = echo;
