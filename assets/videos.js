/* Wild Laughs — video catalogue + renderers.
   To add a video: paste its YouTube ID, title and category into VIDEOS (long)
   or SHORTS below. The home, videos and shorts pages update automatically. */

var VIDEOS = [
  {
    id: "63Q3TePd9xY",
    title: "This Dog Can Smell Your Feelings?! 🐶 Amazing Dog Secrets & Care Guide",
    category: "Pets"
  },
  {
    id: "p1IZtscLZcU",
    title: "Giant Animals That Vanished From Earth! 🦣 Megalodon, T. Rex & The Woolly Mammoth",
    category: "Extinct"
  },
  {
    id: "5MNG8GmUDWg",
    title: "Amazing Giraffe Facts",
    category: "Wildlife"
  }
];

var SHORTS = [
  { id: "aZbgBojGIq8", title: "This Baby Elephant Made Its Own Shower! 🐘", category: "Wildlife" },
  { id: "tiaInWZ98Eg", title: "This Baby Sea Turtle Raced to the Ocean! 🐢", category: "Ocean" },
  { id: "-kvxBB-wjAo", title: "This Fox Dived Headfirst Into Snow! 🦊", category: "Wildlife" },
  { id: "GIAuUxxMflM", title: "This Hedgehog Is Too Adorable! 🦔", category: "Wildlife" },
  { id: "oUx_0VmJHfk", title: "This German Shepherd Is So Loyal! 🐕", category: "Pets" },
  { id: "tIUzH5JqhUo", title: "This Puppy Has the Busiest Day Ever! 🐶", category: "Pets" },
  { id: "6fgbPlqdbco", title: "This Cat Wears Sunglasses?! 😎", category: "Pets" },
  { id: "uOp7NTeArkQ", title: "This Cat and Dog Are Best Friends! 🐱🐶", category: "Pets" },
  { id: "xuPJadW2Kys", title: "This Penguin Waddles Like a Boss! 🐧", category: "Birds" },
  { id: "HiKwE10gmNg", title: "This Parrot Talks Back! 🦜", category: "Birds" },
  { id: "iZK7QUxtKK4", title: "This Panda Is Too Cute to Handle! 🐼", category: "Wildlife" },
  { id: "q-hXkcDBrF8", title: "This Dolphin Jumps for Joy! 🐬", category: "Ocean" },
  { id: "TJbapL4a_1g", title: "This Horse Runs Like the Wind! 🐴", category: "Wildlife" },
  { id: "k0jdvRk7HPQ", title: "This Bunny Nibbles Everything! 🐰", category: "Pets" },
  { id: "UlOjaaKYCTU", title: "This Monkey Is Up to Mischief! 🐵", category: "Wildlife" },
  { id: "x0bpq6GxbM8", title: "This Octopus Is a Master of Disguise! 🐙", category: "Ocean" }
];

/* ---------- click-to-play facade builder ---------- */

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function facadeHtml(video, vertical) {
  var t = escapeHtml(video.title);
  return (
    '<article class="card' + (vertical ? " card-vertical" : "") + '">' +
      '<div class="yt-facade' + (vertical ? " yt-facade-vertical" : "") + '"' +
        ' data-yt="' + video.id + '" role="button" tabindex="0"' +
        ' aria-label="Play video: ' + t + '">' +
        '<img src="https://i.ytimg.com/vi/' + video.id + '/hqdefault.jpg"' +
          ' alt="' + t + '" loading="lazy" width="' + (vertical ? 360 : 480) + '" height="' + (vertical ? 640 : 360) + '">' +
        '<span class="play-btn" aria-hidden="true">&#9654;</span>' +
      "</div>" +
      '<h3 class="card-title">' + t + "</h3>" +
      '<p class="card-cat">' + escapeHtml(video.category) + "</p>" +
    "</article>"
  );
}

/* ---------- page renderers (each runs only if its container exists) ---------- */

function renderInto(id, html) {
  var el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function renderHome() {
  if (document.getElementById("latest-videos")) {
    renderInto("latest-videos", VIDEOS.map(function (v) { return facadeHtml(v, false); }).join(""));
  }
  if (document.getElementById("best-of")) {
    var best = [VIDEOS[0], VIDEOS[1]];
    renderInto("best-of", best.map(function (v) { return facadeHtml(v, false); }).join(""));
  }
  if (document.getElementById("home-shorts")) {
    renderInto("home-shorts", SHORTS.slice(0, 8).map(function (v) { return facadeHtml(v, true); }).join(""));
  }
}

function renderVideosPage(filter) {
  var grid = document.getElementById("videos-grid");
  if (!grid) return;
  var list = (!filter || filter === "All")
    ? VIDEOS
    : VIDEOS.filter(function (v) { return v.category === filter; });
  grid.innerHTML = list.length
    ? list.map(function (v) { return facadeHtml(v, false); }).join("")
    : '<p class="empty-note">No videos in this category yet — check back tomorrow!</p>';

  var buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderVideosPage(btn.getAttribute("data-filter"));
    });
  });
}

function renderShortsPage() {
  renderInto("shorts-grid", SHORTS.map(function (v) { return facadeHtml(v, true); }).join(""));
}

document.addEventListener("DOMContentLoaded", function () {
  renderHome();
  renderVideosPage("All");
  renderShortsPage();
});
