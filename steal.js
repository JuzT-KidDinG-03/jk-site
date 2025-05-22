const actions = [
   "ORIENTATION_CHANGE",
  "EXTERNAL_AP_LINK",
  "REDIRECT_TO_SETTINGS",
  "BUZZ_QUERY_CLICKED",
  "WEBVIEW_INTERACTABLE",
  "WEBVIEW_FCP"
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
