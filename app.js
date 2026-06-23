/* =============================================
   Java Lab – app.js
   Interactive Java Program Explorer
   Section-Based Layout v3.0
   ============================================= */

'use strict';

// ─────────────────────────────────────────────
//  Section & Program Data
// ─────────────────────────────────────────────
import { section1 } from './data/section1_inputoutput.js';
import { section2 } from './data/section2_operators.js';
import { section3 } from './data/section3_looping.js';
import { section4 } from './data/section4_decisionmaking.js';
import { section5 } from './data/section5_scenariobased.js';
import { section6 } from './data/section6_numberlogic.js';
import { section7 } from './data/section7_patterns.js';
import { section8 } from './data/section8_functions.js';
import { section9 } from './data/section9_arrays.js';
import { section10 } from './data/section10_strings.js';

const SECTIONS = [
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
  section7,
  section8,
  section9,
  section10
];


// ─────────────────────────────────────────────
//- [x] Add 10 missing Scenario Based programs (`Scenario based question (2).txt`), `Decision Making.txt`), `Operators - class session.txt`)
// ─────────────────────────────────────────────
function getAllPrograms() {
  const all = [];
  SECTIONS.forEach(sec => sec.programs.forEach(p => all.push({ ...p, sectionId: sec.id, sectionTitle: sec.title, sectionTheme: sec.theme })));
  return all;
}

const ALL_PROGRAMS = getAllPrograms();

// ─────────────────────────────────────────────
//  State
// ─────────────────────────────────────────────
let currentProgram   = null;
let activeTab        = 'code';
let terminalGen      = null;
let pendingInputKey  = null;
let collectedInputs  = {};
let isRunning        = false;
let activeFilter     = 'all';
let searchQuery      = '';

// ─────────────────────────────────────────────
//  DOM Refs
// ─────────────────────────────────────────────
const modalOverlay     = document.getElementById('modalOverlay');
const modalClose       = document.getElementById('modalClose');
const modalTitle       = document.getElementById('modalTitle');
const modalMeta        = document.getElementById('modalMeta');
const modalIcon        = document.getElementById('modalIcon');
const codeContent      = document.getElementById('codeContent');
const terminalBody     = document.getElementById('terminalBody');
const terminalName     = document.getElementById('terminalName');
const terminalInputRow = document.getElementById('terminalInputRow');
const termInput        = document.getElementById('termInput');
const termStatus       = document.getElementById('termStatus');
const runBtn           = document.getElementById('runBtn');
const tabCode          = document.getElementById('tabCode');
const tabTerminal      = document.getElementById('tabTerminal');
const panelCode        = document.getElementById('panelCode');
const panelTerminal    = document.getElementById('panelTerminal');

