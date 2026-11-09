let pieBadgeCounter = 0;

function targetBreakdown(ex) {
  const badgeId = `pieBadge${++pieBadgeCounter}`;
  const items = ex.targets.map((tg, index) => ({ tg, index, color: TARGET_COLORS[index % TARGET_COLORS.length] }));
  
  const cx = 380, cy = 230, r = 95, depth = 14;
  
  const sectorPath = (start, end) => {
    const a = start * Math.PI / 180, b = end * Math.PI / 180;
    const x1 = cx + r * Math.cos(a), y1 = cy + r * Math.sin(a), x2 = cx + r * Math.cos(b), y2 = cy + r * Math.sin(b);
    const large = end - start > 180 ? 1 : 0;
    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2} Z`;
  };
  
  let angle = -90;
  const sectors = items.map(({ tg, color, index }) => {
    const start = angle, end = angle + 360 * tg.p / 100, path = sectorPath(start, end), mid = (start + end) / 2 * Math.PI / 180;
    const explode = 5 + tg.p * .1, dx = explode * Math.cos(mid), dy = explode * Math.sin(mid);
    const ax = cx + (r + explode) * Math.cos(mid), ay = cy + (r + explode) * Math.sin(mid);
    const sector = { tg, color, path, dx, dy, ax, ay, start, end, index, midAngle: (start + end) / 2 };
    angle = end;
    return sector;
  });
  
  const extrusion = sectors.map(({ path, color, dx, dy }) => `<path d="${path}" transform="translate(${dx} ${dy + depth})" fill="${color}" opacity=".48" stroke="#101418" stroke-width="1.7" stroke-linejoin="round"/>`).join('');
  const slices = sectors.map(({ path, color, dx, dy }) => `<path d="${path}" transform="translate(${dx} ${dy})" fill="${color}" stroke="#101418" stroke-width="1.7" stroke-linejoin="round" filter="drop-shadow(0 2px 3px rgba(0,0,0,.32))"/>`).join('');

  const leftItems = sectors.filter(s => Math.cos(s.midAngle * Math.PI / 180) < 0).sort((a, b) => a.midAngle - b.midAngle);
  const rightItems = sectors.filter(s => Math.cos(s.midAngle * Math.PI / 180) >= 0).sort((a, b) => a.midAngle - b.midAngle);

  let formattedSectors = [];
  const totalH = 460;

  const leftCount = Math.max(1, leftItems.length);
  leftItems.forEach((item, idx) => {
    const spacing = (totalH - 80) / leftCount;
    const labelY = 50 + idx * spacing + spacing / 2;
    formattedSectors.push({ ...item, labelY, textX: 65, textAnchor: 'start', isRight: false });
  });

  const rightCount = Math.max(1, rightItems.length);
  rightItems.forEach((item, idx) => {
    const spacing = (totalH - 80) / rightCount;
    const labelY = 50 + idx * spacing + spacing / 2;
    formattedSectors.push({ ...item, labelY, textX: 695, textAnchor: 'end', isRight: true });
  });

  const linkedTargets = formattedSectors.map(item => {
    const startX = item.ax + item.dx;
    const startY = item.ay + item.dy;
    const elbowX = item.isRight ? 510 : 250;
    const textAnchorX = item.isRight ? 530 : 230;
    const targetY = item.labelY - 2;
    return `
      <circle cx="${startX}" cy="${startY}" r="3" fill="${item.color}" opacity="0.9"/>
      <path d="M ${startX} ${startY} L ${elbowX} ${targetY} H ${textAnchorX}" fill="none" stroke="${item.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-opacity=".85"/>
    `;
  }).join('');

  const labelRows = formattedSectors.map(item => {
    const name = item.tg[lang] || item.tg.en;
    return `
      <text class="chart-callout-name" x="${item.textX}" y="${item.labelY - 1}" text-anchor="${item.textAnchor}" font-size="18" font-weight="700">${name}</text>
      <text class="chart-callout-share" x="${item.textX}" y="${item.labelY + 23}" text-anchor="${item.textAnchor}" font-size="16" font-weight="800">${item.tg.p}%</text>
    `;
  }).join('');

  const label = items.map(({ tg }) => `${tg[lang] || tg.en} ${tg.p}%`).join(', ');

  return `<section class="target-breakdown" aria-label="${t('targetDistribution')}"><h3 class="visual-panel-title">${t('panelTargets')}</h3><div class="pie-chart"><svg viewBox="0 0 760 460" role="img" aria-label="Muscle target distribution. ${label}"><defs><linearGradient id="${badgeId}Rim" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a9cfc0"/><stop offset=".48" stop-color="#40544f"/><stop offset="1" stop-color="#101618"/></linearGradient><radialGradient id="${badgeId}Face" cx=".3" cy=".22" r=".9"><stop stop-color="#30413e"/><stop offset="1" stop-color="#141c1e"/></radialGradient></defs><ellipse cx="${cx}" cy="${cy + 16}" rx="84" ry="78" fill="#000" opacity=".25"/>${extrusion}${slices}${linkedTargets}${labelRows}<g class="pie-center-badge" aria-hidden="true"><circle class="pie-center-rim" style="fill:url(#${badgeId}Rim)" cx="${cx}" cy="${cy}" r="26"/><circle class="pie-center-face" style="fill:url(#${badgeId}Face)" cx="${cx}" cy="${cy}" r="22.5"/><path class="pie-center-mark" d="M ${cx - 9} ${cy - 11} v11 c0 12 18 12 18 0 v-11"/></g></svg></div></section>`;
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
  const m = (ex.mediaKey && window.MEDIA && window.MEDIA[ex.mediaKey])
    ? window.MEDIA[ex.mediaKey]
    : (ex.media || null);
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

function categoryTargets(ex, group) { return ex.targets.filter(target => CATEGORY_TARGETS[group].includes(target.k)).sort((a, b) => b.p - a.p); }
function categoryTarget(ex, group) { return categoryTargets(ex, group)[0] || null; }
function categoryShare(ex, group) { return categoryTarget(ex, group)?.p || 0; }
function highestTargetShare(ex) { return Math.max(0, ...ex.targets.map(target => target.p)); }
function isTiedTopTarget(ex, group) { const top = highestTargetShare(ex); return top > 0 && categoryTargets(ex, group).some(target => target.p === top); }
function mediaFolder(ex) { const paths = window.MEDIA && window.MEDIA[ex.mediaKey]; const path = paths && (paths.male || paths.female) || ''; return path.split('/')[1] || ''; }
function allLibraryExercises() { return Object.values(D).flat().concat(LIBRARY_EXTRAS); }
function exercisesForGroup(group) { return allLibraryExercises().filter(ex => mediaFolder(ex) === CATEGORY_FOLDER[group] || isTiedTopTarget(ex, group)).sort((a, b) => categoryShare(b, group) - categoryShare(a, group) || a.n.en.localeCompare(b.n.en)); }

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

function categoryIcon(group) {
  const overlays = { groupCalves: '<path d="M27 42q5 1 9 0l-2 19-5 2-4-13Zm26 0q-5 1-9 0l2 19 5 2 4-13z"/>', groupCore: '<path d="M29 31h7v8h-7zm9 0h7v8h-7zm-9 10h7v8h-7zm9 0h7v8h-7z"/>', groupMidBack: '<path d="M23 18q9-5 18 0l-2 12-7 5-7-5z"/>', groupBiceps: '<path d="M19 22q-5 2-3 9l5 3 4-4-1-7zm26 0q5 2 3 9l-5 3-4-4 1-7z"/>', groupChest: '<path d="M25 18q6-4 10 1l-1 9q-6 3-10-1-2-5 1-9zm14 0q-6-4-10 1l1 9q6 3 10-1 2-5-1-9z"/>', groupTriceps: '<path d="M18 21q5-3 8 2l-2 11-5 2-4-7zm30 0q-5-3-8 2l2 11 5 2 4-7z"/>', groupGlutes: '<path d="M25 29q4-5 8-2l-1 10q-6 2-9-2zm14 0q-4-5-8-2l1 10q6 2 9-2z"/>', groupQuads: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10z"/>', groupHamstrings: '<path d="M25 36h8l-2 12-3 10h-4l-1-12zm10 0h8l1 10-1 12h-4l-3-10 z"/>', groupShoulders: '<path d="M19 17q6-6 12 0l-2 9-8 2-5-5zm26 0q-6-6-12 0l2 9 8 2 5-5z"/>' };
  return `<span class="category-icon" aria-hidden="true"><svg viewBox="0 0 64 64"><g fill="none" stroke="#879994" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="9" r="5"/><path d="M25 16q7-3 14 0l4 15-5 5 3 24M25 16l-4 15 5 5-3 24M21 22l-7 13m29-13 7 13"/></g><g fill="#79d9bb" opacity=".9">${overlays[group]}</g></svg></span>`;
}

function draw() {
  for (let d = 1; d <= 4; d++) {
    const box = $('#e' + d); box.innerHTML = ''; D[d].forEach(ex => box.appendChild(exerciseCard(ex)));
  }
  const all = $('#allExercises'); all.innerHTML = '';
  const groupOrder = ['groupBiceps', 'groupChest', 'groupCore', 'groupCalves', 'groupGlutes', 'groupHamstrings', 'groupMidBack', 'groupQuads', 'groupShoulders', 'groupTriceps'];
  const query = $('#exerciseSearch').value.trim();
  const categoryNav = $('#categoryNav'); categoryNav.innerHTML = '';
  groupOrder.forEach(group => {
    const exercises = exercisesForGroup(group);
    const navButton = document.createElement('button'); navButton.className = 'category-link' + (activeLibraryGroup === group ? ' selected' : ''); navButton.type = 'button'; navButton.dataset.group = group;
    navButton.innerHTML = `${categoryIcon(group)}<span class="category-link-text"><span class="category-link-name">${t(group)}</span><span class="category-link-count">${exercises.length} ${t('resultCount')}</span></span>`; categoryNav.appendChild(navButton);
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
  const search = $('#exerciseSearch'); search.placeholder = t('searchExercises'); search.setAttribute('aria-label', t('searchExercises'));
  filterLibrary();
}

function filterLibrary() {
  const query = $('#exerciseSearch').value.trim().toLocaleLowerCase(); let count = 0;
  $$('.library-group').forEach(group => {
    if (group.dataset.fullView === 'true') { count += group.querySelectorAll('.ex').length; return }
    let groupCount = 0;
    group.querySelectorAll('.library-exercise').forEach(item => { const matches = !query || item.dataset.search.includes(query); item.hidden = !matches; if (matches) groupCount++; if (query && matches) item.open = true });
    group.hidden = groupCount === 0; count += groupCount; group.querySelector('.library-count').textContent = `${groupCount} ${t('resultCount')}`;
  });
  $('#libraryResults').textContent = query ? `${count} ${t('resultCount')}` : '';
  $('#libraryPrompt').hidden = !!query || !!activeLibraryGroup;
}

$('#scheduleTab').onclick = () => { libraryOpen = false; localStorage.setItem('apexView', 'schedule'); apply() };
$('#libraryTab').onclick = () => { libraryOpen = true; localStorage.setItem('apexView', 'library'); apply() };
$('#exerciseSearch').oninput = () => { activeLibraryGroup = null; draw() };
$('#categoryNav').onclick = e => { const btn = e.target.closest('.category-link'); if (!btn) return; $('#exerciseSearch').value = ''; activeLibraryGroup = btn.dataset.group; draw(); $('#allExercises').scrollIntoView({ behavior: 'smooth', block: 'start' }) };

$('#days').onclick = e => {
  const btn = e.target.closest('.day-card'); if (!btn) return;
  $$('.day-card').forEach(x => x.classList.remove('on'));
  btn.classList.add('on');
  $$('.panel').forEach(p => p.classList.remove('on'));
  $('#p' + btn.dataset.d).classList.add('on');
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
  if (ex && mediaBox) mediaBox.innerHTML = mediaHTML(ex, g);
};

$('#languageSelect').onchange = e => { lang = e.target.value; localStorage.setItem('apexLang', lang); apply() };

let S = 90, R = 90, IV = null;
const ov = $('#ov'), clk = $('#clk'), tt = $('#tToggle');
const fmt = s => Math.floor(s / 60) + ':' + (s % 60).toString().padStart(2, '0');
const upd = () => clk.textContent = fmt(R);
$('#timerBtn').onclick = () => ov.classList.add('show');
$('#tClose').onclick = () => ov.classList.remove('show');
ov.onclick = e => { if (e.target === ov) ov.classList.remove('show') };
$$('.pre').forEach(b => b.onclick = () => {
  $$('.pre').forEach(x => x.classList.remove('on')); b.classList.add('on');
  S = +b.dataset.s; R = S; if (IV) { clearInterval(IV); IV = null; tt.textContent = t('start') } upd();
});
tt.onclick = () => {
  if (IV) { clearInterval(IV); IV = null; tt.textContent = t('start') }
  else {
    tt.textContent = lang === 'en' ? 'Pause' : 'Παύση';
    IV = setInterval(() => { R--; upd(); if (R <= 0) { clearInterval(IV); IV = null; tt.textContent = t('start'); R = S; upd(); navigator.vibrate && navigator.vibrate([180, 60, 180]) } }, 1000)
  }
};
$('#tReset').onclick = () => { if (IV) { clearInterval(IV); IV = null; tt.textContent = t('start') } R = S; upd() };

apply();