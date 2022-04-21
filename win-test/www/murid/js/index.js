var tgl = tanggal+" "+bulan+" "+tahun;
var user = JSON.parse(localStorage.getItem('user'));
$("#hari-tanggal").html(hariini+", "+tgl);
var hari = "";
async function cekHari(){
var kaldik = await getKaldik();
var skrg = await cekKaldik(kaldik);
  if (hari == "Libur") {
    $("#hari-tanggal").addClass("red-text");
    $("#ket-hari").show();
    $("#isi-ket").html(skrg["KETERANGAN"]);

  }else {
    if (hariini != "Minggu") {
      $("#hari-tanggal").addClass("green-text");
      $(".tombol-absen").show();
    }else {
      $("#hari-tanggal").addClass("red-text");
      $("#ket-hari").show();
      $("#isi-ket").html("Libur akhir pekan");
    }
  }
}
cekHari();
function getKaldik(){
  return fetch("https://script.google.com/macros/s/AKfycbxKhN0yWCVt7wIT-dH0d6e7n85I-erqVvL7-hdiMY9sLc_2bShh/exec?kalender=baca&tahunajar="+tahunajaran)
  .then(response => response.json())
}

function cekKaldik(kal){
    for (var i = 0; i < kal.length; i++) {
      if (tgl == kal[i]["TANGGAL"] ) {
        hari = "Libur";
        return kal[i];
      }
    }
}

document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    const usr_g = JSON.parse(localStorage.getItem('user'));
    var notificationOpenedCallback = function(jsonData) {
        alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal
        .startInit("b5642dad-6f9b-4c4b-a547-f158986616dc")
        .handleNotificationOpened(notificationOpenedCallback)
        .iOSSettings(iosSettings)
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
        .endInit();

    window.plugins.OneSignal.sendTags({akses: "murid", kelas: usr_g['KELAS'], nama: usr_g['NAMA_LENGKAP']})


    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        alert("User accepted notifications: " + accepted);
    });

    //END ONESIGNAL CODE
}
// Just for mobile
function logOut(){
  function onDeviceReady() {
    var notificationOpenedCallback = function(jsonData) {
        alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal
        .startInit("b5642dad-6f9b-4c4b-a547-f158986616dc")
        .handleNotificationOpened(notificationOpenedCallback)
        .iOSSettings(iosSettings)
        .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
        .endInit();
        window.plugins.OneSignal.deleteTags(["akses", "kelas", "nama" ]);
        window.location.href = "../login.html";
        localStorage.clear();
  }
  onDeviceReady();

}
