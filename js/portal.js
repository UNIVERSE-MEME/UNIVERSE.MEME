const BASE_W = 650;
const wrap = document.querySelector('.scale-wrap');
const inner = document.querySelector('.scale-inner');

function rescale(){
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  const embedded = document.documentElement.classList.contains('embedded');
  const s = embedded ? 1 : Math.min(vw / BASE_W, 1);
  document.documentElement.style.setProperty('--scale', s);
  document.documentElement.style.setProperty('--frameH', vh + 'px');
  if (embedded) {
    if (wrap) wrap.style.height = vh + 'px';
    if (inner) inner.style.height = vh + 'px';
  } else {
    if (wrap && inner) wrap.style.height = (inner.scrollHeight * s) + 'px';
  }
  requestAnimationFrame(updateContentHeight);
}

addEventListener('resize', rescale, { passive:true });
addEventListener('load', rescale);

const portalNav = document.getElementById('portalNav');
const menuBtn = document.getElementById('menuBtn');

function setNavVisible(visible){
  if(!portalNav) return;
  portalNav.classList.toggle('is-hidden', !visible);
  const dash = document.querySelector('.dash-shell');
  if(dash){
    dash.style.gridTemplateColumns = visible ? '0.55fr 1.65fr' : '1fr';
  }
  rescale();
}

let navVisible = true;
setNavVisible(navVisible);

menuBtn?.addEventListener('click', ()=>{
  navVisible = !navVisible;
  setNavVisible(navVisible);
});

const DEFAULT_CONTEXT_HTML = `
  <div class="card universe-card">

    <div class="verse-block">
      <div class="verse-label">VERSE</div>
      <div class="verse-text">
        Consensus to master the Infinite Game<br>
        <span class="track">UNIVERSE</span> provides the ultimate frame
      </div>
    </div>

    <details class="frame" id="memeFrame">
      <summary>UNIVERSE.MEME</summary>

      <!-- keep banner = slider only -->
      <div class="meme-banner">
        <div class="meme-sliding expanded" id="memeSliding" aria-label="UNI MEME VERSE">
          <span class="meme-uni-green">UNI</span>
          <span class="meme-middle" id="memeMiddle">&nbsp;&nbsp;MEME&nbsp;&nbsp;</span>
          <span class="meme-verse-green">VERSE</span>
        </div>
      </div>
      <div class="meme-divider" aria-hidden="true"></div>
      <!-- explainer goes OUTSIDE meme-banner so it stays in details body -->
      <div class="stack">
        <p>
          <span class="kicker">UNI</span><b>t</b> – 1976 Dawkins' MEME of cultural transmission<br>
          <span class="kicker">UNI</span><b>te</b> &nbsp;–&nbsp; unified, aligned direction and shared vision<br>
          <span class="kicker">UNI</span><b>que</b> &nbsp;&nbsp;–&nbsp;&nbsp; irreducible creativity of individual minds
        </p>
        <br>
        <p>
          <span class="kicker">VERSE</span> is the virtual space where meaning emerges,<br>
          &nbsp; experienced & felt as poetic-philosophical &nbsp;&nbsp;<span class="verse-poem">VERSE</span>
        </p>
      </div>
    </details>

    <details class="frame">
      <summary>COMMON</summary>
      <div class="stack center">
        <p>
          <span class="kicker">UNIVERSE</span> act as lowest common denominator,
          a word<br> humans already understand as including and binding us.<br><br>
          <b>no explanation  &emsp;no onboarding &emsp; no translation</b><br><br>
          This unique simplicity can mean anything, everywhere.<br>
          <b>The MEME is the Portal to our COMMON Future.</b>
        </p>
      </div>
    </details>

    <details class="frame">
      <summary>METAVERSE</summary>
      <div class="stack">
        <p>
          <span class="kicker">UNIVERSE</span>
           is a inclusive, immersive multiverse where realities, perspectives, creativity & meta-worlds coexist.
        </p>
        <p>
          Cultures <b>explore</b>, <b>learn</b> & <b>coordinate</b>
          through <b>shared meaning</b> and <b>responsibility,</b>
           <b>guided</b> by a clear  <b>vision</b>.
        </p>
      </div>
    </details>

    <div class="footer-note">Welcome to the Portal of Possible</div>

  </div>
`;

