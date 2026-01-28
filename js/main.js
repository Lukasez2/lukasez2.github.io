/**
 * Main JavaScript file
 * Handles: smooth scrolling, scroll animations, mobile nav
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScroll();
    initScrollAnimations();
    initMobileNav();
});

/**
 * Smooth scrolling for anchor links
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                // Close mobile nav if open
                const navMenu = document.querySelector('.nav-menu');
                navMenu?.classList.remove('active');

                // Scroll to target with offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Fade-in animations on scroll
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');

    // Initial check for elements already in view
    checkVisibility(elements);

    // Check on scroll
    let ticking = false;

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                checkVisibility(elements);
                ticking = false;
            });
            ticking = true;
        }
    });
}

function checkVisibility(elements) {
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.85;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');

        // Animate hamburger to X
        toggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('active');
            toggle.classList.remove('active');
        }
    });
}
