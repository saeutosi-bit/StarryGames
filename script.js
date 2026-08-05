// ================================================================
//  LOADING SCREEN LOGIC
// ================================================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 4000);
});

// ================================================================
//  SPACE BACKGROUND
// ================================================================

function createStars(layerId, count, sizeRange, brightness) {
    const layer = document.getElementById(layerId);
    if (!layer) return;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * sizeRange + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
        star.style.animationDelay = (Math.random() * 6) + 's';
        if (brightness > 0.7) star.classList.add('bright');
        if (Math.random() > 0.8) {
            star.classList.add('colored');
            const colors = ['#ff6b6b', '#ffd93d', '#6bcbff', '#ff6b9d', '#a8d08d'];
            star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        }
        layer.appendChild(star);
    }
}

createStars('starsLayer1', 100, 2, 0.6);
createStars('starsLayer2', 60, 3, 0.8);
createStars('starsLayer3', 30, 4, 1);

function createFlares() {
    const container = document.getElementById('flaresContainer');
    if (!container) return;
    for (let i = 0; i < 6; i++) {
        const flare = document.createElement('div');
        flare.className = 'flare';
        const size = Math.random() * 8 + 4;
        flare.style.width = size + 'px';
        flare.style.height = size + 'px';
        flare.style.left = Math.random() * 100 + '%';
        flare.style.top = Math.random() * 100 + '%';
        flare.style.animationDelay = (Math.random() * 8) + 's';
        flare.style.animationDuration = (Math.random() * 6 + 3) + 's';
        container.appendChild(flare);
    }
}
createFlares();

function createShootingStar() {
    const container = document.getElementById('shootingStarsContainer');
    if (!container) return;
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = (Math.random() * 80 + 10) + '%';
    star.style.top = (Math.random() * 40 + 5) + '%';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';
    star.style.animationDelay = (Math.random() * 30) + 's';
    container.appendChild(star);
}
for (let i = 0; i < 5; i++) setTimeout(createShootingStar, i * 2000);
setInterval(createShootingStar, 10000);

// ================================================================
//  DATA (CODES & ANNOUNCEMENTS)
// ================================================================

let codesData = [];
let announcementsData = [];

function getDefaultData() {
    return {
        codes: [
            { code: "WELCOME!", reward: "50 Cash", active: true },
            { code: "DISCORD!", reward: "75 Cash", active: true }
        ],
        announcements: [
            { text: "🌟 RELEASE EVENT IN GAME!", timestamp: Date.now() - 1800000 }
        ]
    };
}

function loadData() {
    try {
        const savedCodes = localStorage.getItem('starryCodes');
        const savedAnn = localStorage.getItem('starryAnnouncements');
        if (savedCodes) {
            const parsed = JSON.parse(savedCodes);
            codesData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().codes;
        } else {
            codesData = getDefaultData().codes;
        }
        if (savedAnn) {
            const parsed = JSON.parse(savedAnn);
            announcementsData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().announcements;
        } else {
            announcementsData = getDefaultData().announcements;
        }
    } catch (e) {
        codesData = getDefaultData().codes;
        announcementsData = getDefaultData().announcements;
    }
    renderAll();
}

function saveData() {
    try {
        localStorage.setItem('starryCodes', JSON.stringify(codesData));
        localStorage.setItem('starryAnnouncements', JSON.stringify(announcementsData));
    } catch (e) {}
}

function renderCodes() {
    const container = document.getElementById('codesContainer');
    if (!container) return;
    if (!codesData || codesData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">✨ No codes available</div>`;
        return;
    }
    container.innerHTML = codesData.map(item => `
        <div class="code-item">
            <span class="code">🎮 ${item.code}</span>
            <span class="reward">🎁 ${item.reward}</span>
            <span class="status ${item.active ? 'active' : 'expired'}">
                ${item.active ? '✅ Active' : '⛔ Expired'}
            </span>
        </div>
    `).join('');
}

function renderAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    if (!container) return;
    if (!announcementsData || announcementsData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">📭 No announcements</div>`;
        return;
    }
    const sorted = [...announcementsData].sort((a, b) => b.timestamp - a.timestamp);
    container.innerHTML = sorted.map(item => {
        const date = new Date(item.timestamp);
        return `
            <div class="announce-item">
                <div class="text">📢 ${item.text}</div>
                <div class="meta">🕐 ${date.toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

function renderAll() {
    renderCodes();
    renderAnnouncements();
}

// ================================================================
//  TABS
// ================================================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});

// ================================================================
//  COUNTDOWN TIMER
// ================================================================

const targetDate = new Date('August 9, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('countdownStatus').innerHTML = '🚀 <span class="live">LIVE NOW!</span> The update has arrived!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================================================================
//  INIT
// ================================================================

loadData();

console.log('✅ Starry Horizons system loaded successfully');// ================================================================
//  LOADING SCREEN LOGIC
// ================================================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 4000);
});

// ================================================================
//  SPACE BACKGROUND
// ================================================================

function createStars(layerId, count, sizeRange, brightness) {
    const layer = document.getElementById(layerId);
    if (!layer) return;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * sizeRange + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
        star.style.animationDelay = (Math.random() * 6) + 's';
        if (brightness > 0.7) star.classList.add('bright');
        if (Math.random() > 0.8) {
            star.classList.add('colored');
            const colors = ['#ff6b6b', '#ffd93d', '#6bcbff', '#ff6b9d', '#a8d08d'];
            star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        }
        layer.appendChild(star);
    }
}

createStars('starsLayer1', 100, 2, 0.6);
createStars('starsLayer2', 60, 3, 0.8);
createStars('starsLayer3', 30, 4, 1);

function createFlares() {
    const container = document.getElementById('flaresContainer');
    if (!container) return;
    for (let i = 0; i < 6; i++) {
        const flare = document.createElement('div');
        flare.className = 'flare';
        const size = Math.random() * 8 + 4;
        flare.style.width = size + 'px';
        flare.style.height = size + 'px';
        flare.style.left = Math.random() * 100 + '%';
        flare.style.top = Math.random() * 100 + '%';
        flare.style.animationDelay = (Math.random() * 8) + 's';
        flare.style.animationDuration = (Math.random() * 6 + 3) + 's';
        container.appendChild(flare);
    }
}
createFlares();

function createShootingStar() {
    const container = document.getElementById('shootingStarsContainer');
    if (!container) return;
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = (Math.random() * 80 + 10) + '%';
    star.style.top = (Math.random() * 40 + 5) + '%';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';
    star.style.animationDelay = (Math.random() * 30) + 's';
    container.appendChild(star);
}
for (let i = 0; i < 5; i++) setTimeout(createShootingStar, i * 2000);
setInterval(createShootingStar, 10000);

// ================================================================
//  DATA (CODES & ANNOUNCEMENTS)
// ================================================================

let codesData = [];
let announcementsData = [];

function getDefaultData() {
    return {
        codes: [
            { code: "WELCOME!", reward: "50 Cash", active: true },
            { code: "DISCORD!", reward: "75 Cash", active: true }
        ],
        announcements: [
            { text: "🌟 RELEASE EVENT IN GAME!", timestamp: Date.now() - 1800000 }
        ]
    };
}

function loadData() {
    try {
        const savedCodes = localStorage.getItem('starryCodes');
        const savedAnn = localStorage.getItem('starryAnnouncements');
        if (savedCodes) {
            const parsed = JSON.parse(savedCodes);
            codesData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().codes;
        } else {
            codesData = getDefaultData().codes;
        }
        if (savedAnn) {
            const parsed = JSON.parse(savedAnn);
            announcementsData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().announcements;
        } else {
            announcementsData = getDefaultData().announcements;
        }
    } catch (e) {
        codesData = getDefaultData().codes;
        announcementsData = getDefaultData().announcements;
    }
    renderAll();
}

function saveData() {
    try {
        localStorage.setItem('starryCodes', JSON.stringify(codesData));
        localStorage.setItem('starryAnnouncements', JSON.stringify(announcementsData));
    } catch (e) {}
}

function renderCodes() {
    const container = document.getElementById('codesContainer');
    if (!container) return;
    if (!codesData || codesData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">✨ No codes available</div>`;
        return;
    }
    container.innerHTML = codesData.map(item => `
        <div class="code-item">
            <span class="code">🎮 ${item.code}</span>
            <span class="reward">🎁 ${item.reward}</span>
            <span class="status ${item.active ? 'active' : 'expired'}">
                ${item.active ? '✅ Active' : '⛔ Expired'}
            </span>
        </div>
    `).join('');
}

function renderAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    if (!container) return;
    if (!announcementsData || announcementsData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">📭 No announcements</div>`;
        return;
    }
    const sorted = [...announcementsData].sort((a, b) => b.timestamp - a.timestamp);
    container.innerHTML = sorted.map(item => {
        const date = new Date(item.timestamp);
        return `
            <div class="announce-item">
                <div class="text">📢 ${item.text}</div>
                <div class="meta">🕐 ${date.toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

function renderAll() {
    renderCodes();
    renderAnnouncements();
}

// ================================================================
//  TABS
// ================================================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});

// ================================================================
//  COUNTDOWN TIMER
// ================================================================

const targetDate = new Date('August 9, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('countdownStatus').innerHTML = '🚀 <span class="live">LIVE NOW!</span> The update has arrived!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================================================================
//  INIT
// ================================================================

loadData();

console.log('✅ Starry Horizons system loaded successfully');// ================================================================
//  LOADING SCREEN LOGIC
// ================================================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 4000);
});

// ================================================================
//  SPACE BACKGROUND
// ================================================================

function createStars(layerId, count, sizeRange, brightness) {
    const layer = document.getElementById(layerId);
    if (!layer) return;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * sizeRange + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
        star.style.animationDelay = (Math.random() * 6) + 's';
        if (brightness > 0.7) star.classList.add('bright');
        if (Math.random() > 0.8) {
            star.classList.add('colored');
            const colors = ['#ff6b6b', '#ffd93d', '#6bcbff', '#ff6b9d', '#a8d08d'];
            star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        }
        layer.appendChild(star);
    }
}

createStars('starsLayer1', 100, 2, 0.6);
createStars('starsLayer2', 60, 3, 0.8);
createStars('starsLayer3', 30, 4, 1);

function createFlares() {
    const container = document.getElementById('flaresContainer');
    if (!container) return;
    for (let i = 0; i < 6; i++) {
        const flare = document.createElement('div');
        flare.className = 'flare';
        const size = Math.random() * 8 + 4;
        flare.style.width = size + 'px';
        flare.style.height = size + 'px';
        flare.style.left = Math.random() * 100 + '%';
        flare.style.top = Math.random() * 100 + '%';
        flare.style.animationDelay = (Math.random() * 8) + 's';
        flare.style.animationDuration = (Math.random() * 6 + 3) + 's';
        container.appendChild(flare);
    }
}
createFlares();

function createShootingStar() {
    const container = document.getElementById('shootingStarsContainer');
    if (!container) return;
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = (Math.random() * 80 + 10) + '%';
    star.style.top = (Math.random() * 40 + 5) + '%';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';
    star.style.animationDelay = (Math.random() * 30) + 's';
    container.appendChild(star);
}
for (let i = 0; i < 5; i++) setTimeout(createShootingStar, i * 2000);
setInterval(createShootingStar, 10000);

// ================================================================
//  DATA (CODES & ANNOUNCEMENTS)
// ================================================================

let codesData = [];
let announcementsData = [];

function getDefaultData() {
    return {
        codes: [
            { code: "WELCOME!", reward: "50 Cash", active: true },
            { code: "DISCORD!", reward: "75 Cash", active: true }
        ],
        announcements: [
            { text: "🌟 RELEASE EVENT IN GAME!", timestamp: Date.now() - 1800000 }
        ]
    };
}

function loadData() {
    try {
        const savedCodes = localStorage.getItem('starryCodes');
        const savedAnn = localStorage.getItem('starryAnnouncements');
        if (savedCodes) {
            const parsed = JSON.parse(savedCodes);
            codesData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().codes;
        } else {
            codesData = getDefaultData().codes;
        }
        if (savedAnn) {
            const parsed = JSON.parse(savedAnn);
            announcementsData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().announcements;
        } else {
            announcementsData = getDefaultData().announcements;
        }
    } catch (e) {
        codesData = getDefaultData().codes;
        announcementsData = getDefaultData().announcements;
    }
    renderAll();
}

function saveData() {
    try {
        localStorage.setItem('starryCodes', JSON.stringify(codesData));
        localStorage.setItem('starryAnnouncements', JSON.stringify(announcementsData));
    } catch (e) {}
}

function renderCodes() {
    const container = document.getElementById('codesContainer');
    if (!container) return;
    if (!codesData || codesData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">✨ No codes available</div>`;
        return;
    }
    container.innerHTML = codesData.map(item => `
        <div class="code-item">
            <span class="code">🎮 ${item.code}</span>
            <span class="reward">🎁 ${item.reward}</span>
            <span class="status ${item.active ? 'active' : 'expired'}">
                ${item.active ? '✅ Active' : '⛔ Expired'}
            </span>
        </div>
    `).join('');
}

function renderAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    if (!container) return;
    if (!announcementsData || announcementsData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">📭 No announcements</div>`;
        return;
    }
    const sorted = [...announcementsData].sort((a, b) => b.timestamp - a.timestamp);
    container.innerHTML = sorted.map(item => {
        const date = new Date(item.timestamp);
        return `
            <div class="announce-item">
                <div class="text">📢 ${item.text}</div>
                <div class="meta">🕐 ${date.toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

function renderAll() {
    renderCodes();
    renderAnnouncements();
}

// ================================================================
//  TABS
// ================================================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});

// ================================================================
//  COUNTDOWN TIMER
// ================================================================

const targetDate = new Date('August 9, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('countdownStatus').innerHTML = '🚀 <span class="live">LIVE NOW!</span> The update has arrived!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================================================================
//  INIT
// ================================================================

loadData();

console.log('✅ Starry Horizons system loaded successfully');// ================================================================
//  LOADING SCREEN LOGIC
// ================================================================
window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loadingScreen').classList.add('hidden');
    }, 4000);
});

// ================================================================
//  SPACE BACKGROUND
// ================================================================

function createStars(layerId, count, sizeRange, brightness) {
    const layer = document.getElementById(layerId);
    if (!layer) return;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * sizeRange + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--duration', (Math.random() * 4 + 2) + 's');
        star.style.animationDelay = (Math.random() * 6) + 's';
        if (brightness > 0.7) star.classList.add('bright');
        if (Math.random() > 0.8) {
            star.classList.add('colored');
            const colors = ['#ff6b6b', '#ffd93d', '#6bcbff', '#ff6b9d', '#a8d08d'];
            star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
        }
        layer.appendChild(star);
    }
}

createStars('starsLayer1', 100, 2, 0.6);
createStars('starsLayer2', 60, 3, 0.8);
createStars('starsLayer3', 30, 4, 1);

function createFlares() {
    const container = document.getElementById('flaresContainer');
    if (!container) return;
    for (let i = 0; i < 6; i++) {
        const flare = document.createElement('div');
        flare.className = 'flare';
        const size = Math.random() * 8 + 4;
        flare.style.width = size + 'px';
        flare.style.height = size + 'px';
        flare.style.left = Math.random() * 100 + '%';
        flare.style.top = Math.random() * 100 + '%';
        flare.style.animationDelay = (Math.random() * 8) + 's';
        flare.style.animationDuration = (Math.random() * 6 + 3) + 's';
        container.appendChild(flare);
    }
}
createFlares();

function createShootingStar() {
    const container = document.getElementById('shootingStarsContainer');
    if (!container) return;
    const star = document.createElement('div');
    star.className = 'shooting-star';
    star.style.left = (Math.random() * 80 + 10) + '%';
    star.style.top = (Math.random() * 40 + 5) + '%';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';
    star.style.animationDelay = (Math.random() * 30) + 's';
    container.appendChild(star);
}
for (let i = 0; i < 5; i++) setTimeout(createShootingStar, i * 2000);
setInterval(createShootingStar, 10000);

// ================================================================
//  DATA (CODES & ANNOUNCEMENTS)
// ================================================================

let codesData = [];
let announcementsData = [];

function getDefaultData() {
    return {
        codes: [
            { code: "WELCOME!", reward: "50 Cash", active: true },
            { code: "DISCORD!", reward: "75 Cash", active: true }
        ],
        announcements: [
            { text: "🌟 RELEASE EVENT IN GAME!", timestamp: Date.now() - 1800000 }
        ]
    };
}

function loadData() {
    try {
        const savedCodes = localStorage.getItem('starryCodes');
        const savedAnn = localStorage.getItem('starryAnnouncements');
        if (savedCodes) {
            const parsed = JSON.parse(savedCodes);
            codesData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().codes;
        } else {
            codesData = getDefaultData().codes;
        }
        if (savedAnn) {
            const parsed = JSON.parse(savedAnn);
            announcementsData = Array.isArray(parsed) && parsed.length > 0 ? parsed : getDefaultData().announcements;
        } else {
            announcementsData = getDefaultData().announcements;
        }
    } catch (e) {
        codesData = getDefaultData().codes;
        announcementsData = getDefaultData().announcements;
    }
    renderAll();
}

function saveData() {
    try {
        localStorage.setItem('starryCodes', JSON.stringify(codesData));
        localStorage.setItem('starryAnnouncements', JSON.stringify(announcementsData));
    } catch (e) {}
}

function renderCodes() {
    const container = document.getElementById('codesContainer');
    if (!container) return;
    if (!codesData || codesData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">✨ No codes available</div>`;
        return;
    }
    container.innerHTML = codesData.map(item => `
        <div class="code-item">
            <span class="code">🎮 ${item.code}</span>
            <span class="reward">🎁 ${item.reward}</span>
            <span class="status ${item.active ? 'active' : 'expired'}">
                ${item.active ? '✅ Active' : '⛔ Expired'}
            </span>
        </div>
    `).join('');
}