const stageConfig = {
  "1.1":  { tag:"#portal", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.1 — #portal", summary:"Entry gate — teleport into UNIVERSE via coordinates.", page:"portals/portals.html" },
  "1.2":  { tag:"#rabbit-hole", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.2 — #rabbit-hole", summary:"Moral calibration — a VERSE to detect cognitive traps", page:"portals/rabbit-hole.html" },
  "1.3":  { tag:"#q&a", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.3 — #q&a", summary:"Clarity VERSE — transforms questions into meaning.", page:"portals/echo.html" },
  "1.4":  { tag:"#black-magic", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.4 — #black-magic", summary:"Cultural Immunity — detects and neutralizes manipulation.", page:"portals/black-magic.html"  },
  "1.5":  { tag:"#PhD", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--blue)", title:"1.5 — #PhD", summary:"Meaning VERSE — philosophy built as a public good", page:"portals/PhD.html" },
  "1.6":  { tag:"#PoM", section:"1", lane:"orange", step:1, version:"v3", live:true, labelColor:"var(--orange)", title:"1.6 — #PoM", summary:"Proof of Meaning — cultural momentum mechanics without manipulation." , page:"portals/PoM.html" },
  "1.7":  { tag:"$UNIVERSE", section:"1", lane:"green", step:3, version:"v1", live:true, labelColor:"var(--green)", title:"1.7 — $UNIVERSE (root navigation)", summary:"$UNIVERSE is the root. Start here to orient, then teleport via # portals.", page:"portals/$universe.html" },
  "1.8":  { tag:"#burn", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.8 — #burn", summary:"Symbolic reset — intentional release, not destruction.", page:"portals/burn.html" },
  "1.9":  { tag:"#airdrop", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.9 — #airdrop", summary:"", page:"portals/airdrop.html" },
  "1.10":  { tag:"#launchpad", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.10 — #launchpad", summary:"Activation gateway — bring aligned ideas into the world." },
  "1.11": { tag:"#revshear", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.11 — #revshear", summary:"Value logic — connect memes, contribution & economic flow." },
  "1.12":  { tag:"#NFT", section:"1", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"1.12 — #NFT", summary:"Cultural artifacts — create and exchange meaningful digital objects." },

  "2.1":  { tag:"#vow", section:"2", lane:"orange", step:1, version:"v1", live:true, labelColor:"var(--orange)", title:"2.1 — #vow", summary:"Responsibility layer — signal care from self → circle → community → humanity." },
  "2.2":  { tag:"#guide", section:"2", lane:"orange", step:1, version:"v1", live:true, labelColor:"var(--orange)", title:"2.2 — #guide", summary:"Civic navigation — how shared intent becomes coordinated action." },
  "2.3":  { tag:"#common", section:"2", lane:"orange", step:1, version:"v1", live:true, labelColor:"var(--orange)", title:"2.3 — #common", summary:"Moral compass — shared meaning, belief, ritual, and coherence." },
  "2.4":  { tag:"#equilibrium", section:"2", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"2.4 — #equilibrium", summary:"Ledger of balance — value, contribution, demand, exchange, regeneration." },
  "2.5":  { tag:"#success", section:"2", lane:"orange", step:1, version:"v1", live:true, labelColor:"var(--orange)", title:"2.5 — #success", summary:"Pulse of meaning — coherence signals: joy, purpose, rhythm, recognition." },
  "2.6":  { tag:"#comud", section:"2", lane:"orange", step:1, version:"v1", live:true, labelColor:"var(--orange)", title:"2.6 — #comud", summary:"Coherence mirror — body, mind, heart, energy, social purpose." },
  "2.7": { tag:"#moderation", section:"2", lane:"blue", step:3, version:"v1", live:true, labelColor:"var(--blue)", title:"2.7 — #moderation", summary:"Cultural immune system — protect alignment without coercion." },
  "2.8":  { tag:"#SIG", section:"2", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"2.8 — #SIG", summary:"Signature / signal layer — human-readable, verifiable proof of authorship and intent." },
  "2.9":  { tag:"#UIP", section:"2", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"2.9 — #UIP", summary:"Universe Improvement Proposals — ideas evolve into protocol-grade signals." },

  "3.1":  { tag:"#meme_os", section:"3", lane:"orange", step:1, version:"v2", live:false, labelColor:"var(--orange)", title:"3.1 — #meme_os", summary:"Memetic operating system — culture as coordination infrastructure.", page:"portals/meme_os.html" },
  "3.2":  { tag:"#mindforger", section:"3", lane:"orange", step:1, version:"v2", live:true, labelColor:"var(--orange)", title:"3.2 — #mindforger", summary:"MINDFORGER — perception rituals, handouts, and mirror-tools for moral cognition." },
  "3.3":  { tag:"#ai-ethics", section:"3", lane:"green", step:2, version:"v1", live:true, labelColor:"var(--gray)", title:"3.3 — #ai-ethics", summary:"AI ethics — alignment, safety, and responsible memetic systems." },
  "3.4":  { tag:"#TTE", section:"3", lane:"blue", step:3, version:"v1", live:false, labelColor:"var(--blue)", title:"3.4 — #TTE", summary:"The Truth Engine — dedicated lane inside MEME_OS (alpha later stage).", page:"portals/tte.html"  },
  "3.5":  { tag:"#THG", section:"3", lane:"blue", step:3, version:"v1", live:false, labelColor:"var(--blue)", title:"3.5 — #THG", summary:"The Holy Grail — crucial problem solving via consensus (working title)." },
  "3.6":  { tag:"#DSM", section:"3", lane:"blue", step:3, version:"v1", live:false, labelColor:"var(--blue)", title:"3.6 — #DSM (prototype)", summary:"Dark Side of the Moon — prototype of healthier social feedback loops." },
  "3.7":  { tag:"#SCRS", section:"3", lane:"blue", step:3, version:"v1", live:false, labelColor:"var(--blue)", title:"3.7 — #SCRS", summary:"Smart Compliance & Resilient SaaS — verifiability without exposure (working title)." }
};

function parseVersionNumber(versionRaw){
  const v = (versionRaw || 'v1').toString().trim().toLowerCase();
  const m = v.match(/^v(\d+)$/);
  if (!m) return 1;
  const n = parseInt(m[1], 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
}

function phaseLabelFromLane(lane){
  if(lane === 'blue') return 'CODEX';
  if(lane === 'orange') return 'BUIDL';
  if(lane === 'green') return 'CONSENSUS';
  if(lane === 'ready') return 'READY';
  return (lane || '…').toUpperCase();
}

function laneColor(lane){
  if(lane === 'green') return 'var(--green)';
  if(lane === 'orange') return 'var(--orange)';
  if(lane === 'ready') return 'var(--darkgray)';
  return 'var(--blue)';
}

function verbForPhase(phase){
  if(phase === 'CODEX') return 'EXPLORED';
  if(phase === 'BUIDL') return 'SHAPED';
  if(phase === 'CONSENSUS') return 'ALIGNED';
  return '—';
}

function phaseColorFromPhase(phase){
  if(phase === 'CODEX') return 'var(--blue)';
  if(phase === 'BUIDL') return 'var(--orange)';
  if(phase === 'CONSENSUS') return 'var(--green)';
  if(phase === 'READY') return 'var(--darkgray)';
  return 'var(--text)';
}

function fullVerseTag(cfg){
  const raw = (cfg.tag || '#tag').toString();
  if(raw.startsWith('$')) return raw;
  const core = raw.replace(/^#/, '');
  return '#uni_' + core + '_verse';
}

function bannerMid(cfg){ return (cfg.tag || '#tag'); }

async function copyText(text){
  const t = String(text || '');
  try{
    if(navigator.clipboard && window.isSecureContext){
      await navigator.clipboard.writeText(t);
      return true;
    }
  } catch(e){}
  try{
    const ta = document.createElement('textarea');
    ta.value = t;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    ta.style.top = '0';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, ta.value.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch(e){
    return false;
  }
}

function attachCopyHandlers(root){
  const clickables = root.querySelectorAll('[data-tag]');
  clickables.forEach(el=>{
    el.addEventListener('click', async ()=>{
      const value = el.getAttribute('data-tag');
      if(!value) return;
      const ok = await copyText(value);
      const icon = el.classList && el.classList.contains('copy-btn') ? el : (el.closest ? el.closest('.copy-btn') : null);
      if(icon){
        if(!icon.dataset.baseGlyph) icon.dataset.baseGlyph = (icon.textContent || '⧉').trim() || '⧉';
        icon.textContent = ok ? '✔︎' : icon.dataset.baseGlyph;
        icon.classList.add('copied');
        setTimeout(()=>{
          icon.classList.remove('copied');
          icon.textContent = icon.dataset.baseGlyph;
        }, ok ? 1100 : 900);
      }
    });
  });
}

let portalInterval = null;
let portalCurrentText = "#portal";

function stopPortalLoop(){
  if(portalInterval){
    clearInterval(portalInterval);
    portalInterval = null;
  }
}

function pulsePortalOnce(){
  const wrapEl = document.getElementById('portalSliding');
  const mid  = document.getElementById('portalMiddle');
  if(!wrapEl || !mid) return;
  wrapEl.classList.remove('expanded');
  wrapEl.classList.add('collapsed');
  setTimeout(()=>{
    mid.textContent = portalCurrentText;
    wrapEl.classList.remove('collapsed');
    wrapEl.classList.add('expanded');
  }, 3000);
}

function startPortalLoop(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduce) return;
  stopPortalLoop();
  pulsePortalOnce();
  portalInterval = setInterval(pulsePortalOnce, 8000);
}

const stageListEl = document.getElementById('stageList');
if(stageListEl) stageListEl.hidden = true;

function setStageListVisible(show){
  if(!stageListEl) return;
  stageListEl.hidden = !show;
  stageListEl.style.display = show ? '' : 'none';
  if(!show) stageListEl.replaceChildren();
}


function syncStageListVisibility(){
  setStageListVisible(momentumIsActive());
}

const universeBtn = document.getElementById('universeBtn');
const codexBtn = document.getElementById('codexBtn');
const momentumBtn = document.getElementById('momentumBtn');

const contextBody = document.getElementById('contextBody');
let activeRow = null;

function navIsActive(el){
  return !!(el && el.classList && el.classList.contains('is-active'));
}

function momentumIsActive(){
  return navIsActive(momentumBtn);
}

function applyNavDim(){
  const uOn = navIsActive(universeBtn);
  const cOn = navIsActive(codexBtn);
  const mOn = momentumIsActive();

  let activeEl = null;
  if(uOn) activeEl = universeBtn;
  else if(cOn) activeEl = codexBtn;
  else if(mOn) activeEl = momentumBtn;

  const els = [universeBtn, codexBtn, momentumBtn].filter(Boolean);
  const hasActive = !!activeEl;

  els.forEach(el=>{
    const isActive = hasActive && el === activeEl;
    el.style.opacity = isActive ? '1' : (hasActive ? '0.8' : '');
    el.style.filter = isActive ? 'none' : (hasActive ? 'saturate(0.8) brightness(0.95)' : '');
  });
}

const navObs = new MutationObserver(applyNavDim);
[universeBtn, codexBtn, momentumBtn].forEach(el=>{
  if(!el) return;
  navObs.observe(el, { attributes:true, attributeFilter:['class'] });
});
applyNavDim();

function initUniverseAccordion(){
  const root = document.getElementById('contextBody');
  if(!root) return;

  const card = root.querySelector('.universe-card');
  const verse = root.querySelector('.verse-block');
  const sections = Array.from(root.querySelectorAll('details.frame'));

  const memeFrameEl = root.querySelector('#memeFrame');
  const memeSummaryEl = memeFrameEl ? memeFrameEl.querySelector('summary') : null;
  const memeBannerEl  = memeFrameEl ? memeFrameEl.querySelector('.meme-banner') : null;

  const memeBannerHome = document.createElement('div');
  memeBannerHome.style.display = 'none';

  if(memeFrameEl && memeBannerEl){
    memeBannerEl.parentNode.insertBefore(memeBannerHome, memeBannerEl);
  }

  function setMemeHeader(open){
    if(!memeFrameEl || !memeSummaryEl || !memeBannerEl) return;

    if(!memeSummaryEl.dataset.baseHtml){
      memeSummaryEl.dataset.baseHtml = memeSummaryEl.innerHTML || 'UNIVERSE.MEME';
    }

    if(open){
      memeSummaryEl.innerHTML = '';
      memeSummaryEl.appendChild(memeBannerEl);
      const mid = memeBannerEl.querySelector('.meme-middle');
      if(mid) mid.style.textTransform = 'none';
    } else {
      memeSummaryEl.innerHTML = memeSummaryEl.dataset.baseHtml;
      const mid = memeBannerEl.querySelector('.meme-middle');
      if(mid) mid.style.textTransform = '';
      memeBannerHome.parentNode.insertBefore(memeBannerEl, memeBannerHome.nextSibling);
    }
  }

  function closeAll(){
    sections.forEach(d=>d.removeAttribute('open'));
  }

  function update(){
    const anyOpen = sections.some(d=>d.open);
    if(card) card.classList.toggle('is-verse-open', anyOpen);
  }


  let memeInterval = null;
  let memeTimeouts = [];


  const MEME_TRANSITION_MS = 2800;


  const MEME_HOLD_COLLAPSED_MS = 1000; 
  const MEME_HOLD_EXPANDED_MS  = 3000; 

  function clearMemeTimers(){
    memeTimeouts.forEach(t => clearTimeout(t));
    memeTimeouts = [];
    if(memeInterval){
      clearInterval(memeInterval);
      memeInterval = null;
    }
  }

  function stopMemeLoop(){
    clearMemeTimers();
  }

  function getMemeEls(){
    const wrap = document.getElementById('memeSliding');
    const frame = document.getElementById('memeFrame');
    if(!wrap || !frame) return null;
    return { wrap, frame };
  }

  function setMemeStateExpanded(expanded){
    const els = getMemeEls();
    if(!els) return;
    const { wrap, frame } = els;
    if(!frame.open) return;

    if(expanded){
      wrap.classList.remove('collapsed');
      wrap.classList.add('expanded');
    } else {
      wrap.classList.remove('expanded');
      wrap.classList.add('collapsed');
    }
  }

  function runMemeCycleOnce(holdCollapsedMs){
    const els = getMemeEls();
    if(!els) return;
    if(!els.frame.open) return;

    const hold = Number.isFinite(holdCollapsedMs) ? holdCollapsedMs : MEME_HOLD_COLLAPSED_MS;

    setMemeStateExpanded(false);

    memeTimeouts.push(setTimeout(()=>{
      const e2 = getMemeEls();
      if(!e2 || !e2.frame.open) return;

      setMemeStateExpanded(true);

      memeTimeouts.push(setTimeout(()=>{
        const e3 = getMemeEls();
        if(!e3 || !e3.frame.open) return;

        setMemeStateExpanded(false);
      }, MEME_TRANSITION_MS + MEME_HOLD_EXPANDED_MS));

    }, hold));
  }

  function startMemeLoop(){
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(reduce) return;

    stopMemeLoop();

    const els = getMemeEls();
    if(!els || !els.frame.open) return;

    runMemeCycleOnce(120);

    const cycleMs =
      MEME_HOLD_COLLAPSED_MS +
      MEME_TRANSITION_MS +
      MEME_HOLD_EXPANDED_MS +
      MEME_TRANSITION_MS;

    memeInterval = setInterval(()=>runMemeCycleOnce(), cycleMs);
  }

  if(verse){
    verse.addEventListener('click', ()=>{
      closeAll();
      stopMemeLoop();
      update();
    });
    verse.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        closeAll();
        stopMemeLoop();
        update();
      }
    });
  }

  sections.forEach(section=>{
    section.addEventListener('toggle', ()=>{
      if(section.open){
        sections.forEach(other=>{
          if(other !== section) other.removeAttribute('open');
        });
      }

      if(section.id === 'memeFrame'){
        setMemeHeader(section.open);
        if(section.open) startMemeLoop();
        else stopMemeLoop();
      } else {
        if(section.open) stopMemeLoop();
      }

      update();
    });
  });


  update();
}

function setUniverseActive(on){
  universeBtn?.classList.toggle('is-active', !!on);
}

function renderUniverseDefault(){
  setUniverseActive(true);
  setMomentumActive(false);

  syncStageListVisibility();

  codexBtn?.classList.remove('is-active');
  if(activeRow){
    activeRow.classList.remove('active');
    activeRow = null;
  }
  stopPortalLoop();
  closeMetaFloat();
  contextBody.innerHTML = DEFAULT_CONTEXT_HTML;
  initUniverseAccordion();

  rescale();
}

function setMomentumActive(on){
  momentumBtn?.classList.toggle('is-active', !!on);
}

const MOMENTUM_KEYS = [
  "1.1","1.2","1.3","1.4","1.5","1.6",
  "__DIVIDER__",
  "1.7","1.8","1.9","1.10","1.11","1.12",
  "__DIVIDER__",
  "3.1","3.4","3.5"
];

function makeDividerRow(){
  const d = document.createElement('div');
  d.className = 'stage-row stage-divider';
  d.style.pointerEvents = 'none';
  d.setAttribute('aria-hidden','true');
  return d;
}

function renderMomentum(){
  renderNonCodexView();
  setUniverseActive(false);
  codexBtn?.classList.remove('is-active');
  setMomentumActive(true);
  setSearchVisible(false);

  activeMode = 'momentum';
  syncStageListVisibility();

  if(stageListEl){
    stageListEl.replaceChildren();
  }

  for(const key of MOMENTUM_KEYS){
    if(key === "__DIVIDER__"){
      stageListEl.appendChild(makeDividerRow());
      continue;
    }
    const cfg = stageConfig[key];
    if(!cfg) continue;
    stageListEl.appendChild(makeRow(key, cfg));
  }

  renderLegendContext();

  stageListEl?.scrollTo?.({ top: 0, behavior: 'auto' });

  rescale();
}

if(momentumBtn){
  momentumBtn.addEventListener('click', renderMomentum);
  momentumBtn.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      renderMomentum();
    }
  });
}


function ringStrokeForStep(step){
  const s = Math.max(1, Math.min(3, Number(step || 1)));
  const circumference = 100;
  const len = (s / 3) * circumference;
  return { circumference, len };
}

function createRing(cfg){
  const lane = (cfg?.lane || "orange").toString();
  let step = Number(cfg?.step || 1);
  if(step < 1 || step > 3) step = 1;
  const color = laneColor(lane);

  const wrapEl = document.createElement('div');
  wrapEl.className = 'stage-ring';
  wrapEl.setAttribute('role','button');
  wrapEl.setAttribute('tabindex','0');
  wrapEl.setAttribute('aria-label','Status');

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS,"svg");
  svg.classList.add("ring-svg");
  svg.setAttribute("viewBox","0 0 36 36");

  const bg = document.createElementNS(svgNS,"circle");
  bg.setAttribute("class","stage-ring-bg");
  bg.setAttribute("cx","18");
  bg.setAttribute("cy","18");
  bg.setAttribute("r","15.915");

  const prog = document.createElementNS(svgNS,"circle");
  prog.setAttribute("class","stage-ring-progress");
  prog.setAttribute("cx","18");
  prog.setAttribute("cy","18");
  prog.setAttribute("r","15.915");

  const { circumference, len } = ringStrokeForStep(step);
  prog.style.strokeDasharray = `${len} ${circumference}`;
  prog.style.strokeDashoffset = 0;
  prog.style.stroke = color;

  svg.appendChild(bg);
  svg.appendChild(prog);
  wrapEl.appendChild(svg);

  const vNum = parseVersionNumber(cfg?.version || 'v1');
  const vDisplay = (vNum <= 1) ? 'V1' : 'V2';

  const isConsensus = lane === 'green';
  const isV1 = (String(cfg?.version || 'v1').toLowerCase() === 'v1');
  const isConsensusV1 = isConsensus && isV1;

  const consensusHide = isConsensusV1 && step === 1;
  const consensusLabelColor =
    isConsensusV1 && step === 2 ? 'var(--gray)' :
    isConsensusV1 && step === 3 ? 'var(--green)' :
    null;

  const hideLabel = consensusHide || !!cfg?.hideLabel;

  const defaultLabelColor = color;
  const labelColor =
    consensusLabelColor ||
    (cfg?.labelColor || defaultLabelColor);

  const labelEl = document.createElement('div');
  labelEl.className = 'stage-ring-label';
  labelEl.innerHTML = hideLabel ? '' : vDisplay;
  labelEl.style.color = labelColor;
  labelEl.style.textShadow = hideLabel ? 'none' : `0 0 8px ${labelColor}`;
  wrapEl.appendChild(labelEl);

  return wrapEl;
}

function createTagLabel(rawTag){
  const holder = document.createElement('span');
  holder.className = 'stage-tag';
  const raw = (rawTag || '#tag').toString();

  const hash = document.createElement('span');
  hash.className = 'tag-hash';

  const mid = document.createElement('span');
  mid.className = 'tag-core';

  if(raw.startsWith('$')){
    hash.textContent = '$';
    mid.textContent = raw.replace(/^\$/, '');
  } else {
    const coreRaw = raw.replace(/^#/, '');
    const coreDisplay = coreRaw.replace(/_/g,'-');
    hash.textContent = '#';
    mid.textContent = coreDisplay;
  }

  holder.append(hash, mid);
  return holder;
}

function makeRow(key, cfg){
  const row = document.createElement('div');
  row.className = 'stage-row';
  row.dataset.stageKey = key;

  const tag = (cfg.tag || '').toString();

  if(tag.startsWith('$')) row.classList.add('universe');
  if(tag.toLowerCase() === '#meme_os') row.classList.add('memeos');
  if(tag.toLowerCase() === '#portal') row.classList.add('portal');


  row.appendChild(createTagLabel(cfg.tag || '#stage'));
  row.appendChild(createRing(cfg));
  row.addEventListener('click', ()=> activateStage(key,row));
  return row;
}

const stageKeys = Object.keys(stageConfig).sort((a,b)=>{
  const pa = a.split('.').map(Number);
  const pb = b.split('.').map(Number);
  return (pa[0]-pb[0]) || ((pa[1]||0)-(pb[1]||0));
});

function renderSafeContextText(cfg){
  const title = cfg?.title ? escapeHtml(cfg.title) : 'PORTAL';
  const summary = cfg?.summary ? escapeHtml(cfg.summary) : 'Portals are coordinates — copy a tag to open a shared destination where meaning and action can converge.';
  return `
    <p style="margin:0 0 8px;color:rgba(255,255,255,.92);font-weight:800;letter-spacing:.3px">${title}</p>
    <p style="margin:0;color:rgba(220,220,220,.72)">${summary}</p>
  `;
}

const LEGEND_FLOATER = [
  { phase:'CODEX', step:1, version:'v1', head:'CODEX 1/3 V1', text:'Community needed to map philosophical meaning.' },
  { phase:'CODEX', step:2, version:'v1', head:'CODEX 2/3 V1', text:'Consensus forming — converge on philosophy.' },
  { phase:'CODEX', step:3, version:'v1', head:'CODEX 3/3 V1', text:'Consensus manifested into CODEX.' },
  { phase:'CODEX', step:1, version:'v2', head:'CODEX 1/3 V2', text:'Community needed to refine meaning — second iteration.' },
  { phase:'CODEX', step:2, version:'v2', head:'CODEX 2/3 V2', text:'Consensus reforming — iterate on philosophy.' },
  { phase:'CODEX', step:3, version:'v2', head:'CODEX 3/3 V2', text:'Consensus manifested into CODEX — V2 iteration.' },
  { phase:'BUIDL', step:1, version:'v1', head:'BUIDL 1/3 V1', text:'Community needed to translate CODEX into structure.' },
  { phase:'BUIDL', step:2, version:'v1', head:'BUIDL 2/3 V1', text:'System forming — components taking shape.' },
  { phase:'BUIDL', step:3, version:'v1', head:'BUIDL 3/3 V1', text:'Structure completed — system ready for alignment.' },
  { phase:'BUIDL', step:1, version:'v2', head:'BUIDL 1/3 V2', text:'Community needed to rebuild — second iteration.' },
  { phase:'BUIDL', step:2, version:'v2', head:'BUIDL 2/3 V2', text:'System reforming — iterate on structure.' },
  { phase:'BUIDL', step:3, version:'v2', head:'BUIDL 3/3 V2', text:'Structure completed — V2 system ready for alignment.' },
  { phase:'CONSENSUS', step:1, version:'v1', head:'CONSENSUS 1/3', text:'Community needed to align consensus.' },
  { phase:'CONSENSUS', step:2, version:'v1', gray:true, head:'CONSENSUS 2/3 V1', text:'Consensus aligned — community activation pending full functionality.' },
  { phase:'CONSENSUS', step:3, version:'v1', live:true, head:'CONSENSUS 3/3 V1 (LIVE)', text:'Consensus activated — full functionality live.' }
];

function legendTextFor(cfg){
  const phase = phaseLabelFromLane((cfg?.lane || 'blue').toString());
  const step  = Math.max(1, Math.min(3, Number(cfg?.step || 1)));
  const v     = (cfg?.version || 'v1').toString().toLowerCase();
  const live = !!cfg?.live;
  const gray = !!cfg?.gray || (String(cfg?.labelColor || '') === 'var(--gray)');

  return (
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === v && !!r.live === live && !!r.gray === gray) ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === v && !!r.live === live) ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === v) ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === 'v1') ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === 1 && r.version === 'v1') ||
    null
  );
}

