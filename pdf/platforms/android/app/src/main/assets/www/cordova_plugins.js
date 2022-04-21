cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
      "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
      "pluginId": "cordova-plugin-document-viewer",
      "clobbers": [
        "cordova.plugins.SitewaertsDocumentViewer",
        "SitewaertsDocumentViewer"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-document-viewer": "0.9.13"
  };
});