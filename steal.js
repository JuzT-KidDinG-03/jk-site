const actions = [
  // "BACK", // risky
  "SHARE",
  "DEEPLINK",
 // "ORIENTATION_CHANGE",
  //"WEBVIEW_LOADER_STOP",
  "EXTERNAL_AP_LINK",
  "REDIRECT_TO_SETTINGS",
  //"BUZZ_QUERY_CLICKED",
  // "SESSION_EXPIRED",
  "TWO_FACTOR_EXPIRE",
  //"WEBVIEW_INTERACTABLE",
  //"WEBVIEW_FCP",
  //"WEBVIEW_FAILURE",
  //"WEBVIEW_SUCCESS",
 // "ACCESS_TOKEN_REFRESH_TOKEN_UPDATE"
];

function log(msg) {
  const logElem = document.getElementById("log");
  logElem.textContent += msg + "\n";
  console.log(msg);
}

function testActions() {
  if (typeof AndroidJSI === "undefined" || typeof AndroidJSI.onReceiveMessage !== "function") {
    log("❌ AndroidJSI interface not available.");
    return;
  }

  log("✅ AndroidJSI interface found. Triggering actions...\n");

  actions.forEach((action, index) => {
    const payload = {
      action: action,
      data: `{"test":"webview_${action.toLowerCase()}"}`
    };

    try {
      AndroidJSI.onReceiveMessage(JSON.stringify(payload));
      log(`✅ Triggered action: ${action}`);
    } catch (err) {
      log(`❌ Error triggering ${action}: ${err}`);
    }
  });
}