function escapeHtml(s){
  return (s || '').toString().replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;");
}

function safePortalPath(raw){
  const fallback = 'portals/default.html';
  const s = (raw || '').toString().trim();
  if(!s) return fallback;
  if(s.includes('://')) return fallback;
  if(s.startsWith('//')) return fallback;
  if(s.startsWith('data:')) return fallback;
  if(s.startsWith('javascript:')) return fallback;
  if(s.includes('\\')) return fallback;
  if(s.includes('..')) return fallback;
  if(!s.startsWith('portals/')) return fallback;
  return s;
}

function stagePage(cfg){
  return safePortalPath(cfg?.page || '');
}

function updatePortalFrameSrc(cfg){
  const frame = document.getElementById('portalFrame');
  if(!frame) return;
  const next = stagePage(cfg);
  if(frame.getAttribute('src') !== next) frame.setAttribute('src', next);
}

function updateContentHeight(){
  const panel = document.querySelector('.context-panel');
  const frame = document.getElementById('portalFrame');
  if(!panel || !frame) return;

  const ph = panel.clientHeight || 0;
  if(ph <= 0) return;

  const banner = document.querySelector('.portal-banner');
  const row = document.getElementById('portalRowFrame');
  const safeText = document.getElementById('portalSafeText');

  const bh = banner ? banner.offsetHeight : 0;
  const rh = row ? row.offsetHeight : 0;
  const sh = safeText ? safeText.offsetHeight : 0;

  const paddingAllowance = 26;
  const minH = 220;
  const maxH = Math.max(minH, ph - bh - rh - sh - paddingAllowance);

  const capped = Math.max(minH, Math.min(495, maxH));
  document.documentElement.style.setProperty('--contentH', capped + 'px');
}

const metaFloat = document.getElementById('metaFloat');
const supportsHover = window.matchMedia('(hover:hover)').matches;
let metaPinned = null;
let metaAnchor = null;

function clamp(n, min, max){
  return Math.max(min, Math.min(max, n));
}

function positionMetaFloat(anchor){
  if(!metaFloat || !anchor) return;
  const rect = anchor.getBoundingClientRect();
  const margin = 10;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  metaFloat.style.left = '0px';
  metaFloat.style.top = '0px';

  const w = Math.min(380, vw - margin * 2);
  metaFloat.style.width = w + 'px';

  const h = metaFloat.offsetHeight || 90;

  let left = rect.left + rect.width / 2 - w / 2;
  left = clamp(left, margin, vw - w - margin);

  let top = rect.top - h - margin;
  if(top < margin) top = rect.bottom + margin;
  top = clamp(top, margin, vh - h - margin);

  metaFloat.style.left = left + 'px';
  metaFloat.style.top = top + 'px';
}

