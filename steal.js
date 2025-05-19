function log(msg) {
  document.getElementById("output").textContent += "\n" + msg;
}

function sendPayload() {
  const payload = {
    action: "getToken", // you may need to try "getUserData", "getSession", etc.
    data: {}
  };

  try {
    log("Sending payload: " + JSON.stringify(payload));
    AndroidJSI.onReceiveMessage(JSON.stringify(payload));
  } catch (e) {
    log("Error calling AndroidJSI: " + e.message);
  }
}

// If the app calls this JS callback, it should show up
window.callback = function(action, data) {
  log("Callback received: " + action + "\nData: " + data);
};

// Try sending after slight delay to ensure WebView is fully ready
window.onload = () => {
  setTimeout(sendPayload, 1500);
};
