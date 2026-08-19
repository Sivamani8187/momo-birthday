/*
===================================================
     Momo's Birthday Surprise Website
     Logic, Canvas Engine, and Dynamic Content
===================================================
*/

// --- 1. CONFIGURATION OBJECT ---
// Modify this object to change names, messages, images, and content
const birthdayConfig = {
    name: "Momo",
    birthdayDate: "August 28",
    secretCode: "2822",
    secretHint: "Our Birthday Dates ❤️",

    // Media URLs (Use high-quality Unsplash templates. Can be replaced with local paths like 'assets/images/pic.jpg')
    avatarImage: "assets/opening/entry.jpg",// Profile picture frame
    heroBackgroundImage: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop", // Full screen background image

    // Timeline Memories
    timeline: [
        {
            date: "Manaki ooha telisaka..",
            title: "The Beginning ✨",
            text: "The day our paths crossed for the very first time. A simple moment that changed my entire world forever.",
            image: "assets/opening/momo1.png"
        },
        {
            date: "Mana reunion tarvatha",
            title: "Our Happy Moments ❤️",
            text: "Laughing, smiling, and simply enjoying being together. These little moments with you are some of my favorites.",
            image: "assets/opening/momo2.jpg"
        },
        {
            date: "Nvu doctor avvvvvaaaaaliiii mama",
            title: "The Doctor You Dream to Be 🩺",
            text: "Watching you chase your dream of becoming a doctor makes me incredibly proud. I'll always be cheering for you.",
            image: "assets/opening/momo32.jpg"
        },
        {
            date: "Na success lo ne happiness ❤️",
            title: "A Little Piece of Me ❤️",
            text: "Just a simple selfie, but a memory I'll always treasure. Seeing you hold my ID made this moment even more special.",
            image: "assets/opening/momo4.jpg"
        },
        {
            date: "Today & Always!",
            title: "Just Us ❤️",
            text: "One more silly pose, one more beautiful memory, and so many more moments waiting for us.",
            image: "assets/opening/momo5.jpg"
        }
    ],

    // Polaroid Memories Gallery
    memories: [
        {
            image: "assets/opening/img1.jpg",
            caption: "Mana scrap pose ✨",
            location: "Ilanti vaatilo maname thopu 😌"
        },
        {
            image: "assets/opening/img2.jpg",
            caption: "Ne Mature Function 👧",
            location: "Mana face maname chuskolem 😂"
        },
        {
            image: "assets/opening/img3.jpg",
            caption: "Mana first mirror pic 🪞",
            location: "BTW, chala daridramga vachindhi 😂"
        },
        {
            image: "assets/opening/img4.jpg",
            caption: "Marriage ki nightout 🐄",
            location: "Cow's marriage ki mana photos 😁"
        },
        {
            image: "assets/opening/img5.jpg",
            caption: "Silly Faces 😂",
            location: "Mana old age getup 👴👵"
        },
        {
            image: "assets/opening/img6.jpg",
            caption: "Holi Celebrations 🫟",
            location: "with some buradha and ujala liquid water tho 🤢"
        },
        {
            image: "assets/opening/img7.jpg",
            caption: "Vc lo ne veshalu 🐣",
            location: "pilla bacha 👧"
        },
        {
            image: "assets/opening/img8.jpg",
            caption: "Doctor getup 👩‍⚕️",
            location: "meeru eppatikina doctor avtharu babu..avthaaru 🩺"
        },
        {
            image: "assets/opening/img9.jpg",
            caption: "Araku ❄️",
            location: "Ne first trip 📷"
        },
        {
            image: "assets/opening/img10.jpg",
            caption: "Bike ride👩‍❤️‍👨",
            location: "with intlo vaalla permission.. the best ride! 🚲"
        },
        {
            image: "assets/opening/img11.jpg",
            caption: "My pookie 🫂",
            location: "Just a random selfie 🤳"
        },
        {
            image: "assets/opening/img12.jpg",
            caption: "Fantasy 💪",
            location: "Juttu laagi kottukune moments 😂"
        },
        {
            image: "assets/opening/img13.jpg",
            caption: "Irumudi roju 🐻",
            location: "Old days start 🤭"
        },
        {
            image: "assets/opening/img14.jpg",
            caption: "Ghibli 👻",
            location: "Anni kavali manaki 😁"
        }
    ],

    // Things I Love (Approximately 8-12 Cards)
    reasons: [
        {
            icon: "fa-solid fa-face-smile-beam",
            title: "Your Smile",
            text: "Anthaga em bagodhu but eroju ne birthday kabatti bavuntadhi le😌"
        },
        {
            icon: "fa-solid fa-heart-pulse",
            title: "Your Kindness",
            text: "Idhi matram chala ekkuve neeku ❤️, thank you for thisss!!"
        },
        {
            icon: "fa-solid fa-face-laugh-wink",
            title: "Your Craziness 😂",
            text: "Our random talks, ne gurinchi telisthe suicide cheskuntaremo ne friends😂, never change"
        },
        {
            icon: "fa-solid fa-hand-holding-heart",
            title: "How You Care",
            text: "chala care chesthavu..evadina lover dorikaademo e madhya thagguthundhi chusko 😌"
        },
        {
            icon: "fa-solid fa-mug-hot",
            title: "Your Little Habits",
            text: "Okka pani kuda correct ga cheyyav 😂..eppudu maarathaavo ento!"
        },
        {
            icon: "fa-solid fa-sparkles",
            title: "Your Pure Energy",
            text: "Idhi undhi anukuni open chesava chiii 😂, nvu 'the most laziest girl' 😅, pandhi 🐖"
        },
        {
            icon: "fa-solid fa-moon",
            title: "Midnight Chats",
            text: "Ivi matram marcipolemu...ne daggara phn lekapoyina me dad phn nundi chesav 🤭"
        },
        {
            icon: "fa-solid fa-infinity",
            title: "Unconditional Support",
            text: "Finally, idhi matram isthav. Thank you for everything..❤️"
        }
    ],

    // The Love Letter message (Typewriter effect)
    letterText: `My Dearest Momo,

Happy Birthday Potti! ❤️

Today is a celebration of the day you entered the world, bringing with you an indescribable warmth, beauty, and light. 

I want to take this moment to tell you how incredibly special you are to me. In you, I found my best friend, and my greatest adventure. You inspire me every day to be a better person just by being who you are.

Thank you for all the laughs, the sweet moments, and the endless support. Thank you for simply being you. 

I hope this year brings you as much happiness, peace, and magic as you bring into my life every single day. I love you, now and always.

Forever yours,
Potti mama ❤️`,

    // Birthday Cake candle blow message
    cakeMessage: "Happy birthday once again potti mama! 💓 You are the sweetest gift life has ever given me. Keep shining bright ✨",

    // Final Cinematic surprise personalized message
    finalSurpriseText: "You deserve all the happiness in the universe. I want you to know how deeply loved you are, not just today, but every single second of every day. Here is to making a million more sweet memories together. Manaki inka em godavalu rakudadhu ani korukuntu...Happy Birthday, momo! ❤️"
};