function openMetaFloat(anchor, html, pinKey){
  if(!metaFloat) return;
  metaFloat.innerHTML = html;
  metaFloat.setAttribute('aria-hidden','false');
  metaFloat.classList.add('is-open');
  metaAnchor = anchor || null;
  if(pinKey) metaPinned = pinKey;
  positionMetaFloat(anchor);
  rescale();
}

function closeMetaFloat(){
  if(!metaFloat) return;
  metaFloat.classList.remove('is-open');
  metaFloat.setAttribute('aria-hidden','true');
  metaFloat.innerHTML = '';
  metaPinned = null;
  metaAnchor = null;
  rescale();
}

function metaMeaningPhraseHTML(phase){
  const c = phaseColorFromPhase(phase);
  const verb = verbForPhase(phase);
  return `
    <span style="color:#fff;font-weight:900;letter-spacing:.6px">MEANING</span>
    <span style="color:${c};font-weight:900;letter-spacing:.6px;text-shadow:0 0 12px rgba(255,255,255,.08)">IS BEING</span>
    <span style="color:#fff;font-weight:900;letter-spacing:.6px">${verb}</span>
  `;
}

function metaStatusHTML(cfg){
  const phase = phaseLabelFromLane((cfg?.lane || 'blue').toString());
  const step = Math.max(1, Math.min(3, Number(cfg?.step || 1)));
  const vNum = parseVersionNumber(cfg?.version || 'v1');
  const vLabel = (vNum <= 1) ? 'V1' : 'V2';
  const leftHead = `${phase} ${step}/3 ${vLabel}`;
  const payload = legendTextFor(cfg);
  const text = escapeHtml(payload?.text || cfg?.summary || '');
  const phaseColor = phaseColorFromPhase(phase);

  return `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;white-space:nowrap">
      <b style="color:${phaseColor};text-transform:uppercase;letter-spacing:.8px">${escapeHtml(leftHead)}</b>
      <div style="text-transform:uppercase;letter-spacing:.8px">${metaMeaningPhraseHTML(phase)}</div>
    </div>
    <div class="hr"></div>
    <div>${text}</div>
  `;
}

function metaInfoHTML(cfg){
  const portalRule = `Portals are coordinates — copy a tag to arrive precisely.`;
  const summary = escapeHtml(cfg?.summary || '');
  return `
    <div class="meta-tip-main">${summary}</div>
    <div class="meta-tip-meta">${portalRule}</div>
  `;
}

function metaBadgeStatusHTML(cfg){
  const phase = phaseLabelFromLane((cfg?.lane || 'blue').toString());
  const step = Math.max(1, Math.min(3, Number(cfg?.step || 1)));
  const { circumference, len } = ringStrokeForStep(step);
  const vNum = parseVersionNumber(cfg?.version || 'v1');
  const vLabel = vNum <= 1 ? 'V1' : 'V2';

  const payload = legendTextFor(cfg);
  const stroke = (payload?.live ? 'var(--green)' : phaseColorFromPhase(phase));
  const labelColor =
    payload?.gray ? 'var(--gray)' :
    payload?.live ? 'var(--green)' :
    phaseColorFromPhase(phase);

  return `
    <svg viewBox="0 0 36 36" aria-hidden="true">
      <circle class="meta-ring-bg" cx="18" cy="18" r="15.915"></circle>
      <circle class="meta-ring-progress" cx="18" cy="18" r="15.915" style="stroke:${stroke};stroke-dasharray:${len} ${circumference};stroke-dashoffset:0;"></circle>
    </svg>
    <span class="meta-label" style="color:${labelColor};text-shadow:0 0 8px ${labelColor}">${vLabel}</span>
  `;
}

function wireMetaBadge(badgeEl, type, cfg){
  if(!badgeEl) return;
  const pinKey = type;

  badgeEl.addEventListener('mouseenter', ()=>{
    if(!supportsHover) return;
    if(metaPinned) return;
    if(type === 'info') openMetaFloat(badgeEl, metaInfoHTML(cfg), null);
    else openMetaFloat(badgeEl, metaStatusHTML(cfg), null);
  });

  badgeEl.addEventListener('mouseleave', ()=>{
    if(!supportsHover) return;
    if(metaPinned) return;
    closeMetaFloat();
  });

  badgeEl.addEventListener('pointerdown', (e)=>{
    e.stopPropagation();
    if(metaPinned === pinKey){
      closeMetaFloat();
      return;
    }
    if(type === 'info') openMetaFloat(badgeEl, metaInfoHTML(cfg), pinKey);
    else openMetaFloat(badgeEl, metaStatusHTML(cfg), pinKey);
  });

  badgeEl.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      badgeEl.dispatchEvent(new PointerEvent('pointerdown', { bubbles:true }));
    }
    if(e.key === 'Escape'){
      e.preventDefault();
      closeMetaFloat();
      badgeEl.blur();
    }
  });
}

function renderContext(cfg){
  portalCurrentText = bannerMid(cfg);

  const rawTag = (cfg.tag || '#tag').toString();
  const copyTag  = fullVerseTag(cfg);
  const isUniverse = rawTag.startsWith('$');
  const leftCopy  = isUniverse ? rawTag : copyTag;

  const headerRow =
    `<div class="portal-rowframe" id="portalRowFrame">
      <div class="portal-pill-left">
        <span class="portal-hashglyph" aria-hidden="true">#</span>
        <button class="copy-btn" type="button" data-tag="${leftCopy}" aria-label="Copy" title="Copy">⧉</button>
      </div>
      <div class="portal-center">
        <div class="portal-sliding expanded" id="portalSliding">
          <span class="portal-uni">UNI</span>
          <span class="portal-middle slide-middle" id="portalMiddle">${portalCurrentText}</span>
          <span class="portal-verse">VERSE</span>
        </div>
      </div>
      <div class="meta-badges">
        <div class="meta-badge" id="metaStatus" role="button" tabindex="0" aria-label="Status"></div>
        <div class="meta-badge" id="metaInfo" role="button" tabindex="0" aria-label="Info"><span class="meta-label">?</span></div>
      </div>
    </div>`;

  const html =
    headerRow +
    `<div class="context-body" id="portalSafeText">${renderSafeContextText(cfg)}</div>` +
    `<div class="content-window"><iframe id="portalFrame" title="Portal content" src="${stagePage(cfg)}" loading="eager"></iframe></div>`;

  contextBody.innerHTML = html;
  attachCopyHandlers(contextBody);

  const statusEl = document.getElementById('metaStatus');
  if(statusEl){
    statusEl.innerHTML = metaBadgeStatusHTML(cfg);
    wireMetaBadge(statusEl, 'status', cfg);
  }

  const infoEl = document.getElementById('metaInfo');
  if(infoEl){
    wireMetaBadge(infoEl, 'info', cfg);
  }

  const frame = document.getElementById('portalFrame');
  if(frame){
    frame.onload = ()=>{
      updatePortalFrameSrc(cfg);
      updateContentHeight();
      rescale();
    };
  }


  startPortalLoop();
  updatePortalFrameSrc(cfg);
  requestAnimationFrame(updateContentHeight);
  rescale();
}

function activateStage(key,rowEl){
  renderNonCodexView();
  setUniverseActive(false);

  if(momentumIsActive()){
    setMomentumActive(true);
  } else {
    setMomentumActive(false);
  }

  const cfg = stageConfig[key];

  if(!cfg) return;
  if(activeRow) activeRow.classList.remove('active');
  activeRow = rowEl;
  rowEl.classList.add('active');
  closeMetaFloat();
  renderContext(cfg);
}

function phaseColor(phase){
  if(phase === 'BUIDL') return 'var(--orange)';
  if(phase === 'CONSENSUS') return 'var(--green)';
  return 'var(--blue)';
}

function legendRingHTML(meta){
  const step = Math.max(1, Math.min(3, Number(meta.step || 1)));
  const { circumference, len } = ringStrokeForStep(step);

  const btnClasses = ['legend-ringbtn'];
  const phaseKey = (meta.phase || 'CODEX').toUpperCase();
  const v = (meta.version || '').toString().toLowerCase();
  const isV2 = v === 'v2';

  const showLabel = !!meta.forceLabel || !!meta.live || !!meta.gray || isV2;
  const labelText = meta.forceLabel || (isV2 ? 'V2' : (meta.live ? 'V1' : meta.gray ? 'V1' : ''));

  if(meta.gray) btnClasses.push('gray');
  if(meta.live) btnClasses.push('live');
  if(isV2) btnClasses.push('v2');
  if(phaseKey === 'CODEX') btnClasses.push('codex');
  if(phaseKey === 'BUIDL') btnClasses.push('buidl');
  if(phaseKey === 'CONSENSUS') btnClasses.push('consensus');

  const data = [
    `data-legend="1"`,
    `data-phase="${phaseKey}"`,
    `data-row="${meta.row}"`,
    `data-step="${step}"`,
    `data-version="${(meta.version||'')}"`,
    `data-variant="${(meta.variant||'')}"`,
    `data-live="${meta.live ? '1':'0'}"`,
    `data-gray="${meta.gray ? '1':'0'}"`
  ].join(' ');

  let stroke = phaseColor(phaseKey);
  if(meta.forceStroke) stroke = meta.forceStroke;
  if(meta.live) stroke = 'var(--green)';

  const aria = `${phaseKey} ${step}/3${labelText ? ' ' + labelText : ''}`;

  let labelFill = stroke;
  if(meta.forceLabelColor) labelFill = meta.forceLabelColor;
  else if(meta.gray) labelFill = 'var(--gray)';

  const labelSvg = showLabel
    ? `<text x="18" y="18" text-anchor="middle" dominant-baseline="middle"
        style="font-family:SF Mono,Menlo,monospace;font-size:11.5px;font-weight:900;letter-spacing:.25px;
        fill:${labelFill};paint-order:stroke;stroke:rgba(0,0,0,.65);stroke-width:.95px;">${labelText}</text>`
    : ``;

  return `<button class="${btnClasses.join(' ')}" type="button" aria-label="${aria}" ${data}><span class="legend-ring"><svg viewBox="0 0 36 36" aria-hidden="true"><circle class="legend-ring-bg" cx="18" cy="18" r="15.915"></circle><circle class="legend-ring-progress" cx="18" cy="18" r="15.915" style="stroke:${stroke};stroke-dasharray:${len} ${circumference};stroke-dashoffset:0;"></circle>${labelSvg}</svg></span></button>`;
}

