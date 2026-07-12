/* 
  =========================================
  CONSULTOMIK PREMIUM INTERACTION SUITE
  Master Javascript (Dynamic UI & Locales)
  =========================================
*/

/* B2B Translations Dictionary (Parity with all pages) */
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
        
        hero_title: "Ingeniería de Alta Precisión para la Descarbonización e Infraestructura Industrial",
        hero_desc: "Diseñamos y ejecutamos proyectos de ingeniería de detalle, consultoría energética ISO 50001 y soluciones llave en mano (EPC) para acelerar la transición sostenible de las grandes industrias.",
        intro_desc: "En <strong>Consultomik</strong> aportamos rigor técnico, cálculo avanzado y gestión de obra en terreno. Nos integramos con promotores y constructoras internacionales para asegurar que cada proyecto industrial cumpla con el Código Técnico (CTE), Eurocódigos y las normativas sectoriales más exigentes.",
        
        values_title: "NUESTRA PROPUESTA DE VALOR",
        values_subtitle: "Rigor técnico, adaptabilidad operativa e industrial compliance de vanguardia.",
        val_solvency_title: "Solvencia de Gabinete y Campo",
        val_solvency_desc: "Combinamos el cálculo estructural avanzado y diseño normativo con metodología BIM y dirección facultativa de obra en terreno.",
        val_flexibility_title: "Talento Bajo Demanda",
        val_flexibility_desc: "Mitigamos la escasez de talento técnico en proyectos EPC facilitando ingenieros proyectistas y calculistas con incorporación inmediata.",
        val_standard_title: "Cumplimiento Normativo Estricto",
        val_standard_desc: "Dominamos los Eurocódigos estructurales, CTE, directivas europeas de descarbonización e industrial safety (RITE, PCI, APQ).",
        
        services_section_title: "LÍNEAS DE INGENIERÍA CORPORATIVA",
        services_section_desc: "Soluciones de ingeniería y consultoría avanzada para optimizar el ciclo de vida de sus activos.",
        serv_consulting_title: "Ingeniería & Detalle BIM",
        serv_consulting_desc: "Estudios de viabilidad, cálculo estructural avanzado (acero/hormigón) para naves logísticas, modelado BIM LOD 400 y due diligence técnica.",
        serv_management_title: "Gestión de Proyectos (EPC)",
        serv_management_desc: "Project Management bajo metodologías PMI. Esquemas de contratación flexibles tipo Open Book y Llave en Mano con control de Capex.",
        serv_outsourcing_title: "Outsourcing / Cesión de Talento",
        serv_outsourcing_desc: "Suministro inmediato de ingenieros de cálculo, delineantes proyectistas BIM, jefes de obra e inspectores de calidad bajo demanda.",
        serv_support_title: "Soporte Técnico Especializado",
        serv_support_desc: "Dirección de obra e ingeniería de la propiedad (Owner's Engineering) en plantas de procesos, pre-comisionado, comisionado y supervisión HSE.",
        
        sect_section_title: "SECTORES DE ESPECIALIZACIÓN",
        sect_section_desc: "Adaptamos nuestras metodologías e ingeniería a los requisitos regulatorios y de calidad específicos de cada sector.",
        out_spot_title: "OUTSOURCING DE TALENTO TÉCNICO BAJO DEMANDA",
        out_spot_desc: "Asegure la continuidad de sus proyectos incorporando ingenieros, jefes de obra, inspectores de calidad y técnicos de campo altamente cualificados. Mitigamos sus cuellos de botella de contratación proporcionando personal especializado.",
        
        trust_title: "SOLVENCIA AVALADA",
        trust_subtitle: "Cifras y estándares de calidad que garantizan el éxito de sus operaciones.",
        lead_title: "SOLICITAR PROPUESTA TÉCNICA",
        lead_desc: "¿Tiene un proyecto industrial o necesita incorporar ingenieros de forma inmediata? Póngase en contacto con nuestra oficina técnica para evaluar sus requerimientos y emitir una propuesta técnica y económica personalizada.",
        lead_item1: "Respuesta y evaluación en menos de 48 horas",
        lead_item2: "Cálculos respaldados por CTE y Eurocódigos",
        lead_item3: "Profesionales técnicos disponibles para cesión inmediata",

        // Subpages translations
        consulting_hero_desc: "Ingeniería de detalle y cálculo estructural avanzado de alta complejidad. Aseguramos rigor normativo y optimización de cimentación y envolventes.",
        consulting_title1: "CÁLCULO ESTRUCTURAL, NAVES LOGÍSTICAS Y DISEÑO DE DETALLE",
        consulting_p1: "Nuestra oficina técnica está altamente especializada en el modelado y cálculo de estructuras de alta complejidad, incluyendo naves industriales singulares, naves logísticas de grandes luces y plataformas comerciales. Diseñamos envolventes y sistemas de cimentación optimizados, garantizando la viabilidad y seguridad de la edificación.",
        consulting_p2: "Utilizamos metodologías avanzadas de cálculo lineal y no lineal bajo el paraguas estricto del CTE y los Eurocódigos. Ofrecemos modelado BIM (LOD 300 / 400), planos de taller y justificaciones técnicas rigurosas listas para visado colegial o auditoría externa por parte de entidades de control (OCT).",
        consulting_title2: "Estudios de Viabilidad y Auditoría (Due Diligence)",
        consulting_p3: "Ayudamos a promotores e inversores a mitigar riesgos antes de la compra o remodelación de activos industriales. Realizamos due diligence técnica en plantas de energía, análisis patológico de estructuras existentes y auditoría de proyectos de instalaciones (RITE, PCI, APQ).",
        consulting_side_title: "Nuestras Disciplinas",
        consulting_discipline1: "Cálculo de Estructuras (Acero, Hormigón, Madera)",
        consulting_discipline2: "Auditorías Técnicas (Due Diligence de Activos)",
        consulting_discipline3: "Legalización de Instalaciones (APQ, RITE, PCI)",
        consulting_discipline4: "Modelado BIM y Planos de Taller Detallados",
        consulting_discipline5: "Justificación de Eurocódigos y Código Técnico (CTE)",
        consulting_side_btn: "Solicitar Estudio Técnico",

        management_hero_desc: "Project Management corporativo bajo metodologías PMI/PMBOK. Ofrecemos esquemas de contratación flexibles tipo Open Book y Llave en Mano para asegurar sus objetivos de coste y plazo.",
        management_title1: "PLANIFICACIÓN, GESTIÓN LLAVE EN MANO Y CONTROL DE COSTES",
        management_p1: "En grandes desarrollos industriales y comerciales, la coordinación entre contratistas, la compra de equipos principales y el control de desvíos presupuestarios representan un gran desafío. En Consultomik aportamos directores de proyecto certificados para actuar como interlocutor único de la propiedad bajo modelos de contratación transparentes como Open Book o Llave en Mano.",
        management_p2: "Gestionamos los plazos de entrega en base a la metodología de Ruta Crítica (Gantt/PERT/Primavera P6) y supervisamos el flujo de caja. Además, planificamos minuciosamente las paradas industriales o fases críticas en estrecha coordinación con su producción (química, alimentaria, farmacéutica), asegurando la ejecución sin causar interferencias en su actividad.",
        management_p3: "Analizamos preventivamente los riesgos técnicos y contractuales de la obra. En caso de desvíos, aplicamos un riguroso control de cambios y gestión de reclamaciones (claims management), asegurando que el impacto en tiempo y presupuesto sea mínimo.",
        management_side_title: "Servicios PM",
        management_discipline1: "Planificación y Ruta Crítica (Gantt, Primavera P6)",
        management_discipline2: "Control y Gestión de Costes (Earned Value Management)",
        management_discipline3: "Homologación y Coordinación de Contratistas",
        management_discipline4: "Control de Cambios y Reclamaciones (Claims)",
        management_discipline5: "Planificación de Paradas Industriales sin Interferencias",
        management_side_btn: "Solicitar Project Manager",

        outsourcing_hero_desc: "Suministro ágil de ingenieros de diseño, calculistas, delineantes BIM y técnicos HSE. Resolvemos sus picos de trabajo y cuellos de botella de contratación.",
        outsourcing_title1: "INTEGRACIÓN FLEXIBLE DE PROFESIONALES Y TÉCNICOS",
        outsourcing_p1: "La escasez de perfiles técnicos especializados puede retrasar la adjudicación o ejecución de un contrato industrial. El modelo de outsourcing de Consultomik permite incorporar ingenieros, delineantes proyectistas y supervisores de campo a su organización de forma inmediata bajo el esquema de 'site augmentation'.",
        outsourcing_p2: "Nuestros profesionales operan bajo sus directrices directamente en sus oficinas o en obra, respaldados por la supervisión técnica de nuestro propio gabinete para asegurar un rendimiento óptimo desde el primer día.",
        outsourcing_p3: "Asumimos toda la responsabilidad laboral y administrativa (prevención de riesgos, seguros de responsabilidad civil, nóminas y formación técnica), permitiendo a su dirección de proyecto enfocarse exclusivamente en la consecución de hitos y resultados de obra.",
        outsourcing_side_title: "Perfiles Disponibles",
        outsourcing_profile1: "Ingenieros de Cálculo y Diseño Mecánico / Estructural",
        outsourcing_profile2: "Delineantes Proyectistas BIM (LOD 300 / 400)",
        outsourcing_profile3: "Jefes de Obra y Supervisores de Campo (EPC)",
        outsourcing_profile4: "Coordinadores de Seguridad y Salud (HSE)",
        outsourcing_profile5: "Técnicos de Puesta en Marcha (Commissioning)",
        outsourcing_side_btn: "Solicitar Perfil Técnico",

        support_hero_desc: "Supervisión facultativa en campo e Ingeniería de la Propiedad. Aseguramos la calidad y la puesta en marcha de sus instalaciones industriales.",
        support_title1: "DIRECCIÓN FACULTATIVA E INGENIERÍA DE LA PROPIEDAD",
        support_p1: "Garantizar que el montaje de estructuras logísticas, subestaciones, líneas de distribución o soportes solares se realice conforme al proyecto ejecutivo y las normativas es una tarea crítica. Nuestro equipo asume las funciones de dirección facultativa y asistencia técnica permanente en terreno.",
        support_p2: "Actuamos como los ojos del promotor en la obra, controlando el cumplimiento estricto de los planes de aseguramiento y control de calidad (QA/QC), y supervisando los ensayos de comisionado antes de la energización o puesta en marcha de los procesos.",
        support_p3: "Redactamos planes de seguridad, gestionamos la coordinación de actividades empresariales (CAE) y ejercemos la Coordinación de Seguridad y Salud en fase de obra. Protegemos legal y administrativamente a la promotora, asegurando que todos los subcontratistas cumplan con la legislación HSE.",
        support_side_title: "Servicios en Campo",
        support_discipline1: "Dirección de Obra (Civil, Mecánica, Eléctrica)",
        support_discipline2: "Ingeniería de la Propiedad (Owner's Engineering)",
        support_discipline3: "Control de Calidad (QA/QC) y Ensayos de Campo",
        support_discipline4: "Coordinación de Seguridad y Salud (HSE)",
        support_discipline5: "Puesta en Marcha (Pre-commissioning & Commissioning)",
        support_side_btn: "Solicitar Soporte Técnico"
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
        nav_sectors: "SECTORS",
        nav_projects: "PROJECTS",
        nav_contact: "CONTACT",
        
        hero_title: "High-Precision Engineering for Decarbonization & Industrial Infrastructure",
        hero_desc: "We design and execute detailed engineering projects, ISO 50001 energy consulting, and turnkey (EPC) solutions to accelerate the sustainable transition of large industries.",
        intro_desc: "At <strong>Consultomik</strong> we bring technical solvency, advanced calculation and field construction management. We integrate with international promoters and contractors to ensure that every industrial project complies with the CTE, Eurocodes and the most demanding sector regulations.",
        
        values_title: "OUR VALUE PROPOSITION",
        values_subtitle: "Technical rigor, operational adaptability and state-of-the-art industrial compliance.",
        val_solvency_title: "Office and Field Solvency",
        val_solvency_desc: "We combine advanced structural calculation and regulatory design with BIM methodology and field facultative direction on site.",
        val_flexibility_title: "Talent On Demand",
        val_flexibility_desc: "We mitigate technical talent shortages in EPC projects by providing design and calculation engineers with immediate onboarding.",
        val_standard_title: "Strict Regulatory Compliance",
        val_standard_desc: "We master structural Eurocodes, CTE, European decarbonization directives and industrial safety (RITE, PCI, APQ).",
        
        services_section_title: "CORPORATE ENGINEERING LINES",
        services_section_desc: "Engineering solutions and advanced consulting to optimize the lifecycle of your assets.",
        serv_consulting_title: "BIM Engineering & Design",
        serv_consulting_desc: "Feasibility studies, advanced structural calculation (steel/concrete) for logistics warehouses, BIM LOD 400 modeling and technical due diligence.",
        serv_management_title: "Project Management (EPC)",
        serv_management_desc: "Project Management under PMI methodologies. Flexible contracting schemes like Open Book and Turnkey with strict Capex control.",
        serv_outsourcing_title: "Technical Outsourcing",
        serv_outsourcing_desc: "Immediate supply of calculation engineers, BIM design draftsmen, site managers and quality inspectors on demand.",
        serv_support_title: "Specialized Field Support",
        serv_support_desc: "Facultative direction and Owner's Engineering in process plants, pre-commissioning, commissioning and HSE supervision.",
        
        sect_section_title: "SECTORS OF SPECIALIZATION",
        sect_section_desc: "We adapt our methodologies and engineering to the regulatory and quality requirements specific to each sector.",
        out_spot_title: "TECHNICAL TALENT OUTSOURCING ON DEMAND",
        out_spot_desc: "Ensure the continuity of your projects by incorporating highly qualified engineers, site managers, quality inspectors, and field technicians. We mitigate your hiring bottlenecks by providing specialized personnel.",
        
        trust_title: "PROVEN SOLVENCY",
        trust_subtitle: "Figures and quality standards that guarantee the success of your operations.",
        lead_title: "REQUEST A TECHNICAL PROPOSAL",
        lead_desc: "Do you have an industrial project or need to incorporate engineers immediately? Contact our technical office to evaluate your requirements and issue a personalized technical and economic proposal.",
        lead_item1: "Response and evaluation in less than 48 hours",
        lead_item2: "Calculations backed by CTE and Eurocodes",
        lead_item3: "Technical professionals available for immediate assignment",

        // Subpages translations
        consulting_hero_desc: "Detailed engineering and advanced structural calculation of high complexity. We ensure regulatory rigor and foundation/envelope optimization.",
        consulting_title1: "STRUCTURAL CALCULATION, LOGISTICS WAREHOUSES AND DETAIL DESIGN",
        consulting_p1: "Our technical office is highly specialized in modeling and calculating high-complexity structures, including singular industrial structures, wide-span logistics warehouses, and commercial platforms. We design optimized envelopes and foundation systems, ensuring building viability and safety.",
        consulting_p2: "We use advanced linear and non-linear calculation methodologies strictly under CTE and Eurocodes. We offer BIM modeling (LOD 300 / 400), workshop drawings, and rigorous technical justifications ready for official college approval or external auditing by control entities (OCT).",
        consulting_title2: "Feasibility Studies and Auditing (Due Diligence)",
        consulting_p3: "We help promoters and investors mitigate risks before buying or remodeling industrial assets. We perform technical due diligence on power plants, pathological analysis on existing structures, and installation project audits (RITE, PCI, APQ).",
        consulting_side_title: "Our Disciplines",
        consulting_discipline1: "Structural Calculation (Steel, Concrete, Timber)",
        consulting_discipline2: "Technical Auditing (Asset Due Diligence)",
        consulting_discipline3: "Installation Legalization (APQ, RITE, PCI)",
        consulting_discipline4: "BIM Modeling and Detailed Shop Drawings",
        consulting_discipline5: "Eurocodes and Technical Code (CTE) Justification",
        consulting_side_btn: "Request Technical Study",

        management_hero_desc: "Corporate Project Management under PMI/PMBOK methodologies. We offer flexible contracting schemes like Open Book and Turnkey to ensure cost and schedule targets.",
        management_title1: "PLANNING, TURNKEY MANAGEMENT AND COST CONTROL",
        management_p1: "In large industrial and commercial developments, coordination between contractors, procurement of main equipment, and budget deviation control represent a major challenge. At Consultomik, we provide certified project managers to act as a single point of contact for the property under transparent contracting models like Open Book or Turnkey.",
        management_p2: "We manage delivery schedules based on Critical Path methodology (Gantt/PERT/Primavera P6) and supervise cash flow. Furthermore, we meticulously plan industrial shutdowns or critical phases in close coordination with your production (chemical, food, pharmaceutical), ensuring execution without causing interference in your activity.",
        management_p3: "We preventively analyze technical and contractual risks. In case of deviations, we apply rigorous change control and claims management, ensuring minimal impact on time and budget.",
        management_side_title: "PM Services",
        management_discipline1: "Planning and Critical Path (Gantt, Primavera P6)",
        management_discipline2: "Cost Control and Management (Earned Value Management)",
        management_discipline3: "Contractor Prequalification and Coordination",
        management_discipline4: "Change Control and Claims Management",
        management_discipline5: "Shutdown Planning with Zero Production Interference",
        management_side_btn: "Request Project Manager",

        outsourcing_hero_desc: "Agile supply of design engineers, structural analysts, BIM draftsmen, and HSE technicians. We resolve your workload peaks and hiring bottlenecks.",
        outsourcing_title1: "FLEXIBLE INTEGRATION OF PROFESSIONALS AND TECHNICIANS",
        outsourcing_p1: "The shortage of specialized technical profiles can delay industrial contract execution. Consultomik's outsourcing model allows immediate onboarding of engineers, design draftsmen, and site supervisors to your organization under a 'site augmentation' scheme.",
        outsourcing_p2: "Our professionals operate under your guidelines directly at your offices or on site, backed by the technical supervision of our own cabinet to ensure optimal performance from day one.",
        outsourcing_p3: "We assume all labor and administrative responsibility (risk prevention, liability insurance, payroll, and technical training), allowing your project management to focus exclusively on site milestones and results.",
        outsourcing_side_title: "Available Profiles",
        outsourcing_profile1: "Mechanical / Structural Design & Analysis Engineers",
        outsourcing_profile2: "BIM Design Draftsmen (LOD 300 / 400)",
        outsourcing_profile3: "Site Managers and Field Supervisors (EPC)",
        outsourcing_profile4: "HSE Coordinators (Health, Safety & Environment)",
        outsourcing_profile5: "Commissioning Engineers & Technicians",
        outsourcing_side_btn: "Request Technical Profile",

        support_hero_desc: "Field facultative supervision and Owner's Engineering. We ensure quality and commissioning of your industrial facilities.",
        support_title1: "FACULTATIVE DIRECTION AND OWNER'S ENGINEERING",
        support_p1: "Ensuring that logistics structures, substations, distribution lines, or solar supports are assembled in accordance with the detailed project and regulations is a critical task. Our team assumes facultative direction and permanent on-site technical assistance.",
        support_p2: "We act as the promoter's eyes on site, checking strict compliance with QA/QC plans, and supervising commissioning tests prior to energization or process startup.",
        support_p3: "We draft safety plans, manage Business Activities Coordination (CAE), and perform Health and Safety Coordination during construction. We protect the developer legally and administratively, ensuring all subcontractors comply with HSE legislation.",
        support_side_title: "On-Site Services",
        support_discipline1: "Site Management (Civil, Mechanical, Electrical)",
        support_discipline2: "Owner's Engineering",
        support_discipline3: "Quality Control (QA/QC) and Field Testing",
        support_discipline4: "Health and Safety Coordination (HSE)",
        support_discipline5: "Commissioning & Pre-commissioning Supervision",
        support_side_btn: "Request Technical Support"
    },
    fr: {
        nav_home: "ACCUEIL",
        nav_company: "ENTREPRISE",
        nav_about_us: "À PROPOS DE NOUS",
        nav_team: "ÉQUIPE ET TALENT",
        nav_services: "SERVICES",
        nav_serv_consulting: "CONSEIL TECHNIQUE",
        nav_serv_management: "GESTION DE PROJETS",
        nav_serv_outsourcing: "OUTSOURCING TECHNIQUE",
        nav_serv_support: "SUPPORT SPÉCIALISÉ",
        nav_sectors: "SECTEURS",
        nav_projects: "PROJETS",
        nav_contact: "CONTACT",
        
        hero_title: "Ingénierie de Haute Précision pour la Décarbonation et l'Infrastructure Industrielle",
        hero_desc: "Nous concevons et exécutons des projets d'ingénierie de détail, de conseil énergétique ISO 50001 et des solutions clés en main (EPC) pour accélérer la transition durable des grandes industries.",
        intro_desc: "Chez <strong>Consultomik</strong>, nous apportons une solvabilité technique, des calculs avancés et la gestion de chantier. Nous nous intégrons aux promoteurs et constructeurs internationaux pour garantir la conformité de chaque projet industriel.",
        
        values_title: "NOTRE PROPOSITION DE VALEUR",
        values_subtitle: "Rigueur technique, adaptabilité opérationnelle et conformité industrielle de pointe.",
        val_solvency_title: "Solvabilité de Cabinet et de Terrain",
        val_solvency_desc: "Nous combinons calculs structurels avancés et conception réglementaire avec la méthodologie BIM et la direction de chantier.",
        val_flexibility_title: "Talent sur Demande",
        val_flexibility_desc: "Nous pallions la pénurie de talents dans les projets EPC en fournissant des ingénieurs d'études et des calculateurs immédiatement disponibles.",
        val_standard_title: "Conformité Réglementaire Stricte",
        val_standard_desc: "Nous maîtrisons les Eurocodes structurels, le CTE, les directives européennes de décarbonation et la sécurité industrielle (RITE, PCI, APQ).",
        
        services_section_title: "LIGNES D'INGÉNIERIE CORPORATIVE",
        services_section_desc: "Solutions d'ingénierie et conseil avancé pour optimiser le cycle de vie de vos actifs.",
        serv_consulting_title: "Ingénierie BIM & Calcul",
        serv_consulting_desc: "Études de faisabilité, calcul structurel (acier/béton) pour hangars logistiques, modélisation BIM LOD 400 et due diligence technique.",
        serv_management_title: "Gestion de Projet (EPC)",
        serv_management_desc: "Project Management selon les méthodologies PMI. Schémas contractuels flexibles type Open Book ou Clés en Main avec contrôle strict du Capex.",
        serv_outsourcing_title: "Outsourcing Technique",
        serv_outsourcing_desc: "Mise à disposition immédiate d'ingénieurs de calcul, projeteurs BIM, directeurs de travaux et inspecteurs qualité sur demande.",
        serv_support_title: "Support Technique de Terrain",
        serv_support_desc: "Direction de travaux et Owner's Engineering en usines de processus, pré-commissioning, commissioning et HSE.",
        
        sect_section_title: "SECTEURS DE SPÉCIALISATION",
        sect_section_desc: "Nous adaptons nos méthodologies et notre ingénierie aux exigences réglementaires et de qualité de chaque secteur.",
        out_spot_title: "OUTSOURCING DE TALENTS TECHNIQUES SUR DEMANDE",
        out_spot_desc: "Assurez la continuité de vos projets en intégrant des ingénieurs, chefs de chantier, inspecteurs qualité et techniciens de terrain hautement qualifiés.",
        
        trust_title: "SOLVABILITÉ PROUVÉE",
        trust_subtitle: "Des chiffres et des normes de qualité qui garantissent le succès de vos opérations.",
        lead_title: "DEMANDER UNE PROPOSITION TECHNIQUE",
        lead_desc: "Vous avez un projet industriel ou devez recruter immédiatement des ingénieurs ? Contactez notre bureau technique pour évaluer vos besoins.",
        lead_item1: "Réponse et évaluation en moins de 48 heures",
        lead_item2: "Calculs basés sur le CTE et les Eurocodes",
        lead_item3: "Professionnels techniques disponibles pour affectation immédiate"
    }
};

