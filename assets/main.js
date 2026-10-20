/* Wild Laughs — main site behaviour.
   - Click-to-play YouTube facades (no iframe loads until a visitor taps play)
   - Animal Fact of the Day (rotates daily)
   - Service worker registration
   - PWA install prompt (used by the /app page) */

"use strict";

/* ---------- click-to-play facades ---------- */

function wlPlayFacade(facade) {
  var id = facade.getAttribute("data-yt");
  if (!id || facade.classList.contains("playing")) return;
  var iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
  iframe.title = facade.getAttribute("aria-label") || "Wild Laughs video";
  iframe.setAttribute("allow", "accelerometer; autoplay; encrypted-media; picture-in-picture");
  iframe.setAttribute("allowfullscreen", "");
  iframe.className = "yt-iframe";
  facade.classList.add("playing");
  facade.innerHTML = "";
  facade.appendChild(iframe);
}

document.addEventListener("click", function (e) {
  var facade = e.target.closest ? e.target.closest(".yt-facade") : null;
  if (facade) wlPlayFacade(facade);
});
document.addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.key === " ") && e.target.classList &&
      e.target.classList.contains("yt-facade")) {
    e.preventDefault();
    wlPlayFacade(e.target);
  }
});

/* ---------- animal fact of the day ---------- */

var WL_FACTS = [
  { en: "A dog's nose print is completely unique — just like a human fingerprint!",
    ur: "کتے کی ناک کا نشان بالکل منفرد ہوتا ہے — بالکل انسانی انگلی کے نشان کی طرح!" },
  { en: "Elephants are the only animals that cannot jump.",
    ur: "ہاتھی واحد جانور ہے جو چھلانگ نہیں لگا سکتا۔" },
  { en: "An elephant's trunk has around 40,000 muscles — and no bone at all!",
    ur: "ہاتھی کی سونڈھ میں تقریباً 40,000 پٹھے ہوتے ہیں — اور کوئی ہڈی نہیں!" },
  { en: "Sea otters hold hands while they sleep so they don't drift apart.",
    ur: "سمندری اود بلے سوتے وقت ایک دوسرے کا ہاتھ پکڑتے ہیں تاکہ بہہ کر الگ نہ ہوں۔" },
  { en: "A group of flamingos is called a 'flamboyance' — and they really are flamboyant!",
    ur: "فلیمنگو کے جھنڈ کو 'فلیمبوئنس' کہتے ہیں — اور واقعی وہ بہت نمائشی ہوتے ہیں!" },
  { en: "Cats spend about 70% of their lives sleeping. Professional nappers!",
    ur: "بلیاں اپنی زندگی کا تقریباً 70 فیصد حصہ سوتی رہتی ہیں۔ پیشہ ور نیند باز!" },
  { en: "The heart of a blue whale is so big that a small child could swim through its arteries.",
    ur: "نیلی وہیل کا دل اتنا بڑا ہوتا ہے کہ ایک چھوٹا بچہ اس کی شریانوں میں تیر سکتا ہے۔" },
  { en: "Penguins propose to their mates by presenting them with a pebble.",
    ur: "پینگوئن اپنے ساتھی کو ایک کنکر پیش کر کے شادی کی پیشکش کرتے ہیں۔" },
  { en: "A giraffe's heart weighs about 11 kilograms — it has to pump blood all the way up that long neck!",
    ur: "زرافے کا دل تقریباً 11 کلوگرام کا ہوتا ہے — اسے اس لمبی گردن تک خون پمپ کرنا پڑتا ہے!" },
  { en: "Dogs can smell your feelings — they detect the scent of stress and excitement on your body.",
    ur: "کتے آپ کے جذبات سونگھ سکتے ہیں — وہ آپ کے جسم سے دباؤ اور جوش کی بو محسوس کر لیتے ہیں۔" },
  { en: "An octopus has three hearts and blue blood.",
    ur: "آکٹوپس کے تین دل ہوتے ہیں اور اس کا خون نیلا ہوتا ہے۔" },
  { en: "Baby elephants suck their trunks for comfort, just like human babies suck their thumbs.",
    ur: "ہاتھی کے بچے سکون کے لیے اپنی سونڈھ چوستے ہیں، بالکل انسانی بچوں کی طرح جو انگوٹھا چوستے ہیں۔" },
  { en: "Hedgehogs are immune to most snake venom.",
    ur: "خارپشت زیادہ تر سانپوں کے زہر سے محفوظ ہوتے ہیں۔" },
  { en: "A sea turtle can hold its breath for up to 7 hours while sleeping underwater.",
    ur: "سمندری کچھوا پانی کے اندر سوتے ہوئے 7 گھنٹے تک سانس روک سکتا ہے۔" }
];

function wlRenderFact(lang) {
  var el = document.getElementById("fact-text");
  if (!el) return;
  var day = Math.floor(Date.now() / 86400000);
  var fact = WL_FACTS[day % WL_FACTS.length];
  el.textContent = (lang === "ur" ? fact.ur : fact.en);
}

document.addEventListener("DOMContentLoaded", function () {
  wlRenderFact(typeof wlCurrentLang === "function" ? wlCurrentLang() : "en");
});

/* ---------- service worker ---------- */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").catch(function () { /* offline support is a bonus */ });
  });
}

/* ---------- PWA install prompt (for /app page) ---------- */

var wlInstallPrompt = null;
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  wlInstallPrompt = e;
  var btn = document.getElementById("install-btn");
  if (btn) btn.hidden = false;
});

document.addEventListener("DOMContentLoaded", function () {
  var btn = document.getElementById("install-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      if (!wlInstallPrompt) return;
      wlInstallPrompt.prompt();
      wlInstallPrompt.userChoice.then(function () { wlInstallPrompt = null; });
    });
  }
  if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) {
    var note = document.getElementById("already-installed");
    if (note) note.hidden = false;
  }
});
