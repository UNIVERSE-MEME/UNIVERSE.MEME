/* js/mobile-gestures.js */
(() => {
  'use strict';

  const C = {
    HOLD_TO_DRAG_MS: 220,
    MOVE_CANCEL_TAP_PX: 14,
    CLICK_SUPPRESS_MS: 450
  };

  const state = {
    enabled: false,
    active: false,
    holding: false,
    dragging: false,
    suppressClickUntil: 0,

    pointerId: null,
    holdTimer: null,

    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
    x: 0,
    y: 0,

    dx: 0,
    dy: 0,
    totalDx: 0,
    totalDy: 0,
    vx: 0,
    vy: 0,

    startTime: 0,
    lastTime: 0,
    target: null,
    nodeTarget: null,
    lastGesture: 'none'
  };

  const MobileGestures = {
    init() {
      state.enabled = MobileGestures.isTouchDevice();
      if (!state.enabled) return false;

      const targets = [
        document.getElementById('frame'),
        document.getElementById('viz'),
        document.getElementById('codexCenter'),
        document.getElementById('diagramWrap')
      ].filter(Boolean);

      targets.forEach(el => {
        MobileGestures.applyCss(el);

        el.addEventListener('pointerdown', MobileGestures.onPointerDown, { passive: false });
        el.addEventListener('pointermove', MobileGestures.onPointerMove, { passive: false });
        el.addEventListener('pointerup', MobileGestures.onPointerUp, { passive: false });
        el.addEventListener('pointercancel', MobileGestures.onPointerCancel, { passive: false });
      });

      return true;
    },

    isTouchDevice() {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia?.('(pointer: coarse)').matches
      );
    },

    applyCss(el) {
      el.style.touchAction = 'none';
      el.style.overscrollBehavior = 'none';
      el.style.userSelect = 'none';
      el.style.webkitUserSelect = 'none';
      el.style.webkitTouchCallout = 'none';
    },

    onPointerDown(e) {
      if (!state.enabled || e.pointerType === 'mouse') return;

      state.active = true;
      state.holding = false;
      state.dragging = false;
      state.pointerId = e.pointerId;
      state.target = e.target;
      state.nodeTarget = e.target.closest?.('.node') || null;

      state.startX = e.clientX;
      state.startY = e.clientY;
      state.lastX = e.clientX;
      state.lastY = e.clientY;
      state.x = e.clientX;
      state.y = e.clientY;

      state.dx = 0;
      state.dy = 0;
      state.totalDx = 0;
      state.totalDy = 0;
      state.vx = 0;
      state.vy = 0;

      state.startTime = performance.now();
      state.lastTime = state.startTime;
      state.lastGesture = 'pending';

      clearTimeout(state.holdTimer);

      state.holdTimer = setTimeout(() => {
        if (!state.active) return;

        state.holding = true;
        state.dragging = !!state.nodeTarget;
        state.lastGesture = state.dragging ? 'hold-drag-start' : 'hold';

        if (state.dragging) {
          state.suppressClickUntil = performance.now() + C.CLICK_SUPPRESS_MS;

          window.dispatchEvent(new CustomEvent('meme-mobile-node-drag-start', {
            detail: MobileGestures.getState()
          }));
        }
      }, C.HOLD_TO_DRAG_MS);

      try {
        e.currentTarget.setPointerCapture?.(e.pointerId);
      } catch (_) {}
    },

    onPointerMove(e) {
      if (!state.enabled || !state.active) return;
      if (state.pointerId !== null && e.pointerId !== state.pointerId) return;

      const now = performance.now();

      state.x = e.clientX;
      state.y = e.clientY;
      state.dx = state.x - state.lastX;
      state.dy = state.y - state.lastY;
      state.totalDx = state.x - state.startX;
      state.totalDy = state.y - state.startY;

      const dt = Math.max(1, now - state.lastTime);
      state.vx = state.dx / dt;
      state.vy = state.dy / dt;

      const distance = Math.hypot(state.totalDx, state.totalDy);

      if (!state.holding && distance > C.MOVE_CANCEL_TAP_PX) {
        clearTimeout(state.holdTimer);
        state.lastGesture = 'move-before-hold';
      }

      if (state.dragging) {
        e.preventDefault();
        e.stopPropagation();

        state.suppressClickUntil = performance.now() + C.CLICK_SUPPRESS_MS;

        window.dispatchEvent(new CustomEvent('meme-mobile-node-drag', {
          detail: MobileGestures.getState()
        }));
      }

      state.lastX = state.x;
      state.lastY = state.y;
      state.lastTime = now;
    },

    onPointerUp(e) {
      if (!state.enabled || !state.active) return;
      if (state.pointerId !== null && e.pointerId !== state.pointerId) return;

      clearTimeout(state.holdTimer);

      if (state.dragging) {
        state.lastGesture = 'hold-drag-end';
        state.suppressClickUntil = performance.now() + C.CLICK_SUPPRESS_MS;

        e.preventDefault();
        e.stopPropagation();

        window.dispatchEvent(new CustomEvent('meme-mobile-node-drag-end', {
          detail: MobileGestures.getState()
        }));
      } else {
        state.lastGesture = 'tap';
      }

      MobileGestures.resetPointer();
    },

    onPointerCancel(e) {
      if (!state.enabled) return;

      clearTimeout(state.holdTimer);

      if (state.dragging) {
        window.dispatchEvent(new CustomEvent('meme-mobile-node-drag-end', {
          detail: MobileGestures.getState()
        }));
      }

      state.suppressClickUntil = performance.now() + C.CLICK_SUPPRESS_MS;
      state.lastGesture = 'cancel';

      MobileGestures.resetPointer();
    },

    resetPointer() {
      state.active = false;
      state.holding = false;
      state.dragging = false;
      state.pointerId = null;
      state.target = null;
      state.nodeTarget = null;
      state.dx = 0;
      state.dy = 0;
      state.totalDx = 0;
      state.totalDy = 0;
    },

    isEnabled() {
      return state.enabled;
    },

    isHolding() {
      return state.holding;
    },

    isDragging() {
      return state.dragging;
    },

    shouldSuppressClick() {
      return performance.now() < state.suppressClickUntil;
    },

    consumeSuppressClick() {
      const suppress = MobileGestures.shouldSuppressClick();
      if (suppress) state.suppressClickUntil = 0;
      return suppress;
    },

    getState() {
      return {
        enabled: state.enabled,
        active: state.active,
        holding: state.holding,
        dragging: state.dragging,
        gesture: state.lastGesture,
        target: state.target,
        nodeTarget: state.nodeTarget,
        x: state.x,
        y: state.y,
        dx: state.dx,
        dy: state.dy,
        totalDx: state.totalDx,
        totalDy: state.totalDy,
        vx: state.vx,
        vy: state.vy
      };
    }
  };

  window.MemeMobileGestures = MobileGestures;

  document.addEventListener('click', e => {
    if (!window.MemeMobileGestures?.shouldSuppressClick()) return;

    const blocked = e.target.closest(
      '#frame, #viz, #codexCenter, .node, .badge, .codexline, .codexnote'
    );

    if (!blocked) return;

    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => MobileGestures.init());
  } else {
    MobileGestures.init();
  }
})();