// --- 2. GLOBAL STATE ---
let currentLightboxIdx = 0;
let letterTypewriterTriggered = false;
let finalSurpriseTriggered = false;

// --- 3. DOM SELECTION ---
const dom = {
    welcomeScreen: document.getElementById('welcome-screen'),
    openSurpriseBtn: document.getElementById('open-surprise-btn'),
    mainHeader: document.getElementById('main-header'),
    mainContent: document.getElementById('main-content'),
    heroBg: document.getElementById('hero-bg'),
    heroAvatar: document.getElementById('hero-avatar'),
    timelineList: document.getElementById('timeline-list'),
    galleryGrid: document.getElementById('gallery-grid'),
    reasonsGrid: document.getElementById('reasons-grid'),
    videoModal: document.getElementById('video-modal'),
    surpriseVideo: document.getElementById('surprise-video'),
    birthdayCake: document.getElementById('birthday-cake'),
    cakeInstruction: document.getElementById('cake-instruction'),
    birthdayWishCard: document.getElementById('birthday-wish-card'),
    birthdayCakeMessage: document.getElementById('birthday-cake-message'),
    finalPersonalizedMessage: document.getElementById('final-personalized-message'),
    restartBtn: document.getElementById('restart-btn'),
    navToggle: document.getElementById('nav-toggle'),
    navbar: document.getElementById('navbar'),
    navLinks: document.querySelectorAll('.nav-link'),
    scrollHint: document.getElementById('scroll-hint'),
    lightbox: document.getElementById('lightbox-modal'),
    lightboxImg: document.getElementById('lightbox-img'),
    lightboxTitle: document.getElementById('lightbox-title'),
    lightboxDate: document.getElementById('lightbox-date'),
    lightboxLoc: document.getElementById('lightbox-loc'),
    lightboxClose: document.getElementById('lightbox-close'),
    lightboxPrev: document.getElementById('lightbox-prev'),
    lightboxNext: document.getElementById('lightbox-next')
};

