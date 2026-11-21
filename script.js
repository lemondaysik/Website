const discordLink = "https://discord.gg/zQUdWaAyV5"; 
const telegramLink = "https://t.me/miniviperr_bot";        
const donateTgLink = "https://t.me/miniviperr";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('link-discord').href = discordLink;
    document.getElementById('link-telegram').href = telegramLink;
    document.getElementById('link-donate').href = donateTgLink;

    const glowElement = document.createElement('div');
    glowElement.id = 'cursor-glow';
    document.body.appendChild(glowElement);

    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerText = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerText = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerText = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });

    const scrollToTopBtn = document.getElementById("scrollToTop");
    window.onscroll = function() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 

    if(document.getElementById('page-home').style.display !== 'none') {
        startTypewriter('ru');
    }

    initCustomCursor();
    initParticles();
    initNewYearToggle();
    init3DTilt();
    initKonamiCode();

    setTimeout(() => {
        const newYearToggle = document.getElementById('newyear-toggle');
        if (!document.body.classList.contains('new-year-mode')) {
            newYearToggle.click();
        }
    }, 500);
});

function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.style.display = 'none');
    const target = document.getElementById('page-' + pageId);
    target.style.display = 'block';
    
    target.style.animation = 'none';
    target.offsetHeight; 
    target.style.animation = null; 

    if(pageId === 'home') {
        setTimeout(() => {
            const currentLang = document.getElementById('lang-ru').classList.contains('active-lang') ? 'ru' : 'en';
            startTypewriter(currentLang);
        }, 50);
    }
}

const translations = {
    ru: {
        navHome: "Главная", navImportant: "Важное", navDonate: "Донатик",
        homeTitle: "Добро пожаловать!",
        homeDesc: "Этот сайт перенаправит вас на Discord сервер создателей сайта и бота для Telegram.",
        statServers: "1", statServersDesc: "Сервер",
        statUsers: "3", statUsersDesc: "Пользователя",
        statUptime: "99.9%", statUptimeDesc: "Аптайм",
        importantTitle: "Важные ссылки",
        importantDesc: "Здесь вы можете найти наши основные проекты.",
        discordDesc: "По ссылке ниже вы сможете перейти на Discord сервер создателей.",
        btnDiscord: "Перейти в Discord",
        telegramDesc: "По ссылке вы сможете найти нашего бота для Telegram.",
        btnTelegram: "Открыть Telegram-бота",
        donateTitle: "Поддержать проект",
        donateDesc1: "Если вы хотите поддержать нас, то вы можете написать в ТГ личку @miniviperr. Также вы можете тыкнуть по картинке ниже и поддержать через DonationAlerts.",
        donateDesc2: "Также вы можете накинуть туда нфтишок, которые мы продадим и обновим хостинги и купим хороший домен.",
        footer: "Все права защищены."
    },
    en: {
        navHome: "Home", navImportant: "Important", navDonate: "Donate",
        homeTitle: "Welcome!",
        homeDesc: "This website will redirect you to the Discord server of the creators and a Telegram bot.",
        statServers: "1", statServersDesc: "Server",
        statUsers: "3", statUsersDesc: "Users",
        statUptime: "99.9%", statUptimeDesc: "Uptime",
        importantTitle: "Important Links",
        importantDesc: "Here you can find our main projects.",
        discordDesc: "You can use the link below to join the creators' Discord server.",
        btnDiscord: "Join Discord",
        telegramDesc: "You can find our Telegram bot at the link.",
        btnTelegram: "Open Telegram Bot",
        donateTitle: "Support the Project",
        donateDesc1: "If you want to support us, you can message us on Telegram @miniviperr. You can also click on the picture below and support via DonationAlerts.",
        donateDesc2: "You can also send us an NFT, which we will sell to update our hosting and buy a good domain.",
        footer: "All rights reserved."
    }
};

