/**
 * FortaGuard Portfolio - JavaScript
 * Interactive features and animations
 */

// ============================================
// Configuration
// ============================================
const CONFIG = {
    animationDuration: 1500,
    counterSpeed: 50,
    scrollOffset: 100,
    debounceDelay: 100
};

// ============================================
// Utility Functions
// ============================================
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// ============================================
// Mobile Navigation
// ============================================
class MobileNav {
    constructor() {
        this.toggle = document.querySelector('.nav-toggle');
        this.menu = document.querySelector('.nav-menu');
        this.links = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        if (!this.toggle || !this.menu) return;

        this.toggle.addEventListener('click', () => this.toggleMenu());
        
        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.toggle.contains(e.target) && !this.menu.contains(e.target)) {
                this.closeMenu();
            }
        });
    }

    toggleMenu() {
        this.toggle.classList.toggle('active');
        this.menu.classList.toggle('active');
    }

    closeMenu() {
        this.toggle.classList.remove('active');
        this.menu.classList.remove('active');
    }
}

// ============================================
// Smooth Scroll Navigation
// ============================================
class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href === '#' || href === '') return;

                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const offset = 80; // Navbar height
                    const targetPosition = target.offsetTop - offset;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ============================================
// Active Section Highlighting
// ============================================
class ActiveSection {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', debounce(() => this.updateActive(), CONFIG.debounceDelay));
        this.updateActive(); // Initial call
    }

    updateActive() {
        const scrollPos = window.scrollY + 150;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// ============================================
// Scroll Animations with Intersection Observer
// ============================================
class ScrollAnimations {
    constructor() {
        this.elements = document.querySelectorAll('.glass-card, .section-header, .hero-content');
        this.init();
    }

    init() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in', 'visible');
                }
            });
        }, options);

        this.elements.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
}

// ============================================
// Counter Animations
// ============================================
class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-value[data-target]');
        this.animated = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animateCounter(entry.target);
                    this.animated.add(entry.target);
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = this.formatNumber(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = this.formatNumber(target);
            }
        };

        updateCounter();
    }

    formatNumber(num) {
        // Format with one decimal place if needed
        if (num % 1 !== 0) {
            return num.toFixed(1);
        }
        return Math.floor(num).toString();
    }
}

// ============================================
// Progress Bar Animations
// ============================================
class ProgressBarAnimation {
    constructor() {
        this.progressBars = document.querySelectorAll('.progress-fill[data-progress]');
        this.animated = new Set();
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.animated.has(entry.target)) {
                    this.animateProgress(entry.target);
                    this.animated.add(entry.target);
                }
            });
        }, { threshold: 0.3 });

        this.progressBars.forEach(bar => observer.observe(bar));
    }

    animateProgress(element) {
        const progress = element.getAttribute('data-progress');
        
        // Small delay for better visual effect
        setTimeout(() => {
            element.style.width = `${progress}%`;
            element.classList.add('animated');
        }, 100);
    }
}

// ============================================
// Navbar Scroll Effect
// ============================================
class NavbarScroll {
    constructor() {
        this.navbar = document.querySelector('.navbar');
        this.init();
    }

    init() {
        if (!this.navbar) return;

        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 50) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }, CONFIG.debounceDelay));
    }
}

// ============================================
// Lazy Loading Images (when added)
// ============================================
class LazyLoadImages {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => {
                img.src = img.dataset.src;
                img.classList.add('loaded');
            });
        }
    }
}

// ============================================
// Parallax Effect (Hero Section)
// ============================================
class ParallaxEffect {
    constructor() {
        this.heroBackground = document.querySelector('.hero-background');
        this.init();
    }

    init() {
        if (!this.heroBackground) return;

        window.addEventListener('scroll', debounce(() => {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            
            if (scrolled < window.innerHeight) {
                this.heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
        }, CONFIG.debounceDelay));
    }
}

// ============================================
// Card Hover Effects Enhancement
// ============================================
class CardHoverEffects {
    constructor() {
        this.cards = document.querySelectorAll('.glass-card');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createRipple(e, card);
            });
        });
    }

    createRipple(e, card) {
        // Optional: Add ripple effect on hover
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Store mouse position for potential future use
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    }
}

// ============================================
// Scroll to Top Button (Optional)
// ============================================
class ScrollToTop {
    constructor() {
        this.createButton();
        this.init();
    }

