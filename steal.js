(function () {
  const output = document.getElementById("output");

  try {
    if (typeof WebEngageMobileInterface !== "undefined") {
      const result = WebEngageMobileInterface.getUserId?.();
      output.innerText = "getUserId(): " + result;
    } else {
      output.innerText = "WebEngageMobileInterface not found.";
    }
  } catch (e) {
    output.innerText = "Error: " + e.message;
  }
})();
