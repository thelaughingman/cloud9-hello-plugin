define(function(require, exports, module) {

var ext = require("core/ext");
var helloDep = require("./dependency.js");

module.exports = ext.register("ext/helloplugin/helloplugin", {
    name    : "cloud9-hello-plugin",
    dev     : "Ajax.org",
    type    : ext.GENERAL,
    deps    : [],
    nodes   : [],
    alone   : true,

    hook : function() {
        console.log(helloDep.getHello());
    },

    enable: function () {},

    disable: function () {}
});

});
