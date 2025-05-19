window.onload = function () {
  try {
    const payload = JSON.stringify({
      action: "getToken",
      data: {}
    });

    if (window.AndroidJSI && AndroidJSI.onReceiveMessage) {
      AndroidJSI.onReceiveMessage(payload);
      document.getElementById("output").textContent = "Payload sent: " + payload;
    } else {
      document.getElementById("output").textContent = "JS interface not available.";
    }
  } catch (e) {
    document.getElementById("output").textContent = "Error: " + e.message;
  }
};
