/* Ink Hammer user guide: navigation, search, clickable tours, tabs, pictures.
   Works straight from the files (file://), no server. To add a page: write the
   .html (copy any page), add it to NAV below, run tools/build_docs_index.py. */
(function () {
  "use strict";

  var NAV = [
    ["Start", [
      ["index.html", "Welcome"],
      ["getting-started.html", "Install and first launch"],
      ["first-map.html", "Your first map"]
    ]],
    ["Using Ink Hammer", [
      ["interface.html", "The main window"],
      ["tools.html", "The tools"],
      ["cliffs.html", "Cliffs, dunes and hills"],
      ["walls.html", "Walls and buildings"],
      ["water.html", "Water and waterfalls"],
      ["layers.html", "Layers"],
      ["lighting.html", "Light and shadow"],
      ["export.html", "Exporting for play"]
    ]],
    ["Claude", [
      ["claude.html", "Connect Claude"]
    ]],
    ["Help", [
      ["whats-new.html", "What's new"],
      ["shortcuts.html", "Keyboard shortcuts"],
      ["troubleshooting.html", "Troubleshooting"]
    ]]
  ];
  var VERSION = "0.9.24 beta";

  document.documentElement.classList.remove("no-js");
  var here = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  var main = document.querySelector("main.doc");
  if (!main) return;

  function el(tag, attrs, html) {
    var e = document.createElement(tag);
    for (var k in attrs || {}) e.setAttribute(k, attrs[k]);
    if (html != null) e.innerHTML = html;
    return e;
  }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  // ---------------------------------------------------------- frame
  var side = el("aside", { id: "side" });
  var navHtml = "";
  var flat = [];
  NAV.forEach(function (g) {
    navHtml += "<h4>" + esc(g[0]) + "</h4>";
    g[1].forEach(function (p) {
      flat.push(p);
      navHtml += '<a href="' + p[0] + '"' + (p[0] === here ? ' class="on"' : "") + ">" + esc(p[1]) + "</a>";
    });
  });
  side.innerHTML =
    '<a class="brand" href="index.html"><img src="assets/icon.png" alt=""><div><b>Ink Hammer</b><span>User guide</span></div></a>' +
    '<div class="search"><input id="q" type="search" placeholder="Search the guide" autocomplete="off" aria-label="Search the guide"><kbd>/</kbd><div class="results" id="results"></div></div>' +
    '<nav id="nav">' + navHtml + "</nav>" +
    '<div class="foot">Ink Hammer ' + VERSION + ' &middot; <a href="https://anvilnink.com" target="_blank" rel="noopener">anvilnink.com</a></div>';
  var top = el("div", { id: "top" }, '<button type="button" aria-label="Menu">&#9776;</button><b>Ink Hammer guide</b>');
  var page = el("div", { id: "page" });
  main.parentNode.insertBefore(page, main);
  page.appendChild(main);
  document.body.insertBefore(top, page);
  document.body.insertBefore(side, top);
  top.querySelector("button").onclick = function () { document.body.classList.toggle("nav-open"); };

  // ---------------------------------------------------------- "New in" tags
  // <span class="since">New in 0.9.24</span>: online, latest.json says what is out,
  // so a tag for a version not released yet says so (offline the tag stays as written).
  function vnum(v) { return String(v).split("-")[0].split(".").map(function (x) { return parseInt(x, 10) || 0; }); }
  function vcmp(a, b) {
    var pa = vnum(a), pb = vnum(b);
    for (var i = 0; i < Math.max(pa.length, pb.length); i++) {
      var x = pa[i] || 0, y = pb[i] || 0;
      if (x !== y) return x < y ? -1 : 1;
    }
    return 0;
  }
  var tags = main.querySelectorAll(".since");
  if (tags.length && location.protocol.indexOf("http") === 0 && window.fetch) {
    fetch("latest.json", { cache: "no-store" }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) {
      if (!j || !j.stable) return;
      Array.prototype.forEach.call(tags, function (t) {
        var m = /(\d+\.\d+\.\d+)/.exec(t.textContent);
        if (!m) return;
        if (vcmp(m[1], j.stable.version) > 0) {
          t.classList.add("soon");
          t.title = "Not in the released version yet (latest: " + j.stable.version + "). Coming in the next update.";
          t.textContent = t.textContent + " (next update)";
        }
      });
    }).catch(function () {});
  }
  main.addEventListener("click", function () { document.body.classList.remove("nav-open"); });

  // heading anchors + "on this page"
  var heads = main.querySelectorAll("h2, h3");
  var used = {};
  heads.forEach(function (h) {
    if (!h.id) {
      var id = h.textContent.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      while (used[id]) id += "-2";
      h.id = id;
    }
    used[h.id] = 1;
    if (!h.closest(".tab") && !h.closest(".steps")) h.appendChild(el("a", { class: "anchor", href: "#" + h.id, "aria-hidden": "true" }, "#"));
  });
  var tocHeads = Array.prototype.filter.call(heads, function (h) { return !h.closest(".tab") && !h.closest("details"); });
  if (tocHeads.length > 2) {
    var toc = el("aside", { id: "toc" }, "<b>On this page</b>");
    tocHeads.forEach(function (h) {
      var t = h.cloneNode(true);
      var a0 = t.querySelector(".anchor, label");
      if (a0) a0.remove();
      toc.appendChild(el("a", { href: "#" + h.id, class: h.tagName.toLowerCase() }, esc(t.textContent.trim())));
    });
    page.appendChild(toc);
    var tocLinks = toc.querySelectorAll("a");
    var spy = function () {
      var cur = 0;
      tocHeads.forEach(function (h, i) { if (h.getBoundingClientRect().top < 120) cur = i; });
      tocLinks.forEach(function (a, i) { a.classList.toggle("on", i === cur); });
    };
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }

  // prev / next
  var idx = flat.findIndex(function (p) { return p[0] === here; });
  if (idx >= 0) {
    var pg = el("div", { class: "pager" });
    if (idx > 0) pg.appendChild(el("a", { href: flat[idx - 1][0] }, "<small>Previous</small>" + esc(flat[idx - 1][1])));
    if (idx < flat.length - 1) pg.appendChild(el("a", { href: flat[idx + 1][0], class: "next" }, "<small>Next</small>" + esc(flat[idx + 1][1])));
    main.appendChild(pg);
  }

  // ---------------------------------------------------------- search
  var q = document.getElementById("q");
  var res = document.getElementById("results");
  var INDEX = window.INK_SEARCH || [];
  var sel = -1;
  function run() {
    var s = q.value.trim().toLowerCase();
    sel = -1;
    if (!s) { res.classList.remove("open"); return; }
    var words = s.split(/\s+/);
    var hits = [];
    INDEX.forEach(function (d) {
      var title = (d.h || "").toLowerCase(), page = (d.p || "").toLowerCase(), body = (d.t || "").toLowerCase();
      var score = 0, all = true;
      words.forEach(function (w) {
        var sc = 0;
        if (title.indexOf(w) >= 0) sc += 10;
        if (page.indexOf(w) >= 0) sc += 3;
        if (body.indexOf(w) >= 0) sc += 1 + Math.min(4, body.split(w).length - 1) * 0.5;
        if (!sc) all = false;
        score += sc;
      });
      if (all) hits.push([score, d]);
    });
    hits.sort(function (a, b) { return b[0] - a[0]; });
    if (!hits.length) { res.innerHTML = '<div class="none">Nothing found for "' + esc(q.value) + '"</div>'; res.classList.add("open"); return; }
    res.innerHTML = hits.slice(0, 12).map(function (h) {
      var d = h[1], body = d.t || "", i = body.toLowerCase().indexOf(words[0]);
      var snip = i < 0 ? body.slice(0, 110) : (i > 40 ? "..." : "") + body.slice(Math.max(0, i - 40), i + 90);
      snip = esc(snip);
      words.forEach(function (w) { if (w.length > 1) snip = snip.replace(new RegExp("(" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
      return '<a href="' + d.u + '">' + esc(d.h) + "<small>" + esc(d.p) + "</small><em>" + snip + "</em></a>";
    }).join("");
    res.classList.add("open");
  }
  q.addEventListener("input", run);
  q.addEventListener("keydown", function (e) {
    var links = res.querySelectorAll("a");
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      sel = Math.max(0, Math.min(links.length - 1, sel + (e.key === "ArrowDown" ? 1 : -1)));
      links.forEach(function (a, i) { a.classList.toggle("on", i === sel); });
    } else if (e.key === "Enter" && links.length) {
      location.href = links[Math.max(sel, 0)].getAttribute("href");
    } else if (e.key === "Escape") {
      q.value = ""; run(); q.blur();
    }
  });
  document.addEventListener("click", function (e) { if (!e.target.closest(".search")) res.classList.remove("open"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement.tagName !== "INPUT") { e.preventDefault(); q.focus(); }
  });

  // ---------------------------------------------------------- pictures
  var lb = el("div", { id: "lightbox" }, "<img alt=''>");
  document.body.appendChild(lb);
  lb.onclick = function () { lb.classList.remove("open"); };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });
  main.querySelectorAll("figure.shot img, img.zoom").forEach(function (im) {
    im.addEventListener("click", function () { lb.querySelector("img").src = im.src; lb.classList.add("open"); });
  });

  // copy buttons
  main.querySelectorAll("pre").forEach(function (pre) {
    var b = el("button", { class: "copy", type: "button" }, "Copy");
    b.onclick = function () {
      var txt = pre.querySelector("code") ? pre.querySelector("code").innerText : pre.innerText.replace(/Copy(ied)?$/, "");
      var done = function () { b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1400); };
      if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(txt).then(done);
      else {
        var ta = el("textarea"); ta.value = txt; document.body.appendChild(ta); ta.select();
        try { document.execCommand("copy"); done(); } catch (e) {}
        ta.remove();
      }
    };
    pre.appendChild(b);
  });

  // ---------------------------------------------------------- tabs
  main.querySelectorAll(".tabs").forEach(function (box) {
    var tabs = box.querySelectorAll(":scope > .tab");
    var bar = el("div", { class: "tab-bar", role: "tablist" });
    var key = "tab:" + here + ":" + (box.id || "");
    function show(i) {
      tabs.forEach(function (t, j) { t.classList.toggle("on", i === j); });
      bar.querySelectorAll("button").forEach(function (b, j) { b.classList.toggle("on", i === j); });
      store(key, String(i));
      if (tabs[i].id && history.replaceState) history.replaceState(null, "", "#" + tabs[i].id);
    }
    tabs.forEach(function (t, i) {
      var b = el("button", { type: "button", role: "tab" }, esc(t.dataset.title) + (t.dataset.key ? " <kbd>" + esc(t.dataset.key) + "</kbd>" : ""));
      b.onclick = function () { show(i); };
      bar.appendChild(b);
    });
    box.insertBefore(bar, box.firstChild);
    var start = 0;
    tabs.forEach(function (t, i) { if (t.id && location.hash === "#" + t.id) start = i; });
    if (!location.hash && store(key)) start = Math.min(tabs.length - 1, +store(key) || 0);
    show(start);
    // a link to one tab: open it and show the tab bar, not the middle of the page
    if (tabs[start].id && location.hash === "#" + tabs[start].id) {
      var up = function () { box.scrollIntoView(); };
      setTimeout(up, 0);
      window.addEventListener("load", function () { setTimeout(up, 30); });
    }
  });

  // ---------------------------------------------------------- clickable tours
  // <div class="tour" data-shot="editor" data-img="img/editor.jpg"><ol class="tour-list">
  //   <li data-spot="rail"><b>Tool rail</b> text</li> ... </ol></div>
  // Where each part sits comes from assets/shots.js (written with the screenshots).
  main.querySelectorAll(".tour").forEach(function (tour) {
    var spots = ((window.INK_SHOTS || {})[tour.dataset.shot] || {}).spots || [];
    var byId = {};
    spots.forEach(function (s) { byId[s.id] = s; });
    var items = Array.prototype.filter.call(tour.querySelectorAll("li[data-spot]"), function (li) {
      return byId[li.dataset.spot] && !byId[li.dataset.spot].missing;
    });
    var frame = el("div", { class: "tour-frame" });
    var img = el("img", { src: tour.dataset.img, alt: tour.dataset.alt || "" });
    var box = el("div", { class: "tour-box" });
    frame.appendChild(img);
    frame.appendChild(box);
    var panel = el("div", { class: "tour-panel" },
      '<div><h4></h4><p></p></div><div class="tour-nav"><button type="button" data-d="-1" aria-label="Previous">&larr;</button><button type="button" data-d="1" aria-label="Next">&rarr;</button></div>');
    var cur = -1;
    var pins = [];
    function show(i) {
      cur = (i + items.length) % items.length;
      var s = byId[items[cur].dataset.spot];
      box.style.left = s.x + "%"; box.style.top = s.y + "%"; box.style.width = s.w + "%"; box.style.height = s.h + "%";
      box.classList.add("on");
      pins.forEach(function (p, j) { p.classList.toggle("on", j === cur); });
      var li = items[cur];
      var title = li.querySelector("b");
      panel.querySelector("h4").textContent = (cur + 1) + ". " + (title ? title.textContent : "");
      var body = li.cloneNode(true);
      var bt = body.querySelector("b");
      if (bt) bt.remove();
      panel.querySelector("p").innerHTML = body.innerHTML.trim();
    }
    items.forEach(function (li, i) {
      var s = byId[li.dataset.spot];
      var px = s.x + Math.min(s.w, 4) / 2, py = s.y + Math.min(s.h, 6) / 2;
      if (li.dataset.pin === "center") { px = s.x + s.w / 2; py = s.y + s.h / 2; }
      var pin = el("button", { class: "pin", type: "button", "aria-label": (li.querySelector("b") || li).textContent }, String(i + 1));
      pin.style.left = Math.min(98, Math.max(1.5, px)) + "%";
      pin.style.top = Math.min(97, Math.max(2.5, py)) + "%";
      pin.onclick = function () { show(i); };
      frame.appendChild(pin);
      pins.push(pin);
    });
    panel.querySelectorAll("button").forEach(function (b) { b.onclick = function () { show(cur + (+b.dataset.d)); }; });
    tour.insertBefore(panel, tour.firstChild);
    tour.insertBefore(frame, panel);
    tour.tabIndex = 0;
    tour.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
    if (items.length) show(0);
    else panel.querySelector("p").textContent = "Run the screenshot script to place the markers (see the README in this folder).";
  });

  // ---------------------------------------------------------- step lists with check-offs
  main.querySelectorAll("ol.steps[data-save]").forEach(function (ol) {
    var lis = ol.querySelectorAll(":scope > li");
    var bar = ol.previousElementSibling && ol.previousElementSibling.classList.contains("progress") ? ol.previousElementSibling.firstElementChild : null;
    function upd() {
      var n = ol.querySelectorAll(":scope > li.done").length;
      if (bar) bar.style.width = (100 * n / lis.length) + "%";
    }
    lis.forEach(function (li, i) {
      var h = li.querySelector("h3");
      var k = "step:" + ol.dataset.save + ":" + i;
      var lab = el("label", { class: "check" }, '<input type="checkbox"> Done');
      var cb = lab.querySelector("input");
      cb.checked = store(k) === "1";
      li.classList.toggle("done", cb.checked);
      cb.onchange = function () { li.classList.toggle("done", cb.checked); store(k, cb.checked ? "1" : "0"); upd(); };
      if (h) h.appendChild(lab);
    });
    upd();
  });

  // ---------------------------------------------------------- table filter (shortcuts)
  main.querySelectorAll("input.filter").forEach(function (f) {
    var rows = document.querySelectorAll(f.dataset.target + " tbody tr");
    f.addEventListener("input", function () {
      var s = f.value.trim().toLowerCase();
      rows.forEach(function (r) { r.style.display = !s || r.textContent.toLowerCase().indexOf(s) >= 0 ? "" : "none"; });
    });
  });
})();
