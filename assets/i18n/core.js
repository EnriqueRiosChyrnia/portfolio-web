/*
 * Shared i18n engine for the portfolio site.
 * Default language is English; Spanish stays fully intact via the dictionary.
 * Each page loads this file, then a page-specific dictionary that fills
 * window.SiteI18n.dict before DOMContentLoaded fires.
 */
(function () {
  "use strict";
  var STORAGE_KEY = "site-lang";
  var DEFAULT_LANG = "en";

  function getStoredLang() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setStoredLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }
  function getLang() {
    var stored = getStoredLang();
    return stored === "es" || stored === "en" ? stored : DEFAULT_LANG;
  }

  function applyLang(lang) {
    var dict = window.SiteI18n.dict || {};

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var entry = dict[el.getAttribute("data-i18n")];
      if (entry && entry[lang] != null) el.innerHTML = entry[lang];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var idx = pair.indexOf(":");
        if (idx < 0) return;
        var attrName = pair.slice(0, idx).trim();
        var key = pair.slice(idx + 1).trim();
        var entry = dict[key];
        if (entry && entry[lang] != null) el.setAttribute(attrName, entry[lang]);
      });
    });

    document.querySelectorAll("[data-i18n-meta]").forEach(function (el) {
      var entry = dict[el.getAttribute("data-i18n-meta")];
      if (!entry || entry[lang] == null) return;
      if (el.tagName === "TITLE") el.textContent = entry[lang];
      else el.setAttribute("content", entry[lang]);
    });

    document.documentElement.lang = lang;
    document.documentElement.setAttribute("data-lang", lang);
    setStoredLang(lang);

    if (typeof window.SiteI18nRender === "function") window.SiteI18nRender(lang);

    document.querySelectorAll(".lang-toggle").forEach(function (btn) {
      btn.textContent = lang === "en" ? "🌐 ES" : "🌐 EN";
      btn.title = lang === "en" ? "Cambiar el sitio a español" : "Switch site to English";
      btn.setAttribute("aria-label", btn.title);
      btn.setAttribute("data-current-lang", lang);
    });
  }

  function toggle() {
    applyLang(getLang() === "en" ? "es" : "en");
  }

  window.SiteI18n = window.SiteI18n || {};
  window.SiteI18n.dict = window.SiteI18n.dict || {};
  window.SiteI18n.apply = applyLang;
  window.SiteI18n.toggle = toggle;
  window.SiteI18n.getLang = getLang;
  window.SiteI18n.t = function (key) {
    var dict = window.SiteI18n.dict || {};
    var entry = dict[key];
    var lang = getLang();
    return entry && entry[lang] != null ? entry[lang] : "";
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
  });
})();
