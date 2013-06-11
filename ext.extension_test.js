define(function(require, exports, module) {

var ext = require("core/ext");
var ide = require("core/ide");

var menus = require("ext/menus/menus");
var commands = require("ext/commands/commands");
var markup = '<a:application xmlns:a=http://ajax.org/2005/aml><a:window id=winExtensionTemplate title="Extension Template Window" center=true modal=false buttons=close skin=bk-window kbclose=true class=relative width=300><a:vbox><a:hbox padding=5 edge=10>Hello World!</a:hbox><a:hbox pack=end padding=5 edge="6 10 10"><a:button caption=Close skin=btn-default-css3 onclick="require(\'ext/extension_template/extension_template\').closeExtensionTemplateWindow()"></a:hbox></a:vbox></a:window></a:application>'

module.exports = ext.register("ext/extension_template/extension_template", {
    name     : "Extension Template",
    dev      : "Ajax.org",
    alone    : true,
    deps     : [],
    type     : ext.GENERAL,
    markup   : markup,

    nodes : [],

    init : function(){
        var _self = this;
        this.winExtensionTemplate = winExtensionTemplate;
        
        commands.addCommand({
            name: "sayhello",
            hint: "I'll say something",
            msg: "Popping window!",
            bindKey: {mac: "Shift-1", win: "Ctrl-1"},
            isAvailable : function() {
                return true;    
            },
            exec: function() {
                _self.winExtensionTemplate.show()
            }
        });
        
        this.nodes.push(
            menus.addItemByPath("Edit/Extension Template", new apf.item({
                command : "sayhello"
            }), 5400)
        ); 

       /* Just a plain menu...
        this.nodes.push(
            menus.addItemByPath("Edit/Extension Template", new apf.item({
                onclick : function(){
                    _self.winExtensionTemplate.show();
                }
            }), 5400)
        ); */
    },

    hook : function(){
        var _self = this;
        ext.initExtension(this);
    },

    enable : function(){
        this.nodes.each(function(item){
            item.enable();
        });
    },

    disable : function(){
        this.nodes.each(function(item){
            item.disable();
        });
    },

    destroy : function(){
        this.nodes.each(function(item){
            item.destroy(true, true);
        });
        this.nodes = [];
    },

     closeExtensionTemplateWindow : function(){
        this.winExtensionTemplate.hide();
     }
});

});
