const actions = [
  // "BACK", // risky
  "SHARE",
  "DEEPLINK",
  "EXTERNAL_AP_LINK",
  "TWO_FACTOR_EXPIRE",
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
