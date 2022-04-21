document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  localStorage.setItem("url", "https://script.google.com/macros/s/AKfycbwje6TEVWUtaCr2-Zd0KLduARJ2jT3jN_TbQWCv5TCBgrop9Zow/exec")
  localStorage.setItem("kode", "app.mikompa.sch.id")
  if (device.platform == 'android') {
    StatusBar.backgroundColorByHexString("#009688");
  }


}
