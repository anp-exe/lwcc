/* ============================================================================
   Renders the events and fixtures from js/lwcc-events.js.
   You should not need to edit this file. Edit js/lwcc-events.js instead.
   ============================================================================ */
(function () {
  var SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var LONG  = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function toDate(s) { return new Date(s + 'T12:00:00'); }

  function today() { var t = new Date(); t.setHours(0, 0, 0, 0); return t; }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function stillOn(item) {
    return toDate(item.ends || item.date) >= today();
  }

  function byDate(a, b) { return toDate(a.date) - toDate(b.date); }

  function upcomingEvents() {
    return (typeof LWCC_EVENTS === 'undefined' ? [] : LWCC_EVENTS).filter(stillOn).sort(byDate);
  }

  function upcomingFixtures() {
    return (typeof LWCC_FIXTURES === 'undefined' ? [] : LWCC_FIXTURES).filter(stillOn).sort(byDate);
  }

  function isRange(ev) {
    return !!ev.ends && toDate(ev.ends).getTime() !== toDate(ev.date).getTime();
  }

  function dayNumbers(ev) {
    var a = toDate(ev.date);
    if (isRange(ev)) {
      return a.getDate() + '<span class="rng">&ndash;</span>' + toDate(ev.ends).getDate();
    }
    return String(a.getDate());
  }

  function rangeClass(ev) { return isRange(ev) ? ' has-range' : ''; }

  function detailLine(ev) {
    return [ev.where, ev.time, ev.note].filter(Boolean).map(esc).join(' <span>&middot;</span> ');
  }

  var bannerEvent = null;

  /* ---- big featured banner, used on the home page and the events page ---- */
  function renderBanner(el) {
    var list = upcomingEvents();
    var ev = list.filter(function (e) { return e.featured; })[0] || list[0];
    bannerEvent = ev || null;
    if (!ev) { el.innerHTML = ''; el.style.display = 'none'; return; }
    var start = toDate(ev.date);
    var html = '<div class="event-card' + (ev.photo ? '' : ' no-photo') + '">' +
      '<div class="event-date">' +
        '<div class="day' + rangeClass(ev) + '">' + dayNumbers(ev) + '</div>' +
        '<div class="month">' + LONG[start.getMonth()] + '</div>' +
        '<div class="year">' + start.getFullYear() + '</div>' +
      '</div>' +
      '<div class="event-info">' +
        '<span class="label">Next up &middot; Featured</span>' +
        '<h3>' + esc(ev.title) + '</h3>' +
        '<p>' + detailLine(ev) + '</p>' +
      '</div>';
    html += ev.link
      ? '<a href="' + esc(ev.link) + '" class="btn-primary">' + esc(ev.cta || 'Find out more') + ' &rarr;</a>'
      : '<span></span>';
    if (ev.photo) {
      html += '<div class="scrapbook-photo"><span class="tape"></span>' +
              '<img src="' + esc(ev.photo) + '" alt="' + esc(ev.title) + '"></div>';
    }
    el.innerHTML = html + '</div>';
  }

  /* ---- the short list of one off events ----
     The event already sitting in the big banner is skipped, and the whole
     section hides itself when there is nothing else on, so the same event
     never appears twice. Add a second event and the section comes back. ---- */
  function renderEventList(el) {
    var list = upcomingEvents().filter(function (e) { return e !== bannerEvent; });
    var section = el.closest ? el.closest('section') : null;
    if (!list.length) {
      el.innerHTML = '';
      if (section) section.style.display = 'none';
      return;
    }
    if (section) section.style.display = '';
    el.innerHTML = list.map(function (ev) {
      var start = toDate(ev.date);
      return '<div class="event-row">' +
        '<div class="date"><div class="d' + rangeClass(ev) + '">' + dayNumbers(ev) + '</div>' +
        '<div class="m">' + SHORT[start.getMonth()] + '</div></div>' +
        '<div><h3>' + esc(ev.title) + '</h3><div class="meta">' + detailLine(ev) + '</div></div>' +
        (ev.link ? '<a href="' + esc(ev.link) + '" class="btn-secondary">' + esc(ev.cta || 'More') + '</a>' : '<span></span>') +
      '</div>';
    }).join('');
  }

  /* ---- season fixtures, soonest month open, rest behind a button ---- */
  function fixtureRow(f) {
    var dt = toDate(f.date);
    var neutral = f.ha === 'Neutral';
    var title = neutral ? esc(f.comp) + ': ' + esc(f.opp) : esc(f.team) + ' vs ' + esc(f.opp);
    var meta = neutral
      ? [f.team, f.venue, f.time].filter(Boolean).map(esc).join(' &middot; ')
      : [f.comp, f.venue, f.time].filter(Boolean).map(esc).join(' &middot; ');
    var tag = neutral ? 'fx-neutral' : (f.ha === 'Home' ? 'fx-home' : 'fx-away');
    return '<div class="fx-row">' +
      '<div class="fx-day"><span class="d">' + dt.getDate() + '</span>' +
      '<span class="m">' + SHORT[dt.getMonth()] + '</span></div>' +
      '<div class="fx-body"><h4>' + title + '</h4><div class="fx-meta">' + meta + '</div></div>' +
      '<span class="fx-tag ' + tag + '">' + esc(f.ha) + '</span>' +
    '</div>';
  }

  function renderFixtures(el) {
    var list = upcomingFixtures();
    if (!list.length) {
      el.innerHTML = '<p class="fx-note">No fixtures left on the calendar for this season.</p>';
      return;
    }
    var order = [], groups = {};
    list.forEach(function (f) {
      var dt = toDate(f.date);
      var key = dt.getFullYear() + '-' + dt.getMonth();
      if (!groups[key]) { groups[key] = []; order.push(key); }
      groups[key].push(f);
    });
    var html = order.map(function (key, i) {
      var parts = key.split('-');
      return '<div class="fx-group' + (i === 0 ? '' : ' fx-hidden') + '"' +
             (i === 0 ? '' : ' data-fx-rest="1"') + '>' +
             '<h3 class="fx-month">' + LONG[+parts[1]] + ' ' + parts[0] + '</h3>' +
             groups[key].map(fixtureRow).join('') +
             '</div>';
    }).join('');
    if (order.length > 1) {
      html += '<div class="fx-actions"><button type="button" class="fx-toggle" id="fxToggle">' +
              'Show the full season &rarr;</button></div>';
    }
    el.innerHTML = html;

    var btn = document.getElementById('fxToggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var rest = el.querySelectorAll('[data-fx-rest="1"]');
      var opening = rest.length && rest[0].classList.contains('fx-hidden');
      for (var i = 0; i < rest.length; i++) { rest[i].classList.toggle('fx-hidden', !opening); }
      btn.innerHTML = opening ? 'Show less &uarr;' : 'Show the full season &rarr;';
    });
  }

  function start() {
    var banner = document.getElementById('lwccBanner');
    var events = document.getElementById('lwccEvents');
    var fixtures = document.getElementById('lwccFixtures');
    if (banner) renderBanner(banner);
    if (events) renderEventList(events);
    if (fixtures) renderFixtures(fixtures);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
