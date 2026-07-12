/* 
  ======================================================
  CONSULTOMIK V2.0 - MASTER JS INTERACT & LOCALES
  Interaction Suite for Light Mode Engineering Portal
  ======================================================
*/

/* B2B Multi-Language Dictionary (ES / EN / FR) */
const translations = {
    es: {
        nav_home: "INICIO",
        nav_company: "NOSOTROS",
        nav_about_us: "QUIÉNES SOMOS",
        nav_team: "EQUIPO Y TALENTO",
        nav_services: "SERVICIOS",
        nav_serv_consulting: "CONSULTORÍA TÉCNICA",
        nav_serv_management: "GESTIÓN DE PROYECTOS",
        nav_serv_outsourcing: "OUTSOURCING TÉCNICO",
        nav_serv_support: "SOPORTE ESPECIALIZADO",
        nav_sectors: "SECTORES",
        nav_projects: "PROYECTOS",
        nav_contact: "CONTACTO",

        // Hero
        hero_title: "Ingeniería Industrial y Consultoría Técnica de Alto Nivel",
        hero_desc: "Especialistas en cálculo de estructuras, proyectos ejecutivos de instalaciones, legalizaciones y dirección facultativa. Aportamos rigor regulatorio, modelado BIM y soporte técnico in-situ para grandes industrias.",
        hero_btn_presupuesto: "Solicitar presupuesto",
        hero_btn_llamamos: "Te llamamos",

        // Stats
        stat_proyectos: "Proyectos Ejecutados",
        stat_mw: "MWp Instalados",
        stat_clientes: "Clientes Industriales",
        stat_ingenieros: "Ingenieros en Plantilla",
        stat_experiencia: "Años de Trayectoria",
        stat_internacionales: "Proyectos Internacionales",

        // Values
        values_title: "PROPUESTA DE VALOR",
        values_subtitle: "Rigor normativo, orden técnico y adaptabilidad operativa.",
        val_solvency_title: "Solvencia de Gabinete y Campo",
        val_solvency_desc: "Unificamos el cálculo estructural avanzado y el diseño normativo con metodología BIM y dirección facultativa de obra.",
        val_flexibility_title: "Talento Técnico Bajo Demanda",
        val_flexibility_desc: "Mitigamos la escasez de talento en proyectos EPC y constructoras mediante incorporación inmediata de perfiles senior.",
        val_standard_title: "Cumplimiento Normativo Estricto",
        val_standard_desc: "Cálculos estructurados conforme al Código Técnico de la Edificación (CTE), Eurocódigos y directivas de seguridad industrial (RITE, PCI, APQ).",

        // Call-Back Form
        call_title: "Queremos llamarte",
        call_desc: "Indíquenos sus datos y un ingeniero de nuestra oficina técnica le telefoneará en el horario preferido.",
        form_name: "Nombre y Apellidos *",
        form_phone: "Teléfono Directo *",
        form_company: "Empresa / Organización *",
        form_hours: "Horario de Preferencia *",
        form_hours_morning: "Mañana (09:00 - 14:00)",
        form_hours_afternoon: "Tarde (14:00 - 18:00)",
        form_btn_call: "Llamadme",

        // Strategic Pages - CAD
        cad_hero_title: "Oficina Técnica CAD & Delineación Industrial Externa",
        cad_hero_desc: "Disponga de un equipo completo de delineantes, proyectistas e ingenieros BIM senior sin aumentar su plantilla fija. Soporte flexible para licitaciones y proyectos constructivos.",
        cad_subtitle: "Externalización Estratégica para Constructoras, Ingenierías y EPCs",
        cad_p1: "La capacidad de respuesta gráfica determina la adjudicación de contratos y la agilidad de la obra. En Consultomik actuamos como su departamento CAD de refuerzo inmediato, entregando planos de detalle, As-Built y modelos estructurales bajo pliegos técnicos de alta exigencia.",
        cad_p2: "Soportamos flujos de trabajo basados en CAD 2D/3D y modelado BIM LOD 400. Nos integramos en su servidor o colaboramos en remoto mediante protocolos de control de calidad estrictos, asegurando entregas a tiempo y libres de colisiones.",
        
        // Strategic Pages - Staffing
        staffing_hero_title: "Engineering Staffing & Outsourcing Técnico de Personal",
        staffing_hero_desc: "Suministro inmediato de ingenieros, calculistas, modeladores BIM y supervisores QA/QC integrados en sus oficinas o campo de obra.",
        staffing_subtitle: "Technical Staff Augmentation de Perfiles Senior",
        staffing_p1: "Frente a picos de trabajo y licitaciones críticas, la selección de personal técnico cualificado ralentiza sus operaciones. Ponemos a su disposición ingenieros mecánicos, eléctricos, estructurales e inspectores de comisionado con incorporación flexible.",
        staffing_p2: "Gestionamos toda la carga laboral, seguros RC y coordinación CAE, permitiendo a sus directores centrarse únicamente en la ejecución y los hitos del proyecto. No operamos como una ETT; somos una extensión especializada de su oficina de ingeniería."
    },
    en: {
        nav_home: "HOME",
        nav_company: "COMPANY",
        nav_about_us: "ABOUT US",
        nav_team: "TEAM & TALENT",
        nav_services: "SERVICES",
        nav_serv_consulting: "TECHNICAL CONSULTING",
        nav_serv_management: "PROJECT MANAGEMENT",
        nav_serv_outsourcing: "TECHNICAL OUTSOURCING",
        nav_serv_support: "SPECIALIZED SUPPORT",
        nav_sectors: "SECTORES",
        nav_projects: "PROJECTS",
        nav_contact: "CONTACT",

        // Hero
        hero_title: "Industrial Engineering and High-Level Technical Consulting",
        hero_desc: "Specialists in structural calculation, executive installation projects, licensing and site management. We provide regulatory rigor, BIM modeling and on-site technical support for large industries.",
        hero_btn_presupuesto: "Request quote",
        hero_btn_llamamos: "Call me back",

        // Stats
        stat_proyectos: "Executed Projects",
        stat_mw: "MWp Installed",
        stat_clientes: "Industrial Clients",
        stat_ingenieros: "Staff Engineers",
        stat_experiencia: "Years of Track Record",
        stat_internacionales: "International Projects",

        // Values
        values_title: "VALUE PROPOSITION",
        values_subtitle: "Regulatory rigor, technical order and operational adaptability.",
        val_solvency_title: "Office and Field Solvency",
        val_solvency_desc: "We unify advanced structural calculation and regulatory design with BIM methodology and construction site direction.",
        val_flexibility_title: "Technical Talent On Demand",
        val_flexibility_desc: "We mitigate talent shortages in EPC projects and builders by immediately deploying senior profiles.",
        val_standard_title: "Strict Regulatory Compliance",
        val_standard_desc: "Structured calculations conforming to the Building Technical Code (CTE), Eurocodes and industrial safety directives.",

        // Call-Back Form
        call_title: "We want to call you",
        call_desc: "Please provide your details and an engineer from our technical office will call you back at your preferred time.",
        form_name: "Full Name *",
        form_phone: "Direct Phone *",
        form_company: "Company / Organization *",
        form_hours: "Preferred Time *",
        form_hours_morning: "Morning (09:00 - 14:00)",
        form_hours_afternoon: "Afternoon (14:00 - 18:00)",
        form_btn_call: "Call Me",

        // Strategic Pages - CAD
        cad_hero_title: "Technical CAD Office & External Industrial Drafting",
        cad_hero_desc: "Access a full team of draftsmen, designers, and senior BIM modelers without increasing your permanent headcount. Flexible support for bids and detailed projects.",
        cad_subtitle: "Strategic Outsourcing for Contractors, Engineering Offices & EPCs",
        cad_p1: "Drafting capacity determines bid awards and field speed. At Consultomik, we act as your immediate reinforcement CAD office, delivering detailed shop drawings, As-Built plans, and structural models under demanding specs.",
        cad_p2: "We support workflows based on 2D/3D CAD and LOD 400 BIM modeling. We integrate into your servers or collaborate remotely under strict QA protocols, ensuring timely, collision-free deliveries.",

        // Strategic Pages - Staffing
        staffing_hero_title: "Engineering Staffing & Technical Outsourcing",
        staffing_hero_desc: "Immediate supply of engineers, structural analysts, BIM modelers, and QA/QC supervisors integrated on-site or in your offices.",
        staffing_subtitle: "Technical Staff Augmentation of Senior Profiles",
        staffing_p1: "Faced with high workloads and critical bids, recruiting qualified technical profiles slows down your operations. We provide mechanical, electrical, structural engineers, and commissioning inspectors with flexible onboarding.",
        staffing_p2: "We manage all employment burden, liability insurance, and CAE coordination, allowing your site managers to focus solely on project execution and milestones. We are a specialized extension of your engineering office."
    },
    fr: {
        nav_home: "ACCUEIL",
        nav_company: "ENTREPRISE",
        nav_about_us: "À PROPOS",
        nav_team: "ÉQUIPE ET TALENTS",
        nav_services: "SERVICES",
        nav_serv_consulting: "CONSEIL TECHNIQUE",
        nav_serv_management: "GESTION DE PROJETS",
        nav_serv_outsourcing: "OUTSOURCING TECHNIQUE",
        nav_serv_support: "SUPPORT SPÉCIALISÉ",
        nav_sectors: "SECTEURS",
        nav_projects: "PROJETS",
        nav_contact: "CONTACT",

        // Hero
        hero_title: "Ingénierie Industrielle et Conseil Technique de Haut Niveau",
        hero_desc: "Spécialistes du calcul de structures, projets d'installations, légalisations y direction de chantier. Nous apportons rigueur, modélisation BIM et support technique.",
        hero_btn_presupuesto: "Demander un devis",
        hero_btn_llamamos: "Rappelez-moi",

        // Stats
        stat_proyectos: "Projets Exécutés",
        stat_mw: "MWp Installés",
        stat_clientes: "Clients Industriels",
        stat_ingenieros: "Ingénieurs",
        stat_experiencia: "Années d'Expérience",
        stat_internacionales: "Projets Internationaux"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Navigation
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    if (menuIcon && navLinks) {
        menuIcon.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            header.classList.toggle('mobile-nav-open');
            const icon = menuIcon.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-xmark');
            }
        });
    }

    // 2. Language Translation Switcher
    const langOptions = document.querySelectorAll('.lang-option');
    const langBtnText = document.querySelector('.lang-btn span');

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        if (langBtnText) langBtnText.textContent = lang.toUpperCase();
        localStorage.setItem('selectedLang', lang);
    }

    if (langBtnText && langBtnText.parentElement) {
        const langBtn = langBtnText.parentElement;
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const dropdown = langBtn.nextElementSibling;
            if (dropdown) dropdown.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            const dropdown = document.querySelector('.lang-dropdown');
            if (dropdown && dropdown.classList.contains('active') && !langBtn.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }

    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.getAttribute('data-lang');
            setLanguage(lang);
            const dropdown = document.querySelector('.lang-dropdown');
            if (dropdown) dropdown.classList.remove('active');
        });
    });

    // Default language is Spanish
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    setLanguage(savedLang);

    // 3. Scroll Header Effect
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 4. Modal "Te llamamos" Controls
    const callModal = document.getElementById('callModal');
    const triggerCallBtns = document.querySelectorAll('.trigger-call-modal');
    const modalCloseBtn = document.querySelector('.modal-close');

    if (callModal) {
        triggerCallBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                callModal.classList.add('active');
            });
        });

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', () => {
                callModal.classList.remove('active');
            });
        }

        callModal.addEventListener('click', (e) => {
            if (e.target === callModal) {
                callModal.classList.remove('active');
            }
        });
    }

    // 5. Counters Logic (Intersection Observer)
    const statsCounters = document.querySelectorAll('.stat-number');
    const counterObserverOptions = {
        root: null,
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endVal = parseFloat(target.getAttribute('data-count') || target.innerText.replace(/[^0-9.]/g, ''));
                if (!isNaN(endVal)) {
                    animateCount(target, endVal);
                }
                observer.unobserve(target);
            }
        });
    }, counterObserverOptions);

    function animateCount(element, endVal) {
        let startVal = 0;
        const duration = 2000; 
        const startTime = performance.now();
        const originalText = element.innerText;
        const prefix = originalText.match(/^[^\d]+/)?.[0] || '';
        const suffix = originalText.match(/[^\d.]+$/)?.[0] || '';

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentVal = eased * endVal;

            if (originalText.includes('.')) {
                element.innerText = `${prefix}${currentVal.toFixed(1)}${suffix}`;
            } else {
                element.innerText = `${prefix}${Math.floor(currentVal)}${suffix}`;
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    statsCounters.forEach(counter => {
        if (!counter.getAttribute('data-count')) {
            const num = parseFloat(counter.innerText.replace(/[^0-9.]/g, ''));
            counter.setAttribute('data-count', num);
        }
        counterObserver.observe(counter);
    });

    // 6. SweetAlert Success Popup Handling (From Vercel Redirect Params)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: 'Solicitud Recibida',
                text: 'Hemos registrado sus datos técnicos. Un ingeniero de nuestra oficina corporativa se pondrá en contacto con usted a la brevedad.',
                icon: 'success',
                confirmButtonColor: '#0f4c81',
                confirmButtonText: 'Entendido'
            });
        } else {
            alert("Solicitud recibida. Un ingeniero le contactará.");
        }
    }

    // 7. Loading state on Form Submission
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function () {
            const btn = this.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Enviando...`;
                btn.style.opacity = '0.8';
                btn.style.pointerEvents = 'none';
            }
        });
    });

    // 8. Lenis Smooth Scroll Configuration
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

});
