
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    cordova.getAppVersion.getPackageName().then(function(kode){
        localStorage.setItem("kode", kode);
    });
    // //START ONESIGNAL CODE
    //Remove this method to stop OneSignal Debugging
    window.plugins.OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});



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

    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
    alert("User accepted notifications: " + accepted);
    });
    //END ONESIGNAL CODE

    // Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal
    window.plugins.OneSignal.getIds(function(ids) {
      var notificationObj = { contents: {en: "message body"},
                              include_player_ids: 'ab2f62d5-841f-43c3-9298-9811ebc35073	'};
      window.plugins.OneSignal.postNotification(notificationObj,
        function(successResponse) {
          console.log("Notification Post Success:", successResponse);
        },
        function (failedResponse) {
          console.log("Notification Post Failed: ", failedResponse);
          alert("Notification Post Failed:\n" + JSON.stringify(failedResponse));
        }
      );
    });


  }