// --- 4. PARTICLE ENGINE (Floating Hearts & Sparkles) ---
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let maxParticles = 60;
let particleMode = 'subtle'; // 'subtle' or 'intense' (used in final surprise)

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height; // distribute on init
    }

    reset() {
        this.size = Math.random() * 8 + 4;
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.speedY = -(Math.random() * 1.2 + 0.4);
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.4;
        this.opacity = Math.random() * 0.5 + 0.15;
        this.color = Math.random() > 0.5 ? 'rgba(214, 138, 157, ' : 'rgba(212, 175, 55, '; // rose or gold
        this.type = Math.random() > 0.6 ? 'heart' : 'sparkle';
        this.angle = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y / 30) * 0.2;
        this.angle += this.rotSpeed;

        if (particleMode === 'intense') {
            this.y += this.speedY * 1.5;
            this.opacity = Math.min(this.opacity + 0.01, 0.95);
        }

        // Fade out near top
        if (this.y < 100) {
            this.opacity -= 0.01;
        }

        if (this.y < -50 || this.opacity <= 0) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;

        if (this.type === 'heart') {
            // Draw custom heart shape in Canvas
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            const s = this.size;
            ctx.bezierCurveTo(-s / 2, -s / 2, -s, -s / 6, -s, s / 3);
            ctx.bezierCurveTo(-s, s, -s / 3, s * 1.5, 0, s * 2);
            ctx.bezierCurveTo(s / 3, s * 1.5, s, s, s, s / 3);
            ctx.bezierCurveTo(s, -s / 6, s / 2, -s / 2, 0, 0);
            ctx.closePath();
            ctx.fillStyle = this.color + '1)';
            ctx.fill();
        } else {
            // Draw a diamond sparkle
            ctx.translate(this.x, this.y);
            ctx.beginPath();
            const s = this.size * 0.7;
            ctx.moveTo(0, -s);
            ctx.lineTo(s, 0);
            ctx.lineTo(0, s);
            ctx.lineTo(-s, 0);
            ctx.closePath();
            ctx.fillStyle = 'rgba(255, 235, 160, 1)';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#d4af37';
            ctx.fill();
        }
        ctx.restore();
    }
}

function initParticles() {
    particles = [];
    for (let i = 0; i < maxParticles; i++) {
        particles.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}

// Start particles
initParticles();
animateParticles();

// --- 4b. INTERACTIVE SCRAPBOOK POLAROID GALLERY ENGINE ---
let memoriesFanned = false;
let activeMemoryCard = null;

function setupGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = '';
    memoriesFanned = false;
    activeMemoryCard = null;

    const centerText = document.getElementById('gallery-center-text');
    if (centerText) {
        centerText.classList.remove('visible');
    }

    const button = document.getElementById('btn-open-memories');
    if (button) {
        button.innerHTML = 'Open Our Memories ❤️';
    }

    const N = birthdayConfig.memories.length;

    birthdayConfig.memories.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'polaroid-card stacked-card';

        // Random tilt for stacked state
        const stackRot = (Math.random() * 24 - 12).toFixed(1);
        div.style.transform = `translate(-50%, -50%) rotate(${stackRot}deg)`;
        div.style.zIndex = index + 1;

        // Store targets in dataset
        div.dataset.stackRot = stackRot;
        div.dataset.index = index;

        div.innerHTML = `
            <div class="polaroid-img-wrapper">
                <img src="${item.image}" alt="${item.caption || item.title}" class="polaroid-img" loading="lazy">
            </div>
            <h3 class="polaroid-caption">${item.caption || item.title}</h3>
            <p class="polaroid-meta">${item.date || ''} ${item.location ? '&bull; ' + item.location : ''}</p>
            
            <!-- Card Controls -->
            <div class="card-controls">
                <button class="card-ctrl-btn prev" onclick="event.stopPropagation(); window.navigateCard(-1)"><i class="fa-solid fa-chevron-left"></i></button>
                <button class="card-ctrl-btn next" onclick="event.stopPropagation(); window.navigateCard(1)"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
        `;

        // Click handler to zoom
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            if (!memoriesFanned) {
                openMemoriesFan();
            } else {
                toggleCardZoom(div);
            }
        });

        // Hover handlers to scale stable in-place
        div.addEventListener('mouseenter', () => {
            if (memoriesFanned && activeMemoryCard !== div) {
                gsap.to(div, {
                    scale: 1.06,
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto"
                });
                div.style.zIndex = 200; // bring above other fanned cards
            }
        });

        div.addEventListener('mouseleave', () => {
            if (memoriesFanned && activeMemoryCard !== div) {
                gsap.to(div, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.out",
                    overwrite: "auto",
                    onComplete: () => {
                        if (activeMemoryCard !== div) {
                            div.style.zIndex = index + 1;
                        }
                    }
                });
            }
        });

        grid.appendChild(div);
    });
}

function computeFanPositions() {
    const cards = document.querySelectorAll('.polaroid-card');
    const N = cards.length;
    if (N === 0) return;

    const isMobile = window.innerWidth <= 768;

    // Ellipse radii around the center
    const rx = isMobile ? 115 : 290;
    const ry = isMobile ? 85 : 170;

    cards.forEach((card, index) => {
        // Distribute angles evenly around the center, with a small random offset
        const angle = (index / N) * 2 * Math.PI + 0.15;
        const radVar = 0.95 + Math.random() * 0.1; // subtle radial variance

        const tx = Math.round(Math.cos(angle) * rx * radVar);
        const ty = Math.round(Math.sin(angle) * ry * radVar);
        const fanRot = (Math.random() * 20 - 10).toFixed(1);

        card.dataset.fanX = tx;
        card.dataset.fanY = ty;
        card.dataset.fanRot = fanRot;
    });
}

