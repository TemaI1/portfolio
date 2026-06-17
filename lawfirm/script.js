// Год в футере
document.getElementById('year').textContent = new Date().getFullYear();

// Бургер-меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
}

// Аккордеон FAQ (только на странице services.html)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Закрыть другие открытые
        faqItems.forEach(other => {
            if (other !== item && other.classList.contains('active')) {
                other.classList.remove('active');
            }
        });
        // Переключить текущий
        item.classList.toggle('active');
    });
});

// Форма обратной связи (имитация отправки)
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Отправка...';
        btn.disabled = true;
        btn.style.opacity = '0.7';
        
        setTimeout(() => {
            btn.textContent = '✓ Заявка отправлена!';
            btn.style.backgroundColor = '#10b981';
            btn.style.opacity = '1';
            
            contactForm.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.backgroundColor = '';
            }, 3000);
        }, 1500);
    });
}