function setLang(lang) {
    document.documentElement.lang = lang;

    document.getElementById('nav-home').innerText = translations[lang].navHome;
    document.getElementById('nav-important').innerText = translations[lang].navImportant;
    document.getElementById('nav-donate').innerText = translations[lang].navDonate;

    if (document.getElementById('page-home').style.display !== 'none') {
        startTypewriter(lang);
    } else {
        document.getElementById('t-home-title').innerText = translations[lang].homeTitle;
    }

    document.getElementById('t-home-desc').innerText = translations[lang].homeDesc;

    document.getElementById('t-stat-servers').innerText = translations[lang].statServers;
    document.getElementById('t-stat-servers-desc').innerText = translations[lang].statServersDesc;
    document.getElementById('t-stat-users').innerText = translations[lang].statUsers;
    document.getElementById('t-stat-users-desc').innerText = translations[lang].statUsersDesc;
    document.getElementById('t-stat-uptime').innerText = translations[lang].statUptime;
    document.getElementById('t-stat-uptime-desc').innerText = translations[lang].statUptimeDesc;

    document.getElementById('t-important-title').innerText = translations[lang].importantTitle;
    document.getElementById('t-important-desc').innerText = translations[lang].importantDesc;
    document.getElementById('t-discord-desc').innerText = translations[lang].discordDesc;
    document.getElementById('t-telegram-desc').innerText = translations[lang].telegramDesc;
    
    document.getElementById('t-btn-discord-text').innerText = translations[lang].btnDiscord;
    document.getElementById('t-btn-telegram-text').innerText = translations[lang].btnTelegram;

    document.getElementById('t-donate-title').innerText = translations[lang].donateTitle;
    document.getElementById('t-donate-desc1').innerHTML = translations[lang].donateDesc1.replace('@miniviperr', '<a href="https://t.me/miniviperr" target="_blank">@miniviperr</a>');
    document.getElementById('t-donate-desc2').innerText = translations[lang].donateDesc2;

    document.getElementById('t-footer').innerText = translations[lang].footer;

    document.getElementById('lang-ru').classList.remove('active-lang');
    document.getElementById('lang-en').classList.remove('active-lang');
    document.getElementById('lang-' + lang).classList.add('active-lang');
}

function startTypewriter(lang = 'ru') {
    const text = translations[lang].homeTitle;
    const element = document.getElementById('t-home-title');
    if (!element) return;
    
    element.innerHTML = '<span id="typewriter-text"></span><span class="typewriter-cursor">&nbsp;</span>';
    
    const textSpan = document.getElementById('typewriter-text');
    const cursor = element.querySelector('.typewriter-cursor');
    let i = 0;
    const speed = 100; 

    function typeWriter() {
        if (i < text.length) {
            textSpan.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            cursor.style.display = 'none';
        }
    }
    cursor.style.display = 'inline-block';
    typeWriter();
}

function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const glow = document.getElementById('cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    const links = document.querySelectorAll('a, button, .btn-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-active');
            glow.style.background = 'radial-gradient(circle, rgba(255, 0, 0, 0.25) 0%, transparent 60%)';
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-active');
            glow.style.background = 'radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 60%)';
        });
    });
}

function init3DTilt() {
    const cards = document.querySelectorAll('.card, .stat-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
        });
    });
}

let animationFrameId;
let particleType = 'snow';
let particlesArray = [];
let mouse = { x: null, y: null, radius: 150 };

