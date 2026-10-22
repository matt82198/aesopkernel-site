(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  var status = document.getElementById('copy-status');
  function setStatus(msg) {
    if (status) { status.textContent = msg; }
  }

  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest ? ev.target.closest('button[data-copy]') : null;
    if (!btn) { return; }
    var src = document.getElementById(btn.getAttribute('data-copy'));
    var text = src ? src.textContent.trim() : '';
    if (!text) { setStatus('Nothing to copy.'); return; }
    var done = function () { setStatus('Copied: ' + text); };
    var fail = function () { setStatus('Copy failed. Select the command and copy it by hand.'); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, fail);
      } else {
        fail();
      }
    } catch (e) {
      fail();
    }
  });
})();
