// Автоматическое обновление года в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Плавный скролл по якорным ссылкам (для старых браузеров, современные поддерживают scroll-behavior: smooth в CSS, но JS надежнее)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});