// ─────────────────────────────────────────────
//  Particles
// ─────────────────────────────────────────────
function spawnParticles() {
  const container = document.getElementById('bgParticles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      animation-duration:${8+Math.random()*14}s;
      animation-delay:${Math.random()*12}s;
      background: ${['#06b6d4','#f59e0b','#10b981','#8b5cf6','#f43f5e','#6366f1','#64748b'][Math.floor(Math.random()*7)]};
    `;
    container.appendChild(p);
  }
}

// ─────────────────────────────────────────────
//  Section Filter Nav
// ─────────────────────────────────────────────
function renderFilterNav() {
  const nav = document.getElementById('filterNav');
  if (!nav) return;

  // "All" button
  const allBtn = document.createElement('button');
  allBtn.className = 'filter-btn active';
  allBtn.dataset.section = 'all';
  allBtn.innerHTML = `<span>🏠</span> All`;
  allBtn.addEventListener('click', () => filterSection('all'));
  nav.appendChild(allBtn);

  SECTIONS.forEach(sec => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.section = sec.id;
    btn.style.setProperty('--filter-accent', sec.theme.accent);
    btn.innerHTML = `<span>${sec.icon}</span> ${sec.title}`;
    btn.addEventListener('click', () => filterSection(sec.id));
    nav.appendChild(btn);
  });
}

function filterPrograms() {
  const query = searchQuery.trim().toLowerCase();
  
  SECTIONS.forEach(sec => {
    const sectionBlock = document.querySelector(`.section-block[data-section="${sec.id}"]`);
    if (!sectionBlock) return;
    
    let visibleCardsCount = 0;
    
    sec.programs.forEach(prog => {
      const card = document.getElementById(`card-${prog.id}`);
      if (!card) return;
      
      const matchesSearch = !query || 
                            prog.title.toLowerCase().includes(query) || 
                            prog.desc.toLowerCase().includes(query) || 
                            prog.tags.some(tag => tag.toLowerCase().includes(query));
                            
      const matchesFilter = activeFilter === 'all' || sec.id === activeFilter;
      
      if (matchesSearch && matchesFilter) {
        if (card.style.display === 'none') {
          card.style.display = '';
          card.classList.remove('animate-entrance');
          void card.offsetWidth; // trigger reflow
          card.classList.add('animate-entrance');
        }
        visibleCardsCount++;
      } else {
        card.style.display = 'none';
        card.classList.remove('animate-entrance');
      }
    });
    
    // Show/hide section block based on whether it has visible cards
    const shouldShowSection = visibleCardsCount > 0 && (activeFilter === 'all' || sec.id === activeFilter);
    sectionBlock.style.display = shouldShowSection ? '' : 'none';
    
    // Dynamically update section count badge
    const countEl = sectionBlock.querySelector('.section-count');
    if (countEl) {
      if (query) {
        countEl.textContent = `${visibleCardsCount} of ${sec.programs.length} matches`;
      } else {
        countEl.textContent = `${sec.programs.length} programs`;
      }
    }
  });
  
  // Show a "No results found" message if all section blocks are hidden
  let noResultsMessage = document.getElementById('noResultsMessage');
  const anyVisible = Array.from(document.querySelectorAll('.section-block')).some(block => block.style.display !== 'none');
  
  if (!anyVisible) {
    if (!noResultsMessage) {
      noResultsMessage = document.createElement('div');
      noResultsMessage.id = 'noResultsMessage';
      noResultsMessage.className = 'no-results-message';
      noResultsMessage.innerHTML = `
        <div class="no-results-icon">🔍</div>
        <h3>No matching programs found</h3>
        <p>Try searching for other keywords, tags, or select a different section.</p>
        <button class="clear-search-link-btn" onclick="clearSearchAndFilters()">Clear Search & Filters</button>
      `;
      const container = document.getElementById('cardsGrid');
      container.appendChild(noResultsMessage);
    }
    noResultsMessage.style.display = 'flex';
  } else if (noResultsMessage) {
    noResultsMessage.style.display = 'none';
  }
}

window.clearSearchAndFilters = function() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.value = '';
    searchQuery = '';
    const clearBtn = document.getElementById('searchClearBtn');
    if (clearBtn) clearBtn.style.display = 'none';
  }
  filterSection('all');
};

function filterSection(sectionId) {
  activeFilter = sectionId;
  // Update buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === sectionId);
  });
  filterPrograms();
}

// ─────────────────────────────────────────────
//  Card Rendering — Section-Based
// ─────────────────────────────────────────────
function difficultyColor(d) {
  return { Easy: '#34d399', Medium: '#f59e0b', Hard: '#f87171' }[d] || '#94a3b8';
}

function renderCards() {
  const container = document.getElementById('cardsGrid');
  container.innerHTML = '';

  SECTIONS.forEach((sec) => {
    // Section wrapper
    const sectionBlock = document.createElement('div');
    sectionBlock.className = 'section-block';
    sectionBlock.dataset.section = sec.id;

    // Section header
    const header = document.createElement('div');
    header.className = 'section-header';
    header.style.setProperty('--section-accent', sec.theme.accent);
    header.style.setProperty('--section-glow', sec.theme.glow);
    header.style.setProperty('--section-bg', sec.theme.bg);
    header.innerHTML = `
      <div class="section-icon" style="background:${sec.theme.bg};border:1px solid ${sec.theme.accent}33">${sec.icon}</div>
      <div class="section-info">
        <h2 class="section-title">${sec.title}</h2>
        <span class="section-count">${sec.programs.length} programs</span>
      </div>
    `;
    sectionBlock.appendChild(header);

    // Cards grid inside section
    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    sec.programs.forEach((prog, idx) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = `card-${prog.id}`;
      card.style.setProperty('--card-accent', sec.theme.accent);
      card.style.setProperty('--card-glow', sec.theme.glow);
      card.style.setProperty('--card-icon-bg', sec.theme.bg);
      card.style.animationDelay = `${idx * 0.04}s`;

      card.innerHTML = `
        <div class="card-header">
          <div class="card-icon">${prog.icon}</div>
          <span class="card-badge">${sec.title}</span>
        </div>
        <div class="card-title">${prog.title}</div>
        <div class="card-desc">${prog.desc}</div>
        <div class="card-footer">
          <div class="card-tags">
            ${prog.tags.map(t => `<span class="tag">${t}</span>`).join('')}
            <span class="tag" style="color:${difficultyColor(prog.difficulty)};border-color:${difficultyColor(prog.difficulty)}44">${prog.difficulty}</span>
          </div>
          <div class="card-arrow" style="background:${sec.theme.accent}">→</div>
        </div>
      `;
      card.addEventListener('click', () => openModal(prog, sec));
      grid.appendChild(card);
    });

    sectionBlock.appendChild(grid);
    container.appendChild(sectionBlock);
  });
}

// ─────────────────────────────────────────────
//  Syntax Highlighter  (single-pass tokeniser)
// ─────────────────────────────────────────────
function highlight(code) {
  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  const KW  = /\b(import|public|class|static|void|int|long|double|float|boolean|char|String|new|return|if|else|for|while|do|switch|case|break|continue|final|null|true|false|this|super)\b/g;
  const CLS = /\b(Scanner|System|Math|Integer|Character|Float|Double)\b/g;
  const MTH = /\b([a-zA-Z_]\w*)(?=\s*\()/g;
  const NUM = /\b(\d+\.?\d*)\b/g;
  const ANN = /(@\w+)/g;

  function colourPlain(s) {
    return esc(s)
      .replace(ANN, (_,g) => `<span class="an">${g}</span>`)
      .replace(KW,  m     => `<span class="kw">${m}</span>`)
      .replace(CLS, m     => `<span class="cl">${m}</span>`)
      .replace(MTH, (_,g) => `<span class="fn">${g}</span>`)
      .replace(NUM, m     => `<span class="nm">${m}</span>`);
  }

  // Tokenise: protect comments & strings, colour plain code between them
  const tokenRe = /(\/\/[^\n]*)|(\/\*[\s\S]*?\*\/)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')/g;
  let result = '';
  let last = 0;
  let mt;
  tokenRe.lastIndex = 0;

  while ((mt = tokenRe.exec(code)) !== null) {
    result += colourPlain(code.slice(last, mt.index));
    if (mt[1] || mt[2]) {
      result += `<span class="cm">${esc(mt[0])}</span>`;
    } else {
      result += `<span class="st">${esc(mt[0])}</span>`;
    }
    last = tokenRe.lastIndex;
  }
  result += colourPlain(code.slice(last));
  return result;
}

// ─────────────────────────────────────────────
//  Modal Open / Close
// ─────────────────────────────────────────────
function openModal(prog, sec) {
  currentProgram = prog;
  activeTab      = 'code';
  collectedInputs = {};
  pendingInputKey  = null;
  isRunning        = false;

  const accent = sec ? sec.theme.accent : '#4f9cf9';
  const iconBg = sec ? sec.theme.bg : 'rgba(79,156,249,0.15)';
  const sectionTitle = sec ? sec.title : 'Java';

  // Set header
  modalIcon.textContent   = prog.icon;
  modalIcon.style.background = iconBg;
  modalIcon.style.borderColor = accent + '44';
  modalTitle.textContent  = prog.title;
  modalMeta.textContent   = `Java  ·  ${sectionTitle}  ·  ${prog.difficulty}`;

  // Set code
  codeContent.innerHTML = highlight(prog.code);

  // Reset terminal
  resetTerminal();
  terminalName.textContent = prog.title + ' – Terminal';

  // Switch to code tab
  switchTab('code');

  // Update header accent
  document.querySelector('.modal').style.setProperty('--modal-accent', accent);

  // Show
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  currentProgram = null;
  stopRun();
}

// ─────────────────────────────────────────────
//  Tab switching
// ─────────────────────────────────────────────
window.switchTab = function(tab) {
  activeTab = tab;
  tabCode.classList.toggle('active',     tab === 'code');
  tabTerminal.classList.toggle('active', tab === 'terminal');
  panelCode.classList.toggle('hidden',     tab !== 'code');
  panelTerminal.classList.toggle('hidden', tab !== 'terminal');
};

// ─────────────────────────────────────────────
//  Terminal Helpers
// ─────────────────────────────────────────────
function termPrint(type, text) {
  const line = document.createElement('div');
  line.className = `term-line term-${type}`;

  if (type === 'cmd') {
    line.innerHTML = `<span class="term-prompt-sym">$</span><span>${escHtml(text)}</span>`;
  } else if (type === 'ask') {
    line.innerHTML = `<span class="term-prompt-sym">?</span><span>${escHtml(text)}</span><span class="cursor"></span>`;
  } else {
    line.innerHTML = `<span>${escHtml(text)}</span>`;
  }

  terminalBody.appendChild(line);
  terminalBody.scrollTop = terminalBody.scrollHeight;
  return line;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;');
}

function resetTerminal() {
  terminalBody.innerHTML = '<div class="term-line term-info">Click <strong>Run</strong> to start the program...</div>';
  terminalInputRow.style.display = 'none';
  termStatus.textContent  = 'Ready';
  termStatus.className    = 'term-status';
  runBtn.classList.remove('running');
  runBtn.innerHTML = '<span class="run-icon">▶</span> Run Program';
  runBtn.disabled  = false;
  pendingInputKey  = null;
  collectedInputs  = {};
  terminalGen      = null;
  isRunning        = false;
}

window.clearTerminal = function() {
  stopRun();
  resetTerminal();
};

function stopRun() {
  isRunning       = false;
  terminalGen     = null;
  pendingInputKey = null;
  terminalInputRow.style.display = 'none';
  runBtn.classList.remove('running');
  runBtn.disabled  = false;
  runBtn.innerHTML = '<span class="run-icon">▶</span> Run Program';
}

// ─────────────────────────────────────────────
//  Generator-based Program Runner
// ─────────────────────────────────────────────
window.runProgram = function() {
  if (!currentProgram) return;
  if (isRunning) return;

  isRunning = true;
  collectedInputs = {};
  pendingInputKey  = null;

  terminalBody.innerHTML = '';
  termStatus.textContent = 'Running';
  termStatus.className   = 'term-status running';
  runBtn.classList.add('running');
  runBtn.innerHTML = '<span class="run-icon">⏳</span> Running...';
  runBtn.disabled  = true;

  switchTab('terminal');

  termPrint('cmd', `java ${currentProgram.title.replace(/\s+/g,'')}`);
  termPrint('out', '');

  terminalGen = currentProgram.run(collectedInputs);
  advanceGen();
};

function advanceGen() {
  if (!terminalGen || !isRunning) return;

  const oldCursor = terminalBody.querySelector('.cursor');
  if (oldCursor) oldCursor.remove();

  let result;
  try {
    result = terminalGen.next();
  } catch (e) {
    termPrint('error', 'RuntimeException: ' + e.message);
    finishRun(true);
    return;
  }

  if (result.done) { finishRun(false); return; }

  const step = result.value;

  if (step.type === 'ask') {
    pendingInputKey = step.inputKey;
    termPrint('ask', step.text);
    terminalInputRow.style.display = 'flex';
    termInput.value = '';
    termInput.focus();
    return;
  }

  setTimeout(() => {
    if (!isRunning) return;
    termPrint(step.type, step.text);
    advanceGen();
  }, step.type === 'system' ? 180 : 60);
}

function submitInput() {
  const val = termInput.value.trim();
  if (!val || !pendingInputKey || !isRunning) return;

  collectedInputs[pendingInputKey] = val;

  const lastAsk = terminalBody.querySelector('.cursor');
  if (lastAsk) lastAsk.remove();

  const askLines = terminalBody.querySelectorAll('.term-ask');
  if (askLines.length) {
    const last = askLines[askLines.length - 1];
    const typed = document.createElement('span');
    typed.style.color = '#fde68a';
    typed.textContent = val;
    last.appendChild(typed);
  }

  terminalInputRow.style.display = 'none';
  termInput.value = '';
  pendingInputKey = null;

  terminalGen = currentProgram.run(collectedInputs);
  fastForwardGen();
}

function fastForwardGen() {
  const answeredKeys = Object.keys(collectedInputs);

  terminalGen = currentProgram.run(collectedInputs);

  function step() {
    if (!terminalGen || !isRunning) return;
    let r;
    try { r = terminalGen.next(); } catch(e) {
      termPrint('error', 'RuntimeException: ' + e.message);
      finishRun(true); return;
    }
    if (r.done) { finishRun(false); return; }

    const s = r.value;
    if (s.type === 'ask') {
      if (collectedInputs[s.inputKey] !== undefined) {
        step();
      } else {
        pendingInputKey = s.inputKey;
        termPrint('ask', s.text);
        terminalInputRow.style.display = 'flex';
        termInput.value = '';
        termInput.focus();
      }
    } else if (s.type === 'system' || s.type === 'cmd') {
      step();
    } else {
      setTimeout(() => {
        if (!isRunning) return;
        termPrint(s.type, s.text);
        step();
      }, 60);
    }
  }

  step();
}

function finishRun(isError) {
  isRunning = false;
  terminalGen = null;
  pendingInputKey = null;
  terminalInputRow.style.display = 'none';

  if (!isError) {
    termStatus.textContent = 'Done ✓';
    termStatus.className   = 'term-status done';
  } else {
    termStatus.textContent = 'Error ✗';
    termStatus.className   = 'term-status error';
  }

  runBtn.classList.remove('running');
  runBtn.innerHTML = '<span class="run-icon">▶</span> Run Again';
  runBtn.disabled  = false;

  runBtn.onclick = () => {
    resetTerminal();
    window.runProgram();
  };
}

// ─────────────────────────────────────────────
//  Copy Code
// ─────────────────────────────────────────────
window.copyCode = function() {
  if (!currentProgram) return;
  navigator.clipboard.writeText(currentProgram.code).then(() => {
    const btn = document.getElementById('copyBtn');
    btn.innerHTML = '<span>✅</span> Copied!';
    btn.style.color = '#34d399';
    btn.style.borderColor = 'rgba(52,211,153,0.4)';
    setTimeout(() => {
      btn.innerHTML = '<span>📋</span> Copy Code';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  });
};

// ─────────────────────────────────────────────
//  Events
// ─────────────────────────────────────────────
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) closeModal();
});

termInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') submitInput();
});

document.getElementById('termSubmit').addEventListener('click', submitInput);

// ─────────────────────────────────────────────
//  Search Bar Event Listeners
// ─────────────────────────────────────────────
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  const clearBtn = document.getElementById('searchClearBtn');
  
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    if (clearBtn) {
      clearBtn.style.display = searchQuery ? 'flex' : 'none';
    }
    filterPrograms();
  });
  
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      searchQuery = '';
      clearBtn.style.display = 'none';
      searchInput.focus();
      filterPrograms();
    });
  }
  
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.value = '';
      searchQuery = '';
      if (clearBtn) clearBtn.style.display = 'none';
      searchInput.blur();
      filterPrograms();
    }
  });
}

// ─────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────
spawnParticles();
renderFilterNav();
renderCards();
initSearch();

// Update stats count
const statNums = document.querySelectorAll('.stat-num');
if (statNums.length >= 3) {
  statNums[0].textContent = ALL_PROGRAMS.length;
  statNums[1].textContent = SECTIONS.length;
  statNums[2].textContent = '100%';
}

console.log('%c☕ Java Lab Loaded', 'font-size:18px;color:#f89820;font-weight:bold');
console.log(`%c${ALL_PROGRAMS.length} programs across ${SECTIONS.length} sections`, 'color:#34d399');
