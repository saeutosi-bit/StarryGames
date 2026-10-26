/* ============================================================
   STARRY GAMES & STARRY HORIZONS — ОБЩИЙ JS
   ============================================================ */

/* ---------- КОНФИГ ---------- */
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
/* Замените на свой Client ID из Google Cloud Console.
   Roblox требует серверной части (см. инструкцию в комментариях). */

/* ---------- ПЕРЕВОДЫ ---------- */
const TRANSLATIONS = {
  ru: {
    title:'Starry Horizons', subtitle:'★ Космическая одиссея в пикселях ★',
    studioTitle:'Starry Games Studio', studioSubtitle:'★ Независимая игровая студия ★',
    logout:'Выйти', starsLabel:'ЗВЁЗД',
    navHome:'🏠 Home', navGames:'🎮 Mini Games', navShop:'🛒 Shop',
    navSettings:'⚙️ Settings', navBot:'🤖 AI Bot',
    homeDesc1:'Starry Horizons — атмосферная приключенческая игра о маленьком звездолёте.',
    homeDesc2:'Зарабатывайте ⭐ звёзды в мини-играх и тратьте их в магазине!',
    gamesTitle:'🎮 Космические мини-игры', gamesSub:'Проходи игры и получай ⭐ звёзды!',
    shopTitle:'🛒 Магазин звёзд',
    settingsTitle:'⚙️ Настройки',
    botTitle:'🤖 Космический AI Bot', botGreeting:'Привет, пилот! Чем могу помочь?',
    playBtn:'Играть', buyBtn:'Купить', ownedBtn:'Куплено ✓', reward:'звёзд',
    gameWin:'🎉 Победа!', gameLose:'😔 Попробуй ещё раз!', playAgain:'🔄 Ещё раз',
    memoryTitle:'Звёздная память', memoryDesc:'Найди все пары символов',
    quizTitle:'Космическая викторина', quizDesc:'Ответь на вопросы',
    reactionTitle:'Реакция пилота', reactionDesc:'Нажми, когда загорится',
    guessTitle:'Угадай число', guessDesc:'От 1 до 10',
    diceTitle:'Космический кубик', diceDesc:'Выбрось 5 или 6',
    shopShip:'Корабль «Комета»', shopShipDesc:'Новый звездолёт',
    shopSkin:'Неоновая окраска', shopSkinDesc:'Светящийся скин',
    shopTrail:'Звёздный след', shopTrailDesc:'Звёздный шлейф',
    shopBoost:'Бустер x2', shopBoostDesc:'Двойные звёзды',
    shopPet:'Питомец-инопланетянин', shopPetDesc:'Верный спутник',
    shopMap:'Карта галактики', shopMapDesc:'Секретные зоны',
    loginSuccess:'Вход выполнен!', welcome:'Добро пожаловать,',
    needLogin:'Сначала войдите через Google или Roblox!',
    notEnoughStars:'Недостаточно звёзд!', purchased:'Куплено!',
    robloxSoon:'Roblox требует серверной настройки.'
  },
  en: {
    title:'Starry Horizons', subtitle:'★ A pixel space odyssey ★',
    studioTitle:'Starry Games Studio', studioSubtitle:'★ Independent game studio ★',
    logout:'Log out', starsLabel:'STARS',
    navHome:'🏠 Home', navGames:'🎮 Mini Games', navShop:'🛒 Shop',
    navSettings:'⚙️ Settings', navBot:'🤖 AI Bot',
    homeDesc1:'Starry Horizons is an atmospheric adventure game about a tiny starship.',
    homeDesc2:'Earn ⭐ stars in mini-games and spend them in the shop!',
    gamesTitle:'🎮 Cosmic Mini Games', gamesSub:'Play and earn ⭐ stars!',
    shopTitle:'🛒 Star Shop',
    settingsTitle:'⚙️ Settings',
    botTitle:'🤖 Cosmic AI Bot', botGreeting:'Hello, pilot! How can I help?',
    playBtn:'Play', buyBtn:'Buy', ownedBtn:'Owned ✓', reward:'stars',
    gameWin:'🎉 Victory!', gameLose:'😔 Try again!', playAgain:'🔄 Again',
    memoryTitle:'Star Memory', memoryDesc:'Find all pairs',
    quizTitle:'Space Quiz', quizDesc:'Answer questions',
    reactionTitle:'Pilot Reaction', reactionDesc:'Click when lit',
    guessTitle:'Guess the Number', guessDesc:'From 1 to 10',
    diceTitle:'Cosmic Dice', diceDesc:'Roll 5 or 6',
    shopShip:'Comet Ship', shopShipDesc:'New starship',
    shopSkin:'Neon Paint', shopSkinDesc:'Glowing skin',
    shopTrail:'Star Trail', shopTrailDesc:'Star trail',
    shopBoost:'Boost x2', shopBoostDesc:'Double stars',
    shopPet:'Alien Pet', shopPetDesc:'Loyal companion',
    shopMap:'Galaxy Map', shopMapDesc:'Secret zones',
    loginSuccess:'Signed in!', welcome:'Welcome,',
    needLogin:'Sign in with Google or Roblox first!',
    notEnoughStars:'Not enough stars!', purchased:'Purchased!',
    robloxSoon:'Roblox requires server setup.'
  },
  es: {
    title:'Starry Horizons', subtitle:'★ Una odisea espacial pixelada ★',
    studioTitle:'Starry Games Studio', studioSubtitle:'★ Estudio independiente ★',
    logout:'Salir', starsLabel:'ESTRELLAS',
    navHome:'🏠 Inicio', navGames:'🎮 Mini Juegos', navShop:'🛒 Tienda',
    navSettings:'⚙️ Ajustes', navBot:'🤖 Bot IA',
    homeDesc1:'Starry Horizons es un juego de aventuras sobre una pequeña nave.',
    homeDesc2:'¡Gana ⭐ estrellas en minijuegos y gástalas en la tienda!',
    gamesTitle:'🎮 Minijuegos Cósmicos', gamesSub:'¡Juega y gana ⭐!',
    shopTitle:'🛒 Tienda de Estrellas',
    settingsTitle:'⚙️ Ajustes',
    botTitle:'🤖 Bot IA Cósmico', botGreeting:'¡Hola, piloto! ¿Cómo puedo ayudar?',
    playBtn:'Jugar', buyBtn:'Comprar', ownedBtn:'Comprado ✓', reward:'estrellas',
    gameWin:'🎉 ¡Victoria!', gameLose:'😔 ¡Inténtalo de nuevo!', playAgain:'🔄 Otra vez',
    memoryTitle:'Memoria Estelar', memoryDesc:'Encuentra todos los pares',
    quizTitle:'Quiz Espacial', quizDesc:'Responde preguntas',
    reactionTitle:'Reacción del Piloto', reactionDesc:'Haz clic cuando se ilumine',
    guessTitle:'Adivina el Número', guessDesc:'Del 1 al 10',
    diceTitle:'Dado Cósmico', diceDesc:'Saca 5 o 6',
    shopShip:'Nave Cometa', shopShipDesc:'Nueva nave',
    shopSkin:'Pintura Neón', shopSkinDesc:'Skin brillante',
    shopTrail:'Estela Estelar', shopTrailDesc:'Estela de estrellas',
    shopBoost:'Impulso x2', shopBoostDesc:'Estrellas dobles',
    shopPet:'Mascota Alien', shopPetDesc:'Compañero fiel',
    shopMap:'Mapa Galáctico', shopMapDesc:'Zonas secretas',
    loginSuccess:'¡Sesión iniciada!', welcome:'Bienvenido,',
    needLogin:'¡Primero inicia con Google o Roblox!',
    notEnoughStars:'¡No hay suficientes estrellas!', purchased:'¡Comprado!',
    robloxSoon:'Roblox requiere configuración del servidor.'
  },
  de: {
    title:'Starry Horizons', subtitle:'★ Eine pixelige Weltraum-Odyssee ★',
    studioTitle:'Starry Games Studio', studioSubtitle:'★ Unabhängiges Studio ★',
    logout:'Abmelden', starsLabel:'STERNE',
    navHome:'🏠 Home', navGames:'🎮 Mini-Spiele', navShop:'🛒 Shop',
    navSettings:'⚙️ Einstellungen', navBot:'🤖 KI-Bot',
    homeDesc1:'Starry Horizons ist ein Abenteuerspiel über ein kleines Raumschiff.',
    homeDesc2:'Verdiene ⭐ Sterne in Mini-Spielen und gib sie im Shop aus!',
    gamesTitle:'🎮 Kosmische Mini-Spiele', gamesSub:'Spiele und verdiene ⭐!',
    shopTitle:'🛒 Sternen-Shop',
    settingsTitle:'⚙️ Einstellungen',
    botTitle:'🤖 Kosmischer KI-Bot', botGreeting:'Hallo, Pilot! Wie kann ich helfen?',
    playBtn:'Spielen', buyBtn:'Kaufen', ownedBtn:'Gekauft ✓', reward:'Sterne',
    gameWin:'🎉 Sieg!', gameLose:'😔 Versuch es nochmal!', playAgain:'🔄 Nochmal',
    memoryTitle:'Sternen-Memory', memoryDesc:'Finde alle Paare',
    quizTitle:'Weltraum-Quiz', quizDesc:'Beantworte Fragen',
    reactionTitle:'Piloten-Reaktion', reactionDesc:'Klicke wenn es leuchtet',
    guessTitle:'Errate die Zahl', guessDesc:'Von 1 bis 10',
    diceTitle:'Kosmischer Würfel', diceDesc:'Würfle 5 oder 6',
    shopShip:'Kometenschiff', shopShipDesc:'Neues Raumschiff',
    shopSkin:'Neon-Lackierung', shopSkinDesc:'Leuchtender Skin',
    shopTrail:'Sternenschweif', shopTrailDesc:'Sternenspur',
    shopBoost:'Boost x2', shopBoostDesc:'Doppelte Sterne',
    shopPet:'Alien-Haustier', shopPetDesc:'Treuer Begleiter',
    shopMap:'Galaxiekarte', shopMapDesc:'Geheime Zonen',
    loginSuccess:'Angemeldet!', welcome:'Willkommen,',
    needLogin:'Melde dich zuerst mit Google oder Roblox an!',
    notEnoughStars:'Nicht genug Sterne!', purchased:'Gekauft!',
    robloxSoon:'Roblox erfordert Server-Einrichtung.'
  }
};