    createButton() {
        const button = document.createElement('button');
        button.className = 'scroll-to-top';
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.setAttribute('aria-label', 'Scroll to top');
        button.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #00D9FF 0%, #06FFA5 100%);
            border: none;
            border-radius: 50%;
            color: #1A1A2E;
            font-size: 1.2rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 217, 255, 0.3);
        `;
        
        document.body.appendChild(button);
        this.button = button;
    }

    init() {
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 500) {
                this.button.style.opacity = '1';
                this.button.style.visibility = 'visible';
            } else {
                this.button.style.opacity = '0';
                this.button.style.visibility = 'hidden';
            }
        }, CONFIG.debounceDelay));

        this.button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        this.button.addEventListener('mouseenter', () => {
            this.button.style.transform = 'translateY(-5px)';
            this.button.style.boxShadow = '0 6px 20px rgba(0, 217, 255, 0.5)';
        });

        this.button.addEventListener('mouseleave', () => {
            this.button.style.transform = 'translateY(0)';
            this.button.style.boxShadow = '0 4px 12px rgba(0, 217, 255, 0.3)';
        });
    }
}

// ============================================
// Typing Effect for Hero (Optional Enhancement)
// ============================================
class TypingEffect {
    constructor(element, texts, speed = 100) {
        this.element = element;
        this.texts = texts;
        this.speed = speed;
        this.textIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }

    type() {
        const currentText = this.texts[this.textIndex];
        
        if (this.isDeleting) {
            this.charIndex--;
        } else {
            this.charIndex++;
        }

        this.element.textContent = currentText.substring(0, this.charIndex);

        let typeSpeed = this.speed;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.textIndex = (this.textIndex + 1) % this.texts.length;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }

    start() {
        this.type();
    }
}

// ============================================
// Form Validation (if forms are added)
// ============================================
class FormValidation {
    constructor() {
        this.forms = document.querySelectorAll('form');
        this.init();
    }

    init() {
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                if (!this.validateForm(form)) {
                    e.preventDefault();
                }
            });
        });
    }

    validateForm(form) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                this.showError(input, 'Este campo es requerido');
            } else {
                this.clearError(input);
            }
        });

        return isValid;
    }

    showError(input, message) {
        input.classList.add('error');
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.textContent = message;
        } else {
            const error = document.createElement('div');
            error.className = 'error-message';
            error.textContent = message;
            input.parentNode.insertBefore(error, input.nextSibling);
        }
    }

    clearError(input) {
        input.classList.remove('error');
        const errorDiv = input.nextElementSibling;
        if (errorDiv && errorDiv.classList.contains('error-message')) {
            errorDiv.remove();
        }
    }
}

// ============================================
// Performance Monitoring
// ============================================
class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                console.log(`🚀 FortaGuard Portfolio Loaded in ${pageLoadTime}ms`);
                
                // Optional: Send to analytics
                this.logPerformance(pageLoadTime);
            });
        }
    }

    logPerformance(time) {
        // This could be sent to an analytics service
        if (time > 3000) {
            console.warn('⚠️ Page load time is slower than expected');
        } else {
            console.log('✅ Page performance is good');
        }
    }
}

// ============================================
// Initialize All Features
// ============================================
class App {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeFeatures());
        } else {
            this.initializeFeatures();
        }
    }

    initializeFeatures() {
        console.log('🛡️ Initializing FortaGuard Portfolio...');

        try {
            // Core Navigation
            new MobileNav();
            new SmoothScroll();
            new ActiveSection();
            new NavbarScroll();

            // Animations
            new ScrollAnimations();
            new CounterAnimation();
            new ProgressBarAnimation();
            new ParallaxEffect();

            // Enhancements
            new CardHoverEffects();
            new ScrollToTop();
            new LazyLoadImages();

            // Forms (if added in the future)
            new FormValidation();

            // Performance
            new PerformanceMonitor();

            console.log('✅ FortaGuard Portfolio initialized successfully!');

            // Announce to screen readers
            this.announceReady();

        } catch (error) {
            console.error('❌ Error initializing FortaGuard Portfolio:', error);
        }
    }

    announceReady() {
        // Accessibility: Announce when page is ready
        const announcement = document.createElement('div');
        announcement.setAttribute('role', 'status');
        announcement.setAttribute('aria-live', 'polite');
        announcement.className = 'sr-only';
        announcement.textContent = 'Página cargada completamente';
        document.body.appendChild(announcement);
    }
}

// ============================================
// Start Application
// ============================================
const fortaGuardApp = new App();

// ============================================
// Export for potential module use
// ============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        MobileNav,
        SmoothScroll,
        ActiveSection,
        ScrollAnimations,
        CounterAnimation,
        ProgressBarAnimation,
        NavbarScroll,
        LazyLoadImages,
        ParallaxEffect,
        CardHoverEffects,
        ScrollToTop,
        FormValidation,
        PerformanceMonitor
    };
}
