// ----- WORKS PAGE -------

const filterTabs = document.querySelectorAll('.filter-tab');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // Remove active class from all tabs
        filterTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Get the filter value
        const filterValue = this.getAttribute('data-filter');
        
        // First, fade out all items
        portfolioItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
        });
        
        // After fade out, filter and fade in
        setTimeout(() => {
            portfolioItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (filterValue === 'all') {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else if (itemCategory === filterValue) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.classList.add('hidden');
                }
            });
        }, 300);
    });
});

// ----- WORKS PAGE -------


// ----- HAMBURGER MENU -------
const hamburger = document.querySelector('.hamburger');
        const navItems = document.querySelector('.nav-items');
        const navLinks = document.querySelectorAll('.nav-item');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navItems.classList.toggle('active');
        });

        // Close menu when clicking on a nav link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navItems.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navItems.contains(e.target)) {
                hamburger.classList.remove('active');
                navItems.classList.remove('active');
            }
        });
// ----- HAMBURGER MENU -------

// animations

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll, .fade-left, .fade-right, .scale-up');
    animatedElements.forEach(el => observer.observe(el));
});