/* ---------- СОСТОЯНИЕ ---------- */
let currentLang = 'ru';
let currentTheme = 'cosmos';
let effectsEnabled = true;
let soundEnabled = true;
let stars = 0;
const purchased = {};
let currentUser = null;

try {
  const saved = JSON.parse(localStorage.getItem('starryHorizons') || '{}');
  if (saved.stars !== undefined) stars = saved.stars;
  if (saved.purchased) Object.assign(purchased, saved.purchased);
  if (saved.lang) currentLang = saved.lang;
  if (saved.theme) currentTheme = saved.theme;
  if (saved.effects !== undefined) effectsEnabled = saved.effects;
  if (saved.sound !== undefined) soundEnabled = saved.sound;
  if (saved.user) currentUser = saved.user;
} catch(e){}

function saveState(){
  try {
    localStorage.setItem('starryHorizons', JSON.stringify({
      stars, purchased, lang: currentLang, theme: currentTheme,
      effects: effectsEnabled, sound: soundEnabled, user: currentUser
    }));
  } catch(e){}
}

function t(key){
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) || TRANSLATIONS.ru[key] || key;
}

/* ---------- ФОН ---------- */
function buildStarfield(){
  const sf = document.getElementById('starfield');
  if (!sf) return;
  sf.innerHTML = '';
  for (let i = 0; i < 160; i++) {
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random() > 0.7 ? 3 : 2;
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;
      width:${sz}px;height:${sz}px;opacity:${0.5+Math.random()*0.5};
      animation:twinkle ${2+Math.random()*4}s infinite alternate;
      animation-delay:${Math.random()*5}s;`;
    sf.appendChild(s);
  }
}

function buildParticles(){
  const pe = document.getElementById('particles');
  if (!pe) return;
  pe.innerHTML = '';
  if (!effectsEnabled) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = 2 + Math.random() * 3;
    p.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;
      width:${sz}px;height:${sz}px;
      animation-duration:${8+Math.random()*12}s;
      animation-delay:${Math.random()*10}s;`;
    pe.appendChild(p);
  }
}