function legendContentHTML(){
  const codexBase =
    `<div class="legend-evo-row">` +
      `${legendRingHTML({phase:'CODEX',row:'base',step:1,version:'v1'})}` +
      `${legendRingHTML({phase:'CODEX',row:'base',step:2,version:'v1'})}` +
      `${legendRingHTML({phase:'CODEX',row:'base',step:3,version:'v1', forceLabel:'V1', forceLabelColor:'var(--blue)'})}` +
    `</div>`;

  const codexV2 =
    `<div class="legend-evo-row">` +
      `${legendRingHTML({phase:'CODEX',row:'v2',step:1,version:'v2'})}` +
      `${legendRingHTML({phase:'CODEX',row:'v2',step:2,version:'v2'})}` +
      `${legendRingHTML({phase:'CODEX',row:'v2',step:3,version:'v2'})}` +
    `</div>`;

  const buidlBase =
    `<div class="legend-evo-row">` +
      `${legendRingHTML({phase:'BUIDL',row:'base',step:1,version:'v1'})}` +
      `${legendRingHTML({phase:'BUIDL',row:'base',step:2,version:'v1'})}` +
      `${legendRingHTML({phase:'BUIDL',row:'base',step:3,version:'v1', forceLabel:'V1', forceLabelColor:'var(--orange)'})}` +
    `</div>`;

  const buidlV2 =
    `<div class="legend-evo-row">` +
      `${legendRingHTML({phase:'BUIDL',row:'v2',step:1,version:'v2'})}` +
      `${legendRingHTML({phase:'BUIDL',row:'v2',step:2,version:'v2'})}` +
      `${legendRingHTML({phase:'BUIDL',row:'v2',step:3,version:'v2'})}` +
    `</div>`;

  const consensusBase =
    `<div class="legend-evo-row">` +
      `${legendRingHTML({phase:'CONSENSUS',row:'base',step:1,version:'v1'})}` +
      `${legendRingHTML({phase:'CONSENSUS',row:'base',step:2,version:'v1',gray:true,forceStroke:'var(--green)',forceLabelColor:'var(--gray)'})}` +
      `${legendRingHTML({phase:'CONSENSUS',row:'base',step:3,version:'v1',live:true,forceStroke:'var(--green)',forceLabelColor:'var(--green)'})}` +
    `</div>`;

  const consensusV2 =
    `<div class="legend-evo-row">` +
      `${legendRingHTML({phase:'CONSENSUS',row:'v2',step:1,version:'v2'})}` +
      `${legendRingHTML({phase:'CONSENSUS',row:'v2',step:2,version:'v2'})}` +
      `${legendRingHTML({phase:'CONSENSUS',row:'v2',step:3,version:'v2'})}` +
    `</div>`;

  const meaningDefault = (line2)=>
    `<div class="legend-meaning-lines">` +
      `<div><span class="is">is being</span></div>` +
      `<div class="verb">${line2}</div>` +
    `</div>`;

  return `
    <div class="legend-body">
      <div class="legend-lead">
        Legendary momentum creates heroes<br>
        History remembers it as LEGEND<br>
        <b><span class="legend-accent">LEGEND²</span></b> maps <b>MOMENTUM</b>
      </div>

      <div class="legend-card" role="table" aria-label="Legend phases">
        <div class="legend-head" role="row">
          <div class="legend-coltitle" role="columnheader">PHASE</div>
          <div class="legend-coltitle mid" role="columnheader">EVOLUTION</div>
          <div class="legend-coltitle mid columnheader2" role="columnheader">MEANING</div>
        </div>

        <div class="legend-row" role="row" data-phase="CODEX">
          <div class="legend-phase" role="cell"><div class="legend-phase-name blue">CODEX</div></div>
          <div class="legend-mid" role="cell"><div class="legend-evo" aria-label="CODEX evolution">${codexBase}${codexV2}</div></div>
          <div class="legend-meaning" role="cell">${meaningDefault('explored')}</div>
        </div>

        <div class="legend-row" role="row" data-phase="BUIDL">
          <div class="legend-phase" role="cell"><div class="legend-phase-name orange">BUIDL</div></div>
          <div class="legend-mid" role="cell"><div class="legend-evo" aria-label="BUIDL evolution">${buidlBase}${buidlV2}</div></div>
          <div class="legend-meaning" role="cell">${meaningDefault('shaped')}</div>
        </div>

        <div class="legend-row" role="row" data-phase="CONSENSUS">
          <div class="legend-phase" role="cell"><div class="legend-phase-name green">CONSENS</div></div>
          <div class="legend-mid" role="cell"><div class="legend-evo" aria-label="CONSENSUS evolution">${consensusBase}${consensusV2}</div></div>
          <div class="legend-meaning" role="cell">${meaningDefault('aligned')}</div>
        </div>
      </div>

      <div class="legend-footer">Portal go live with community activation.</div>
    </div>
  `;
}

function legendExplainFor(meta){
  const phase   = (meta.phase || '').toUpperCase();
  const step    = Number(meta.step || 1);
  const version = (meta.version || 'v1').toLowerCase();
  const live    = !!meta.live;
  const gray    = !!meta.gray;

  const hit =
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === version && !!r.live === live && !!r.gray === gray) ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === version && !!r.live === live) ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === version) ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === step && r.version === 'v1') ||
    LEGEND_FLOATER.find(r => r.phase === phase && r.step === 1 && r.version === 'v1');

  if(!hit) return { head:'—', text:'—' };
  return { head: hit.head, text: hit.text };
}

function clearLegendCircleStates(){
  document.querySelectorAll('.legend-ringbtn.is-active').forEach(b=>b.classList.remove('is-active'));
}

function keyFromMeta(meta){
  const liveFlag = meta.live ? 'live' : (meta.gray ? 'gray' : '');
  return `${meta.phase}|${meta.row}|${meta.step}|${meta.version}|${liveFlag}`;
}

function metaFromEl(el){
  return {
    el,
    phase: (el.getAttribute('data-phase') || '').toUpperCase(),
    row: (el.getAttribute('data-row') || '').toLowerCase(),
    step: el.getAttribute('data-step') || '1',
    version: (el.getAttribute('data-version') || '').toLowerCase(),
    live: el.getAttribute('data-live') === '1',
    gray: el.getAttribute('data-gray') === '1'
  };
}

function showLegendFloat(meta){
  const legendFloat = document.getElementById('legendFloat');
  if(!legendFloat) return;
  if(!meta){
    legendFloat.classList.remove('is-open');
    legendFloat.setAttribute('aria-hidden','true');
    legendFloat.innerHTML = '';
    return;
  }

  const payload = legendExplainFor(meta);
  const phaseColor =
      meta.phase === 'CODEX' ? 'var(--blue)' :
      meta.phase === 'BUIDL' ? 'var(--orange)' :
      meta.phase === 'CONSENSUS' ? 'var(--green)' :
      'var(--text)';

  legendFloat.innerHTML =
    `<b style="color:${phaseColor}">${payload.head}</b>` +
    `<div class="hr"></div>` +
    `<div>${payload.text}</div>`;

  legendFloat.setAttribute('aria-hidden','false');

  const rect = meta.el.getBoundingClientRect();
  const margin = 10;
  const desiredW = 300;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

  const floatH = legendFloat.offsetHeight || 90;

  let left = rect.left + rect.width / 2 - desiredW / 2;
  let top  = rect.bottom + margin;

  left = clamp(left, margin, vw - desiredW - margin);
  top  = clamp(top, margin, vh - floatH - margin);

  legendFloat.style.left = left + 'px';
  legendFloat.style.top  = top + 'px';
  legendFloat.classList.add('is-open');
}

let legendPinnedKey = null;

function clearLegendPin(){
  legendPinnedKey = null;
  clearLegendCircleStates();
  showLegendFloat(null);
}

function initLegendInteractions(){
  legendPinnedKey = null;
  showLegendFloat(null);

  const circles = Array.from(document.querySelectorAll('.legend-ringbtn[data-legend="1"]'));
  if(!circles.length) return;

  const supportsHoverLegend = window.matchMedia('(hover:hover)').matches;

  circles.forEach(el=>{
    el.addEventListener('mouseenter', ()=>{
      if(!supportsHoverLegend) return;
      if(legendPinnedKey) return;
      showLegendFloat(metaFromEl(el));
    });

    el.addEventListener('mouseleave', ()=>{
      if(!supportsHoverLegend) return;
      if(legendPinnedKey) return;
      showLegendFloat(null);
    });

    el.addEventListener('click', (e)=>{
      e.stopPropagation();
      const meta = metaFromEl(el);
      const k = keyFromMeta(meta);
      if(legendPinnedKey === k){
        clearLegendPin();
        return;
      }
      clearLegendCircleStates();
      meta.el.classList.add('is-active');
      legendPinnedKey = k;
      showLegendFloat(meta);
    });

    el.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        el.click();
      }
      if(e.key === 'Escape'){
        e.preventDefault();
        clearLegendPin();
        el.blur();
      }
    });
  });

  document.addEventListener('pointerdown', (e)=>{
    const t = e.target;
    const isLegendCircle = t && (t.closest ? !!t.closest('.legend-ringbtn[data-legend="1"]') : false);
    const isFloat = t && (t.closest ? !!t.closest('#legendFloat') : false);
    if(!isLegendCircle && !isFloat){
      if(legendPinnedKey) clearLegendPin();
      else showLegendFloat(null);
    }
  });

  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      if(legendPinnedKey) clearLegendPin();
      else showLegendFloat(null);
    }
  }, { passive:false });
}

function renderLegendContext(){
  if(activeRow){
    activeRow.classList.remove('active');
    activeRow = null;
  }
  stopPortalLoop();
  closeMetaFloat();
  contextBody.innerHTML = legendContentHTML();
  initLegendInteractions();
  rescale();
}

let activeMode = null;

function setModeButtons(mode){
  document.querySelectorAll('.mode-btn[data-mode]').forEach(btn=>{
    const is = btn.getAttribute('data-mode') === mode;
    btn.classList.toggle('is-active', is);
    btn.setAttribute('aria-pressed', String(is));
  });
}


function renderModeList(mode){
  activeMode = mode;

  if(!stageListEl) return;
  stageListEl.innerHTML = '';

  for(const key of stageKeys){
    const cfg = stageConfig[key];
    if(!cfg) continue;
    if(mode === '1' && String(cfg.section) !== '1') continue;
    if(mode === '3' && !['2','3'].includes(String(cfg.section))) continue;
    stageListEl.appendChild(makeRow(key, cfg));
  }

  let targetRow =
    (mode === '1'
      ? stageListEl.querySelector('.stage-row[data-stage-key="1.2"]')
      : null) ||
    stageListEl.querySelector('.stage-row');

  if(targetRow){
    activateStage(targetRow.dataset.stageKey, targetRow);
  } else {
    renderLegendContext();
  }


  rescale();
}

if(universeBtn){
  universeBtn.addEventListener('click', renderUniverseDefault);
  universeBtn.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      renderUniverseDefault();
    }
  });
}

