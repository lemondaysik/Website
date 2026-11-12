const discordLink = "https://discord.gg/zQUdWaAyV5"; 
const telegramLink = "https://t.me/miniviperr_bot";        
const donateTgLink = "https://t.me/miniviperr";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('link-discord').href = discordLink;
    document.getElementById('link-telegram').href = telegramLink;
    document.getElementById('link-donate').href = donateTgLink;

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
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const links = document.querySelectorAll('a, button, .btn-link');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-active');
        });
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-active');
        });
    });
}

let animationFrameId;
let particleType = 'snow';
let particlesArray = [];
let mouse = { x: null, y: null, radius: 120 };

function initParticles() {
    const canvas = document.getElementById('particles-bg');
    const ctx = canvas.getContext('2d');

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
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 2; // Сделал их чуть крупнее
            this.density = (Math.random() * 25) + 1; 
            this.speedY = Math.random() * 1.5 + 0.8;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 1 - 0.5;
            this.opacity = Math.random() * 0.6 + 0.4;
        }
        update() {
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let forceDirectionX = dx / distance;
                let forceDirectionY = dy / distance;
                let maxDistance = mouse.radius;
                let force = (maxDistance - distance) / maxDistance;
                let directionX = forceDirectionX * force * this.density;
                let directionY = forceDirectionY * force * this.density;

                if (distance < mouse.radius) {
                    this.x -= directionX;
                    this.y -= directionY;
                } else {
                    this.x += Math.random() * 2 - 1;
                    this.y += this.speedY;
                }
            } else {
                this.y += this.speedY;
                this.x += Math.random() * 2 - 1;
            }

            if (this.y > canvas.height) {
                this.y = 0 - this.size * 5;
                this.x = Math.random() * canvas.width;
            }
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            
            this.rotation += this.rotationSpeed;
        }
        draw() {
            if (particleType === 'dots') {
                ctx.fillStyle = `rgba(255, 0, 0, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            } else if (particleType === 'snow') {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.rotation * Math.PI / 180);
                
                ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.lineWidth = 1.5;
                ctx.lineCap = 'round';

                for (let i = 0; i < 6; i++) {
                    ctx.rotate(Math.PI / 3);
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(0, -this.size * 4); // Удлинил лучи
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size * 2);
                    ctx.lineTo(-this.size * 1.2, -this.size * 3);
                    ctx.stroke();
                    
                    ctx.beginPath();
                    ctx.moveTo(0, -this.size * 2);
                    ctx.lineTo(this.size * 1.2, -this.size * 3);
                    ctx.stroke();
                }
                ctx.restore();
            }
        }
    }

    function initParticleArray() {
        particlesArray = [];
        // Увеличил плотность (делитель 18000 вместо 25000)
        let numberOfParticles = (canvas.width * canvas.height) / 18000; 
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

    const particleToggle = document.getElementById('particle-toggle');

    particleToggle.addEventListener('click', () => {
        if (particleType === 'snow') {
            particleType = 'dots';
            particleToggle.innerText = '🔴';
        } else if (particleType === 'dots') {
            particleType = 'off';
            particleToggle.innerText = '🚫';
            cancelAnimationFrame(animationFrameId);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {
            particleType = 'snow';
            particleToggle.innerText = '❄️';
            initParticleArray();
            animate();
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
            
            particleType = 'snow';
            particleToggle.innerText = '❄️';
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            initParticles(); 
        } else {
            garland.style.display = 'none';
            winterFooter.style.display = 'none';
            newYearToggle.innerText = '🎄';
        }
    });
}
