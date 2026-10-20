/* Wild Laughs — English / Urdu UI toggle.
   Strings live in the I18N dictionary; elements opt in with data-i18n="key".
   The choice is remembered in localStorage ("wl-lang"). */

var I18N = {
  en: {
    "nav.home": "Home",
    "nav.videos": "Videos",
    "nav.shorts": "Shorts",
    "nav.blog": "Blog",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.app": "App",
    "lang.toggle": "اردو",
    "hero.promise": "Funny animals, cute baby animals & amazing animal facts — new videos every day! 🐾",
    "hero.sub": "Watch the funniest animal moments, learn a true fact in every video, and fall in love with the world's cutest animals.",
    "btn.watch": "▶ Watch Videos",
    "btn.subscribe": "Subscribe on YouTube",
    "home.latest": "Latest Videos",
    "home.bestof": "Best Of Wild Laughs",
    "home.shorts": "Shorts — Quick Laughs",
    "home.fact.title": "🐾 Animal Fact of the Day",
    "home.about.title": "What is Wild Laughs?",
    "home.about.text": "Wild Laughs is a happy little corner of YouTube where animals make you smile AND teach you something. Every video is funny, cute and family-friendly — and every one hides a true animal fact or two. Dogs, cats, elephants, penguins, parrots, sea turtles… if it is adorable or amazing, it lives here.",
    "home.more": "More about us →",
    "home.never.title": "Never miss a video!",
    "home.never.text": "New videos every day on YouTube — subscribe so you never miss one.",
    "videos.title": "Funny Animal Videos",
    "videos.intro": "Our full-length videos: amazing stories, true facts and the funniest animal moments, all in one place.",
    "filter.all": "All",
    "filter.pets": "Pets",
    "filter.wildlife": "Wildlife",
    "filter.extinct": "Extinct",
    "shorts.title": "Funny Animal Shorts",
    "shorts.intro": "Tiny videos, huge laughs. Tap any Short and enjoy 40 seconds of pure animal joy.",
    "blog.title": "The Wild Laughs Blog",
    "blog.intro": "Stories, pet care tips and amazing animal facts to read — companions to our videos.",
    "blog.read": "Read the story →",
    "about.title": "About Wild Laughs",
    "about.story.h": "Our Story",
    "about.story.p": "Wild Laughs started with one simple idea: animals make the world happier — and smarter. From Skardu, in the mountains of Gilgit-Baltistan, we create family-friendly videos that mix genuine laughter with true knowledge. Every video opens with an impossible-looking moment, tells a tiny story, and teaches real facts about the animal on screen.",
    "about.post.h": "What We Post",
    "about.post.1": "Funny Shorts — 40 seconds of pure animal joy, twice a day.",
    "about.post.2": "A daily long video — amazing animal stories and facts, about 15 minutes.",
    "about.post.3": "A pet information series — breeds, pet health basics and building trust with your animals.",
    "about.post.4": "A daily community post — polls, teasers and fun facts. You help choose tomorrow's star!",
    "about.schedule.h": "Daily Schedule (Pakistan time)",
    "sched.time": "Time",
    "sched.what": "What you get",
    "sched.1": "Short — timed for our friends in the US",
    "sched.2": "Community post — poll, teaser or fun fact",
    "sched.3": "Short — timed for our friends in Pakistan",
    "sched.4": "The day's long video",
    "about.socials.h": "Find Us Everywhere",
    "contact.title": "Contact Wild Laughs",
    "app.title": "Get the Wild Laughs App",
    "footer.tagline": "Funny animals, cute baby animals & amazing animal facts — every single day.",
    "footer.explore": "Explore",
    "footer.follow": "Follow Wild Laughs",
    "footer.rights": "Wild Laughs (@wildlaughsfunny). Made with love for animal lovers everywhere."
  },
  ur: {
    "nav.home": "ہوم",
    "nav.videos": "ویڈیوز",
    "nav.shorts": "شارٹس",
    "nav.blog": "بلاگ",
    "nav.about": "ہمارے بارے میں",
    "nav.contact": "رابطہ",
    "nav.app": "ایپ",
    "lang.toggle": "English",
    "hero.promise": "مزاحیہ جانور، پیارے چھوٹے جانور اور حیران کن جانوروں کے حقائق — ہر روز نئی ویڈیوز! 🐾",
    "hero.sub": "جانوروں کے سب سے مزاحیہ لمحات دیکھیں، ہر ویڈیو میں ایک سچا حقیقت جانیں، اور دنیا کے پیارے ترین جانوروں سے محبت کریں۔",
    "btn.watch": "▶ ویڈیوز دیکھیں",
    "btn.subscribe": "یوٹیوب پر سبسکرائب کریں",
    "home.latest": "تازہ ترین ویڈیوز",
    "home.bestof": "وائلڈ لافس کی بہترین ویڈیوز",
    "home.shorts": "شارٹس — فوری ہنسی",
    "home.fact.title": "🐾 آج کا جانور حقیقت",
    "home.about.title": "وائلڈ لافس کیا ہے؟",
    "home.about.text": "وائلڈ لافس یوٹیوب کا ایک خوشگوار سا کونا ہے جہاں جانور آپ کو ہنساتے بھی ہیں اور کچھ سکھاتے بھی ہیں۔ ہر ویڈیو مزاحیہ، پیاری اور خاندان دوست ہے — اور ہر ایک میں ایک یا دو سچے جانوروں کے حقائق چھپے ہوتے ہیں۔ کتے، بلیاں، ہاتھی، پینگوئن، طوطے، سمندری کچھوے… جو بھی پیارا یا حیران کن ہے، یہاں ملے گا۔",
    "home.more": "ہمارے بارے میں مزید ←",
    "home.never.title": "کوئی ویڈیو مت چھوڑیں!",
    "home.never.text": "یوٹیوب پر ہر روز نئی ویڈیوز — سبسکرائب کریں تاکہ کوئی ویڈیو رہ نہ جائے۔",
    "videos.title": "مزاحیہ جانوروں کی ویڈیوز",
    "videos.intro": "ہماری مکمل ویڈیوز: حیران کن کہانیاں، سچے حقائق اور جانوروں کے مزاحیہ ترین لمحات، سب ایک جگہ۔",
    "filter.all": "سب",
    "filter.pets": "پالتو جانور",
    "filter.wildlife": "جنگلی حیات",
    "filter.extinct": "ناپید جانور",
    "shorts.title": "مزاحیہ جانوروں کی شارٹس",
    "shorts.intro": "چھوٹی ویڈیوز، بڑی ہنسی۔ کسی بھی شارٹ پر ٹیپ کریں اور 40 سیکنڈ خالص جانوروں کی خوشی سے لطف اٹھائیں۔",
    "blog.title": "وائلڈ لافس بلاگ",
    "blog.intro": "پڑھنے کے لیے کہانیاں، پالتو جانوروں کی دیکھ بھال کی تجاویز اور حیران کن حقائق — ہماری ویڈیوز کے ساتھی۔",
    "blog.read": "کہانی پڑھیں ←",
    "about.title": "وائلڈ لافس کے بارے میں",
    "about.story.h": "ہماری کہانی",
    "about.story.p": "وائلڈ لافس ایک سادہ خیال سے شروع ہوا: جانور دنیا کو خوش بھی کرتے ہیں اور سمجھدار بھی۔ گلگت بلتستان کے پہاڑوں میں واقع سکردو سے ہم خاندان دوست ویڈیوز بناتے ہیں جن میں اصل ہنسی کے ساتھ سچی معلومات ملتی ہے۔ ہر ویڈیو ایک حیران کن لمحے سے شروع ہوتی ہے، ایک چھوٹی سی کہانی سناتی ہے، اور اس جانور کے بارے میں سچے حقائق سکھاتی ہے۔",
    "about.post.h": "ہم کیا پوسٹ کرتے ہیں",
    "about.post.1": "مزاحیہ شارٹس — خالص جانوروں کی خوشی کے 40 سیکنڈ، دن میں دو بار۔",
    "about.post.2": "روزانہ ایک لمبی ویڈیو — حیران کن جانوروں کی کہانیاں اور حقائق، تقریباً 15 منٹ۔",
    "about.post.3": "پالتو جانوروں کی معلوماتی سیریز — نسلیں، صحت کی بنیادی باتیں اور جانوروں کا اعتماد جیتنا۔",
    "about.post.4": "روزانہ ایک کمیونٹی پوسٹ — ووٹ، جھلک اور مزاحیہ حقائق۔ کل کے ستارے کا انتخاب آپ کرتے ہیں!",
    "about.schedule.h": "روزانہ کا شیڈول (پاکستانی وقت)",
    "sched.time": "وقت",
    "sched.what": "آپ کو کیا ملتا ہے",
    "sched.1": "شارٹ — امریکہ کے دوستوں کے وقت کے مطابق",
    "sched.2": "کمیونٹی پوسٹ — ووٹ، جھلک یا مزاحیہ حقیقت",
    "sched.3": "شارٹ — پاکستان کے دوستوں کے وقت کے مطابق",
    "sched.4": "دن کی لمبی ویڈیو",
    "about.socials.h": "ہمیں ہر جگہ پائیں",
    "contact.title": "وائلڈ لافس سے رابطہ",
    "app.title": "وائلڈ لافس ایپ حاصل کریں",
    "footer.tagline": "مزاحیہ جانور، پیارے چھوٹے جانور اور حیران کن جانوروں کے حقائق — ہر روز۔",
    "footer.explore": "دیکھیں",
    "footer.follow": "وائلڈ لافس کو فالو کریں",
    "footer.rights": "وائلڈ لافس (@wildlaughsfunny)۔ دنیا بھر کے جانوروں سے محبت کرنے والوں کے لیے محبت سے بنایا گیا۔"
  }
};

function wlCurrentLang() {
  try {
    return localStorage.getItem("wl-lang") === "ur" ? "ur" : "en";
  } catch (e) {
    return "en";
  }
}

function wlApplyLang(lang) {
  var dict = I18N[lang] || I18N.en;
  document.documentElement.lang = lang === "ur" ? "ur" : "en";
  document.documentElement.dir = lang === "ur" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  if (typeof wlRenderFact === "function") wlRenderFact(lang);
  try {
    localStorage.setItem("wl-lang", lang);
  } catch (e) { /* private mode — ignore */ }
}

document.addEventListener("DOMContentLoaded", function () {
  wlApplyLang(wlCurrentLang());
  var btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.addEventListener("click", function () {
      wlApplyLang(wlCurrentLang() === "ur" ? "en" : "ur");
    });
  }
});
