document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log("dokumen siap...");
  if (device.platform == 'android') {
    StatusBar.backgroundColorByHexString("#009688");
  }


}
