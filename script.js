// Smooth scrolling for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active nav highlighting
window.addEventListener('scroll', () => {
    let current = '';
    document.querySelectorAll('section').forEach(section => {
        if (pageYOffset >= section.offsetTop - 200) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Search
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    searchBox.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert(`Search: "${searchBox.value}"\n\nConnect to backend API for actual search.`);
        }
    });
}

// Language selector
const languageSelector = document.querySelector('.language-selector');
if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
        const language = e.target.value;
        alert(`Language changed to: ${language === 'en' ? 'English' : 'Yoruba'}`);
    });
}

// Quick actions
document.querySelectorAll('.quick-actions .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert(`Redirecting to: ${this.textContent}`);
    });
});

// Service buttons
document.querySelectorAll('.service-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const service = this.querySelector('span:last-child').textContent;
        alert(`Navigating to ${service} service page`);
    });
});

// Service cards
document.querySelectorAll('.service-card .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const serviceName = this.closest('.service-card').querySelector('h3').textContent;
        alert(`Learn more about ${serviceName}`);
    });
});

// Feedback form
const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        if (name && email) {
            alert(`Thank you, ${name}! Your feedback has been submitted.`);
            feedbackForm.reset();
        }
    });
}

// Social links
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        alert(`Redirecting to ${btn.textContent} page`);
    });
});

// Animations on scroll
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .service-card').forEach(card => {
    observer.observe(card);
});

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(style);