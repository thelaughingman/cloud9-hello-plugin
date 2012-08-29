define(function(require, exports, module) {

var ext = require("core/ext");
var text = require("./dependency.txt.js");

module.exports = {

    getHello: function() {
        return text;
    }

};

});
