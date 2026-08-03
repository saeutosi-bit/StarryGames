// ================================================================
//  LOADING SCREEN LOGIC
// ================================================================
window.addEventListener('load', function() {
    // Загрузка длится 4 секунды (буквы летят 2.2с, исчезают, затем появляется иконка)
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
//  TABS        // ================================================================

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
//  MINI-GAMES LOGIC
// ================================================================

// --- GAME 1: GUESS THE NUMBER ---
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const guessResult = document.getElementById('guessResult');
let secretNumber = Math.floor(Math.random() * 100) + 1;
let guessAttempts = 0;

guessBtn.addEventListener('click', function() {
    const val = parseInt(guessInput.value);
    if (isNaN(val) || val < 1 || val > 100) {
        guessResult.textContent = '❌ Enter a number between 1 and 100!';
        return;
    }
    guessAttempts++;
    if (val === secretNumber) {
        guessResult.innerHTML = `✅ <strong>CORRECT!</strong> You got it in ${guessAttempts} tries! 🌟`;
        guessBtn.disabled = true;
        guessInput.disabled = true;
        setTimeout(() => {
            secretNumber = Math.floor(Math.random() * 100) + 1;
            guessAttempts = 0;
            guessBtn.disabled = false;
            guessInput.disabled = false;
            guessInput.value = '';
            guessResult.textContent = '🔄 New number generated! Good luck!';
        }, 3000);
    } else if (val < secretNumber) {
        guessResult.textContent = '⬆️ Too low! Try a higher number.';
    } else {
        guessResult.textContent = '⬇️ Too high! Try a lower number.';
    }
    guessInput.value = '';
    guessInput.focus();
});
guessInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') guessBtn.click(); });

// --- GAME 2: COIN FLIP ---
const flipBtn = document.getElementById('flipBtn');
const flipResult = document.getElementById('flipResult');
const coin = document.getElementById('coinElement');
let isFlipping = false;

flipBtn.addEventListener('click', function() {
    if (isFlipping) return;
    isFlipping = true;
    flipBtn.disabled = true;
    flipResult.textContent = '🌀 Spinning through the galaxy...';
    
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    
    coin.classList.remove('flipping');
    void coin.offsetWidth;
    coin.classList.add('flipping');
    
    setTimeout(() => {
        coin.classList.remove('flipping');
        if (result === 'heads') {
            coin.style.transform = 'rotateY(0deg)';
            flipResult.innerHTML = '⭐ <strong>Heads!</strong> The stars align!';
        } else {
            coin.style.transform = 'rotateY(180deg)';
            flipResult.innerHTML = '🌙 <strong>Tails!</strong> The moon takes over!';
        }
        isFlipping = false;
        flipBtn.disabled = false;
    }, 900);
});

// --- GAME 3: CLICKER ---
const clickerBtn = document.getElementById('clickerBtn');
const clickerStartBtn = document.getElementById('clickerStartBtn');
const clickCountDisplay = document.getElementById('clickCount');
const clickTimeDisplay = document.getElementById('clickTimeLeft');
const clickerResult = document.getElementById('clickerResult');

let clickCount = 0;
let timeLeft = 10;
let clickerTimer = null;
let isClickerActive = false;

clickerBtn.addEventListener('click', function() {
    if (!isClickerActive) return;
    clickCount++;
    clickCountDisplay.textContent = clickCount;
    clickerBtn.style.transform = 'scale(0.85)';
    setTimeout(() => clickerBtn.style.transform = 'scale(1)', 100);
});

clickerStartBtn.addEventListener('click', function() {
    if (isClickerActive) return;
    clickCount = 0;
    timeLeft = 10;
    clickCountDisplay.textContent = '0';
    clickTimeDisplay.textContent = '10s';
    clickerResult.textContent = '⚡ GO! Click the star!';
    clickerBtn.disabled = false;
    isClickerActive = true;
    
    clickerTimer = setInterval(() => {
        timeLeft--;
        clickTimeDisplay.textContent = timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(clickerTimer);
            isClickerActive = false;
            clickerBtn.disabled = true;
            if (clickCount >= 30) {
                clickerResult.innerHTML = `🏆 <strong>GALACTIC LEGEND!</strong> ${clickCount} clicks! 🌟`;
            } else if (clickCount >= 15) {
                clickerResult.innerHTML = `✨ <strong>Star Warrior!</strong> ${clickCount} clicks!`;
            } else {
                clickerResult.innerHTML = `🌌 ${clickCount} clicks. Try again, space cadet!`;
            }
        }
    }, 1000);
});

// --- GAME 4: MEMORY ---
const memoryBtns = document.querySelectorAll('#memoryGrid .game-btn');
const memoryResult = document.getElementById('memoryResult');
const memoryResetBtn = document.getElementById('memoryResetBtn');
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let pairsFound = 0;

function resetMemoryBoard() {
    const emojis = ['🌌','🌌','🪐','🪐','⭐','⭐'];
    // Shuffle
    for (let i = emojis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emojis[i], emojis[j]] = [emojis[j], emojis[i]];
    }
    memoryBtns.forEach((btn, index) => {
        btn.textContent = '❓';
        btn.dataset.emoji = emojis[index];
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.style.background = 'rgba(247, 201, 72, 0.1)';
    });
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    pairsFound = 0;
    memoryResult.textContent = 'Find the pairs!';
}

function flipMemoryCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.textContent !== '❓') return;

    this.textContent = this.dataset.emoji;
    this.style.background = 'rgba(60, 85, 140, 0.3)';

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
    if (isMatch) {
        firstCard.disabled = true;
        secondCard.disabled = true;
        firstCard.style.opacity = '0.5';
        secondCard.style.opacity = '0.5';
        pairsFound++;
        if (pairsFound === 3) {
            memoryResult.innerHTML = '🎉 <strong>You won!</strong> You found all pairs!';
        } else {
            memoryResult.textContent = '✨ Pair found!';
        }
        resetBoard();
    } else {
        lockBoard = true;
        memoryResult.textContent = '❌ Try again...';
        setTimeout(() => {
            firstCard.textContent = '❓';
            secondCard.textContent = '❓';
            firstCard.style.background = 'rgba(247, 201, 72, 0.1)';
            secondCard.style.background = 'rgba(247, 201, 72, 0.1)';
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

memoryBtns.forEach(btn => btn.addEventListener('click', flipMemoryCard));
memoryResetBtn.addEventListener('click', resetMemoryBoard);
resetMemoryBoard(); // Init

// --- GAME 5: DICE ROLL ---
const diceBtn = document.getElementById('diceBtn');
const diceDisplay = document.getElementById('diceDisplay');
const diceResult = document.getElementById('diceResult');
const diceFaces = ['⚀','⚁','⚂','⚃','⚄','⚅'];

diceBtn.addEventListener('click', function() {
    const roll = Math.floor(Math.random() * 6);
    diceDisplay.textContent = diceFaces[roll];
    diceResult.textContent = `🎲 You rolled ${roll + 1}!`;
});

// --- GAME 6: RPS ---
const rpsBtns = document.querySelectorAll('[data-rps]');
const rpsResult = document.getElementById('rpsResult');
const rpsOptions = ['rock', 'paper', 'scissors'];
const rpsEmojis = {'rock':'🪨','paper':'📄','scissors':'✂️'};

rpsBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const playerChoice = this.dataset.rps;
        const aiChoice = rpsOptions[Math.floor(Math.random() * 3)];
        let result = '';
        if (playerChoice === aiChoice) {
            result = `🤝 Tie! Both chose ${rpsEmojis[playerChoice]}`;
        } else if (
            (playerChoice === 'rock' && aiChoice === 'scissors') ||
            (playerChoice === 'paper' && aiChoice === 'rock') ||
            (playerChoice === 'scissors' && aiChoice === 'paper')
        ) {
            result = `✅ You win! ${rpsEmojis[playerChoice]} beats ${rpsEmojis[aiChoice]}!`;
        } else {
            result = `❌ You lose! ${rpsEmojis[aiChoice]} beats ${rpsEmojis[playerChoice]}!`;
        }
        rpsResult.innerHTML = result;
    });
});

// --- GAME 7: GUESS THE SUIT ---
const suitBtns = document.querySelectorAll('[data-suit]');
const suitResult = document.getElementById('suitResult');
const suits = ['♥️','♦️','♣️','♠️'];

suitBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const playerGuess = this.dataset.suit;
        const actualSuit = suits[Math.floor(Math.random() * 4)];
        if (playerGuess === actualSuit) {
            suitResult.innerHTML = `✅ <strong>Correct!</strong> It was ${actualSuit}!`;
        } else {
            suitResult.innerHTML = `❌ Wrong! It was ${actualSuit}.`;
        }
    });
});

// --- GAME 8: REACTION TIME ---
const reactionBtn = document.getElementById('reactionBtn');
const reactionResult = document.getElementById('reactionResult');
let reactionTimeout, reactionStart;