/* ---------- ТЕМА / ЯЗЫК ---------- */
function applyTheme(themeName){
  currentTheme = themeName;
  if (themeName === 'cosmos') document.documentElement.removeAttribute('data-theme');
  else document.documentElement.setAttribute('data-theme', themeName);
  document.querySelectorAll('.theme-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.themeValue === themeName);
  });
  buildStarfield();
  saveState();
}

function applyLanguage(lang){
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const txt = t(key);
    if (txt) el.textContent = txt;
  });
  const chatInput = document.getElementById('chatInput');
  if (chatInput) {
    chatInput.placeholder = lang === 'ru' ? 'Напиши сообщение...' :
      lang === 'en' ? 'Type a message...' :
      lang === 'es' ? 'Escribe un mensaje...' : 'Nachricht schreiben...';
  }
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  renderGames();
  renderShop();
  updateAuthUI();
  saveState();
}

/* ---------- AUTH ---------- */
function updateAuthUI(){
  const authDiv = document.getElementById('authButtons');
  const userDiv = document.getElementById('userInfo');
  const avatar = document.getElementById('userAvatar');
  const nameEl = document.getElementById('userName');
  if (!authDiv || !userDiv) return;

  if (currentUser) {
    authDiv.style.display = 'none';
    userDiv.style.display = 'flex';
    nameEl.textContent = currentUser.name || 'Пилот';
    if (currentUser.picture) {
      avatar.innerHTML = `<img src="${currentUser.picture}" alt="">`;
    } else {
      avatar.textContent = '👤';
    }
  } else {
    authDiv.style.display = 'flex';
    userDiv.style.display = 'none';
  }
}

function saveUser(user){
  currentUser = user;
  localStorage.setItem('starryHorizonsUser', JSON.stringify(user));
  updateAuthUI();
  saveState();
}

function logout(){
  currentUser = null;
  localStorage.removeItem('starryHorizonsUser');
  updateAuthUI();
  saveState();
  if (window.google && window.google.accounts) {
    try { google.accounts.id.disableAutoSelect(); } catch(e){}
  }
  showToast('Вы вышли из аккаунта');
}

/* ---------- GOOGLE ---------- */
function parseJwt(token){
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c =>
    '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  ).join(''));
  return JSON.parse(jsonPayload);
}

