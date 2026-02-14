document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation (can be expanded if needed)
    const hamburger = document.querySelector('.hamburger');
    // Implement mobile menu toggle if a menu is added later

    // Smooth Scrolling for Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // Compensate for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reservation Form Handling
    const bookingForm = document.getElementById('booking-form');
    const formMessage = document.getElementById('form-message');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Basic animation for feedback
            const submitBtn = bookingForm.querySelector('button');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Processing...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                formMessage.textContent = 'Thank you! Your table request has been sent. We will contact you shortly to confirm.';
                formMessage.classList.remove('hidden');
                formMessage.classList.add('success');
                
                bookingForm.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            }, 1500);
        });
    }

    // Reveal on Scroll Animation
    const revealItems = document.querySelectorAll('.section-heading, .about-grid, .gallery-item, .menu-category');
    
    const observerOptions = {
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.8s ease-out';
        revealObserver.observe(item);
    });
});
