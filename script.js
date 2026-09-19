/* ==========================================================
   Portafolio: script.js
   1. Cambio de idioma inglés / español
   2. Líneas del hero (agua = serie de tiempo)
   3. Resaltado del enlace activo en el menú
   ========================================================== */
 
(function () {
  "use strict";
 
  /* ---------- 1. Idioma ---------- */
 
  var STORAGE_KEY = "portfolio-lang";
  var toggle = document.getElementById("lang-toggle");
  var translatable = document.querySelectorAll("[data-es]");
 
  // Guarda el texto original (inglés) la primera vez.
  translatable.forEach(function (el) {
    el.setAttribute("data-en", el.textContent.trim());
  });
 
  function getSavedLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }
 
  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* el navegador puede bloquear el almacenamiento; no pasa nada */
    }
  }
 
  function setLang(lang) {
    translatable.forEach(function (el) {
      el.textContent = el.getAttribute(lang === "es" ? "data-es" : "data-en");
    });
 
    document.documentElement.lang = lang;
 
    // El botón muestra el idioma al que se puede cambiar.
    toggle.textContent = lang === "es" ? "EN" : "ES";
    toggle.setAttribute(
      "aria-label",
      lang === "es" ? "Switch to English" : "Cambiar a español"
    );
 
    saveLang(lang);
  }
 
  var initialLang =
    getSavedLang() ||
    ((navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en");
 
  if (initialLang === "es") {
    setLang("es");
  }
 
  toggle.addEventListener("click", function () {
    setLang(document.documentElement.lang === "es" ? "en" : "es");
  });
 
  /* ---------- Año del pie de página ---------- */
 
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
 
  /* ---------- 2. Líneas del hero ---------- */
 
  var wavesHost = document.getElementById("hero-waves");
 
  if (wavesHost) {
    var NS = "http://www.w3.org/2000/svg";
    var W = 1200;
    var H = 600;
    var LINES = 16;
    var SIGNAL_LINE = 9; // la línea ámbar que destaca como "serie de datos"
 
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.setAttribute("preserveAspectRatio", "xMidYMid slice");
    svg.setAttribute("focusable", "false");
 
    for (var i = 0; i < LINES; i++) {
      var baseY = 90 + i * 28;
      var d = "";
 
      for (var x = 0; x <= W; x += 20) {
        var y =
          baseY +
          Math.sin(x * 0.008 + i * 0.5) * 16 +
          Math.sin(x * 0.021 + i * 0.9) * 6;
 
        // La línea de señal tiene picos y valles más marcados, como datos reales.
        if (i === SIGNAL_LINE) {
          y += Math.sin(x * 0.045) * 10;
        }
 
        d += (x === 0 ? "M" : "L") + x + " " + y.toFixed(1) + " ";
      }
 
      var path = document.createElementNS(NS, "path");
      path.setAttribute("d", d);
      path.setAttribute("pathLength", "1"); // permite animar el trazo con valores 0–1
      path.setAttribute("class", i === SIGNAL_LINE ? "wave wave-signal" : "wave");
      path.style.setProperty("--i", i);
      path.style.setProperty("--o", (0.18 + (i / LINES) * 0.35).toFixed(2));
      svg.appendChild(path);
    }
 
    wavesHost.appendChild(svg);
  }
 
  /* ---------- 3. Enlace activo en el menú ---------- */
 
  var navLinks = document.querySelectorAll(".site-nav a");
  var sections = [];
 
  navLinks.forEach(function (link) {
    var target = document.querySelector(link.getAttribute("href"));
    if (target) {
      sections.push({ link: link, el: target });
    }
  });
 
  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          sections.forEach(function (s) {
            s.link.classList.toggle("is-active", s.el === entry.target);
          });
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
 
    sections.forEach(function (s) {
      observer.observe(s.el);
    });
  }
})();
 
