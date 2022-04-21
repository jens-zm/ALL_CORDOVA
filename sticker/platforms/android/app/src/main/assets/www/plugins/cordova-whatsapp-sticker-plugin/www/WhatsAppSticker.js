cordova.define("cordova-whatsapp-sticker-plugin.WhatsAppSticker", function(require, exports, module) {
var exec = require('cordova/exec');

exports.sendToWhatsapp = function (arg0, success, error) {
    exec(success, error, 'WhatsAppSticker', 'sendToWhatsapp', [arg0]);
};

});
