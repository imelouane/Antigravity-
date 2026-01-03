/* Translations Dictionary */
const translations = {
    es: {
        nav_home: "INICIO",
        nav_services: "SERVICIOS",
        nav_engineering: "INGENIERÍA",
        nav_management: "GESTIÓN DE PROYECTOS",
        nav_products: "PRODUCTOS",
        nav_contact: "CONTACTO",
        hero_title: "INGENIERÍA SIN LÍMITES",
        hero_desc: "Soluciones industriales integrales en todo el <strong>Territorio Nacional</strong>.",
        section_lines_title: "NUESTRAS LÍNEAS DE NEGOCIO",
        section_lines_desc: "Experiencia, solvencia técnica y un enfoque integral para grandes proyectos.",
        service_structures: "ESTRUCTURAS METÁLICAS",
        service_structures_desc: "Ofrecemos un servicio integral de diseño, cálculo y ejecución de estructuras metálicas para naves industriales, logísticas y edificaciones singulares. Abordamos cada proyecto desde la fase conceptual hasta la puesta en servicio, garantizando el cumplimiento normativo, la optimización estructural y la eficiencia constructiva.",
        service_solar: "ENERGÍA RENOVABLE",
        service_solar_desc: "Desarrollamos proyectos de energía solar fotovoltaica de gran escala. Acompañamos al cliente en todo el ciclo: estudios de viabilidad, ingeniería básica y de detalle, tramitación, dirección de obra y puesta en marcha, maximizando la rentabilidad energética.",
        service_automation: "AUTOMATIZACIÓN",
        service_automation_desc: "Impulsamos la transformación digital mediante automatización avanzada, robótica e Industria 4.0. Diseñamos e implantamos sistemas que incrementan la productividad, mejoran la calidad y reducen costes operativos, tanto en nuevas plantas como en modernizaciones.",
        service_management: "GESTIÓN INTEGRAL",
        service_management_desc: "Prestamos servicios de gestión integral (Project Management), actuando como interlocutor único. Aseguramos el control de plazos, costes, calidad y riesgos, basándonos en una planificación rigurosa y una comunicación constante orientada a resultados.",
        service_engineering: "INGENIERÍA DE DETALLE",
        service_engineering_desc: "Elaboramos proyectos técnicos completos y documentación de detalle para edificación e instalaciones industriales en todo el territorio nacional. Desarrollamos planos, memorias y cálculos necesarios para licencias y ejecución, garantizando precisión y viabilidad.",
        widget_title: "¿Le llamamos ahora?",
        widget_desc: "Déjenos su teléfono y un experto le contactará en breve.",
        widget_btn: "SOLICITAR LLAMADA",
        footer_copy: "&copy; 2025 Antigravity MIK - Ingeniería Nacional."
    },
    en: {
        nav_home: "HOME",
        nav_services: "SERVICES",
        nav_engineering: "ENGINEERING",
        nav_management: "PROJECT MANAGEMENT",
        nav_products: "PRODUCTS",
        nav_contact: "CONTACT",
        hero_title: "ENGINEERING WITHOUT LIMITS",
        hero_desc: "Integral industrial solutions across the entire <strong>National Territory</strong>.",
        section_lines_title: "OUR BUSINESS LINES",
        section_lines_desc: "Experience and technical solvency in high-scale projects.",
        service_structures: "METALLIC STRUCTURES",
        service_structures_desc: "Design, calculation, and execution of industrial warehouses.",
        service_solar: "RENEWABLE ENERGY",
        service_solar_desc: "Large-scale photovoltaic plants.",
        service_automation: "AUTOMATION",
        service_automation_desc: "Industry 4.0 and advanced robotics.",
        service_management: "INTEGRAL MANAGEMENT",
        service_management_desc: "Project Management and site supervision.",
        service_engineering: "DETAIL ENGINEERING",
        service_engineering_desc: "Technical projects and licensing throughout Spain.",
        widget_title: "Shall we call you?",
        widget_desc: "Leave your phone number and an expert will contact you shortly.",
        widget_btn: "REQUEST CALL",
        footer_copy: "&copy; 2025 Antigravity MIK - National Engineering."
    },
    fr: {
        nav_home: "ACCUEIL",
        nav_services: "SERVICES",
        nav_engineering: "INGÉNIERIE",
        nav_management: "IMPLÉMENTATION",
        nav_products: "PRODUITS",
        nav_contact: "CONTACT",
        hero_title: "INGÉNIERIE SANS LIMITES",
        hero_desc: "Solutions industrielles intégrales sur tout le <strong>Territoire National</strong>.",
        section_lines_title: "NOS LIGNES D'AFFAIRES",
        section_lines_desc: "Experience et solvabilité technique dans des projets de grande envergure.",
        service_structures: "STRUCTURES MÉTALLIQUES",
        service_structures_desc: "Conception, calcul et exécution d'entrepôts industriels.",
        service_solar: "ÉNERGIE RENOUVELABLE",
        service_solar_desc: "Centrales photovoltaïques à grande échelle.",
        service_automation: "AUTOMATISATION",
        service_automation_desc: "Industrie 4.0 et robotique avancée.",
        service_management: "GESTION INTÉGRALE",
        service_management_desc: "Gestion de projet et supervision de site.",
        service_engineering: "INGÉNIERIE DE DÉTAIL",
        service_engineering_desc: "Projets techniques et licences dans toute l'Espagne.",
        widget_title: "On vous appelle ?",
        widget_desc: "Laissez votre numéro et un expert vous contactera sous peu.",
        widget_btn: "DEMANDER UN APPEL",
        footer_copy: "&copy; 2025 Antigravity MIK - Ingénierie Nationale."
    }
};

