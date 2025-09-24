/*! app.js v0.0.1 */
(() => {
  const msg = "CDN test: app.js loaded.";
  console.log(msg);
  // Optional visual proof in the page:
  if (!document.getElementById("cdn-test")) {
    const badge = document.createElement("div");
    badge.id = "cdn-test";
    badge.textContent = msg;
    badge.style.cssText = "position:fixed;bottom:12px;right:12px;padding:6px 10px;background:#111;color:#fff;font:12px/1.4 system-ui;border-radius:6px;opacity:.85;z-index:99999";
    document.body.appendChild(badge);
    setTimeout(() => badge.remove(), 4000);
  }
})();