window.handleGoogleCredential = function(response){
  const payload = parseJwt(response.credential);
  const user = {
    name: payload.name, email: payload.email,
    picture: payload.picture, sub: payload.sub, provider: 'google'
  };
  saveUser(user);
  showToast(t('loginSuccess') + ' ' + t('welcome') + ' ' + user.name + '!');
};

function initGoogle(){
  if (!window.google?.accounts?.id) return;
  try {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: window.handleGoogleCredential,
      auto_select: false,
      cancel_on_tap_outside: true
    });
  } catch(e){ console.log('Google init error:', e); }
}

function bindAuthButtons(){
  const gBtn = document.getElementById('btnGoogleLogin');
  if (gBtn) {
    gBtn.addEventListener('click', () => {
      if (!window.google?.accounts?.id) {
        showToast('Google SDK не загружен. Проверьте CLIENT_ID.');
        return;
      }
      google.accounts.id.prompt((n) => {
        if (n.isNotDisplayed() || n.isSkippedMoment()) {
          showToast('Не удалось открыть окно Google.');
        }
      });
    });
  }

  const rBtn = document.getElementById('btnRobloxLogin');
  if (rBtn) {
    rBtn.addEventListener('click', () => {
      // В реальном проекте:
      // window.location.href = '/auth/roblox';
      showToast(t('robloxSoon'));
    });
  }

  const loBtn = document.getElementById('logoutBtn');
  if (loBtn) loBtn.addEventListener('click', logout);
}

/* ---------- НАВИГАЦИЯ ---------- */
function bindNav(){
  const navBtns = document.querySelectorAll('.nav-btn');
  const panels = {
    home: document.getElementById('panel-home'),
    games: document.getElementById('panel-games'),
    minigames: document.getElementById('panel-minigames'),
    shop: document.getElementById('panel-shop'),
    settings: document.getElementById('panel-settings'),
    bot: document.getElementById('panel-bot')
  };
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      navBtns.forEach(b => b.classList.toggle('active', b === btn));
      Object.keys(panels).forEach(k => {
        if (panels[k]) panels[k].classList.toggle('active', k === btn.dataset.section);
      });
    });
  });
}

/* ---------- ЗВЁЗДЫ ---------- */
function updateStars(){
  const el = document.getElementById('starCount');
  if (el) el.textContent = stars;
  document.querySelectorAll('.buy-btn').forEach(b => {
    if (b.classList.contains('owned-btn')) return;
    b.disabled = !currentUser || stars < parseInt(b.dataset.price, 10) || purchased[b.dataset.id];
  });
}

function addStars(n){
  stars += n;
  updateStars();
  saveState();
}

/* ---------- МИНИ-ИГРЫ ---------- */
const miniGames = [
  {id:'memory', icon:'🧠', nameKey:'memoryTitle', descKey:'memoryDesc', reward:5},
  {id:'quiz', icon:'❓', nameKey:'quizTitle', descKey:'quizDesc', reward:7},
  {id:'reaction', icon:'⚡', nameKey:'reactionTitle', descKey:'reactionDesc', reward:6},
  {id:'guess', icon:'🔢', nameKey:'guessTitle', descKey:'guessDesc', reward:5},
  {id:'dice', icon:'🎲', nameKey:'diceTitle', descKey:'diceDesc', reward:8}
];

function renderGames(){
  const grid = document.getElementById('gamesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  miniGames.forEach(g => {
    const card = document.createElement('div');
    card.className = 'mini-card';
    card.innerHTML = `
      <div class="mini-cover">${g.icon}</div>
      <div class="mini-name">${t(g.nameKey)}</div>
      <div class="mini-desc">${t(g.descKey)}</div>
      <div class="mini-reward">⭐ +${g.reward} ${t('reward')}</div>
      <button class="play-mini-btn" data-game="${g.id}">${t('playBtn')}</button>
    `;
    grid.appendChild(card);
  });
}

/* ---------- МАГАЗИН ---------- */
const shopItems = [
  {id:'ship', icon:'🚀', nameKey:'shopShip', descKey:'shopShipDesc', price:30},
  {id:'skin', icon:'🎨', nameKey:'shopSkin', descKey:'shopSkinDesc', price:20},
  {id:'trail', icon:'✨', nameKey:'shopTrail', descKey:'shopTrailDesc', price:15},
  {id:'boost', icon:'⚡', nameKey:'shopBoost', descKey:'shopBoostDesc', price:25},
  {id:'pet', icon:'👾', nameKey:'shopPet', descKey:'shopPetDesc', price:40},
  {id:'map', icon:'🗺️', nameKey:'shopMap', descKey:'shopMapDesc', price:35}
];

function renderShop(){
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.innerHTML = '';
  shopItems.forEach(item => {
    const owned = purchased[item.id];
    const card = document.createElement('div');
    card.className = 'shop-item' + (owned ? ' owned' : '');
    card.innerHTML = `
      <div class="shop-icon">${item.icon}</div>
      <div class="shop-name">${t(item.nameKey)}</div>
      <div class="shop-desc">${t(item.descKey)}</div>
      <div class="shop-price">⭐ ${item.price}</div>
      <button class="buy-btn ${owned?'owned-btn':''}" data-id="${item.id}" data-price="${item.price}" ${owned?'disabled':''}>
        ${owned ? t('ownedBtn') : t('buyBtn')}
      </button>
    `;
    grid.appendChild(card);
  });
  updateStars();
}

