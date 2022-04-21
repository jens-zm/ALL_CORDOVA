
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    cordova.getAppVersion.getPackageName().then(function(kode){
        localStorage.setItem("kode", kode);
    });

    //
    //     // //START ONESIGNAL CODE
    // //Remove this method to stop OneSignal Debugging
    // // window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
    //
    //
    //
    // var notificationOpenedCallback = function(jsonData) {
    //     alert('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    // };
    // // Set your iOS Settings
    // var iosSettings = {};
    // iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    // iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
    //
    // window.plugins.OneSignal
    //     .startInit("b5642dad-6f9b-4c4b-a547-f158986616dc")
    //     .handleNotificationOpened(notificationOpenedCallback)
    //     .iOSSettings(iosSettings)
    //     .inFocusDisplaying(window.plugins.OneSignal.OSInFocusDisplayOption.Notification)
    //     .endInit();
    //
    // // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    // window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
    //     alert("User accepted notifications: " + accepted);
    // });
    //END ONESIGNAL CODE
}
