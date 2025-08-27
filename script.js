// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scroll effect for the hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        // Subtle opacity effect instead of parallax
        const opacity = Math.max(0.8, 1 - (scrolled * 0.001));
        hero.style.opacity = opacity;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.stat, .community-item, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
});

// Dynamic typing effect for the hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 150);
        }, 1000);
    }
});

// Floating animation for the logo
function createFloatingEffect() {
    const logo = document.querySelector('.logo-container');
    if (logo) {
        let time = 0;
        
        function animate() {
            time += 0.005;
            const y = Math.sin(time) * 5;
            logo.style.transform = `translateY(${y}px)`;
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}

// Initialize floating effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createFloatingEffect, 1000);
});

// Particle effect for the forest theme
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: -1;
    `;
    
    document.body.appendChild(particlesContainer);
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(212, 175, 55, 0.6);
            border-radius: 50%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add CSS for particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createParticles, 2000);
});

// Glitch effect for the logo text
function addGlitchEffect() {
    const logoText = document.querySelector('.logo-text');
    if (logoText) {
        setInterval(() => {
            if (Math.random() < 0.1) {
                logoText.style.textShadow = `
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px rgba(255, 0, 255, 0.8),
                    ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px rgba(0, 255, 255, 0.8)
                `;
                
                setTimeout(() => {
                    logoText.style.textShadow = '';
                }, 100);
            }
        }, 2000);
    }
}

// Initialize glitch effect
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(addGlitchEffect, 3000);
});

// Cursor trail effect
function createCursorTrail() {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(212, 175, 55, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.1s ease;
    `;
    
    document.body.appendChild(trail);
    
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        const rect = trail.getBoundingClientRect();
        const trailX = rect.left + rect.width / 2;
        const trailY = rect.top + rect.height / 2;
        
        const deltaX = mouseX - trailX;
        const deltaY = mouseY - trailY;
        
        trail.style.left = (trail.offsetLeft + deltaX * 0.1) + 'px';
        trail.style.top = (trail.offsetTop + deltaY * 0.1) + 'px';
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Initialize cursor trail
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createCursorTrail, 4000);
});

// Button click effects
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(212, 175, 55, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: #d4af37;
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
document.addEventListener('DOMContentLoaded', () => {
    createScrollProgress();
});

// Console message for forest walkers
console.log(`
%c🌲 The Forest is Calling 🌲
%cWelcome, forest walker. You have entered the digital wilderness of $VOIDED.
%cIn the forest, we find our true nature.
%cEmbrace the wilderness, discover serenity.

%cJoin us: https://voided.com
`, 
'color: #d4af37; font-size: 20px; font-weight: bold; font-family: monospace;',
'color: #f5f5dc; font-size: 14px; font-family: monospace;',
'color: #d4af37; font-size: 12px; font-family: monospace;',
'color: #b8860b; font-size: 12px; font-family: monospace;',
'color: #d2b48c; font-size: 10px; font-family: monospace;'
);
