// Автоматическое обновление года
document.getElementById('year').textContent = new Date().getFullYear();

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Бургер-меню (пока просто заготовка, стилизуем позже)
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Обработка формы (имитация отправки)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Отменяем стандартную перезагрузку страницы
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        // Состояние загрузки
        btn.textContent = 'Отправка...';
        btn.disabled = true;
        btn.style.opacity = '0.7';
        
        // Имитация задержки сети (1.5 секунды)
        setTimeout(() => {
            // Состояние успеха
            btn.textContent = '✓ Заявка отправлена!';
            btn.style.backgroundColor = '#10b981'; // Зеленый цвет
            btn.style.opacity = '1';
            
            // Очищаем форму
            contactForm.reset();
            
            // Возвращаем кнопку в исходное состояние через 3 секунды
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = ''; // Сбрасываем цвет к CSS-переменной
            }, 3000);
            
        }, 1500);
    });
}