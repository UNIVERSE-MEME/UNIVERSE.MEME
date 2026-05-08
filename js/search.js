window.PortalSearch = (() => {
  'use strict';

  function create({ C, el, state, Util, Portal }) {
    const Search = {
      setSliderInput() {
        if (state.sliderMode !== 'input') {
          state.beforeSearch = {
            activePortal: state.activePortal,
            iframeSrc: el.iframe?.getAttribute('src') || ''
          };
        }

        state.sliderMode = 'input';
        el.middle.innerHTML = '<input id="portalInput" class="portal-input" placeholder="∞" autocomplete="off" spellcheck="false" />';
        el.memeDiv.classList.remove('collapsed', 'expanded', 'slider-context', 'slider-quiet');
        el.memeDiv.classList.add('slider-input');
        Search.renderResults(C.PORTALS.filter(p => !p.hidden));

        requestAnimationFrame(() => {
          const input = document.getElementById('portalInput');
          if (input) input.focus();
        });
      },

      matchPortals(value) {
        if (!C.PORTALS.length) return [];
        const q = String(value || '').trim().toLowerCase();
        if (!q) return [];

        return C.PORTALS.filter(p => {
          const aliases = Array.isArray(p.aliases) ? p.aliases : [];

          return (
            p.label.toLowerCase().includes(q) ||
            p.route.toLowerCase().includes(q) ||
            (p.desc || '').toLowerCase().includes(q) ||
            aliases.some(a => String(a).toLowerCase().includes(q))
          );
        });
      },

      renderResults(items) {
        if (!el.results) return;

        if (!items.length) {
          el.results.innerHTML = '';
          el.results.classList.remove('is-open');
          return;
        }

        el.results.innerHTML = items.map(p => `
          <button
            class="portal-result"
            type="button"
            data-route="${Util.escapeHtml(p.route)}"
            data-label="${Util.escapeHtml(p.label)}"
            data-stage="${Util.escapeHtml(p.stage || '')}">
            <span>
              <span class="portal-result-name">${Util.escapeHtml(p.label)}</span>
              <span class="portal-result-desc">${Util.escapeHtml(p.desc || '')}</span>
            </span>
            <span class="portal-result-route">${Util.escapeHtml(p.route.split('/').pop().split('?')[0])}</span>
          </button>
        `).join('');

        el.results.classList.add('is-open');
      },

      clearResults() {
        if (!el.results) return;
        el.results.innerHTML = '';
        el.results.classList.remove('is-open');
      },

      resetPortalSearch() {
        Search.clearResults();

        if (state.portalOpen) {
          const current = Portal.normalizeRoute(el.iframe?.getAttribute('src') || 'portal.html');
          const label = state.activePortal || Portal.labelFromRoute(current);
          const isPortal = current === Portal.normalizeRoute('portal.html');

          Portal.setSliderContext(label, isPortal);
        }
      },

      handleInput(e) {
        const input = e.target.closest('#portalInput');
        if (!input) return;
        if (document.activeElement !== input) return;

        Search.renderResults(Search.matchPortals(input.value));
      },

      handleKeydown(e) {
        const input = e.target.closest('#portalInput');
        if (!input) return;

        if (e.key === 'Escape') {
          e.preventDefault();
          Search.clearResults();

          const before = state.beforeSearch;
          state.beforeSearch = null;

          if (before?.iframeSrc) {
            const route = Portal.normalizeRoute(before.iframeSrc);
            const isPortal = route === Portal.normalizeRoute('portal.html');
            const label = isPortal ? 'UNIVERSE' : (before.activePortal || Portal.labelFromRoute(route));

            state.activePortal = label;
            Portal.setSliderContext(label, isPortal);
          } else if (state.activePortal) {
            const current = Portal.normalizeRoute(el.iframe?.getAttribute('src') || 'portal.html');
            const isPortal = current === Portal.normalizeRoute('portal.html');
            const label = isPortal ? 'UNIVERSE' : state.activePortal;

            Portal.setSliderContext(label, isPortal);
          } else {
            Portal.setOpen(false);
          }

          return;
        }

        if (e.key !== 'Enter') return;

        const value = input.value.trim();
        if (!value) return;

        const match = Search.matchPortals(value)[0];

        if (match) {
          Portal.selectPortal(match.route, match.label, false, match.stage || '');
          Search.clearResults();
          return;
        }

        const resolved = Portal.resolveInput(value);
        const route = Portal.normalizeRoute(resolved);

        if (resolved !== value) {
          Portal.setOpen(false);
          Portal.setSliderContext((value.split("_")[0] || "").toUpperCase(), false);
        }

        const label = resolved !== value
          ? (value.split("_")[0] || "CODEX").toUpperCase()
          : Portal.labelFromRoute(route);

        if (route) {
          Portal.selectPortal(route, label, false, '');
        }

        Search.clearResults();
      },

      handleResultClick(e) {
        const btn = e.target.closest('.portal-result');
        if (!btn) return;

        Portal.selectPortal(
          btn.dataset.route,
          btn.dataset.label,
          false,
          btn.dataset.stage || ''
        );

        Search.clearResults();
      },

      bind() {
        el.middle.addEventListener('input', Search.handleInput);
        el.middle.addEventListener('keydown', Search.handleKeydown);

        if (el.results) {
          el.results.addEventListener('click', Search.handleResultClick);
        }
      }
    };

    return Search;
  }

  return { create };
})();