function bindShop(){
  const grid = document.getElementById('shopGrid');
  if (!grid) return;
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.buy-btn');
    if (!btn || btn.disabled) return;
    if (!currentUser) { showToast(t('needLogin')); return; }
    const price = parseInt(btn.dataset.price, 10);
    const id = btn.dataset.id;
    if (stars >= price && !purchased[id]) {
      stars -= price;
      purchased[id] = true;
      btn.textContent = t('ownedBtn');
      btn.classList.add('owned-btn');
      btn.disabled = true;
      btn.closest('.shop-item').classList.add('owned');
      updateStars();
      saveState();
      showToast(t('purchased'));
    } else {
      showToast(t('notEnoughStars'));
    }
  });
}

/* ---------- ТОСТ ---------- */
function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transition = 'opacity .3s';
    setTimeout(() => t.remove(), 300);
  }, 2500);
}

/* ---------- МОДАЛКА ---------- */
function bindModal(){
  const modal = document.getElementById('gameModal');
  if (!modal) return;
  const close = document.getElementById('modalClose');
  if (close) close.addEventListener('click', () => modal.classList.remove('open'));
  modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('open'); });
}

function openGameModal(title, html){
  const modal = document.getElementById('gameModal');
  if (!modal) return;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = html;
  modal.classList.add('open');
}

/* ---------- СТАРТ МИНИ-ИГР ---------- */
function bindGames(){
  const grid = document.getElementById('gamesGrid');
  if (!grid) return;
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.play-mini-btn');
    if (!btn) return;
    if (!currentUser) { showToast(t('needLogin')); return; }
    const game = miniGames.find(g => g.id === btn.dataset.game);
    if (!game) return;
    if (game.id === 'memory') startMemory(game);
    else if (game.id === 'quiz') startQuiz(game);
    else if (game.id === 'reaction') startReaction(game);
    else if (game.id === 'guess') startGuess(game);
    else if (game.id === 'dice') startDice(game);
  });
}

function finishGame(game){
  setTimeout(() => {
    addStars(game.reward);
    const modalBody = document.getElementById('modalBody');
    if (modalBody) {
      const rewardMsg = document.createElement('div');
      rewardMsg.className = 'game-msg win';
      rewardMsg.style.textAlign = 'center';
      rewardMsg.style.marginTop = '.6rem';
      rewardMsg.textContent = `⭐ +${game.reward} ${t('reward')}! (${stars})`;
      modalBody.appendChild(rewardMsg);
    }
    showToast(`⭐ +${game.reward} ${t('reward')}!`);
    setTimeout(() => {
      const modal = document.getElementById('gameModal');
      if (modal && modal.classList.contains('open')) modal.classList.remove('open');
    }, 2500);
  }, 300);
}

/* --- MEMORY --- */
function startMemory(game){
  const symbols = ['⭐','🌙','🚀','🪐','🌟','☄️','🌌','👾'];
  const deck = [...symbols, ...symbols].sort(() => Math.random() - 0.5);
  let flipped = [], matched = 0, locked = false;

  openGameModal(t('memoryTitle'), `
    <div class="game-msg" id="memMsg">Найди все ${symbols.length} пар</div>
    <div class="memory-grid" id="memGrid"></div>
  `);
  const grid = document.getElementById('memGrid');
  deck.forEach((sym, i) => {
    const cell = document.createElement('div');
    cell.className = 'memory-cell';
    cell.dataset.index = i;
    cell.dataset.sym = sym;
    grid.appendChild(cell);
  });

  grid.addEventListener('click', e => {
    const cell = e.target.closest('.memory-cell');
    if (!cell || locked) return;
    if (cell.classList.contains('flipped') || cell.classList.contains('matched')) return;
    if (flipped.includes(cell)) return;
    cell.classList.add('flipped');
    cell.textContent = cell.dataset.sym;
    flipped.push(cell);

    if (flipped.length === 2) {
      locked = true;
      if (flipped[0].dataset.sym === flipped[1].dataset.sym) {
        flipped.forEach(c => { c.classList.add('matched'); c.textContent = c.dataset.sym; });
        matched++;
        flipped = [];
        locked = false;
        if (matched === symbols.length) {
          const m = document.getElementById('memMsg');
          m.textContent = t('gameWin');
          m.classList.add('win');
          finishGame(game);
        }
      } else {
        setTimeout(() => {
          flipped.forEach(c => { c.classList.remove('flipped'); c.textContent = ''; });
          flipped = [];
          locked = false;
        }, 700);
      }
    }
  });
}

