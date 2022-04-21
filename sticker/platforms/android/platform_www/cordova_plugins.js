cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-whatsapp-sticker-plugin.WhatsAppSticker",
      "file": "plugins/cordova-whatsapp-sticker-plugin/www/WhatsAppSticker.js",
      "pluginId": "cordova-whatsapp-sticker-plugin",
      "clobbers": [
        "cordova.plugins.WhatsAppSticker"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-whatsapp-sticker-plugin": "0.0.1"
  };
});