document.querySelectorAll('.mode-btn.is-active').forEach(b=>b.classList.remove('is-active'));
document.querySelectorAll('.mode-btn[data-mode]').forEach(b=>b.setAttribute('aria-pressed','false'));

if(stageListEl) stageListEl.innerHTML = '';
activeRow = null;
document.querySelectorAll('.stage-row.active').forEach(r=>r.classList.remove('active'));

renderUniverseDefault();

document.addEventListener('pointerdown', (e)=>{
  const t = e.target;
  const inMeta = t && (t.closest ? !!t.closest('.meta-badge') : false);
  if(!inMeta && metaPinned) closeMetaFloat();
  else if(!inMeta && !supportsHover) closeMetaFloat();
});

document.addEventListener('keydown', (e)=>{
  if(e.key === 'Escape') closeMetaFloat();
});

window.addEventListener('resize', ()=>{
  if(metaFloat && metaFloat.classList.contains('is-open') && metaAnchor){
    positionMetaFloat(metaAnchor);
  }
}, { passive:true });

const searchInput = document.getElementById('searchInput');
const searchWrap  = document.getElementById('searchWrap');

function setSearchVisible(on){
  if(!searchWrap) return;
  searchWrap.style.display = on ? '' : 'none';
  rescale();
}
const suggestEl   = document.getElementById('searchSuggest');

const v1Btn = document.getElementById('searchV1');
const v2Btn = document.getElementById('searchV2');

const infoContent = document.getElementById('searchInfoContent');

const trayEl = document.getElementById('searchTray');
const trayMetaEl = document.getElementById('searchTrayMeta');
const trayBodyEl = document.getElementById('searchTrayBody');

const SOUL_CODEX_GITHUB_SCOPE = 'repo:UNIVERSE-DAO/UNIVERSE';
let searchMode = 'v1';

function setTrayOpen(open){
  if(!trayEl) return;
  trayEl.classList.toggle('is-open', !!open);
  rescale();
}

function clearTray(){
  if(trayBodyEl) trayBodyEl.innerHTML = '';
  setTrayOpen(false);
}

function setSearchMode(mode){
  searchMode = (mode === 'v2') ? 'v2' : 'v1';

  v1Btn.classList.toggle('active', searchMode === 'v1');
  v2Btn.classList.toggle('active', searchMode === 'v2');

  searchInput.placeholder = (searchMode === 'v1') ? 'Explore portals (#) to master the infinite Game' : 'The Truth That Matters — unfolding with MEME_OS';

  if(trayMetaEl) trayMetaEl.textContent = (searchMode === 'v1') ? '# V1' : 'CODE-X';
  clearTray();

  updateSearchUI(searchInput.value || '');
  renderInfoContent();
  rescale();
}

v1Btn.addEventListener('click', (e)=>{ e.stopPropagation(); setSearchMode('v1'); });
v2Btn.addEventListener('click', (e)=>{ e.stopPropagation(); setSearchMode('v2'); });

function filterStages(q){
  const query = (q || '').trim().toLowerCase();
  const rows = stageListEl ? stageListEl.querySelectorAll('.stage-row') : [];
  rows.forEach(r=>{
    const key = r.dataset.stageKey || '';
    const cfg = stageConfig[key];
    const hay = ((cfg?.tag||'') + ' ' + (fullVerseTag(cfg)||'') + ' ' + (cfg?.title||'') + ' ' + (cfg?.summary||'')).toLowerCase();
    r.style.display = (!query || hay.includes(query)) ? '' : 'none';
  });
  rescale();
}

let infoPinned = false;

function setInfoOpen(open){
  infoPinned = !!open;
  searchWrap.classList.toggle('is-info-open', infoPinned);
  if(searchMode === 'v1') v1Btn.setAttribute('aria-expanded', String(infoPinned));
  if(searchMode === 'v2') v2Btn.setAttribute('aria-expanded', String(infoPinned));
  rescale();
}

function setInfoPeek(on){
  if(infoPinned) return;
  searchWrap.classList.toggle('is-info-peek', !!on);
  rescale();
}

function renderInfoContent(){
  if(!infoContent) return;

  if(searchMode === 'v1'){
    infoContent.innerHTML = `<b># V1 — Portal</b><br><span class="muted">Teleport into UNIVERSE via tags</span><div class="hr"></div>• <b>Primary goal:</b> find the right portal fast (activate + copy).<br>• <b>Discovery:</b> type “uni”, “meme”, “ai” to surface portals.<br>• <b>Note:</b> left list swaps by mode (MEMETIC’s / MultiVERSE / MEME_OS).<br><div class="hr"></div><b>Controls</b><br>• Hover = peek • Double-click <b># V1</b> = pin help.<br>• ↑/↓ move • Enter activates • Esc closes.`;
  } else {
    infoContent.innerHTML = `<b>CODE-X — Soul Codex</b><br><span class="muted">Find meaning from GitHub (source of truth)</span><div class="hr"></div>• <b>Primary goal:</b> search docs + code for canonical definitions.<br>• <b>Behavior:</b> Enter opens GitHub search in a new tab.<br>• <b>Scope:</b> <span class="muted">${SOUL_CODEX_GITHUB_SCOPE}</span><br><div class="hr"></div><b>Controls</b><br>• Hover = peek • Double-click <b>CODE-X</b> = pin help.<br>• Esc closes.`;
  }
}

renderInfoContent();

function pillToggleInfo(e){
  e.stopPropagation();
  setInfoOpen(!infoPinned);
}

v1Btn.addEventListener('dblclick', pillToggleInfo);
v2Btn.addEventListener('dblclick', pillToggleInfo);

;[v1Btn, v2Btn].forEach(btn=>{
  btn.addEventListener('mouseenter', ()=> setInfoPeek(true));
  btn.addEventListener('mouseleave', ()=> setInfoPeek(false));
});

const SEARCH_DEBOUNCE_MS = 100;
let searchDebounceTimer = null;

let suggestOpen = false;
let suggestItems = [];
let suggestIndex = -1;

function highlightFirst(hay, needle){
  const h = (hay || '').toString();
  const n = (needle || '').toString();
  if(!n) return escapeHtml(h);
  const i = h.toLowerCase().indexOf(n.toLowerCase());
  if(i < 0) return escapeHtml(h);
  const pre = escapeHtml(h.slice(0, i));
  const mid = escapeHtml(h.slice(i, i + n.length));
  const post = escapeHtml(h.slice(i + n.length));
  return `${pre}<mark>${mid}</mark>${post}`;
}

function matchScore(hay, q){
  const H = (hay || '').toString().toLowerCase();
  const Q = (q || '').toString().toLowerCase();
  if(!Q || !H) return 0;
  if(H === Q) return 300;
  if(H.startsWith(Q)) return 200;
  if(H.includes(Q)) return 100;
  return 0;
}

function computeMatches(q){
  const query = (q || '').trim();
  const Q = query.toLowerCase();
  if(!Q) return [];

  const keys = stageListEl
    ? Array.from(stageListEl.querySelectorAll('.stage-row[data-stage-key]')).map(r=>r.dataset.stageKey)
    : [];

  const out = [];
  for(const key of keys){
    const cfg = stageConfig[key];
    if(!cfg) continue;

    const tag = (cfg.tag || '').toString();
    const verse = fullVerseTag(cfg);
    const title = (cfg.title || '').toString();
    const summary = (cfg.summary || '').toString();

    const sTag = matchScore(tag, Q) + (matchScore(tag, Q) ? 30 : 0);
    const sVerse = matchScore(verse, Q) + (matchScore(verse, Q) ? 20 : 0);
    const sTitle = matchScore(title, Q) + (matchScore(title, Q) ? 10 : 0);
    const sSum = matchScore(summary, Q);

    const best = Math.max(sTag, sVerse, sTitle, sSum);
    if(best <= 0) continue;

    const lane = (cfg.lane || 'blue').toString();
    const step = (cfg.step || 1);
    const vNum = parseVersionNumber(cfg.version || 'v1');
    const vDisplay = (vNum <= 1) ? 'V1' : 'V2';
    const phase = phaseLabelFromLane(lane);
    const meta = `${phase} • ${step}/3 • ${vDisplay}`;

    out.push({ key, cfg, score: best, meta, q: query });
  }

  out.sort((a,b)=>{
    if(b.score !== a.score) return b.score - a.score;
    const pa = a.key.split('.').map(Number);
    const pb = b.key.split('.').map(Number);
    return (pa[0]-pb[0]) || ((pa[1]||0)-(pb[1]||0));
  });

  return out;
}

function openSuggest(open){
  suggestOpen = !!open;
  searchWrap.classList.toggle('is-suggest-open', suggestOpen);
  searchInput.setAttribute('aria-expanded', String(suggestOpen));
  if(!suggestOpen) suggestIndex = -1;
  rescale();
}

function setSuggestIndex(idx){
  suggestIndex = idx;
  const children = suggestEl ? Array.from(suggestEl.querySelectorAll('.suggest-item')) : [];
  children.forEach((el, i)=>{
    el.classList.toggle('is-active', i === suggestIndex);
    el.setAttribute('aria-selected', String(i === suggestIndex));
  });

  if(suggestIndex >= 0 && suggestIndex < children.length){
    const el = children[suggestIndex];
    const top = el.offsetTop;
    const bottom = top + el.offsetHeight;
    const viewTop = suggestEl.scrollTop;
    const viewBottom = viewTop + suggestEl.clientHeight;
    if(top < viewTop) suggestEl.scrollTop = top - 6;
    else if(bottom > viewBottom) suggestEl.scrollTop = bottom - suggestEl.clientHeight + 6;
  }
}

function activateFromSuggestion(key){
  renderNonCodexView();
  const row = stageListEl.querySelector(`.stage-row[data-stage-key="${key}"]`);
  if(row){
    row.style.display = '';
    activateStage(key, row);
    row.scrollIntoView({ block:'nearest' });
  }
  openSuggest(false);
  clearTray();
  rescale();
}

function openSoulCodexSearch(query){
  const q = (query || '').trim();
  if(!q) return;
  const encoded = encodeURIComponent(`${q} ${SOUL_CODEX_GITHUB_SCOPE}`);
  const url = `https://github.com/search?q=${encoded}&type=code`;
  window.open(url, '_blank', 'noopener');
}

