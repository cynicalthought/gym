// ============================================================
// APP.JS — Modular Application Logic & UI Controller
// ============================================================

const EXERCISE_CATEGORIES = window.EXERCISE_CATEGORIES || {};

const CATEGORY_ICONS = {};
const CATEGORY_TARGETS = {};
const CATEGORY_FOLDER = {};
const TARGET_COLORS = ['#36d399', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4', '#10b981'];

const I18 = {
  en: {
    schedule: 'Schedule',
    library: 'Exercise library',
    timer: 'Rest timer',
    rt: 'Rest Timer',
    rs: 'Between sets',
    reset: 'Reset',
    start: 'Start',
    close: 'Close',
    d1: 'Back & Biceps',
    d2: 'Chest & Triceps',
    d3: 'Legs',
    d4: 'Shoulders',
    libraryTitle: 'All exercises',
    libraryDescription: 'Browse every exercise in your plan and watch its demonstration.',
    searchExercises: 'Search exercises or muscles',
    libraryPrompt: 'Choose a muscle group above or search for an exercise.',
    resultCount: 'exercises',
    targetDistribution: 'Muscle target distribution',
    panelTargets: 'Target muscles',
    demo: 'Demonstration',
    tips: 'Form cues',
    male: 'Male',
    female: 'Female',
    footer: 'Form first · Consistency always'
  },
  el: {
    schedule: 'Πρόγραμμα',
    library: 'Βιβλιοθήκη ασκήσεων',
    timer: 'Χρονόμετρο',
    rt: 'Χρονόμετρο Ξεκούρασης',
    rs: 'Μεταξύ σετ',
    reset: 'Επαναφορά',
    start: 'Εκκίνηση',
    close: 'Κλείσιμο',
    d1: 'Πλάτη & Δικέφαλοι',
    d2: 'Στήθος & Τρικέφαλοι',
    d3: 'Πόδια',
    d4: 'Ώμοι',
    libraryTitle: 'Όλες οι ασκήσεις',
    libraryDescription: 'Περιηγηθείτε σε κάθε άσκηση του προγράμματός σας και δείτε την επίδειξη.',
    searchExercises: 'Αναζήτηση ασκήσεων ή μυών',
    libraryPrompt: 'Επιλέξτε μια μυϊκή ομάδα παραπάνω ή αναζητήστε μια άσκηση.',
    resultCount: 'ασκήσεις',
    targetDistribution: 'Κατανομή μυϊκών στόχων',
    panelTargets: 'Στοχευμένοι μυς',
    demo: 'Επίδειξη',
    tips: 'Οδηγίες εκτέλεσης',
    male: 'Άνδρας',
    female: 'Γυναίκα',
    footer: 'Η φόρμα προηγείται · Η συνέπεια μετράει'
  }
};

// Populate categories from window.EXERCISE_CATEGORIES
Object.keys(EXERCISE_CATEGORIES).forEach(key => {
  const cat = EXERCISE_CATEGORIES[key];
  CATEGORY_ICONS['group' + key.charAt(0).toUpperCase() + key.slice(1)] = cat.icon;
  // Handle kebab-case keys like lower-back -> groupLowerBack, mid-back -> groupMidBack
  const camelKey = 'group' + key.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');
  CATEGORY_ICONS[camelKey] = cat.icon;
  CATEGORY_TARGETS[camelKey] = cat.targets;
  CATEGORY_FOLDER[camelKey] = cat.folder;

  // Add translations for categories
  I18.en['group' + key.charAt(0).toUpperCase() + key.slice(1)] = cat.name.en;
  I18.el['group' + key.charAt(0).toUpperCase() + key.slice(1)] = cat.name.el;
  I18.en[camelKey] = cat.name.en;
  I18.el[camelKey] = cat.name.el;

  I18.en['desc' + key.charAt(0).toUpperCase() + key.slice(1)] = cat.desc.en;
  I18.el['desc' + key.charAt(0).toUpperCase() + key.slice(1)] = cat.desc.el;
  I18.en['desc' + camelKey.replace('group', '')] = cat.desc.en;
  I18.el['desc' + camelKey.replace('group', '')] = cat.desc.el;
});

// Define Day Workouts mapping from modular exercise IDs
const exerciseMap = {};
Object.values(EXERCISE_CATEGORIES).forEach(cat => {
  cat.exercises.forEach(ex => {
    exerciseMap[ex.id] = ex;
  });
});

const D = {
  1: [
    exerciseMap['seatedCableRow'],
    exerciseMap['pullUps'],
    exerciseMap['dumbbellCurl'],
    exerciseMap['preacherCurl']
  ].filter(Boolean),
  2: [
    exerciseMap['benchPress'],
    exerciseMap['inclinePress'],
    exerciseMap['pushUps'],
    exerciseMap['pushdown']
  ].filter(Boolean),
  3: [
    exerciseMap['squat'],
    exerciseMap['rdl'],
    exerciseMap['legPress'],
    exerciseMap['standingCalfRaise']
  ].filter(Boolean),
  4: [
    exerciseMap['overheadPress'],
    exerciseMap['lateralRaises'],
    exerciseMap['facePulls'],
    exerciseMap['arnoldPress']
  ].filter(Boolean)
};

const LIBRARY_EXTRAS = [];
Object.values(EXERCISE_CATEGORIES).forEach(cat => {
  cat.exercises.forEach(ex => {
    // Collect extra exercises not explicitly primary in D
    const inD = Object.values(D).some(dayList => dayList.some(item => item.id === ex.id));
    if (!inD) {
      LIBRARY_EXTRAS.push(ex);
    }
  });
});

let pieBadgeCounter = 0;

function targetBreakdown(ex) {
  const badgeId = `pieBadge${++pieBadgeCounter}`;
  const items = ex.targets.map((tg, index) => ({ tg, index, color: TARGET_COLORS[index % TARGET_COLORS.length] }));
  
  const cx = 380, cy = 230, r = 115, depth = 16;
  
  const sectorPath = (start, end) => {
    const a = start * Math.PI / 180, b = end * Math.PI / 180;
    const x1 = cx + r * Math.cos(a), y1 = cy + r * Math.sin(a), x2 = cx + r * Math.cos(b), y2 = cy + r * Math.sin(b);
    const large = end - start > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
  };
  
  let angle = -90;
  const sectors = items.map(({ tg, color, index }) => {
    const start = angle, end = angle + 360 * tg.p / 100, path = sectorPath(start, end), mid = (start + end) / 2 * Math.PI / 180;
    const explode = 8 + tg.p * .14, dx = explode * Math.cos(mid), dy = explode * Math.sin(mid);
    const ax = cx + (r + explode) * Math.cos(mid), ay = cy + (r + explode) * Math.sin(mid);
    const sector = { tg, color, path, dx, dy, ax, ay, start, end, index, midAngle: (start + end) / 2 };
    angle = end;
    return sector;
  });
  
  const extrusion = sectors.map(({ path, color, dx, dy }) => `<path d="${path}" transform="translate(${dx} ${dy + depth})" fill="${color}" opacity=".42" stroke="#0e1417" stroke-width="1.8" stroke-linejoin="round"/>`).join('');
  const slices = sectors.map(({ path, color, dx, dy }) => `<path d="${path}" transform="translate(${dx} ${dy})" fill="${color}" stroke="#0e1417" stroke-width="1.8" stroke-linejoin="round" filter="drop-shadow(0 3px 5px rgba(0,0,0,.35))"/>`).join('');

  const leftItems = sectors.filter(s => Math.cos(s.midAngle * Math.PI / 180) < 0);
  const rightItems = sectors.filter(s => Math.cos(s.midAngle * Math.PI / 180) >= 0);

  leftItems.sort((a, b) => (a.ay + a.dy) - (b.ay + b.dy));
  rightItems.sort((a, b) => (a.ay + a.dy) - (b.ay + b.dy));

  let formattedSectors = [];
  const totalH = 460;
  const pillHBox = 48;
  const minGap = pillHBox + 16;

  let currentLeftY = 45;
  leftItems.forEach((item, idx) => {
    const idealY = 45 + idx * ((totalH - 90) / Math.max(1, leftItems.length)) + 25;
    const labelY = Math.max(currentLeftY, Math.min(totalH - 55, idealY));
    formattedSectors.push({ ...item, labelY, textX: 45, textAnchor: 'start', isRight: false });
    currentLeftY = labelY + minGap;
  });

  let currentRightY = 45;
  rightItems.forEach((item, idx) => {
    const idealY = 45 + idx * ((totalH - 90) / Math.max(1, rightItems.length)) + 25;
    const labelY = Math.max(currentRightY, Math.min(totalH - 55, idealY));
    formattedSectors.push({ ...item, labelY, textX: 715, textAnchor: 'end', isRight: true });
    currentRightY = labelY + minGap;
  });

  const linkedTargets = formattedSectors.map(item => {
    const startX = item.ax + item.dx;
    const startY = item.ay + item.dy;
    const elbowX = item.isRight ? 535 : 225;
    const textAnchorX = item.isRight ? 715 : 45;
    const targetY = item.labelY - 2;
    return `
      <circle cx="${startX}" cy="${startY}" r="4" fill="#fff" stroke="${item.color}" stroke-width="2"/>
      <path d="M ${startX} ${startY} L ${elbowX} ${targetY} H ${textAnchorX}" fill="none" stroke="${item.color}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".9"/>
    `;
  }).join('');

  const labelRows = formattedSectors.map(item => {
    const name = item.tg[lang] || item.tg.en;
    const pillW = 175;
    const pillX = item.isRight ? item.textX - pillW : item.textX;
    const pillY = item.labelY - 22;
    const iconPath = CATEGORY_ICONS[item.tg.k] || CATEGORY_ICONS.groupChest;
    const iconGroupX = pillX + 10;
    const textStartX = pillX + 50;

    return `
      <rect x="${pillX}" y="${pillY}" width="${pillW}" height="${pillHBox}" rx="12" fill="rgba(22, 30, 34, 0.96)" stroke="${item.color}" stroke-opacity="0.5" stroke-width="1.5"/>
      <g transform="translate(${iconGroupX}, ${item.labelY - 14})" fill="none" stroke="${item.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="28" height="28" rx="7" fill="rgba(121,217,187,0.12)" stroke="${item.color}" stroke-opacity="0.6"/>
        <g transform="translate(3,3) scale(0.75)" fill="${item.color}" stroke="none">${iconPath || ''}</g>
      </g>
      <text class="chart-callout-name" x="${textStartX}" y="${item.labelY - 3}" text-anchor="start" font-size="14" font-weight="750" fill="#f0f5f3">${name}</text>
      <text class="chart-callout-share" x="${textStartX}" y="${item.labelY + 17}" text-anchor="start" font-size="13" font-weight="850" fill="#a4e8d2">${item.tg.p}%</text>
    `;
  }).join('');

  const label = items.map(({ tg }) => `${tg[lang] || tg.en} ${tg.p}%`).join(', ');

  return `<section class="target-breakdown" aria-label="${t('targetDistribution')}"><h3 class="visual-panel-title">${t('panelTargets')}</h3><div class="pie-chart"><svg viewBox="0 0 760 460" role="img" aria-label="Muscle target distribution. ${label}"><defs><linearGradient id="${badgeId}Rim" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a9cfc0"/><stop offset=".48" stop-color="#40544f"/><stop offset="1" stop-color="#101618"/></linearGradient><radialGradient id="${badgeId}Face" cx=".3" cy=".22" r=".9"><stop stop-color="#30413e"/><stop offset="1" stop-color="#141c1e"/></radialGradient></defs><ellipse cx="${cx}" cy="${cy + 16}" rx="96" ry="88" fill="#000" opacity=".28"/>${extrusion}${slices}${linkedTargets}${labelRows}<g class="pie-center-badge" aria-hidden="true"><circle class="pie-center-rim" style="fill:url(#${badgeId}Rim)" cx="${cx}" cy="${cy}" r="28"/><circle class="pie-center-face" style="fill:url(#${badgeId}Face)" cx="${cx}" cy="${cy}" r="24"/><path class="pie-center-mark" d="M ${cx - 10} ${cy - 12} v12 c0 13 20 13 20 0 v-12"/></g></svg></div></section>`;
}

let lang = localStorage.getItem('apexLang') || 'en';
let exGender = JSON.parse(localStorage.getItem('apexExGen') || '{}');
const $ = s => document.querySelector(s), $$ = s => document.querySelectorAll(s);
const t = k => I18[lang][k] || I18.en[k] || k;
const enc = p => p.split('/').map(s => encodeURIComponent(s)).join('/');

function apply() {
  $$('[data-i]').forEach(el => el.textContent = t(el.dataset.i));
  $('#languageSelect').value = lang;
  $('#timerBtn').textContent = lang === 'en' ? 'Rest timer' : 'Χρονόμετρο';
  document.documentElement.lang = lang;
  $('#scheduleTab').classList.toggle('on', !libraryOpen);
  $('#libraryTab').classList.toggle('on', libraryOpen);
  $('#scheduleView').hidden = libraryOpen;
  $('#libraryView').hidden = !libraryOpen;
  draw();
}

function mediaHTML(ex, g) {
  const m = ex.media || null;
  if (!m) return '<p style="color:#6a6a78;text-align:center;padding:2rem">—</p>';
  const primary = g === 'female' ? (m.female || m.male) : (m.male || m.female);
  const fallback = g === 'female' ? m.male : m.female;
  if (!primary) return '<p style="color:#6a6a78;text-align:center;padding:2rem">—</p>';
  const src = enc(primary);
  const fb = fallback && fallback !== primary ? enc(fallback) : '';
  const resolutionFit = /\.webm$/i.test(primary) ? ` onloadedmetadata="this.closest('.stage').style.aspectRatio=this.videoWidth+'/'+this.videoHeight"` : '';
  if (/\.(mp4|mkv|webm)$/i.test(primary)) {
    const onerr = fb ? ` onerror="this.onerror=null;this.src='${fb}'"` : '';
    return `<video src="${src}" autoplay loop muted playsinline controls preload="metadata"${resolutionFit}${onerr}></video>`;
  }
  const imageFallback = fb ? ` onerror="this.onerror=null;this.src='${fb}'"` : '';
  return `<img src="${src}" alt="${ex.n[lang]}" loading="lazy"${imageFallback}>`;
}

let libraryOpen = localStorage.getItem('apexView') === 'library';
let activeLibraryGroup = null;

const CATEGORY_TARGETS_MAP = {
  groupBiceps: ['groupBiceps'],
  groupChest: ['groupChest'],
  groupCore: ['groupCore'],
  groupCalves: ['groupCalves'],
  groupGlutes: ['groupGlutes'],
  groupHamstrings: ['groupHamstrings'],
  groupLowerBack: ['groupLowerBack'],
  groupMidBack: ['groupMidBack'],
  groupQuads: ['groupQuads'],
  groupShoulders: ['groupShoulders'],
  groupTriceps: ['groupTriceps']
};

const CATEGORY_FOLDER_MAP = {
  groupBiceps: 'biceps',
  groupChest: 'chest',
  groupCore: 'core',
  groupCalves: 'calves',
  groupGlutes: 'glutes',
  groupHamstrings: 'hamstrings',
  groupLowerBack: 'lower-back',
  groupMidBack: 'mid-back',
  groupQuads: 'quads',
  groupShoulders: 'shoulders',
  groupTriceps: 'triceps'
};

function categoryTargets(ex, group) { return ex.targets.filter(target => CATEGORY_TARGETS_MAP[group].includes(target.k)).sort((a, b) => b.p - a.p); }
function categoryTarget(ex, group) { return categoryTargets(ex, group)[0] || null; }
function categoryShare(ex, group) { return categoryTarget(ex, group)?.p || 0; }
function highestTargetShare(ex) { return Math.max(0, ...ex.targets.map(target => target.p)); }
function isTiedTopTarget(ex, group) { const top = highestTargetShare(ex); return top > 0 && categoryTargets(ex, group).some(target => target.p === top); }
function mediaFolder(ex) { 
  const paths = ex.media; 
  const path = paths && (paths.male || paths.female) || ''; 
  return path.split('/')[1] || ''; 
}

function allLibraryExercises() {
  const list = [];
  Object.values(EXERCISE_CATEGORIES).forEach(cat => {
    cat.exercises.forEach(ex => {
      if (!list.some(item => item.id === ex.id)) {
        list.push(ex);
      }
    });
  });
  return list;
}

function exercisesForGroup(group) { 
  const folderName = CATEGORY_FOLDER_MAP[group];
  return allLibraryExercises().filter(ex => mediaFolder(ex) === folderName || isTiedTopTarget(ex, group)).sort((a, b) => categoryShare(b, group) - categoryShare(a, group) || a.n.en.localeCompare(b.n.en)); 
}

function exerciseCard(ex, group = null) {
  const g = exGender[ex.id] || 'male';
  const c = document.createElement('article');
  c.className = 'ex'; c.dataset.id = ex.id;
  const target = group ? categoryTarget(ex, group) : null;
  const share = target ? `<span class="category-share">${target[lang] || target.en} · ${target.p}%</span>` : '';
  c.innerHTML = `
    <div class="ex-head"><div class="row"><div class="ex-name">${ex.n[lang]}</div><div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;justify-content:flex-end">${share}<span class="ex-sets">${ex.s}</span></div></div><div class="ex-muscles">${ex.m[lang]}</div></div>
    <div class="exercise-visual-row">${targetBreakdown(ex)}
    <div class="media-area"><h3 class="visual-panel-title">${t('demo')}</h3><div class="stage" data-media="${ex.id}">${mediaHTML(ex, g)}</div><div class="g-row">
      <button class="g-btn${g === 'male' ? ' on' : ''}" data-g="male" data-ex="${ex.id}">${t('male')}</button>
      <button class="g-btn${g === 'female' ? ' on' : ''}" data-g="female" data-ex="${ex.id}">${t('female')}</button>
    </div></div>
    <section class="form-cues-panel"><h3 class="visual-panel-title">${t('tips')}</h3><ol class="form-cue-list">${ex.t[lang].map((x, i) => `<li><span class="cue-index">${String(i + 1).padStart(2, '0')}</span><span>${x}</span></li>`).join('')}</ol></section></div>`;
  return c;
}

function categoryImageSrc(group) {
  const key = group.replace('group', '').toLowerCase();
  const cat = EXERCISE_CATEGORIES[key] || EXERCISE_CATEGORIES[Object.keys(EXERCISE_CATEGORIES).find(k => k.toLowerCase() === key)];
  return cat ? cat.image : '';
}

function categoryIcon(group) {
  const imgSrc = categoryImageSrc(group);
  if (imgSrc) {
    return `<span class="category-icon" aria-hidden="true"><img src="${imgSrc}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:12px;"></span>`;
  }
  return `<span class="category-icon" aria-hidden="true"></span>`;
}

function draw() {
  for (let d = 1; d <= 4; d++) {
    const box = $('#e' + d); 
    if (box) {
      box.innerHTML = ''; 
      (D[d] || []).forEach(ex => box.appendChild(exerciseCard(ex)));
    }
  }
  const all = $('#allExercises'); 
  if (!all) return;
  all.innerHTML = '';
  
  const groupOrder = ['groupBiceps', 'groupCalves', 'groupChest', 'groupCore', 'groupGlutes', 'groupHamstrings', 'groupLowerBack', 'groupMidBack', 'groupQuads', 'groupShoulders', 'groupTriceps'];
  
  const query = $('#exerciseSearch').value.trim();
  const categoryNav = $('#categoryNav'); 
  if (categoryNav) {
    categoryNav.innerHTML = '';
    groupOrder.forEach(group => {
      const exercises = exercisesForGroup(group);
      const descKey = 'desc' + group.replace('group', '');
      const description = t(descKey);

      const navButton = document.createElement('button'); 
      navButton.className = 'category-link' + (activeLibraryGroup === group ? ' selected' : ''); 
      navButton.type = 'button'; 
      navButton.dataset.group = group;
      
      navButton.innerHTML = `
        ${categoryIcon(group)}
        <span class="category-link-text">
          <span class="category-link-name">${t(group)}</span>
          <span class="category-link-count">${exercises.length} ${t('resultCount')}</span>
          <span class="category-link-desc">${description}</span>
        </span>`; 
      categoryNav.appendChild(navButton);

      if (!exercises.length || (!query && activeLibraryGroup !== group)) return;
      if (activeLibraryGroup === group && !query) {
        const section = document.createElement('section'); section.className = 'library-group library-results-group'; section.dataset.fullView = 'true';
        section.innerHTML = `<div class="library-full-heading"><span class="library-group-title">${categoryIcon(group)}<span>${t(group)}</span></span><span class="library-count">${exercises.length} ${t('resultCount')}</span></div><div class="ex-grid"></div>`;
        const grid = section.querySelector('.ex-grid'); exercises.forEach(ex => grid.appendChild(exerciseCard(ex, group))); all.appendChild(section); return;
      }
      const section = document.createElement('details'); section.className = 'library-group'; section.id = `library-${group}`; section.open = true;
      section.innerHTML = `<summary><span class="library-group-title">${categoryIcon(group)}<span>${t(group)}</span></span><span class="library-count">${exercises.length} ${t('resultCount')}</span></summary><div class="library-exercises"></div>`;
      const list = section.querySelector('.library-exercises');
      exercises.forEach(ex => {
        const item = document.createElement('details'); item.className = 'library-exercise';
        item.dataset.search = `${ex.n.en} ${ex.n.el} ${ex.m.en} ${ex.m.el} ${ex.targets.map(target => target.en + ' ' + target.el).join(' ')}`.toLocaleLowerCase();
        item.innerHTML = `<summary><span class="library-exercise-name">${ex.n[lang]}</span><span class="library-exercise-meta"><span>${ex.m[lang]}</span><span>${categoryShare(ex, group)}%</span><span>${ex.s}</span></span></summary>`;
        item.appendChild(exerciseCard(ex, group)); list.appendChild(item);
      }); all.appendChild(section);
    });
  }
  const search = $('#exerciseSearch');
  if (search) {
    search.placeholder = t('searchExercises'); 
    search.setAttribute('aria-label', t('searchExercises'));
  }
  filterLibrary();
}

function filterLibrary() {
  const searchInput = $('#exerciseSearch');
  if (!searchInput) return;
  const query = searchInput.value.trim().toLocaleLowerCase(); let count = 0;
  $$('.library-group').forEach(group => {
    if (group.dataset.fullView === 'true') { count += group.querySelectorAll('.ex').length; return }
    let groupCount = 0;
    group.querySelectorAll('.library-exercise').forEach(item => { const matches = !query || item.dataset.search.includes(query); item.hidden = !matches; if (matches) groupCount++; if (query && matches) item.open = true });
    group.hidden = groupCount === 0; count += groupCount; 
    const countEl = group.querySelector('.library-count');
    if (countEl) countEl.textContent = `${groupCount} ${t('resultCount')}`;
  });
  const resultsEl = $('#libraryResults');
  if (resultsEl) resultsEl.textContent = query ? `${count} ${t('resultCount')}` : '';
  const promptEl = $('#libraryPrompt');
  if (promptEl) promptEl.hidden = !!query || !!activeLibraryGroup;
}

const scheduleTab = $('#scheduleTab');
const libraryTab = $('#libraryTab');
if (scheduleTab) scheduleTab.onclick = () => { libraryOpen = false; localStorage.setItem('apexView', 'schedule'); apply() };
if (libraryTab) libraryTab.onclick = () => { libraryOpen = true; localStorage.setItem('apexView', 'library'); apply() };
const searchInput = $('#exerciseSearch');
if (searchInput) searchInput.oninput = () => { activeLibraryGroup = null; draw() };
const categoryNavEl = $('#categoryNav');
if (categoryNavEl) categoryNavEl.onclick = e => { const btn = e.target.closest('.category-link'); if (!btn) return; $('#exerciseSearch').value = ''; activeLibraryGroup = btn.dataset.group; draw(); $('#allExercises').scrollIntoView({ behavior: 'smooth', block: 'start' }) };

const daysEl = $('#days');
if (daysEl) daysEl.onclick = e => {
  const btn = e.target.closest('.day-card'); if (!btn) return;
  $$('.day-card').forEach(x => x.classList.remove('on'));
  btn.classList.add('on');
  $$('.panel').forEach(p => p.classList.remove('on'));
  const panel = $('#p' + btn.dataset.d);
  if (panel) panel.classList.add('on');
};

document.onclick = e => {
  const gb = e.target.closest('.g-btn');
  if (!gb) return;
  const id = gb.dataset.ex, g = gb.dataset.g;
  exGender[id] = g; localStorage.setItem('apexExGen', JSON.stringify(exGender));
  gb.parentElement.querySelectorAll('.g-btn').forEach(b => b.classList.toggle('on', b.dataset.g === g));
  const mediaBox = gb.closest('.ex').querySelector('[data-media="' + id + '"]');
  let ex = null;
  for (const day of Object.values(D)) { const f = day.find(x => x.id === id); if (f) { ex = f; break } }
  if (!ex) { ex = allLibraryExercises().find(x => x.id === id); }
  if (ex && mediaBox) mediaBox.innerHTML = mediaHTML(ex, g);
};

const langSelect = $('#languageSelect');
if (langSelect) langSelect.onchange = e => { lang = e.target.value; localStorage.setItem('apexLang', lang); apply() };

let S = 90, R = 90, IV = null;
const ov = $('#ov'), clk = $('#clk'), tt = $('#tToggle');
const fmt = s => Math.floor(s / 60) + ':' + (s % 60).toString().padStart(2, '0');
const upd = () => { if (clk) clk.textContent = fmt(R); };
const timerBtn = $('#timerBtn');
if (timerBtn) timerBtn.onclick = () => ov && ov.classList.add('show');
const tClose = $('#tClose');
if (tClose) tClose.onclick = () => ov && ov.classList.remove('show');
if (ov) ov.onclick = e => { if (e.target === ov) ov.classList.remove('show') };
$$('.pre').forEach(b => b.onclick = () => {
  $$('.pre').forEach(x => x.classList.remove('on')); b.classList.add('on');
  S = +b.dataset.s; R = S; if (IV) { clearInterval(IV); IV = null; if (tt) tt.textContent = t('start') } upd();
});
if (tt) tt.onclick = () => {
  if (IV) { clearInterval(IV); IV = null; tt.textContent = t('start') }
  else {
    tt.textContent = lang === 'en' ? 'Pause' : 'Παύση';
    IV = setInterval(() => { R--; upd(); if (R <= 0) { clearInterval(IV); IV = null; tt.textContent = t('start'); R = S; upd(); navigator.vibrate && navigator.vibrate([180, 60, 180]) } }, 1000)
  }
};
const tReset = $('#tReset');
if (tReset) tReset.onclick = () => { if (IV) { clearInterval(IV); IV = null; if (tt) tt.textContent = t('start') } R = S; upd() };

apply();