(function () {
  "use strict";
  var root = document.documentElement;
  var toggle = document.querySelector(".theme-toggle");
  if (!toggle) return;
  var icon = toggle.querySelector(".theme-icon");
  var label = toggle.querySelector(".theme-label");

  function updateButton() {
    var dark = root.getAttribute("data-theme") === "dark";
    if (icon) icon.textContent = dark ? "☀" : "☾";
    if (label) label.textContent = dark ? "Light" : "Dark";
    toggle.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    toggle.setAttribute("aria-pressed", String(dark));
  }
  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("gaurav-theme", next); } catch (e) {}
    updateButton();
  });
  updateButton();
})();