document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Optional: for burger animation
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 2. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Trigger counter animation if it's the stats section
                if (entry.target.querySelector('.number')) {
                    startCounters(entry.target);
                }

                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // 3. Number Counter Animation
    function startCounters(section) {
        const counters = section.querySelectorAll('.number');
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps

            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        }
    });

    // 4. Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const button = contactForm.querySelector('button');
            const originalText = button.innerText;

            button.innerText = 'Enviando...';
            button.disabled = true;
            button.style.background = '#7287A5';

            setTimeout(() => {
                alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
                button.innerText = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 1500);
        });
    }

    // 5. Careers Form Handling (Mock Upload)
    const careersForm = document.getElementById('careersForm');
    const fileInput = document.getElementById('cv-upload');
    const fileWrapper = document.querySelector('.file-upload-wrapper p');

    if (fileInput) {
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                fileWrapper.innerText = `Archivo seleccionado: ${e.target.files[0].name}`;
                fileWrapper.style.color = '#183B6C';
                fileWrapper.style.fontWeight = 'bold';
            }
        });
    }

    if (careersForm) {
        careersForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const button = careersForm.querySelector('button');
            const originalText = button.innerText;

            button.innerText = 'Subiendo...';
            button.disabled = true;

            setTimeout(() => {
                alert('¡Gracias! Hemos recibido tu CV correctamente.');
                careersForm.reset();
                fileWrapper.innerText = 'Arrastra tu CV aquí o haz clic para subir';
                button.innerText = originalText;
                button.disabled = false;
            }, 1500);
        });
    }

    // 6. Modal Logic
    const serviceLinks = document.querySelectorAll('.service-link'); // Note: These are buttons now
    const modal = document.getElementById('serviceModal');
    const closeModalBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDescription');
    const modalIcon = document.querySelector('.modal-icon i');

    // Open Modal
    serviceLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Just in case

            const card = link.closest('.service-card');
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');
            const iconClass = card.querySelector('i').className;

            modalTitle.innerText = title;
            modalDesc.innerText = desc;
            modalIcon.className = iconClass; // Copy icon

            modal.style.display = 'flex';
            // Small delay to allow display flex to apply before opacity transition
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });
    });

    // Close Modal Function
    window.closeModal = function () {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Wait for transition
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', window.closeModal);
    }

    // Close on click outside
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            window.closeModal();
        }
    });

});