function renderSuggestV1(list, q){
  suggestEl.innerHTML = '';
  if(!list.length){
    const empty = document.createElement('div');
    empty.className = 'suggest-empty';
    empty.textContent = 'No results.';
    suggestEl.appendChild(empty);
    openSuggest(true);
    return;
  }

  const max = Math.min(list.length, 10);
  for(let i=0; i<max; i++){
    const { key, cfg, meta } = list[i];

    const item = document.createElement('div');
    item.className = 'suggest-item';
    item.setAttribute('role','option');
    item.setAttribute('data-stage-key', key);
    item.setAttribute('aria-selected','false');

    const left = document.createElement('div');
    left.className = 'suggest-left';

    const tagEl = document.createElement('div');
    tagEl.className = 'suggest-tag';
    tagEl.innerHTML = highlightFirst((cfg.tag || ''), q);

    const titleEl = document.createElement('div');
    titleEl.className = 'suggest-title';
    titleEl.innerHTML = cfg.title ? highlightFirst(cfg.title, q) : highlightFirst(fullVerseTag(cfg), q);

    const metaEl = document.createElement('div');
    metaEl.className = 'suggest-meta';
    metaEl.textContent = meta;

    left.appendChild(tagEl);
    left.appendChild(titleEl);

    item.appendChild(left);
    item.appendChild(metaEl);

    item.addEventListener('pointerdown', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      activateFromSuggestion(key);
    });

    suggestEl.appendChild(item);
  }

  openSuggest(true);
  setSuggestIndex(0);
}

function renderSuggestV2(query){
  const q = (query || '').trim();
  suggestEl.innerHTML = '';

  if(!q){
    openSuggest(false);
    return;
  }

  const item = document.createElement('div');
  item.className = 'suggest-item';
  item.setAttribute('role','option');
  item.setAttribute('data-action','soul-codex');
  item.setAttribute('aria-selected','false');

  const leftWrap = document.createElement('div');
  leftWrap.className = 'suggest-action';

  const ico = document.createElement('div');
  ico.className = 'suggest-ico';

  const left = document.createElement('div');
  left.className = 'suggest-left';

  const tagEl = document.createElement('div');
  tagEl.className = 'suggest-tag';
  tagEl.innerHTML = `CODE-X <span class="muted">• GitHub</span>`;

  const titleEl = document.createElement('div');
  titleEl.className = 'suggest-title';
  titleEl.innerHTML = `Search for: ${highlightFirst(q, q)}`;

  left.appendChild(tagEl);
  left.appendChild(titleEl);

  leftWrap.appendChild(ico);
  leftWrap.appendChild(left);

  const metaEl = document.createElement('div');
  metaEl.className = 'suggest-meta';
  metaEl.textContent = 'ENTER → OPEN';

  item.appendChild(leftWrap);
  item.appendChild(metaEl);

  item.addEventListener('pointerdown', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    openSoulCodexSearch(q);
    openSuggest(false);
    clearTray();
    rescale();
  });

  suggestEl.appendChild(item);
  openSuggest(true);
  setSuggestIndex(0);
}

function renderTrayV1(list, q){
  if(!trayBodyEl) return;
  trayBodyEl.innerHTML = '';

  const max = Math.min(list.length, 6);
  if(max <= 0){
    trayBodyEl.innerHTML = `<div class="suggest-empty">No results.</div>`;
    setTrayOpen(true);
    return;
  }

  for(let i=0; i<max; i++){
    const { key, cfg, meta } = list[i];

    const item = document.createElement('div');
    item.className = 'suggest-item';
    item.setAttribute('role','button');

    const left = document.createElement('div');
    left.className = 'suggest-left';

    const tagEl = document.createElement('div');
    tagEl.className = 'suggest-tag';
    tagEl.innerHTML = highlightFirst((cfg.tag || ''), q);

    const titleEl = document.createElement('div');
    titleEl.className = 'suggest-title';
    titleEl.innerHTML = cfg.title ? highlightFirst(cfg.title, q) : highlightFirst(fullVerseTag(cfg), q);

    const metaEl = document.createElement('div');
    metaEl.className = 'suggest-meta';
    metaEl.textContent = meta;

    left.appendChild(tagEl);
    left.appendChild(titleEl);

    item.appendChild(left);
    item.appendChild(metaEl);

    item.addEventListener('pointerdown', (e)=>{
      e.preventDefault();
      e.stopPropagation();
      activateFromSuggestion(key);
      clearTray();
    });

    trayBodyEl.appendChild(item);
  }

  setTrayOpen(true);
}

function renderTrayV2(q){
  if(!trayBodyEl) return;
  trayBodyEl.innerHTML = '';

  const query = (q || '').trim();
  if(!query){
    setTrayOpen(false);
    return;
  }

  const item = document.createElement('div');
  item.className = 'suggest-item';

  const leftWrap = document.createElement('div');
  leftWrap.className = 'suggest-action';

  const ico = document.createElement('div');
  ico.className = 'suggest-ico';

  const left = document.createElement('div');
  left.className = 'suggest-left';

  const tagEl = document.createElement('div');
  tagEl.className = 'suggest-tag';
  tagEl.innerHTML = `CODE-X <span class="muted">• GitHub</span>`;

  const titleEl = document.createElement('div');
  titleEl.className = 'suggest-title';
  titleEl.innerHTML = `Open search: ${highlightFirst(query, query)}`;

  left.appendChild(tagEl);
  left.appendChild(titleEl);

  leftWrap.appendChild(ico);
  leftWrap.appendChild(left);

  const metaEl = document.createElement('div');
  metaEl.className = 'suggest-meta';
  metaEl.textContent = 'ENTER → OPEN';

  item.appendChild(leftWrap);
  item.appendChild(metaEl);

  item.addEventListener('pointerdown', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    openSoulCodexSearch(query);
    clearTray();
  });

  trayBodyEl.appendChild(item);
  setTrayOpen(true);
}

function updateSearchUI(q){
  const query = (q || '').trim();

  if(searchMode === 'v1') filterStages(query);
  else filterStages('');

  if(trayMetaEl) trayMetaEl.textContent = (searchMode === 'v1') ? '# V1' : 'CODE-X';

  if(!query){
    openSuggest(false);
    clearTray();
    return;
  }

  if(searchMode === 'v1'){
    suggestItems = computeMatches(query);
    renderSuggestV1(suggestItems, query);
    renderTrayV1(suggestItems, query);
  } else {
    renderSuggestV2(query);
    renderTrayV2(query);
  }
}

function debouncedUpdate(q){
  if(searchDebounceTimer) clearTimeout(searchDebounceTimer);
  searchDebounceTimer = setTimeout(()=> updateSearchUI(q), SEARCH_DEBOUNCE_MS);
}

searchInput.addEventListener('input', (e)=>{
  debouncedUpdate(e.target.value);
  if(!infoPinned) setInfoPeek(false);
});

searchInput.addEventListener('keydown', (e)=>{
  const q = (searchInput.value || '').trim();

  if(!suggestOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')){
    if(q){
      updateSearchUI(q);
      e.preventDefault();
      return;
    }
  }

  if(e.key === 'Escape'){
    e.preventDefault();
    openSuggest(false);
    setInfoOpen(false);
    setInfoPeek(false);
    clearTray();
    showLegendFloat(null);
    closeMetaFloat();
    return;
  }

  if(!suggestOpen) return;

  const items = Array.from(suggestEl.querySelectorAll('.suggest-item'));
  if(!items.length) return;

  if(e.key === 'ArrowDown'){
    e.preventDefault();
    const next = Math.min((suggestIndex < 0 ? 0 : suggestIndex + 1), items.length - 1);
    setSuggestIndex(next);
  } else if(e.key === 'ArrowUp'){
    e.preventDefault();
    const prev = Math.max((suggestIndex < 0 ? 0 : suggestIndex - 1), 0);
    setSuggestIndex(prev);
  } else if(e.key === 'Enter'){
    e.preventDefault();
    const el = items[Math.max(0, suggestIndex)];
    if(!el) return;

    if(searchMode === 'v1'){
      const key = el.getAttribute('data-stage-key');
      if(key) activateFromSuggestion(key);
    } else {
      openSoulCodexSearch(q);
      openSuggest(false);
      clearTray();
    }
  }
});

searchInput.addEventListener('focus', ()=>{
  const q = (searchInput.value || '').trim();
  if(q) updateSearchUI(q);
});

document.addEventListener('pointerdown', (e)=>{
  const t = e.target;
  const insideSearch = searchWrap && searchWrap.contains(t);
  const insideTray = trayEl && trayEl.contains(t);
  if(!insideSearch && !insideTray){
    openSuggest(false);
    setInfoOpen(false);
    setInfoPeek(false);
    clearTray();
  }
});

const codexBodyRoot = document.getElementById('codexBodyRoot');

let codexWheelFrameEl = null;
let codexWheelPortalEl = null;
let codexSpinGroupEl = null;

let codexWheelRAF = null;
let codexWheelPrev = 0;
let codexWheelAngle = 100;
let codexWheelPaused = false;

function buildCodexWheelPortal(){
  const frame = document.createElement('div');
  frame.className = 'codex-wheel-frame';

  const wrap = document.createElement('div');
  wrap.id = 'codexWheelPortal';
  wrap.className = 'codex-wheel';
  wrap.tabIndex = 0;

  wrap.innerHTML = `
    <svg viewBox="0 0 240 240" role="img" aria-label="Codex Credo Wheel">
      <defs>
        <path id="codexWheelTextPath"
          d="M120,120
             m -82,0
             a 82,82 0 1,1 164,0
             a 82,82 0 1,1 -164,0" />

<radialGradient id="codexWheelBlueHalo" cx="50%" cy="50%" r="50%">
  <stop offset="58%" stop-color="rgba(0,0,0,0)"/>
  <stop offset="64%" stop-color="rgba(0,0,0,.98)"/>
  <stop offset="72%" stop-color="rgba(0,0,0,.95)"/>
  <stop offset="80%" stop-color="rgba(0,0,0,.85)"/>
  <stop offset="86%" stop-color="rgba(0,0,0,.60)"/>
  <stop offset="92%" stop-color="rgba(0,0,0,.30)"/>
  <stop offset="98%" stop-color="rgba(0,0,0,.08)"/>
  <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
</radialGradient>

        <mask id="codexWheelHaloMask">
          <rect width="240" height="240" fill="black"/>
          <circle cx="120" cy="120" r="104" fill="white"/>
          <circle cx="120" cy="120" r="72" fill="black"/>
        </mask>
      </defs>

      <circle cx="120" cy="120" r="120" fill="url(#codexWheelBlueHalo)" mask="url(#codexWheelHaloMask)"/>

      <g id="codexSpinGroup">
        <text text-anchor="middle">
          <textPath href="#codexWheelTextPath" startOffset="50%">
            <tspan class="word is-active" data-codex="vow">VOW</tspan>
            <tspan class="plain"> to </tspan>
            <tspan class="word" data-codex="guide">GUIDE</tspan>
            <tspan class="plain"> the </tspan>
            <tspan class="word" data-codex="common">COMMON</tspan>
            <tspan class="plain"> through </tspan>
            <tspan class="word" data-codex="equilibrium">EQUILIBRIUM</tspan>
            <tspan class="plain"> and </tspan>
            <tspan class="word" data-codex="success">SUCCESS</tspan>
            <tspan class="plain"> enabling </tspan>
            <tspan class="word" data-codex="comud">COMUD</tspan>
          </textPath>
        </text>
      </g>

      <image href="media/UNIVERSE-LOGO-256.png"
             x="45" y="45"
             width="150" height="150"
             class="logo" />
    </svg>
  `;

  frame.appendChild(wrap);

  codexWheelFrameEl = frame;
  codexWheelPortalEl = wrap;
  codexSpinGroupEl = wrap.querySelector('#codexSpinGroup');

  return frame;
}