function renderAnnouncements() {
    const container = document.getElementById('announcementsContainer');
    if (!container) return;
    if (!announcementsData || announcementsData.length === 0) {
        container.innerHTML = `<div style="text-align:center;padding:16px;color:#4f659a;">📭 No announcements</div>`;
        return;
    }
    const sorted = [...announcementsData].sort((a, b) => b.timestamp - a.timestamp);
    container.innerHTML = sorted.map(item => {
        const date = new Date(item.timestamp);
        return `
            <div class="announce-item">
                <div class="text">📢 ${item.text}</div>
                <div class="meta">🕐 ${date.toLocaleString()}</div>
            </div>
        `;
    }).join('');
}

function renderAll() {
    renderCodes();
    renderAnnouncements();
}

// ================================================================
//  TABS
// ================================================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tabId = this.dataset.tab;
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.getElementById('tab-' + tabId).classList.add('active');
    });
});

// ================================================================
//  COUNTDOWN TIMER
// ================================================================

const targetDate = new Date('August 9, 2026 18:00:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        document.getElementById('countdownStatus').innerHTML = '🚀 <span class="live">LIVE NOW!</span> The update has arrived!';
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ================================================================
//  INIT
// ================================================================

loadData();

console.log('✅ Starry Horizons system loaded successfully');
