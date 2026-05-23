/**
 * scroll-reveal.js — IntersectionObserver-based scroll reveal
 *
 * Source behavior: Elements with class .reveal start with opacity 0 and
 *   transform translateY(24px). When they enter the viewport, JS adds .visible
 *   which transitions them to opacity 1 / translateY(0).
 *   CSS defines these states in effects.css.
 *
 * Stagger: Elements that share the same parent container are automatically
 *   staggered using data-reveal-delay (ms). Manual override via the attribute.
 *
 * Usage:
 *   initScrollReveal()
 *   // or:
 *   initScrollReveal({ selector: '.reveal', staggerDelay: 80, threshold: 0.15 })
 *
 * HTML pattern:
 *   <div class="reveal">Appears on scroll</div>
 *   <div class="reveal" data-reveal-delay="160">Delayed by 160ms</div>
 */
function initScrollReveal(options) {
  var config = Object.assign({
    selector: '.reveal',
    staggerDelay: 80,
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  }, options || {});

  var elements = Array.from(document.querySelectorAll(config.selector));

  if (!elements.length) return;

  // ── Auto-stagger siblings that share the same parent ──────────────────────
  var groups = new Map();
  elements.forEach(function(el) {
    var parent = el.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent).push(el);
  });

  groups.forEach(function(group) {
    group.forEach(function(el, index) {
      // Only auto-assign if no manual delay is set
      if (!el.dataset.revealDelay) {
        el.dataset.revealDelay = index * config.staggerDelay;
      }
    });
  });

  // ── IntersectionObserver ───────────────────────────────────────────────────
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = parseInt(el.dataset.revealDelay, 10) || 0;
        setTimeout(function() {
          el.classList.add('visible');
        }, delay);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: config.threshold,
    rootMargin: config.rootMargin
  });

  elements.forEach(function(el) {
    observer.observe(el);
  });

  // ── Public API ─────────────────────────────────────────────────────────────
  return {
    observe: function(newEl) {
      newEl.classList.add('reveal');
      observer.observe(newEl);
    },
    refresh: function() {
      var newEls = Array.from(document.querySelectorAll(config.selector));
      newEls.forEach(function(el) {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    }
  };
}