const galleryData = {
    estructuras: {
        title: "Estructuras Metálicas",
        images: [
            { src: "./assets/images/metallic_structure.png", desc: "Diseño 3D y Planificación" },
            { src: "./assets/images/blueprint.png", desc: "Ingeniería de Detalle" },
            { src: "./assets/images/metallic_structure.png", desc: "Montaje Estructural" }
        ]
    },
    fotovoltaica: {
        title: "Energía Fotovoltaica",
        images: [
            { src: "./assets/images/photovoltaic.png", desc: "Vista Aérea Planta Solar" },
            { src: "./assets/images/photovoltaic.png", desc: "Instalación de Paneles" },
            { src: "./assets/images/blueprint.png", desc: "Esquema Eléctrico" }
        ]
    },
    automatizacion: {
        title: "Automatización Industrial",
        images: [
            { src: "./assets/images/automation.png", desc: "Robótica de Precisión" },
            { src: "./assets/images/automation.png", desc: "Línea de Ensamblaje" }
        ]
    },
    gestion: {
        title: "Gestión de Proyectos",
        images: [
            { src: "./assets/images/project_management.png", desc: "Dirección de Obra" },
            { src: "./assets/images/blueprint.png", desc: "Planificación de Recursos" }
        ]
    },
    diseno: {
        title: "Ingeniería y Diseño",
        images: [
            { src: "./assets/images/industrial_design.png", desc: "Diseño de Instalaciones" },
            { src: "./assets/images/blueprint.png", desc: "Modelado BIM" }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Setup Card Clicks (Category Modal)
    const cards = document.querySelectorAll('.service-card');
    const galleryModal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modalTitle');
    const galleryGrid = document.getElementById('galleryGrid');

    if (cards.length > 0) {
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                openGalleryModal(category);
            });
        });
    }

    // 2. Setup Lightbox Logic
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    // Close Lightbox on click
    if (lightboxModal) {
        lightboxModal.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });
    }

    // Function to open Category Modal
    function openGalleryModal(category) {
        const data = galleryData[category];
        if (!data) return;

        modalTitle.innerText = data.title;
        galleryGrid.innerHTML = '';

        data.images.forEach((item, index) => {
            const div = document.createElement('div');
            div.classList.add('gallery-item');
            div.style.animationDelay = `${index * 0.1}s`;
            div.onclick = (e) => {
                e.stopPropagation(); // Prevent bubbling if needed
                openLightbox(item.src, item.desc);
            };

            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.desc;

            // Optional: Add caption on hover within the grid too? 
            // For now, let's keep it clean image.

            div.appendChild(img);
            galleryGrid.appendChild(div);
        });

        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Function to open Lightbox (Global scope for projects.html usage)
    window.openLightbox = function (src, desc) {
        // Handle if passed an element (like in projects.html) or direct string
        let imageSrc = src;
        let imageDesc = desc || '';

        if (typeof src === 'object' && src.tagName) { // It's an HTML element
            const img = src.querySelector('img');
            imageSrc = img.src;
            imageDesc = src.querySelector('h4') ? src.querySelector('h4').innerText : img.alt;
        }

        lightboxImg.src = imageSrc;
        lightboxCaption.innerText = imageDesc;
        lightboxModal.classList.add('active');
    };

    // Close Category Modal
    window.closeModal = function () {
        if (galleryModal) galleryModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close on click outside
    if (galleryModal) {
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) {
                window.closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            window.closeModal();
            if (lightboxModal) lightboxModal.classList.remove('active');
        }
    });

    // 3. Mobile Menu Logic (Full Screen Overlay)
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon shape if desired (optional)
            const icon = menuIcon.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 4. "Te Llamamos" Widget Logic
    const callWidget = document.getElementById('callMeWidget');
    const callToggle = document.getElementById('callMeToggle');
    const closeWidget = document.getElementById('closeWidget');

    if (callToggle && callWidget) {
        // Toggle open
        callToggle.addEventListener('click', () => {
            callWidget.classList.add('visible');
            callToggle.style.display = 'none'; // Hide button when widget is open
        });
    }

    if (closeWidget && callWidget) {
        // Toggle close
        closeWidget.addEventListener('click', () => {
            callWidget.classList.remove('visible');
            if (callToggle) callToggle.style.display = 'flex'; // Show button again
        });
    }

    // 5. Scroll Animations (IntersectionObserver)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .service-card');
    revealElements.forEach(el => observer.observe(el));

    // 6. Header Scroll Logic (Sticky Transparent to White)
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 7. Hero Slider Logic
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000); // Change every 5 seconds
    }

    // 8. Language Switcher Logic
    const langOptions = document.querySelectorAll('.lang-option');
    const langBtnText = document.querySelector('.lang-btn span'); // The text inside the button

    // Function to apply language
    function setLanguage(lang) {
        // Update texts
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key]; // innerHTML to preserve <strong> tags
            }
        });

        // Update button text
        if (langBtnText) langBtnText.textContent = lang.toUpperCase();

        // Save preference
        localStorage.setItem('selectedLang', lang);
    }

    // Event Listeners
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Load saved language
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    setLanguage(savedLang);


    /* --- 9. PRODUCT SYSTEM (LOCAL STORAGE BASED) --- */

    // Check if we are on products page
    const productsGrid = document.getElementById('productsGrid');
    if (productsGrid) {
        loadProductsPublic();
    }

    // Check if we are on admin page
    const adminProductList = document.getElementById('adminProductList');
    const productForm = document.getElementById('productForm');

    if (adminProductList) {
        // Check auth
        if (localStorage.getItem('isAdmin') !== 'true') {
            window.location.href = 'login.html';
        } else {
            loadProductsAdmin();
        }
    }

    if (productForm) {
        productForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const title = document.getElementById('pTitle').value;
            const desc = document.getElementById('pDesc').value;
            const price = document.getElementById('pPrice').value;
            const imgFiles = document.getElementById('pImg').files;

            // Helper to read file as Base64
            const readFile = (file) => {
                return new Promise((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve(reader.result);
                    reader.readAsDataURL(file);
                });
            };

            let images = [];
            if (imgFiles.length > 0) {
                // Limit to 8
                const max = Math.min(imgFiles.length, 8);
                for (let i = 0; i < max; i++) {
                    const data = await readFile(imgFiles[i]);
                    images.push(data);
                }
            } else {
                // Fallback demo image
                images.push('./assets/images/metallic_structure.png');
            }

            const newProduct = {
                id: Date.now(),
                title: title,
                desc: desc,
                price: price,
                images: images, // Array of base64
                img: images[0]  // Keep main for backward compat
            };

            saveProduct(newProduct);
        });
    }

    // Check if login form exists
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const pass = document.getElementById('password').value;
            if (pass === 'admin123') { // Simple demo password
                localStorage.setItem('isAdmin', 'true');
                window.location.href = 'admin.html';
            } else {
                alert('Contraseña incorrecta');
            }
        });
    }

    function saveProduct(product) {
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        alert('Producto añadido correctamente');
        window.location.reload();
    }

    window.productFunctions = {
        deleteProduct: function (id) {
            if (confirm('¿Seguro que quieres borrar este producto?')) {
                let products = JSON.parse(localStorage.getItem('products') || '[]');
                products = products.filter(p => p.id !== id);
                localStorage.setItem('products', JSON.stringify(products));
                window.location.reload();
            }
        }
    };

    function loadProductsPublic() {
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        productsGrid.innerHTML = '';
        if (products.length === 0) {
            productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center;">No hay productos disponibles por el momento.</p>';
        }
        products.forEach(p => {
            // Compat: ensure images array exists
            const images = p.images || (p.img ? [p.img] : ['./assets/images/metallic_structure.png']);
            const mainImg = images[0];
            const count = images.length;

            // Safe helper for title quotes
            const safeTitle = p.title.replace(/'/g, "\\'");

            const html = `
            <div class="product-card">
                <div style="position:relative; cursor:pointer;" onclick="window.viewProductGallery(${p.id})">
                    <img src="${mainImg}" class="product-img">
                    ${count > 1 ? `<div style="position:absolute; bottom:10px; right:10px; background:rgba(0,0,0,0.7); color:white; padding:5px 10px; border-radius:15px; font-size:0.8rem;"><i class="fas fa-images"></i> ${count} Fotos</div>` : ''}
                </div>
                <div class="product-content">
                    <div class="product-title">${p.title}</div>
                    <div class="product-desc">${p.desc}</div>
                    <div class="product-price">${p.price} €</div>
                    
                    <div class="product-qty">
                        <label>Unidades:</label>
                        <input type="number" id="qty-${p.id}" value="1" min="1">
                    </div>

                    <button class="btn-buy" onclick="openBuyModal(${p.id}, '${safeTitle}', ${p.price})">SOLICITAR COMPRA</button>
                </div>
            </div>
            `;
            productsGrid.innerHTML += html;
        });
    }

    // GALLERY VIEWER FOR PRODUCTS
    window.viewProductGallery = function (id) {
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        const p = products.find(x => x.id === id);
        if (!p) return;

        const galleryModal = document.getElementById('galleryModal');
        const modalTitle = document.getElementById('modalTitle');
        const galleryGrid = document.getElementById('galleryGrid');

        if (!galleryModal || !galleryGrid) return; // Should allow error if modal missing on some page, but we added it.

        modalTitle.innerText = p.title;
        galleryGrid.innerHTML = '';

        const images = p.images || [p.img];

        images.forEach((imgSrc, index) => {
            const div = document.createElement('div');
            div.classList.add('gallery-item'); // Reusing existing class
            // Inline style only for this specific dynamic grid if needed, but class reuse is better
            div.style.cssText = "height: 150px; overflow:hidden; border-radius:4px; cursor:pointer;";
            div.onclick = (e) => {
                e.stopPropagation();
                openLightbox(imgSrc, `${p.title} - Foto ${index + 1}`);
            };

            const img = document.createElement('img');
            img.src = imgSrc;
            img.style.cssText = "width:100%; height:100%; object-fit:cover; transition:transform 0.3s;";

            div.appendChild(img);
            galleryGrid.appendChild(div);
        });

        galleryModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Sell Functions Scope
    window.openBuyModal = function (id, title, price) {
        const qty = document.getElementById(`qty-${id}`).value;
        const total = (price * qty).toFixed(2);

        const modal = document.getElementById('buyModal');
        modal.style.display = 'flex';
        // Small timeout to allow transition if wanted, or just force it.
        // Since CSS has transition opacity 0.3s, we should set opacity 1
        setTimeout(() => { modal.style.opacity = '1'; }, 10);

        document.getElementById('buyModalProduct').textContent = `${title} (x${qty})`;
        document.getElementById('buyModalTotal').textContent = `Total Estimado: ${total} €`;

        // Fill hidden field for email
        // Fill hidden field for email - Includes TOTAL ARTICLES and PHONE LABEL REMINDER
        document.getElementById('hiddenProductDetails').value = `Producto: ${title} | Cantidad (Artículos): ${qty} | Precio Unitario: ${price}€ | TOTAL A PAGAR: ${total}€`;
    }

    window.closeBuyModal = function () {
        const modal = document.getElementById('buyModal');
        modal.style.opacity = '0';
        setTimeout(() => { modal.style.display = 'none'; }, 300);
    }

    function loadProductsAdmin() {
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        adminProductList.innerHTML = '';
        if (products.length === 0) adminProductList.innerHTML = '<p>No hay productos.</p>';
        products.forEach(p => {
            const div = document.createElement('div');
            div.className = 'admin-item';
            div.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${p.img}">
                    <div>
                        <strong>${p.title}</strong><br>
                        ${p.price} €
                    </div>
                </div>
                <button class="btn-delete" onclick="window.productFunctions.deleteProduct(${p.id})">Borrar</button>
            `;
            adminProductList.appendChild(div);
        });
    }

    // Logout
    window.logout = function () {
        localStorage.removeItem('isAdmin');
        window.location.href = 'index.html';
    }

    /* --- 10. ROBUST FORM HANDLING (AJAX) --- */
    // Select all forms that send to formsubmit
    const forms = document.querySelectorAll('form[action^="https://formsubmit.co"]');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop redirect

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = "Enviando...";
            submitBtn.disabled = true;

            const formData = new FormData(form);
            // Force JSON response
            // formData.append('_content_type', 'json'); 
            // Better implicit via fetch headers, but formsubmit uses _next usually.
            // We remove _next from formData to avoid redirect response if possible, 
            // or just ignore the redirect by using fetch.

            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(response => {
                    if (response.ok) {
                        // Success
                        // Try to use SweetAlert if available, else alert
                        if (typeof Swal !== 'undefined') {
                            Swal.fire({
                                title: '¡Enviado!',
                                text: 'Hemos recibido tu solicitud correctamente. Te contactaremos pronto.',
                                icon: 'success',
                                confirmButtonColor: '#003366'
                            });
                        } else {
                            alert("¡Enviado! Hemos recibido tu solicitud correctamente.");
                        }
                        form.reset();
                        // Close modals if any
                        if (window.closeBuyModal) window.closeBuyModal();
                        const callWidget = document.getElementById('callMeWidget');
                        if (callWidget) callWidget.classList.remove('visible');
                    } else {
                        throw new Error("Error en el servidor de correo");
                    }
                })
                .catch(error => {
                    console.error(error);
                    if (typeof Swal !== 'undefined') {
                        Swal.fire({
                            title: 'Error',
                            text: 'Hubo un problema al enviar el correo. Por favor, intenta contactar directamente a mohamed.imelouane@gmail.com',
                            icon: 'error',
                            confirmButtonColor: '#d33'
                        });
                    } else {
                        alert("Error al enviar. Por favor escribe a mohamed.imelouane@gmail.com");
                    }
                })
                .finally(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                });
        });
    });

});