function ensureCodexWheelMounted(){
  if(!codexBodyRoot) return;
  if(!codexWheelFrameEl) buildCodexWheelPortal();
  if(!codexBodyRoot.querySelector('.codex-wheel-frame')){
    codexBodyRoot.prepend(codexWheelFrameEl);
  }
}

function highlightCodexWheel(key){
  if(!codexWheelPortalEl) return;
  codexWheelPortalEl.querySelectorAll('.word[data-codex]').forEach(n=>{
    n.classList.toggle('is-active', n.getAttribute('data-codex') === key);
  });
}

function stopCodexWheelSpin(){
  if(codexWheelRAF){
    cancelAnimationFrame(codexWheelRAF);
    codexWheelRAF = null;
  }
}

function startCodexWheelSpin(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  ensureCodexWheelMounted();
  if(reduce || !codexSpinGroupEl) return;

  stopCodexWheelSpin();
  codexWheelPrev = performance.now();

  const DEG_PER_SEC = 360 / 60;

  const tick = (now)=>{
    codexWheelRAF = requestAnimationFrame(tick);
    if(codexWheelPaused){ codexWheelPrev = now; return; }

    const dt = (now - codexWheelPrev) / 1000;
    codexWheelPrev = now;

    codexWheelAngle = (codexWheelAngle - dt * DEG_PER_SEC) % 360;
    codexSpinGroupEl.setAttribute(
      'transform',
      `rotate(${codexWheelAngle} 120 120)`
    );
  };

  codexWheelRAF = requestAnimationFrame(tick);
}

function setCodexWheelPaused(p){
  codexWheelPaused = !!p;
}

function wireCodexWheel(){
  ensureCodexWheelMounted();
  if(!codexWheelPortalEl) return;

  codexWheelPortalEl.addEventListener('click', e=>{
    const t = e.target?.closest?.('[data-codex]');
    if(!t) return;
    e.preventDefault();
    setCodexActive(t.getAttribute('data-codex'));
  });

  codexWheelPortalEl.addEventListener('mouseenter', ()=>setCodexWheelPaused(true));
  codexWheelPortalEl.addEventListener('mouseleave', ()=>setCodexWheelPaused(false));
}

wireCodexWheel();
startCodexWheelSpin();

try{
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener?.('change', ()=>{
    stopCodexWheelSpin();
    startCodexWheelSpin();
  });
} catch(_){}

function renderCodexView(){
  setUniverseActive(false);
  if(activeRow){
    activeRow.classList.remove('active');
    activeRow = null;
  }
  stopPortalLoop();
  closeMetaFloat();
  showLegendFloat(null);
  clearTray();
  openSuggest(false);
  setInfoOpen(false);
  setInfoPeek(false);

  if(contextBody) contextBody.hidden = true;
  if(codexBodyRoot) codexBodyRoot.hidden = false;

  setMomentumActive(false);
  syncStageListVisibility();

  ensureCodexWheelMounted();

  const oldCredo = codexBodyRoot?.querySelector?.('.codex-credo');
  if(oldCredo) oldCredo.remove();

  const credo = document.createElement('div');
  credo.className = 'codex-credo';
  credo.innerHTML = `
    <span class="meaning">VOW</span> to
    <span class="meaning">GUIDE</span> the
    <span class="meaning">COMMON</span> through
    <span class="meaning">EQUILIBRIUM</span> and
    <span class="meaning">SUCCESS</span>
    <span class="meaning">enabling</span>
    <span class="meaning">COMUD</span>
  `;

  const wheelFrame = codexBodyRoot.querySelector('.codex-wheel-frame');
  if(wheelFrame && wheelFrame.nextSibling){
    codexBodyRoot.insertBefore(credo, wheelFrame.nextSibling);
  } else {
    codexBodyRoot.prepend(credo);
  }


  codexBtn?.classList.add('is-active');
  rescale();
}

function renderNonCodexView(){
  if(codexBodyRoot) codexBodyRoot.hidden = true;
  if(contextBody) contextBody.hidden = false;
  codexBtn?.classList.remove('is-active');

  syncStageListVisibility();              
  setSearchVisible(!momentumIsActive());  

  rescale();
}

const CODEX_CONTENT = {
  vow:{
    title: 'VOW — What does it mean to VOW?',
    html: `
      <p><b class="meaning">VOW</b> is responsibility taken freely</p>

      <p>
      Not authority granted<br>
      Not power assumed
      </p>

      <p>
      <b class="meaning">VOW</b> is accepting consequence by design<br>
      an ethical entry point to the <b class="system">UNIVERSE</b>
      </p>
    `
    },

  guide:{
    title: 'GUIDE — How does guidance work?',
    html: `
      <p><b class="meaning">GUIDE</b> earns authority by example</p>

      <p>
      Nothing is forced<br>
      Nothing is hidden
      </p>

      <p>
      <b class="meaning">GUIDE</b> prevents control without understanding<br>
      it begins when someone says: <em class="carry">“I will carry this.”</em>
      </p>
    `
    },

  common:{
    title:'COMMON — What is the COMMON?',
    html:`
      <p><b class="meaning">COMMON</b> is shared meaning</p>
      <p>Beliefs, cultures, narratives, values, and tribes<br>
      form the invisible field where trust emerges</p>
      <p><b class="system">UNIVERSE</b> does not define meaning<br>
      It protects the space where meaning is <b class="meaning">COMMON</b></p>
    `
  },

  equilibrium:{
    title:'EQUILIBRIUM — What is equilibrium?',
    html:`
      <p><b class="meaning">EQUILIBRIUM</b> is honest reality</p>
      <p>What is needed<br>
      What is offered<br>
      Where friction exists<br>
      Where balance emerges</p>
      <p>Not optimized by force<br>
      Not planned from above<br>
      Not corrected by decree</p>
      <p><b class="meaning">EQUILIBRIUM</b> keeps governance grounded in life</p>
    `
  },

  success:{
    title:'SUCCESS — What is SUCCESS?',
    html:`
      <p><b class="signal">SUCCESS</b> is not a goal — it is a signal</p>
      <p>When alignment is real, momentum appears<br>
      When collaboration works, purpose is felt</p>
      <p>Observed, not designed — strongest when aligned.<br>
      If it must be claimed, it is not real <b class="signal">SUCCESS</b></p>
    `
  },

  comud:{
    html:`
      <div class="comud-column">
        <p>
          <b class="meaning" style="letter-spacing:.5px;">COMUD</b>
          is a homage to <b class="meaning">MUD</b><br>
          Multi-User Dimensions (1980)<br>
          The first shared Digital Worlds<br>
          The true root of the Metaverse
        </p>
        <p class="comud-aside">* MUD is pronounced “mood”</p>
        <p>
          <b class="system" style="letter-spacing:.2px;">UNIVERSE</b>
          honors this origin<br>
          Protecting Human Well–Being<br>
          through the SOUL of
          <b class="system" style="margin-left:3px;letter-spacing:.6px;">CODEX</b>
        </p>

        <p>
          <button type="button"
            class="comud-dim-toggle"
            aria-expanded="false">
            Show Dimensions
          </button>
        </p>
      </div>

      <div class="comud-table" hidden>
        <table class="codex-grid" aria-label="COMUD dimensions table">
          <thead>
            <tr><th>Dimension</th><th>Domain</th></tr>
          </thead>
          <tbody>
            <tr><td>Body</td><td>Health & Comfort</td></tr>
            <tr><td>Mind</td><td>Peace & Clarity</td></tr>
            <tr><td>Heart</td><td>Love & Connection</td></tr>
            <tr><td>Energy</td><td>Vitality & Joy</td></tr>
            <tr><td>Social</td><td>Purpose & Contribution</td></tr>
          </tbody>
        </table>
      </div>
    `
  }
};


const codexTitlePortal = document.getElementById('codexTitlePortal');
const codexBodyPortal = document.getElementById('codexBodyPortal');

function bindComudTogglePortal(){
  if(!codexBodyPortal) return;
  const t = codexBodyPortal.querySelector('.comud-dim-toggle');
  const box = codexBodyPortal.querySelector('.comud-table');
  if(!t || !box) return;
  function setOpen(open){
    box.hidden = !open;
    t.setAttribute('aria-expanded', open ? 'true' : 'false');
    t.textContent = open ? 'Hide dimensions' : 'Show dimensions';
    rescale();
  }
  setOpen(false);
  t.addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setOpen(box.hidden);
  });
  t.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      e.stopPropagation();
      setOpen(box.hidden);
    }
  });
}

function setCodexActive(key){
  const entry = CODEX_CONTENT[key];
  if(!entry || !codexTitlePortal || !codexBodyPortal) return;

ensureCodexWheelMounted();
highlightCodexWheel(key);

  codexTitlePortal.style.display = (key === 'comud') ? 'block' : 'none';
  codexTitlePortal.textContent = (key === 'comud') ? entry.title : '';
  codexBodyPortal.innerHTML = entry.html;
  codexBodyPortal.classList.toggle('is-comud', key === 'comud');

  bindComudTogglePortal();
  rescale();
}

setCodexActive('vow');

codexBtn?.addEventListener('click', ()=>{
  renderCodexView();
  setCodexActive('vow');
});

codexBtn?.addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' '){
    e.preventDefault();
    renderCodexView();
    setCodexActive('vow');
  }
});

function ensureNonCodexForNav(e){
  if(!codexBodyRoot || codexBodyRoot.hidden) return;
  const t = e.target;
  if(!t || !t.closest) return;

  if(t.closest('#universeBtn') || t.closest('#codexBtn') || t.closest('.mode-btn[data-mode]')){
    setMomentumActive(false);
    syncStageListVisibility();
    renderNonCodexView();
    return;
  }

}

document.addEventListener('pointerdown', ensureNonCodexForNav, true);
document.addEventListener('click', ensureNonCodexForNav, true);
document.addEventListener('keydown', (e)=>{
  if(!codexBodyRoot || codexBodyRoot.hidden) return;
  if(e.key !== 'Enter' && e.key !== ' ') return;
  const t = e.target;
  if(!t || !t.closest) return;
  if(t.closest('#universeBtn') || t.closest('#momentumBtn') || t.closest('.mode-btn[data-mode]')) renderNonCodexView();
}, true);

setSearchMode('v1');
rescale();
