function init() {
    document.addEventListener("deviceready", startup, false);
}

function startup() {
    console.log("Fungsi Exit App");
    document.addEventListener("backbutton", doClose, false);
}
function showExitAlert() {
    navigator.notification.confirm(
        'Keluar dari Aplikasi ?',
        exitApp,
        'Aplikasi Kita',
        'Ok,Cancel'
    );
}
function exitApp(buttonIndex) {
    if (buttonIndex == 1) {
    navigator.app.exitApp();
    }
    else {
        window.close();
    }
}