reactionBtn.addEventListener('click', function() {
    if (this.dataset.state === 'waiting') {
        clearTimeout(reactionTimeout);
        this.textContent = '⏳ Too early! Try again.';
        this.style.background = 'rgba(255, 80, 80, 0.2)';
        reactionResult.textContent = '😅 Too fast! Wait for green.';
        this.dataset.state = 'idle';
        setTimeout(() => {
            this.textContent = '🟢 Wait for Green!';
            this.style.background = 'rgba(247, 201, 72, 0.1)';
            reactionResult.textContent = 'Get ready...';
            this.dataset.state = 'idle';
        }, 1000);
        return;
    }
    if (this.dataset.state === 'ready') {
        const reactionTime = Date.now() - reactionStart;
        reactionResult.innerHTML = `⚡ <strong>${reactionTime}ms!</strong> Great reaction!`;
        this.textContent = '🟢 Wait for Green!';
        this.style.background = 'rgba(247, 201, 72, 0.1)';
        this.dataset.state = 'idle';
        return;
    }
    
    // Start new game
    this.textContent = '🔴 WAITING...';
    this.style.background = 'rgba(255, 150, 50, 0.2)';
    this.dataset.state = 'waiting';
    reactionResult.textContent = '⏳ Wait for the green light...';
    
    const delay = 1000 + Math.random() * 3000;
    reactionTimeout = setTimeout(() => {
        this.textContent = '🟢 CLICK NOW!';
        this.style.background = 'rgba(80, 255, 80, 0.2)';
        this.dataset.state = 'ready';
        reactionStart = Date.now();
        reactionResult.textContent = '🟢 CLICK!';
    }, delay);
});
reactionBtn.dataset.state = 'idle';

// --- GAME 9: MATH ---
const mathBtn = document.getElementById('mathBtn');
const mathInput = document.getElementById('mathInput');
const mathQuestion = document.getElementById('mathQuestion');
const mathResult = document.getElementById('mathResult');
let mathAnswer = 0;

function generateMathQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    mathAnswer = num1 + num2;
    mathQuestion.textContent = `${num1} + ${num2} = ?`;
    mathInput.value = '';
    mathResult.textContent = '🧮 Solve it!';
    mathBtn.disabled = false;
    mathInput.disabled = false;
}

mathBtn.addEventListener('click', function() {
    const val = parseInt(mathInput.value);
    if (isNaN(val)) {
        mathResult.textContent = '❌ Enter a number!';
        return;
    }
    if (val === mathAnswer) {
        mathResult.innerHTML = '✅ <strong>Correct!</strong> Great math skills! 🌟';
        this.disabled = true;
        mathInput.disabled = true;
        setTimeout(generateMathQuestion, 2000);
    } else {
        mathResult.textContent = `❌ Wrong! The answer was ${mathAnswer}. Try again!`;
        setTimeout(() => {
            mathResult.textContent = '🧮 Try again!';
        }, 1500);
    }
});
generateMathQuestion();

// --- GAME 10: HIGHER OR LOWER ---
const forceBtns = document.querySelectorAll('[data-force]');
const forceNumber = document.getElementById('forceNumber');
const forceResult = document.getElementById('forceResult');
let forceCurrent = 5;

function generateForceNumber() {
    forceCurrent = Math.floor(Math.random() * 10) + 1;
    forceNumber.textContent = forceCurrent;
}

forceBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const guess = this.dataset.force;
        const nextNum = Math.floor(Math.random() * 10) + 1;
        let win = false;
        if (guess === 'higher' && nextNum > forceCurrent) win = true;
        if (guess === 'lower' && nextNum < forceCurrent) win = true;
        if (nextNum === forceCurrent) {
            forceResult.textContent = `🔄 It's the same (${nextNum})! Try again!`;
        } else if (win) {
            forceResult.innerHTML = `✅ <strong>Correct!</strong> ${nextNum} is ${guess}!`;
        } else {
            forceResult.innerHTML = `❌ Wrong! It was ${nextNum}.`;
        }
        forceCurrent = nextNum;
        forceNumber.textContent = forceCurrent;
    });
});
generateForceNumber();

// ================================================================
//  HACKER MODE (MATRIX RAIN & BACKGROUND SWITCH) — ПОЛНОСТЬЮ УДАЛЕНО
// ================================================================

// ================================================================
//  INIT
// ================================================================

loadData();

console.log('✅ Starry Horizons system loaded successfully');
