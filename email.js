/* Offer a one-click copy option when no desktop email handler is configured. */
(() => {
  "use strict";
  const button = document.querySelector("[data-copy-email]");
  if (!button) return;
  const address = button.getAttribute("data-copy-email");
  const originalLabel = button.textContent;
  let resetId;

  async function copyAddress() {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(address);
      return;
    }
    const field = document.createElement("textarea");
    field.value = address;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const successful = document.execCommand("copy");
    field.remove();
    if (!successful) throw new Error("Clipboard copy unavailable");
  }

  button.addEventListener("click", async () => {
    try {
      await copyAddress();
      button.textContent = "Copied!";
    } catch (_) {
      window.prompt("Copy this email address:", address);
      button.textContent = "Copy email";
    }
    window.clearTimeout(resetId);
    resetId = window.setTimeout(() => { button.textContent = originalLabel; }, 2400);
  });
})();