function openMemoriesFan() {
    if (memoriesFanned) return;
    memoriesFanned = true;

    computeFanPositions();

    const cards = document.querySelectorAll('.polaroid-card');
    const button = document.getElementById('btn-open-memories');
    if (button) {
        button.innerHTML = 'Close Memories ❤️';
    }

    const centerText = document.getElementById('gallery-center-text');
    if (centerText) {
        centerText.classList.add('visible');
    }

    cards.forEach((card, index) => {
        card.classList.remove('stacked-card');
        card.classList.add('fanned-card');

        const tx = card.dataset.fanX;
        const ty = card.dataset.fanY;
        const rot = card.dataset.fanRot;

        gsap.to(card, {
            x: tx,
            y: ty,
            rotation: rot,
            scale: 1,
            duration: 1.1,
            delay: index * 0.06,
            ease: "back.out(1.15)",
            overwrite: "auto"
        });
    });
}

function closeMemoriesFan() {
    if (!memoriesFanned) return;
    memoriesFanned = false;

    if (activeMemoryCard) {
        closeCardZoom();
    }

    const cards = document.querySelectorAll('.polaroid-card');
    const button = document.getElementById('btn-open-memories');
    if (button) {
        button.innerHTML = 'Open Our Memories ❤️';
    }

    const centerText = document.getElementById('gallery-center-text');
    if (centerText) {
        centerText.classList.remove('visible');
    }

    cards.forEach((card, index) => {
        card.classList.add('stacked-card');
        card.classList.remove('fanned-card');

        const rot = card.dataset.stackRot;

        gsap.to(card, {
            x: 0,
            y: 0,
            rotation: rot,
            scale: 1,
            duration: 0.9,
            delay: (cards.length - 1 - index) * 0.04,
            ease: "power2.inOut",
            overwrite: "auto",
            onComplete: () => {
                card.style.zIndex = index + 1;
            }
        });
    });
}

function toggleMemoriesFan() {
    if (memoriesFanned) {
        closeMemoriesFan();
    } else {
        openMemoriesFan();
    }
}

function toggleCardZoom(card) {
    if (activeMemoryCard === card) {
        closeCardZoom();
    } else {
        if (activeMemoryCard) {
            closeCardZoom();
        }
        zoomCard(card);
    }
}

function zoomCard(card) {
    activeMemoryCard = card;
    card.classList.add('active-card');

    // Bring to front
    card.style.zIndex = 1000;

    gsap.to(card, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: window.innerWidth <= 768 ? 1.45 : 1.35,
        duration: 0.5,
        ease: "power3.out",
        overwrite: "auto"
    });
}

// Click outside close handler
document.addEventListener('click', () => {
    if (activeMemoryCard) {
        closeCardZoom();
    }
});

// Key listeners for zoom modal
window.addEventListener('keydown', (e) => {
    if (activeMemoryCard) {
        if (e.key === 'ArrowLeft') {
            navigateCard(-1);
        } else if (e.key === 'ArrowRight') {
            navigateCard(1);
        } else if (e.key === 'Escape') {
            closeCardZoom();
        }
    }
});