/* --- QUIZ --- */
function startQuiz(game){
  const questions = [
    {q:'Какая планета ближе всего к Солнцу?', opts:['Меркурий','Венера','Земля','Марс'], correct:0},
    {q:'Сколько планет в Солнечной системе?', opts:['7','8','9','10'], correct:1},
    {q:'Наша галактика — это...', opts:['Андромеда','Млечный Путь','Триумф','Орион'], correct:1},
    {q:'Чёрная дыра — это...', opts:['Планета','Звезда','Область с гравитацией','Комета'], correct:2},
    {q:'Ближайшая к Земле звезда?', opts:['Сириус','Полярная','Солнце','Бетельгейзе'], correct:2}
  ];
  let idx = 0, score = 0;

  function render(){
    if (idx >= questions.length) {
      const win = score >= 3;
      openGameModal(t('quizTitle'), `
        <div class="game-msg ${win?'win':'lose'}">
          ${win ? t('gameWin') : t('gameLose')}<br>${score} / ${questions.length}
        </div>
        ${win ? `<div style="text-align:center;color:var(--color-highlight);font-weight:900;">⭐ +${game.reward} ${t('reward')}</div>` : ''}
        <div style="text-align:center;margin-top:.6rem;">
          <button class="game-btn" id="quizRetry">${t('playAgain')}</button>
        </div>
      `);
      if (win) finishGame(game);
      document.getElementById('quizRetry').addEventListener('click', () => startQuiz(game));
      return;
    }
    const q = questions[idx];
    openGameModal(t('quizTitle'), `
      <div class="quiz-question">${idx+1}/${questions.length}: ${q.q}</div>
      <div class="quiz-options" id="quizOpts"></div>
    `);
    const opts = document.getElementById('quizOpts');
    q.opts.forEach((opt, i) => {
      const b = document.createElement('button');
      b.className = 'quiz-option';
      b.textContent = opt;
      b.addEventListener('click', () => {
        const btns = document.querySelectorAll('#quizOpts .quiz-option');
        btns.forEach(x => x.disabled = true);
        if (i === q.correct) { btns[i].classList.add('correct'); score++; }
        else { btns[i].classList.add('wrong'); btns[q.correct].classList.add('correct'); }
        idx++;
        setTimeout(render, 1000);
      });
      opts.appendChild(b);
    });
  }
  render();
}

/* --- REACTION --- */
function startReaction(game){
  let timer = null, started = false, ready = false, startTime = 0;

  openGameModal(t('reactionTitle'), `
    <div class="game-msg" id="reactMsg">${t('reactionDesc')}</div>
    <div class="reaction-target" id="reactTarget">🎯</div>
    <div style="text-align:center;margin-top:.6rem;">
      <button class="game-btn" id="reactStart">🚀 ${t('playBtn')}</button>
    </div>
  `);
  const target = document.getElementById('reactTarget');
  const msg = document.getElementById('reactMsg');
  const startBtn = document.getElementById('reactStart');

  function reset(){
    clearTimeout(timer);
    ready = false; started = false;
    target.classList.remove('ready');
    target.textContent = '🎯';
    msg.textContent = t('reactionDesc');
    msg.className = 'game-msg';
    startBtn.disabled = false;
  }

  startBtn.addEventListener('click', () => {
    if (started) return;
    started = true; ready = false;
    startBtn.disabled = true;
    target.textContent = '⏳';
    target.classList.remove('ready');
    msg.textContent = '...';
    timer = setTimeout(() => {
      ready = true;
      target.classList.add('ready');
      target.textContent = '⚡';
      startTime = performance.now();
    }, 1000 + Math.random() * 2500);
  });

  target.addEventListener('click', () => {
    if (!started) return;
    if (!ready) {
      clearTimeout(timer);
      msg.textContent = '😅';
      msg.className = 'game-msg lose';
      reset();
      return;
    }
    const rt = Math.round(performance.now() - startTime);
    target.classList.remove('ready');
    target.textContent = `${rt}ms`;
    if (rt < 500) {
      msg.textContent = `🎉 ${rt}ms!`;
      msg.className = 'game-msg win';
      finishGame(game);
    } else {
      msg.textContent = `⏱️ ${rt}ms`;
      msg.className = 'game-msg lose';
    }
    reset();
  });
}

/* --- GUESS --- */
function startGuess(game){
  const secret = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  const max = 3;

  openGameModal(t('guessTitle'), `
    <div class="game-msg" id="guessMsg">1-10 (${max})</div>
    <div class="guess-input-row">
      <input type="number" class="guess-input" id="guessInput" min="1" max="10" placeholder="?">
      <button class="game-btn" id="guessBtn">✓</button>
    </div>
    <div class="guess-hint" id="guessHint"></div>
  `);
  const input = document.getElementById('guessInput');
  const btn = document.getElementById('guessBtn');
  const hint = document.getElementById('guessHint');
  const msg = document.getElementById('guessMsg');

  function check(){
    const val = parseInt(input.value, 10);
    if (!val || val < 1 || val > 10) {
      hint.textContent = '1-10!';
      hint.style.color = '#ff8888';
      return;
    }
    attempts++;
    if (val === secret) {
      msg.textContent = `🎉 ${secret}!`;
      msg.className = 'game-msg win';
      btn.disabled = true; input.disabled = true;
      finishGame(game);
      return;
    }
    if (attempts >= max) {
      msg.textContent = `😔 ${secret}`;
      msg.className = 'game-msg lose';
      btn.disabled = true; input.disabled = true;
      return;
    }
    hint.textContent = val < secret ? '⬆️' : '⬇️';
    hint.style.color = 'var(--color-muted)';
    input.value = '';
    input.focus();
  }

  btn.addEventListener('click', check);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
  input.focus();
}

