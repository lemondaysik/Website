const discordLink = "https://discord.gg/zQUdWaAyV5"; 
const telegramLink = "https://t.me/miniviperr_bot";        
const donateTgLink = "https://t.me/miniviperr";

document.addEventListener("DOMContentLoaded", () => {
    // Привязка ссылок к кнопкам
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
});

function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.style.display = 'none');
    const target = document.getElementById('page-' + pageId);
    target.style.display = 'block';
    
    target.style.animation = 'none';
    target.offsetHeight; 
    target.style.animation = null; 
}

const translations = {
    ru: {
        navHome: "Главная", navImportant: "Важное", navDonate: "Донатик",
        homeTitle: "Добро пожаловать!",
        homeDesc: "Этот сайт перенаправит вас на Discord сервер создателей сайта и бота для Telegram.",
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

    document.getElementById('t-home-title').innerText = translations[lang].homeTitle;
    document.getElementById('t-home-desc').innerText = translations[lang].homeDesc;

    document.getElementById('t-important-title').innerText = translations[lang].importantTitle;
    document.getElementById('t-important-desc').innerText = translations[lang].importantDesc;
    document.getElementById('t-discord-desc').innerText = translations[lang].discordDesc;
    document.getElementById('t-telegram-desc').innerText = translations[lang].telegramDesc;
    
    document.querySelectorAll('.t-btn-discord').forEach(btn => btn.innerText = translations[lang].btnDiscord);
    document.querySelectorAll('.t-btn-telegram').forEach(btn => btn.innerText = translations[lang].btnTelegram);

    document.getElementById('t-donate-title').innerText = translations[lang].donateTitle;
    document.getElementById('t-donate-desc1').innerHTML = translations[lang].donateDesc1.replace('@miniviperr', '<a href="https://t.me/miniviperr" target="_blank">@miniviperr</a>');
    document.getElementById('t-donate-desc2').innerText = translations[lang].donateDesc2;

    document.getElementById('t-footer').innerText = translations[lang].footer;

    document.getElementById('lang-ru').classList.remove('active-lang');
    document.getElementById('lang-en').classList.remove('active-lang');
    document.getElementById('lang-' + lang).classList.add('active-lang');
}