function initParticles() {
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');
    const particleToggle = document.getElementById('particle-toggle');

    const menu = document.createElement('div');
    menu.className = 'particle-menu';
    menu.innerHTML = `
        <button data-type="snow" class="active">❄️ Снежинки</button>
        <button data-type="rain">🌧️ Дождь</button>
        <button data-type="matrix">🟩 Матрица</button>
        <button data-type="dots">🔴 Точки</button>
        <button data-type="off">🚫 Выключить</button>
    `;
    particleToggle.parentElement.style.position = 'relative';
    particleToggle.parentElement.appendChild(menu);

    const menuButtons = menu.querySelectorAll('button');

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticleArray();
    });

    class Particle {
        constructor() {
            this.reset();
            this.y = Math.random() * canvas.height; 
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = 0 - Math.random() * 100; 
            this.size = Math.random() * 1.5 + 1.2;
            this.density = (Math.random() * 30) + 10; 
            this.speedY = Math.random() * 1.5 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 0.5 - 0.25;
            this.opacity = Math.random() * 0.6 + 0.4;
            this.char = String.fromCharCode(Math.floor(Math.random() * 96) + 33);
        }

        update() {
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let maxDistance = mouse.radius;
                
                if (distance < maxDistance) {
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let force = (maxDistance - distance) / maxDistance;
                    
                    this.x -= forceDirectionX * force * this.density;
                    this.y -= forceDirectionY * force * this.density;
                }
            }

            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height + 20) {
                this.reset();
            }
            
            if (this.x > canvas.width + 20) this.x = -20;
            if (this.x < -20) this.x = canvas.width + 20;
        }

        draw() {
            if (particleType === 'snow') {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 1.2;
                ctx.lineCap = 'round';
                for (let i = 0; i < 6; i++) {
                    ctx.rotate(Math.PI / 3);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, -this.size * 3.5);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size * 2);
                    ctx.lineTo(-this.size * 0.8, -this.size * 2.8);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size * 2);
                    ctx.lineTo(this.size * 0.8, -this.size * 2.8);
                    ctx.stroke();
                }
                ctx.restore();
            } else if (particleType === 'rain') {
                ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.speedX * 2, this.y - this.size * 6);
                ctx.stroke();
            } else if (particleType === 'matrix') {
                ctx.fillStyle = `rgba(0, 255, 0, ${this.opacity})`;
                ctx.font = `${this.size * 6}px monospace`;
                ctx.fillText(this.char, this.x, this.y);
            } else if (particleType === 'dots') {
                ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    function initParticleArray() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 6000; 
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        if (particleType === 'off') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return; 
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        animationFrameId = requestAnimationFrame(animate);
    }

    initParticleArray();
    animate();

    let pressTimer;
    let isLongPress = false;

    particleToggle.addEventListener('mousedown', () => {
        isLongPress = false;
        pressTimer = setTimeout(() => {
            isLongPress = true;
            menu.classList.add('active');
        }, 400);
    });

    particleToggle.addEventListener('mouseup', () => {
        clearTimeout(pressTimer);
        if (!isLongPress) {
            menu.classList.toggle('active');
        }
    });

    particleToggle.addEventListener('mouseleave', () => {
        clearTimeout(pressTimer);
    });

    document.addEventListener('click', (e) => {
        if (!particleToggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    menuButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            menuButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            particleType = btn.getAttribute('data-type');
            
            if (particleType === 'snow') particleToggle.innerText = '❄️';
            else if (particleType === 'rain') particleToggle.innerText = '🌧️';
            else if (particleType === 'matrix') particleToggle.innerText = '🟩';
            else if (particleType === 'dots') particleToggle.innerText = '🔴';
            else particleToggle.innerText = '🚫';

            if (particleType !== 'off') {
                initParticleArray();
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                animate();
            } else {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            menu.classList.remove('active');
        });
    });
}

function initKonamiCode() {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.classList.toggle('red-snow');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function initNewYearToggle() {
    const newYearToggle = document.getElementById('newyear-toggle');
    const garland = document.getElementById('garland');
    const winterFooter = document.getElementById('winter-footer');
    const particleToggle = document.getElementById('particle-toggle');

    newYearToggle.addEventListener('click', () => {
        document.body.classList.toggle('new-year-mode');
        
        if (document.body.classList.contains('new-year-mode')) {
            garland.style.display = 'flex';
            winterFooter.style.display = 'block';
            newYearToggle.innerText = '🌴'; 
            
            document.body.classList.add('dark-mode');
            document.getElementById('theme-toggle').innerText = '☀️';
            
            particleType = 'snow';
            particleToggle.innerText = '❄️';
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            initParticleArray();
            animate(); 
        } else {
            garland.style.display = 'none';
            winterFooter.style.display = 'none';
            newYearToggle.innerText = '🎄';
        }
    });
}