// Resize listener to adapt coordinate offsets
window.addEventListener('resize', () => {
    if (memoriesFanned && !activeMemoryCard) {
        computeFanPositions();
        const cards = document.querySelectorAll('.polaroid-card');
        cards.forEach(card => {
            gsap.to(card, {
                x: card.dataset.fanX,
                y: card.dataset.fanY,
                rotation: card.dataset.fanRot,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    }
});

function closeCardZoom() {
    if (!activeMemoryCard) return;
    const card = activeMemoryCard;
    activeMemoryCard = null;

    card.classList.remove('active-card');

    const tx = card.dataset.fanX;
    const ty = card.dataset.fanY;
    const rot = card.dataset.fanRot;
    const index = parseInt(card.dataset.index);

    gsap.to(card, {
        x: tx,
        y: ty,
        rotation: rot,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
        onComplete: () => {
            card.style.zIndex = index + 1;
        }
    });
}

function navigateCard(dir) {
    if (!activeMemoryCard) return;
    const currentIndex = parseInt(activeMemoryCard.dataset.index);
    const cards = document.querySelectorAll('.polaroid-card');
    const N = cards.length;
    if (N <= 1) return;

    let newIndex = currentIndex + dir;
    if (newIndex < 0) newIndex = N - 1;
    if (newIndex >= N) newIndex = 0;

    const newCard = Array.from(cards).find(c => parseInt(c.dataset.index) === newIndex);
    if (newCard) {
        // Animate old card back
        const prevCard = activeMemoryCard;
        prevCard.classList.remove('active-card');
        const tx = prevCard.dataset.fanX;
        const ty = prevCard.dataset.fanY;
        const rot = prevCard.dataset.fanRot;
        const idx = parseInt(prevCard.dataset.index);

        gsap.to(prevCard, {
            x: tx,
            y: ty,
            rotation: rot,
            scale: 1,
            duration: 0.35,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => {
                prevCard.style.zIndex = idx + 1;
            }
        });

        // Zoom new card
        zoomCard(newCard);
    }
}

// Bind methods globally
window.toggleMemoriesFan = toggleMemoriesFan;
window.navigateCard = navigateCard;

// --- 5. DYNAMIC DOM GENERATION ---
function populateDynamicContent() {
    // Hero Setups
    dom.heroBg.style.backgroundImage = `url('${birthdayConfig.heroBackgroundImage}')`;
    dom.heroAvatar.src = birthdayConfig.avatarImage;
    document.getElementById('hero-title').innerText = `Happy Birthday, ${birthdayConfig.name} ❤️`;

    // Timeline Population
    dom.timelineList.innerHTML = '';
    birthdayConfig.timeline.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-card">
                <span class="timeline-date">${item.date}</span>
                <div class="timeline-img-wrapper">
                    <img src="${item.image}" alt="${item.title}" class="timeline-img" loading="lazy">
                </div>
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `;
        dom.timelineList.appendChild(div);
    });

    // Setup Stacked Gallery
    setupGallery();

    // Things I Love (Reasons) Population
    dom.reasonsGrid.innerHTML = '';
    birthdayConfig.reasons.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'reason-card';
        div.innerHTML = `
            <div class="reason-card-inner">
                <div class="reason-card-front">
                    <i class="${item.icon}"></i>
                    <h3>${item.title}</h3>
                    <span class="tap-hint">Tap to reveal ✨</span>
                </div>
                <div class="reason-card-back">
                    <p>${item.text}</p>
                </div>
            </div>
        `;
        // Flip toggling for both click & hover devices
        div.addEventListener('click', (e) => {
            div.classList.toggle('flipped');
        });
        dom.reasonsGrid.appendChild(div);
    });

    // Cake & Final Message binding
    dom.birthdayCakeMessage.innerText = birthdayConfig.cakeMessage;
    dom.finalPersonalizedMessage.innerText = birthdayConfig.finalSurpriseText;
}

// --- 6. MULTI-STEP WELCOME SEQUENCE LOGIC ---
let enteredPin = "";

function showOpeningStep(stepNum) {
    const allSteps = document.querySelectorAll('.opening-step');
    const currentActive = document.querySelector('.opening-step.active');
    const targetStep = document.getElementById(`step-${stepNum}`);

    if (!targetStep || currentActive === targetStep) return;

    // Smooth crossfade with subtle vertical slide
    gsap.timeline()
        .to(currentActive, {
            opacity: 0,
            y: -15,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                currentActive.classList.remove('active');
                currentActive.style.transform = '';

                targetStep.classList.add('active');
                gsap.fromTo(targetStep,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                );
            }
        });
}

function initKeypad() {
    const keys = document.querySelectorAll('#pin-keypad .key-btn');
    keys.forEach(key => {
        key.addEventListener('click', () => {
            const val = key.getAttribute('data-val');
            handleKeyPress(val);
        });
    });

    // Physical keyboard support
    window.addEventListener('keydown', (e) => {
        const step3 = document.getElementById('step-3');
        if (step3 && step3.classList.contains('active')) {
            if (e.key >= '0' && e.key <= '9') {
                handleKeyPress(e.key);
            } else if (e.key === 'Backspace') {
                handleKeyPress('back');
            } else if (e.key === 'Enter') {
                handleKeyPress('heart');
            }
        }
    });
}

function handleKeyPress(val) {
    if (val === 'back') {
        if (enteredPin.length > 0) {
            enteredPin = enteredPin.slice(0, -1);
            updatePinDots();
        }
    } else if (val === 'heart') {
        if (enteredPin.length === 4) {
            verifyPin();
        } else {
            const pinDotsContainer = document.getElementById('pin-dots');
            pinDotsContainer.classList.add('shake-error');
            setTimeout(() => pinDotsContainer.classList.remove('shake-error'), 400);
        }
    } else {
        if (enteredPin.length < 4) {
            enteredPin += val;
            updatePinDots();

            // Auto submit when 4 digits are completed
            if (enteredPin.length === 4) {
                setTimeout(verifyPin, 350);
            }
        }
    }
}

function updatePinDots() {
    const dots = document.querySelectorAll('#pin-dots .pin-dot');
    dots.forEach((dot, idx) => {
        if (idx < enteredPin.length) {
            dot.classList.add('filled');
        } else {
            dot.classList.remove('filled');
        }
    });
}

function verifyPin() {
    if (enteredPin === birthdayConfig.secretCode) {
        handleCorrectPin();
    } else {
        handleWrongPin();
    }
}

function handleWrongPin() {
    const dots = document.querySelectorAll('#pin-dots .pin-dot');
    dots.forEach(dot => {
        dot.classList.remove('filled');
        dot.classList.add('error');
    });

    const card = document.querySelector('#step-3 .opening-card');
    card.classList.add('shake-error');

    setTimeout(() => {
        card.classList.remove('shake-error');
        showOpeningStep(4);
        // Automatic redirect to Step 3 removed to respect user's manual click flow.
    }, 450);
}

function handleCorrectPin() {
    const dots = document.querySelectorAll('#pin-dots .pin-dot');
    dots.forEach(dot => {
        dot.classList.remove('filled');
        dot.classList.add('success');
    });

    setTimeout(() => {
        showOpeningStep(5);

        confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#d4af37', '#ffd6e0', '#d68a9d', '#ffffff']
        });

        particleMode = 'intense';
        maxParticles = 100;
        initParticles();
        // Automatic redirect to Step 6 removed to respect user's manual click flow.
    }, 500);
}

function openMagicDoor() {
    const doorPhoto = document.getElementById('portal-door-photo');
    const portalFlash = document.getElementById('portal-flash');

    if (doorPhoto) {
        doorPhoto.classList.add('zoom');
    }

    if (portalFlash) {
        gsap.to(portalFlash, {
            opacity: 1,
            duration: 2.2,
            ease: "power2.inOut",
            onComplete: () => {
                startBirthdayExperience();
            }
        });
    } else {
        startBirthdayExperience();
    }
}

function startBirthdayExperience() {
    // Defensive check: instantly show main elements and hide opening page
    if (dom.mainHeader) {
        dom.mainHeader.classList.remove('hidden');
        dom.mainHeader.style.opacity = '1';
        dom.mainHeader.style.pointerEvents = 'auto';
    }
    if (dom.mainContent) {
        dom.mainContent.classList.remove('hidden');
        dom.mainContent.style.opacity = '1';
        dom.mainContent.style.pointerEvents = 'auto';
    }
    if (dom.welcomeScreen) {
        dom.welcomeScreen.style.display = 'none';
        dom.welcomeScreen.style.opacity = '0';
    }

    // Clean up portal assets overlay states
    const portalFlash = document.getElementById('portal-flash');
    if (portalFlash) portalFlash.style.opacity = '0';
    const doorPhoto = document.getElementById('portal-door-photo');
    if (doorPhoto) doorPhoto.classList.remove('zoom');

    // Run beautiful entry GSAP animations in the background
    const timeline = gsap.timeline();

    if (dom.mainHeader) {
        timeline.fromTo(dom.mainHeader, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" });
    }

    const avatar = document.getElementById('hero-avatar');
    if (avatar) {
        timeline.fromTo(avatar, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.6)" }, "-=0.4");
    }

    const heroTitle = document.getElementById('hero-title');
    const heroSubtitle = document.getElementById('hero-subtitle');
    const scrollHint = document.getElementById('scroll-hint');
    const elementsToAnimate = [heroTitle, heroSubtitle, scrollHint].filter(el => el !== null);

    if (elementsToAnimate.length > 0) {
        timeline.fromTo(elementsToAnimate, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8");
    }

    if (dom.heroBg) {
        gsap.to(dom.heroBg, {
            scale: 1.15,
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    particleMode = 'subtle';
    maxParticles = 60;
    initParticles();
}

// Bind functions to window so they are globally accessible from HTML inline onclicks
window.openMagicDoor = openMagicDoor;
window.startBirthdayExperience = startBirthdayExperience;
window.resetWrongPin = function () {
    enteredPin = "";
    updatePinDots();
    document.querySelectorAll('#pin-dots .pin-dot').forEach(dot => {
        dot.classList.remove('error', 'success', 'filled');
    });
    showOpeningStep(3);
};

window.addEventListener('DOMContentLoaded', () => {
    populateDynamicContent();

    const hintTextEl = document.getElementById('pin-hint-text');
    if (hintTextEl && birthdayConfig.secretHint) {
        hintTextEl.innerText = birthdayConfig.secretHint;
    }

    initKeypad();

    const btnGotoStep2 = document.getElementById('btn-goto-step2');
    if (btnGotoStep2) {
        btnGotoStep2.addEventListener('click', () => {
            showOpeningStep(3); // Directly go to Step 3, skipping Step 2
        });
    }

    const btnRetry = document.getElementById('btn-retry');
    if (btnRetry) {
        btnRetry.addEventListener('click', () => {
            enteredPin = "";
            updatePinDots();
            document.querySelectorAll('#pin-dots .pin-dot').forEach(dot => {
                dot.classList.remove('error', 'success', 'filled');
            });
            showOpeningStep(3);
        });
    }

    const btnContinue = document.getElementById('btn-continue');
    if (btnContinue) {
        btnContinue.addEventListener('click', () => {
            showOpeningStep(6); // Directly show Step 6 (don't open doorway automatically)
        });
    }

    const btnStartSite = document.getElementById('btn-start-site');
    if (btnStartSite) {
        btnStartSite.addEventListener('click', () => {
            openMagicDoor(); // Enter the main surprise site
        });
    }

    gsap.fromTo("#step-1 .opening-card",
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "back.out(1.4)" }
    );
});

// --- 7. STICKY HEADER & NAV ACTIVE STATES ---
window.addEventListener('scroll', () => {
    // Toggle scrolled styling
    if (window.scrollY > 50) {
        dom.mainHeader.classList.add('scrolled');
    } else {
        dom.mainHeader.classList.remove('scrolled');
    }

    // Scrollspy Highlight navbar links
    let fromTop = window.scrollY + 100;

    // Custom check for final surprise section so home doesn't light up again
    dom.navLinks.forEach(link => {
        const id = link.getAttribute('href');
        const section = document.querySelector(id);
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            dom.navLinks.forEach(n => n.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Mobile Navbar Drawer toggles
dom.navToggle.addEventListener('click', () => {
    dom.navToggle.classList.toggle('open');
    dom.navbar.classList.toggle('open');
});

// Close mobile drawer when clicking a link
dom.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        dom.navToggle.classList.remove('open');
        dom.navbar.classList.remove('open');
    });
});

// Scroll down indicator hint behavior
dom.scrollHint.addEventListener('click', () => {
    document.getElementById('story').scrollIntoView({ behavior: 'smooth' });
});

// --- 8. GSAP SCROLL-TRIGGER ANIMATIONS ---
gsap.registerPlugin(ScrollTrigger);

// Story timeline animations
gsap.utils.toArray('.timeline-item').forEach((card) => {
    gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        }
    );
});

// Polaroid cards fade stagger
gsap.fromTo(".polaroid-card",
    { opacity: 0, y: 60 },
    {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#memories",
            start: "top 70%",
        }
    }
);

// Reasons cards fade stagger
gsap.fromTo(".reason-card",
    { opacity: 0, scale: 0.85 },
    {
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
            trigger: "#reasons",
            start: "top 70%",
        }
    }
);

// Video card entry bounce
gsap.fromTo(".video-preview-card",
    { opacity: 0, scale: 0.8 },
    {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#video-surprise",
            start: "top 75%"
        }
    }
);

// Cake entry
gsap.fromTo(".cake-wrapper",
    { opacity: 0, scale: 0.8 },
    {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.4)",
        scrollTrigger: {
            trigger: "#cake-section",
            start: "top 70%"
        }
    }
);

// --- 9. PHOTO GALLERY LIGHTBOX ---
function openLightbox(index) {
    currentLightboxIdx = index;
    const item = birthdayConfig.memories[index];
    dom.lightboxImg.src = item.image;
    dom.lightboxTitle.innerText = item.caption;
    dom.lightboxDate.innerText = item.date;
    dom.lightboxLoc.innerText = item.location;
    dom.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Lock scrolling
}

function closeLightbox() {
    dom.lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Unlock scrolling
}

function navigateLightbox(direction) {
    currentLightboxIdx += direction;
    if (currentLightboxIdx < 0) {
        currentLightboxIdx = birthdayConfig.memories.length - 1;
    } else if (currentLightboxIdx >= birthdayConfig.memories.length) {
        currentLightboxIdx = 0;
    }
    const item = birthdayConfig.memories[currentLightboxIdx];

    // Smooth image fade inside modal during transition
    gsap.timeline()
        .to(dom.lightboxImg, { opacity: 0, scale: 0.95, duration: 0.15 })
        .call(() => {
            dom.lightboxImg.src = item.image;
            dom.lightboxTitle.innerText = item.caption;
            dom.lightboxDate.innerText = item.date;
            dom.lightboxLoc.innerText = item.location;
        })
        .to(dom.lightboxImg, { opacity: 1, scale: 1, duration: 0.25 });
}

// Lightbox listeners
dom.lightboxClose.addEventListener('click', closeLightbox);
dom.lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
dom.lightboxNext.addEventListener('click', () => navigateLightbox(1));
dom.lightbox.addEventListener('click', (e) => {
    if (e.target === dom.lightbox) closeLightbox();
});

// Mobile Lightbox Swiping support
let touchStartX = 0;
let touchEndX = 0;
dom.lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});
dom.lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const threshold = 50; // swipe length minimum
    if (touchStartX - touchEndX > threshold) {
        // Swiped Left -> next
        navigateLightbox(1);
    } else if (touchEndX - touchStartX > threshold) {
        // Swiped Right -> prev
        navigateLightbox(-1);
    }
});

// Keyboard Navigation for Lightbox
window.addEventListener('keydown', (e) => {
    if (dom.lightbox.classList.contains('active')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateLightbox(1);
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
    }
});

// --- 10. CINEMATIC VIDEO PLAYER MODAL ENGINE ---
function openVideoPlayer() {
    if (dom.videoModal) {
        dom.videoModal.classList.add('open');
        if (dom.surpriseVideo) {
            dom.surpriseVideo.play().catch(e => {
                console.log("Video play failed or requires user gesture:", e);
            });
        }
    }
}

function closeVideoPlayer() {
    if (dom.videoModal) {
        dom.videoModal.classList.remove('open');
        if (dom.surpriseVideo) {
            dom.surpriseVideo.pause();
            dom.surpriseVideo.currentTime = 0; // reset video
        }
    }
}

window.openVideoPlayer = openVideoPlayer;
window.closeVideoPlayer = closeVideoPlayer;

// --- 11. INTERACTIVE BIRTHDAY CAKE ---
dom.birthdayCake.addEventListener('click', blowOutCandles);

function blowOutCandles() {
    const candles = document.querySelectorAll('.candle');
    let alreadyBlown = true;

    candles.forEach(candle => {
        if (!candle.classList.contains('extinguished')) {
            candle.classList.add('extinguished');
            alreadyBlown = false;
        }
    });

    if (!alreadyBlown) {
        // Confetti explosion
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.65 },
            colors: ['#2d0b1e', '#d68a9d', '#d4af37', '#ffd6e0']
        });

        // Secondary burst
        setTimeout(() => {
            confetti({
                particleCount: 80,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#2d0b1e', '#d4af37']
            });
            confetti({
                particleCount: 80,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#2d0b1e', '#d4af37']
            });
        }, 300);

        // UI reveals
        dom.cakeInstruction.innerText = "All candles are blown out! 🎂✨";
        dom.birthdayWishCard.classList.add('reveal');

        // Animate wish card slide-in cleanly
        gsap.fromTo(dom.birthdayWishCard, { scale: 0.9, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.15)" });
    }
}

// --- 12. CINEMATIC FINAL SURPRISE ---
ScrollTrigger.create({
    trigger: "#surprise",
    start: "top 60%",
    onEnter: () => {
        if (!finalSurpriseTriggered) {
            triggerFinalCinematic();
        }
    }
});

function triggerFinalCinematic() {
    finalSurpriseTriggered = true;

    // Hide navigation to enforce cinematic full screen
    dom.mainHeader.style.opacity = '0';
    dom.mainHeader.style.pointerEvents = 'none';

    // Toggle high-intensity floating particles
    particleMode = 'intense';
    maxParticles = 120;
    initParticles();

    // Cinematic Step animations
    const timeline = gsap.timeline();

    timeline.to("#surprise-step-1", { opacity: 1, duration: 1.5, ease: "power1.inOut" })
        .to("#surprise-step-1", { opacity: 0, duration: 1.2, ease: "power1.inOut" }, "+=2.0")
        .call(() => {
            document.getElementById('surprise-step-1').classList.add('hidden');
            document.getElementById('surprise-step-2').classList.remove('hidden');
        })
        .to("#surprise-step-2", { opacity: 1, duration: 1.5, ease: "power1.inOut" })
        .to("#surprise-step-2", { opacity: 0, duration: 1.2, ease: "power1.inOut" }, "+=2.0")
        .call(() => {
            document.getElementById('surprise-step-2').classList.add('hidden');
            document.getElementById('surprise-step-3').classList.remove('hidden');

            // Final celebration confetti spray
            confetti({
                particleCount: 180,
                spread: 100,
                origin: { y: 0.5 },
                colors: ['#d4af37', '#ffffff', '#ffd6e0', '#d68a9d']
            });
        })
        // Final Card fading up
        .fromTo(".final-card", { opacity: 0, scale: 0.92, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out" });
}

// Restart button reset sequence
dom.restartBtn.addEventListener('click', () => {
    // Reset States
    finalSurpriseTriggered = false;
    // Reset Video Modal
    closeVideoPlayer();
    particleMode = 'subtle';
    maxParticles = 60;

    // Reset Cake
    document.querySelectorAll('.candle').forEach(c => c.classList.remove('extinguished'));
    dom.cakeInstruction.innerText = "Click the candles to blow them out! 🌬️";
    dom.birthdayWishCard.classList.remove('reveal');

    // Reset Cinematic Surprise Elements
    document.getElementById('surprise-step-1').classList.remove('hidden');
    document.getElementById('surprise-step-1').style.opacity = '0';
    document.getElementById('surprise-step-2').classList.add('hidden');
    document.getElementById('surprise-step-2').style.opacity = '0';
    document.getElementById('surprise-step-3').classList.add('hidden');
    document.querySelector('.final-card').style.opacity = '0';

    // Restore Navigation Bar
    dom.mainHeader.style.opacity = '1';
    dom.mainHeader.style.pointerEvents = 'auto';

    // Reset opening steps state
    enteredPin = "";
    updatePinDots();
    document.querySelectorAll('#pin-dots .pin-dot').forEach(dot => {
        dot.classList.remove('filled', 'error', 'success');
    });

    const miniEnvelope = document.getElementById('step2-envelope');
    if (miniEnvelope) {
        miniEnvelope.classList.remove('open');
    }

    document.querySelectorAll('.opening-step').forEach(step => {
        step.classList.remove('active');
        step.style.opacity = '';
        step.style.transform = '';
    });

    const step1 = document.getElementById('step-1');
    if (step1) {
        step1.classList.add('active');
        step1.style.opacity = '1';
    }

    // Smooth scroll back to top welcome screen instantly
    dom.welcomeScreen.style.display = 'flex';
    dom.welcomeScreen.style.opacity = '1';
    dom.mainHeader.classList.add('hidden');
    dom.mainContent.classList.add('hidden');

    // Re-initialize standard particles
    initParticles();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });
});
