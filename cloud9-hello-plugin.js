define(function(require, exports, module) {

var ext = require("core/ext");
var menus = require("ext/menus/menus");
var sys = require('sys')
var exec = require('child_process').exec;

module.exports = ext.register("ext/plugin/killplugin", {
    name    : "cloud9-kill-plugin",
    dev     : "Younes",
    type    : ext.GENERAL,
    deps    : [],
    nodes   : [],
    alone   : true,

    killClicked: function() {
        function puts(error, stdout, stderr) { sys.puts(stdout) }
        exec("lkill -9 $(lsof -t -i tcp:3001)", puts);
    },
        
    hook : function() {
        window.console.log("Kill Preview c9ext loaded.");
            var _self = this;
            this.nodes.push(
            menus.addItemByPath("Tools/Kill", new apf.item({
                onclick: function() {
                    _self.killClicked();
                },
                isAvailable: function(editor) {
                    //if(window.tabEditors.getPage().name.toString().substr(-3) == ".md")
                    return true;
                }
            }), 0));
            
    },

    enable: function () {},

    disable: function () {}
});

});
