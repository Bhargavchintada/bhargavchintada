// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
        if (navMenu.classList.contains('active')) {
            if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) span.style.opacity = '0';
            if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            span.style.transform = 'none';
            span.style.opacity = '1';
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        }
    });
});

// Active Navigation Link Highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact Form Handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate secure message transmission
    showNotification('🔒 Secure message transmitted successfully! I\'ll respond within 24 hours.', 'success');
    this.reset();
});

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Cybersecurity-themed notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add cybersecurity-themed styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 350px;
        box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
        border: 1px solid;
        font-family: 'JetBrains Mono', monospace;
        backdrop-filter: blur(10px);
    `;
    
    // Set background and border colors based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = 'rgba(0, 255, 136, 0.9)';
            notification.style.borderColor = '#00ff88';
            break;
        case 'error':
            notification.style.backgroundColor = 'rgba(255, 68, 68, 0.9)';
            notification.style.borderColor = '#ff4444';
            break;
        default:
            notification.style.backgroundColor = 'rgba(0, 212, 255, 0.9)';
            notification.style.borderColor = '#00d4ff';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .education-card, .cert-card, .timeline-item');
    animateElements.forEach(el => observer.observe(el));
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        .skill-category, .project-card, .education-card, .cert-card, .timeline-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Cybersecurity typing effect for hero title
function typeWriter(element, text, speed = 80) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 60);
        }, 500);
    }
});

// Matrix rain effect enhancement
function createMatrixRain() {
    const matrixRain = document.querySelector('.matrix-rain');
    if (!matrixRain) return;
    
    const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < columns; i++) {
        const span = document.createElement('span');
        span.style.position = 'absolute';
        span.style.left = i * 20 + 'px';
        span.style.top = Math.random() * -100 + 'px';
        span.style.color = '#00d4ff';
        span.style.fontSize = '14px';
        span.style.fontFamily = 'monospace';
        span.style.opacity = Math.random() * 0.5 + 0.1;
        span.textContent = characters[Math.floor(Math.random() * characters.length)];
        
        matrixRain.appendChild(span);
        
        // Animate falling
        animateMatrixChar(span);
    }
}

function animateMatrixChar(element) {
    let position = parseFloat(element.style.top);
    const speed = Math.random() * 2 + 1;
    
    function fall() {
        position += speed;
        element.style.top = position + 'px';
        
        if (position > window.innerHeight) {
            position = -20;
            element.textContent = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'[Math.floor(Math.random() * 50)];
        }
        
        requestAnimationFrame(fall);
    }
    
    fall();
}

// Initialize matrix rain
setTimeout(createMatrixRain, 1000);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const cyberGrid = document.querySelector('.cyber-grid');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    if (cyberGrid) {
        cyberGrid.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * 0.1}px)`;
    }
});

// Security scan animation for project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        // Create scanning line effect
        const scanLine = document.createElement('div');
        scanLine.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ff88, transparent);
            animation: scan 2s linear infinite;
            z-index: 1;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes scan {
                0% { transform: translateY(0); }
                100% { transform: translateY(${this.offsetHeight}px); }
            }
        `;
        document.head.appendChild(style);
        
        this.appendChild(scanLine);
        
        // Remove scan line on mouse leave
        this.addEventListener('mouseleave', function() {
            if (scanLine.parentNode) {
                scanLine.parentNode.removeChild(scanLine);
            }
        }, { once: true });
    });
});

// Terminal-style console messages
const consoleMessages = [
    '🔒 Security protocols initialized',
    '🛡️ Firewall status: ACTIVE',
    '🔍 Threat detection: ONLINE',
    '🔐 Encryption: AES-256',
    '🚨 Intrusion detection: MONITORING',
    '📊 System integrity: VERIFIED'
];

consoleMessages.forEach((message, index) => {
    setTimeout(() => {
        console.log(`%c${message}`, 'color: #00d4ff; font-family: JetBrains Mono, monospace; font-weight: bold;');
    }, index * 500);
});

// Add active link styling
const activeLinkStyle = document.createElement('style');
activeLinkStyle.textContent = `
    .nav-menu a.active {
        color: var(--primary-color) !important;
        position: relative;
    }
    
    .nav-menu a.active::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        right: 0;
        height: 2px;
        background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
        border-radius: 1px;
    }
`;
document.head.appendChild(activeLinkStyle);

// Cybersecurity loading animation
window.addEventListener('load', () => {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--bg-dark);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    
    const loaderContent = document.createElement('div');
    loaderContent.style.cssText = `
        text-align: center;
        color: var(--primary-color);
        font-family: JetBrains Mono, monospace;
    `;
    
    loaderContent.innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 1rem;">🔐</div>
        <div style="font-size: 1.2rem; margin-bottom: 0.5rem;">SECURING SYSTEM...</div>
        <div style="font-size: 0.9rem; opacity: 0.7;">Establishing encrypted connection</div>
    `;
    
    loader.appendChild(loaderContent);
    document.body.appendChild(loader);
    
    // Remove loader after content loads
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.parentNode.removeChild(loader);
            }
        }, 500);
    }, 1500);
});

// Console welcome message
console.log('%c🔒 CHINTADA BHARGAV - CYBERSECURITY ENGINEER', 'color: #00d4ff; font-size: 20px; font-weight: bold; font-family: JetBrains Mono, monospace;');
console.log('%cSecurity Portfolio v2.0 | Encrypted Connection Established', 'color: #00ff88; font-size: 14px; font-family: JetBrains Mono, monospace;');
console.log('%cSystem Status: SECURE | All Protocols Active', 'color: #a0a0a0; font-size: 12px; font-family: JetBrains Mono, monospace;');