/* --- DICE --- */
function startDice(game){
  openGameModal(t('diceTitle'), `
    <div class="game-msg" id="diceMsg">${t('diceDesc')}</div>
    <div class="reaction-target" id="diceTarget" style="font-size:2.5rem;">🎲</div>
    <div style="text-align:center;margin-top:.6rem;">
      <button class="game-btn" id="diceBtn">🎲 ${t('playBtn')}</button>
    </div>
  `);
  const target = document.getElementById('diceTarget');
  const msg = document.getElementById('diceMsg');
  const btn = document.getElementById('diceBtn');
  let rolling = false;

  btn.addEventListener('click', () => {
    if (rolling) return;
    rolling = true;
    btn.disabled = true;
    msg.textContent = '...';
    msg.className = 'game-msg';
    let count = 0;
    const iv = setInterval(() => {
      const n = Math.floor(Math.random() * 6) + 1;
      target.textContent = ['⚀','⚁','⚂','⚃','⚄','⚅'][n-1];
      count++;
      if (count > 10) {
        clearInterval(iv);
        const result = Math.floor(Math.random() * 6) + 1;
        target.textContent = ['⚀','⚁','⚂','⚃','⚄','⚅'][result-1];
        if (result >= 5) {
          msg.textContent = `🎉 ${result}!`;
          msg.className = 'game-msg win';
          finishGame(game);
        } else {
          msg.textContent = `😔 ${result}`;
          msg.className = 'game-msg lose';
        }
        rolling = false;
        btn.disabled = false;
      }
    }, 100);
  });
}

/* ---------- НАСТРОЙКИ ---------- */
function bindSettings(){
  const themeGrid = document.querySelector('.theme-grid');
  if (themeGrid) {
    themeGrid.addEventListener('click', e => {
      const btn = e.target.closest('.theme-btn');
      if (btn) applyTheme(btn.dataset.themeValue);
    });
  }

  const langGrid = document.querySelector('.lang-grid');
  if (langGrid) {
    langGrid.addEventListener('click', e => {
      const btn = e.target.closest('.lang-btn');
      if (btn) applyLanguage(btn.dataset.lang);
    });
  }

  const eT = document.getElementById('effectsToggle');
  if (eT) {
    eT.addEventListener('click', () => {
      effectsEnabled = !effectsEnabled;
      eT.classList.toggle('on', effectsEnabled);
      eT.setAttribute('aria-checked', effectsEnabled);
      buildParticles();
      document.querySelectorAll('.shooting-star').forEach(s => s.style.display = effectsEnabled ? 'block' : 'none');
      saveState();
    });
  }

  const sT = document.getElementById('soundToggle');
  if (sT) {
    sT.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      sT.classList.toggle('on', soundEnabled);
      sT.setAttribute('aria-checked', soundEnabled);
      saveState();
    });
  }
}

