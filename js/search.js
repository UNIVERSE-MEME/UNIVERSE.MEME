window.PortalSearch = (() => {
  'use strict';

  function create({ C, el, state, Util, Portal }) {
    const DEV_TERMS = new Set(['github', 'readme', 'repo', 'repository', 'index', 'docs', 'doc']);

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
        Search.renderResults(Search.defaultPortalResults());

        requestAnimationFrame(() => {
          const input = document.getElementById('portalInput');
          if (input) input.focus();
        });
      },

      text(v) {
        return String(v || '').trim().toLowerCase();
      },

      terms(p) {
        const aliases = Array.isArray(p.aliases) ? p.aliases : [];
        return [
          p.label,
          p.route,
          p.desc,
          p.tag,
          p.alias,
          ...aliases
        ].map(Search.text).filter(Boolean);
      },

      isTag(p) {
        return p?.type === 'tag' || !!p?.tag || String(p?.alias || '').startsWith('#');
      },

      isGithub(p) {
        const route = Search.text(p?.route);
        return p?.type === 'github' || route.startsWith('universe-dao.html?doc=');
      },

      isPortal(p) {
        return !Search.isTag(p) && !Search.isGithub(p);
      },

      defaultPortalResults() {
        return (C.PORTALS || []).filter(p => Search.isPortal(p) && !p.hidden);
      },

      tagResults(q) {
        const query = Search.text(q).replace(/^#/, '');
        const needle = query ? `#${query}` : '#';

        return (C.PORTALS || []).filter(p => {
          if (!Search.isTag(p)) return false;
          if (!query) return true;

          const tag = Search.text(p.tag).replace(/^#/, '');
          const alias = Search.text(p.alias).replace(/^#/, '');
          const label = Search.text(p.label);

          return (
            tag.includes(query) ||
            alias.includes(query) ||
            label.includes(query) ||
            Search.terms(p).some(term => term.includes(needle))
          );
        });
      },

      githubResults(q) {
        const query = Search.text(q);

        return (C.PORTALS || []).filter(p => {
          if (!Search.isGithub(p)) return false;
          if (DEV_TERMS.has(query)) return true;
          return Search.terms(p).some(term => term.includes(query));
        });
      },

      portalResults(q) {
        const query = Search.text(q);
        if (!query) return Search.defaultPortalResults();

        return (C.PORTALS || []).filter(p => {
          if (!Search.isPortal(p)) return false;
          return Search.terms(p).some(term => term.includes(query));
        });
      },

      matchPortals(value) {
        if (!C.PORTALS.length) return [];

        const q = Search.text(value);
        if (!q) return Search.defaultPortalResults();

        if (q.startsWith('#')) return Search.tagResults(q);

        const tags = Search.tagResults(q);
        if (tags.length) return tags;

        const github = Search.githubResults(q);
        if (github.length) return github;

        return Search.portalResults(q);
      },

      renderResults(items) {
        if (!el.results) return;

        if (!items.length) {
          el.results.innerHTML = '';
          el.results.classList.remove('is-open');
          return;
        }

        el.results.innerHTML = items.map(p => {
          const type = Search.isTag(p) ? 'tag' : (Search.isGithub(p) ? 'github' : (p.type || 'portal'));

          return `
            <button
              class="portal-result portal-result-${type}"
              type="button"
              data-route="${Util.escapeHtml(p.route)}"
              data-label="${Util.escapeHtml(p.label)}"
              data-stage="${Util.escapeHtml(p.stage || '')}"
              data-portal="${p.portal ? 'true' : 'false'}">

              <span>
                <span class="portal-result-name">
                  ${Util.escapeHtml(p.tag || p.label)}
                </span>

                <span class="portal-result-desc">
                  ${Util.escapeHtml(p.desc || '')}
                </span>
              </span>

              <span class="portal-result-meta">
                <span class="portal-result-route portal-result-route-${type}">
                  ${Util.escapeHtml(String(p.route || '').split('/').pop().split('?')[0])}
                </span>
              </span>

            </button>
          `;
        }).join('');

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

      routeMatch(match) {
        if (!match) return;

        if (match.portal === true) {
          Portal.selectPortal('portal.html', match.label);
          Portal.setOpen(true);

          setTimeout(() => {
            Portal.post('PORTAL_NAVIGATE', {
              route: match.route,
              label: match.label
            });
          }, 120);

          return;
        }

        Portal.selectPortal(match.route, match.label, false, match.stage || '');
      },

      closeAfterEnter(input, didRoute) {
        Search.clearResults();

        if (input) {
          input.value = '';
          input.blur();
        }

        if (didRoute) {
          state.sliderMode = 'idle';
        }
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

        e.preventDefault();

        const value = input.value.trim();
        const match = value ? Search.matchPortals(value)[0] : null;

        if (!match) {
          Search.closeAfterEnter(input, false);
          return;
        }

        Search.routeMatch(match);

        requestAnimationFrame(() => {
          Search.clearResults();
          input.value = '';
          input.blur();
        });
      },

      handleResultClick(e) {
        const btn = e.target.closest('.portal-result');
        if (!btn) return;

        Search.routeMatch({
          route: btn.dataset.route,
          label: btn.dataset.label,
          stage: btn.dataset.stage || '',
          portal: btn.dataset.portal === 'true'
        });

        Search.clearResults();

        const input = document.getElementById('portalInput');
        if (input) input.blur();
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