document.addEventListener('DOMContentLoaded', () => {

    // 1. Mobile Menu Toggle
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

    // 2. Language Switcher Logic
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

    // Load saved language or default to Spanish
    const savedLang = localStorage.getItem('selectedLang') || 'es';
    setLanguage(savedLang);

    // 3. Sticky Header Scroll Effect
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 4. Hero Slider Logic
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 1) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6000);
    }

    // 5. Counters Animation (IntersectionObserver triggered)
    const counters = document.querySelectorAll('.metric-number');
    const counterObserverOptions = {
        root: null,
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseFloat(target.getAttribute('data-count') || target.innerText.replace(/[^0-9.]/g, ''));
                if (!isNaN(endValue)) {
                    animateCount(target, endValue);
                }
                observer.unobserve(target);
            }
        });
    }, counterObserverOptions);

    function animateCount(element, endVal) {
        let startVal = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        const originalText = element.innerText;
        // Extract prefix and suffix (like + or %, or MW)
        const prefix = originalText.match(/^[^\d]+/)?.[0] || '';
        const suffix = originalText.match(/[^\d.]+$/)?.[0] || '';

        function updateCount(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = (easedProgress * endVal);
            
            // Format to 1 decimal place if it has a decimal point in original
            if (originalText.includes('.')) {
                element.innerText = `${prefix}${currentValue.toFixed(1)}${suffix}`;
            } else {
                element.innerText = `${prefix}${Math.floor(currentValue)}${suffix}`;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            }
        }

        requestAnimationFrame(updateCount);
    }

    counters.forEach(counter => {
        // Stash original number value in data-count attribute if not present
        if (!counter.getAttribute('data-count')) {
            const numVal = parseFloat(counter.innerText.replace(/[^0-9.]/g, ''));
            counter.setAttribute('data-count', numVal);
        }
        counterObserver.observe(counter);
    });

    // 6. Reveal Scroll Animations
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));

    // 7. Lightbox Zoom Logic (Projects)
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    if (lightboxModal) {
        lightboxModal.addEventListener('click', () => {
            lightboxModal.classList.remove('active');
        });
    }

    window.openLightbox = function (element) {
        if (!lightboxModal || !lightboxImg || !lightboxCaption) return;
        const img = element.querySelector('img');
        const h4 = element.querySelector('h4');
        const p = element.querySelector('p');
        
        lightboxImg.src = img.src;
        lightboxCaption.innerHTML = `<strong>${h4 ? h4.innerText : ''}</strong><br>${p ? p.innerText : ''}`;
        lightboxModal.classList.add('active');
    };

    // 8. Sectors interactive switching (Homepage)
    window.openSector = function(evt, sectorId) {
        const panes = document.querySelectorAll('.sector-pane');
        panes.forEach(pane => pane.classList.remove('active'));
        
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => btn.classList.remove('active'));
        
        const activePane = document.getElementById(sectorId);
        if (activePane) activePane.classList.add('active');
        evt.currentTarget.classList.add('active');
    };

    // 9. URL Success Query Parameter Swal alert
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success')) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);

        if (typeof Swal !== 'undefined') {
            Swal.fire({
                title: '¡Solicitud Recibida!',
                text: 'Hemos registrado su solicitud técnica. Un ingeniero corporativo evaluará sus pliegos y le responderá en menos de 48 horas hábiles.',
                icon: 'success',
                background: '#101018',
                color: '#f4f4f6',
                confirmButtonColor: '#00f5d4',
                confirmButtonText: 'Entendido'
            });
        } else {
            alert("¡Solicitud técnica B2B recibida correctamente! Nos pondremos en contacto en menos de 48 horas.");
        }
    }

    // 10. Form submission indicator
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const btn = this.querySelector('button[type="submit"]');
            if (btn) {
                btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Procesando Solicitud...`;
                btn.style.opacity = '0.75';
                btn.style.pointerEvents = 'none';
            }
        });
    }

    // 11. Initializing Lenis smooth scrolling from CDN if loaded
    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }

});