/* ---------- AI BOT ---------- */
const botResponses = {
  ru: {
    'привет':['Привет, пилот!','Бортовой компьютер на связи.','Привет-привет!'],
    'как дела':['Все системы в норме!','Работаю на 100%.','Отлично!'],
    'что такое starry horizons':['Космическая одиссея в пикселях!','Наша игра о звездолёте!'],
    'как заработать звёзды':['Проходи мини-игры!','В Mini Games есть 5 игр.'],
    'помощь':['Спроси о игре, звёздах, магазине.','Доступно: привет, дела, звёзды.'],
    'магазин':['Магазин на вкладке Shop.','Корабль за 30 звёзд!'],
    'создатели':['Nodgia, PixelSam.','Starry Games Studio!'],
    'мини игры':['5 игр: память, викторина, реакция, число, кубик.','Побеждай и получай звёзды!'],
    'звёзды':['Звёзды ⭐ — валюта.','Зарабатывай в мини-играх!']
  },
  en: {
    'hello':['Hello, pilot!','Onboard computer online.','Hi there!'],
    'how are you':['All systems nominal!','100%.','Great!'],
    'what is starry horizons':['Pixel space odyssey!','Our starship game!'],
    'how to earn stars':['Play mini-games!','5 games in Mini Games.'],
    'help':['Ask about game, stars, shop.','Available: hello, how are you, stars.'],
    'shop':['Shop in Shop tab.','Ship for 30 stars!'],
    'creators':['Nodgia, PixelSam.','Starry Games Studio!'],
    'mini games':['5 games: memory, quiz, reaction, guess, dice.','Win and earn stars!'],
    'stars':['Stars ⭐ are currency.','Earn in mini-games!']
  },
  es: {
    'hola':['¡Hola, piloto!','Computadora en línea.','¡Hola!'],
    'cómo estás':['¡Todo nominal!','¡100%!','¡Genial!'],
    'qué es starry horizons':['¡Odisea espacial!','¡Nuestro juego!'],
    'cómo ganar estrellas':['¡Juega minijuegos!','¡5 juegos!'],
    'ayuda':['Pregunta sobre juego, estrellas, tienda.','Disponible: hola, estrellas.'],
    'tienda':['Tienda en Shop.','¡Nave por 30!'],
    'creadores':['Nodgia, PixelSam.','¡Starry Games Studio!'],
    'minijuegos':['5 juegos: memoria, quiz, reacción, número, dado.','¡Gana y obtén estrellas!'],
    'estrellas':['Estrellas ⭐ son moneda.','¡Gana en minijuegos!']
  },
  de: {
    'hallo':['Hallo, Pilot!','Bordcomputer online.','Hallo!'],
    'wie gehts':['Alle Systeme!','100%!','Super!'],
    'was ist starry horizons':['Weltraum-Odyssee!','Unser Spiel!'],
    'wie verdiene ich sterne':['Spiele Mini-Spiele!','5 Spiele!'],
    'hilfe':['Frag nach Spiel, Sternen, Shop.','Verfügbar: hallo, sterne.'],
    'shop':['Shop im Shop-Tab.','Schiff für 30!'],
    'macher':['Nodgia, PixelSam.','Starry Games Studio!'],
    'mini spiele':['5 Spiele: Memory, Quiz, Reaktion, Zahl, Würfel.','Gewinne Sterne!'],
    'sterne':['Sterne ⭐ sind Währung.','Verdiene in Mini-Spielen!']
  }
};

function bindBot(){
  const chatWindow = document.getElementById('chatWindow');
  const chatInput = document.getElementById('chatInput');
  const chatSend = document.getElementById('chatSend');
  if (!chatWindow || !chatInput || !chatSend) return;

  function addMsg(text, who){
    const div = document.createElement('div');
    div.className = 'chat-msg ' + who;
    div.textContent = text;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  function getResponse(text){
    const lower = text.toLowerCase().trim();
    const responses = botResponses[currentLang] || botResponses.ru;
    for (const key in responses) {
      if (lower === key || lower.includes(key)) {
        const arr = responses[key];
        return arr[Math.floor(Math.random() * arr.length)];
      }
    }
    const fb = {
      ru:['Интересный вопрос!','Спроси о звёздах!','Звёзды шепчут ответ...'],
      en:['Interesting!','Ask about stars!','Stars whisper...'],
      es:['¡Interesante!','¡Pregunta por estrellas!','Estrellas susurran...'],
      de:['Interessant!','Frag nach Sternen!','Sterne flüstern...']
    };
    const arr = fb[currentLang] || fb.ru;
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function send(){
    const text = chatInput.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    chatInput.value = '';
    setTimeout(() => addMsg(getResponse(text), 'bot'), 400 + Math.random() * 400);
  }

  chatSend.addEventListener('click', send);
  chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') send(); });

  document.querySelectorAll('[data-quick]').forEach(b => {
    b.addEventListener('click', () => {
      chatInput.value = b.dataset.quick;
      send();
    });
  });
}

/* ---------- ИНИЦИАЛИЗАЦИЯ ---------- */
document.addEventListener('DOMContentLoaded', () => {
  // Восстановить пользователя
  try {
    const savedUser = JSON.parse(localStorage.getItem('starryHorizonsUser') || 'null');
    if (savedUser) currentUser = savedUser;
  } catch(e){}

  buildStarfield();
  buildParticles();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  updateStars();
  updateAuthUI();

  bindNav();
  bindAuthButtons();
  bindGames();
  bindShop();
  bindModal();
  bindSettings();
  bindBot();

  // Google
  setTimeout(initGoogle, 800);

  // Roblox return
  const urlParams = new URLSearchParams(window.location.search);
  const robloxUserParam = urlParams.get('robloxUser');
  if (robloxUserParam) {
    try {
      const user = JSON.parse(decodeURIComponent(robloxUserParam));
      saveUser(user);
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch(e){}
  }

  // Эффекты
  if (!effectsEnabled) {
    const pe = document.getElementById('particles');
    if (pe) pe.style.display = 'none';
    document.querySelectorAll('.shooting-star').forEach(s => s.style.display = 'none');
    const et = document.getElementById('effectsToggle');
    if (et) { et.classList.remove('on'); et.setAttribute('aria-checked', 'false'); }
  }
  if (!soundEnabled) {
    const st = document.getElementById('soundToggle');
    if (st) { st.classList.remove('on'); st.setAttribute('aria-checked', 'false'); }
  }
});
