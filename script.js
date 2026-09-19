import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

/* ============ Config ============ */
const EMAIL = "angie308.caballero@gmail.com";

mermaid.initialize({
    startOnLoad: false,
    theme: "base",
    themeVariables: {
        primaryColor: "#124f48",
        primaryTextColor: "#eafaf7",
        primaryBorderColor: "#4fb3a9",
        lineColor: "#4fb3a9",
        secondaryColor: "#0d3b36",
        tertiaryColor: "#1b6b61",
        fontFamily: "Inter, sans-serif"
    }
});

/* ============ i18n ============ */
const translations = {
    es: {
        "nav.projects": "Proyectos",
        "nav.architecture": "Arquitectura",
        "nav.contact": "Contacto",
        "hero.badge": "Abierto a oportunidades",
        "hero.subtitle": "Científica de Datos | Arquitectura Cloud & Optimización",
        "hero.text": "Transformando datos complejos en soluciones escalables y valor de negocio tangible.",
        "hero.cta.projects": "Ver Proyectos",
        "hero.cta.cv": "Descargar CV",
        "hero.cv.hint": "PDF — Actualizado 2025",
        "arch.title": "Diseño de Sistemas Complejos",
        "arch.subtitle": "Arquitecturas de datos y microservicios. Haz clic para ver el diagrama.",
        "arch.btn": "Ver Diagrama de Sistema",
        "projects.title": "Proyectos Destacados",
        "p4.featured": "Proyecto Destacado",
        "p4.title": "Causal Fillups",
        "p4.tag": "Inferencia Causal & ML",
        "p4.desc": "Sistema que combina RCT, modelo Logit, inferencia causal (ATE/CATE) y Thompson Sampling para reducir robo de diesel en operaciones de flota. Ciclo virtuoso: experimentación → predicción → causalidad → optimización.",
        "p4.btn": "Ver Arquitectura",
        "p1.title": "YSGA-PyRust",
        "p1.tag": "R&D y Optimización",
        "p1.desc": "Librería híbrida de metaheurísticas para VRP. Aceleración 50x vs Python puro usando bindings de Rust y paralelismo CUDA.",
        "p1.btn": "Ver en GitHub",
        "p2.title": "API Fleet 2.0",
        "p2.tag": "Logística Analytics & AWS Serverless",
        "p2.desc.html": "<strong>Visión de Negocio:</strong> Transformación de telemetría vehicular en un producto de valor agregado con trazabilidad total, reduciendo la carga operativa del equipo de monitoreo.<br><br><strong>Implementación:</strong> Arquitectura orientada a eventos para procesar flujos de datos en tiempo real y proporcionar información crítica de las unidades.",
        "p3.title": "Auditoría Inteligente",
        "p3.tag": "Automation",
        "p3.desc": "Ecosistema de automatización documental. Extracción OCR/NLP para auditoría comercial y compliance normativo.",
        "p3.btn": "Ver Arquitectura",
        "dash.title": "Dashboards & Analytics",
        "dash.subtitle": "Visualización de KPIs operativos en tiempo real. Stack: SQL, Polars, Looker/Streamlit.",
        "contact.title": "Conectemos",
        "contact.subtitle": "¿Interesado en colaborar o discutir sobre datos y arquitectura? Encuéntrame en mis redes.",
        "contact.li": "Conecta profesionalmente",
        "contact.gh": "Explora mi código",
        "contact.mail": "Contáctame directamente",
        "footer.copy": "© 2026 Angelica Caballero. Todos los derechos reservados.",
        "modal.audit.title": "Arquitectura: Auditoría Inteligente",
        "modal.arch.title": "Pipeline de Datos — Diseño General",
        "modal.causal.title": "Arquitectura: Causal Fillups",
        "modal.causal.tab.diagram": "Diagrama",
        "modal.causal.tab.image": "Imagen Detallada",
        "fcta.label": "Contáctame",
        "toast.email": "Email copiado al portapapeles"
    },
    en: {
        "nav.projects": "Projects",
        "nav.architecture": "Architecture",
        "nav.contact": "Contact",
        "hero.badge": "Open to opportunities",
        "hero.subtitle": "Data Scientist | Cloud Architecture & Optimization",
        "hero.text": "Turning complex data into scalable solutions and tangible business value.",
        "hero.cta.projects": "View Projects",
        "hero.cta.cv": "Download CV",
        "hero.cv.hint": "PDF — Updated 2025",
        "arch.title": "Designing Complex Systems",
        "arch.subtitle": "Data and microservice architectures. Click to see the diagram.",
        "arch.btn": "View System Diagram",
        "projects.title": "Featured Projects",
        "p4.featured": "Featured Project",
        "p4.title": "Causal Fillups",
        "p4.tag": "Causal Inference & ML",
        "p4.desc": "System combining RCT, a Logit model, causal inference (ATE/CATE) and Thompson Sampling to reduce diesel theft in fleet operations. Virtuous cycle: experimentation → prediction → causality → optimization.",
        "p4.btn": "View Architecture",
        "p1.title": "YSGA-PyRust",
        "p1.tag": "R&D and Optimization",
        "p1.desc": "Hybrid metaheuristics library for VRP. 50x speed-up over pure Python using Rust bindings and CUDA parallelism.",
        "p1.btn": "View on GitHub",
        "p2.title": "API Fleet 2.0",
        "p2.tag": "Logistics Analytics & AWS Serverless",
        "p2.desc.html": "<strong>Business Vision:</strong> Turning vehicle telemetry into a value-added product with full traceability, reducing the monitoring team's operational load.<br><br><strong>Implementation:</strong> Event-driven architecture to process real-time data streams and surface critical fleet information.",
        "p3.title": "Smart Audit",
        "p3.tag": "Automation",
        "p3.desc": "Document automation ecosystem. OCR/NLP extraction for commercial auditing and regulatory compliance.",
        "p3.btn": "View Architecture",
        "dash.title": "Dashboards & Analytics",
        "dash.subtitle": "Real-time operational KPI visualization. Stack: SQL, Polars, Looker/Streamlit.",
        "contact.title": "Let's Connect",
        "contact.subtitle": "Interested in collaborating or talking about data and architecture? Find me on my socials.",
        "contact.li": "Connect professionally",
        "contact.gh": "Explore my code",
        "contact.mail": "Reach me directly",
        "footer.copy": "© 2026 Angelica Caballero. All rights reserved.",
        "modal.audit.title": "Architecture: Smart Audit",
        "modal.arch.title": "Data Pipeline — General Design",
        "modal.causal.title": "Architecture: Causal Fillups",
        "modal.causal.tab.diagram": "Diagram",
        "modal.causal.tab.image": "Detailed Image",
        "fcta.label": "Contact me",
        "toast.email": "Email copied to clipboard"
    }
};

function applyLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
    const langBtn = document.querySelector(".lang-toggle");
    if (langBtn) langBtn.textContent = lang === "es" ? "EN" : "ES";
}

function initLanguage() {
    const saved = localStorage.getItem("lang") || "es";
    applyLanguage(saved);
    document.querySelector(".lang-toggle")?.addEventListener("click", () => {
        const current = localStorage.getItem("lang") || "es";
        applyLanguage(current === "es" ? "en" : "es");
    });
}

/* ============ Theme ============ */
function initTheme() {
    const btn = document.querySelector(".theme-toggle");
    const icon = btn?.querySelector("i");
    const setIcon = () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (icon) icon.className = isLight ? "fa-solid fa-sun" : "fa-solid fa-moon";
    };
    setIcon();
    btn?.addEventListener("click", () => {
        const isLight = document.documentElement.getAttribute("data-theme") === "light";
        if (isLight) {
            document.documentElement.removeAttribute("data-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
        }
        setIcon();
    });
}

/* ============ Mobile menu ============ */
function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navbar = document.querySelector(".navbar");
    hamburger?.addEventListener("click", () => {
        navbar.classList.toggle("nav-open");
    });
    navbar?.querySelectorAll(".nav-links-text a").forEach((link) => {
        link.addEventListener("click", () => navbar.classList.remove("nav-open"));
    });
}

/* ============ Reveal on scroll ============ */
function initReveal() {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
}

/* ============ Mermaid diagrams ============ */
const diagrams = {
    archModal: `flowchart LR
        A[Fuentes de Datos] --> B[Ingesta]
        B --> C[(Data Lake)]
        C --> D[Procesamiento]
        D --> E[(Data Warehouse)]
        E --> F[Serving Layer]
        F --> G[Dashboards / BI]`,
    auditModal: `flowchart LR
        A[Documento] --> B[OCR / Textract]
        B --> C[Extracción NLP]
        C --> D[Validación de Reglas]
        D --> E{Cumple Normativa?}
        E -- Sí --> F[Reporte de Auditoría]
        E -- No --> G[Alerta de Compliance]`,
    causalModal: `flowchart LR
        A[Experimento RCT] --> B[Modelo Logit]
        B --> C[Inferencia Causal ATE/CATE]
        C --> D[Thompson Sampling]
        D --> E[Acción en Flota]
        E -.-> A`
};

const renderedModals = new Set();

async function renderDiagram(modalId) {
    if (renderedModals.has(modalId)) return;
    const modal = document.getElementById(modalId);
    const container = modal?.querySelector(".mermaid");
    if (!container || !diagrams[modalId]) return;
    try {
        const { svg } = await mermaid.render(`${modalId}-svg`, diagrams[modalId]);
        container.innerHTML = svg;
        renderedModals.add(modalId);
    } catch (err) {
        container.textContent = "No se pudo cargar el diagrama.";
        console.error("Mermaid render error:", err);
    }
}

/* ============ Modals ============ */
function openModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    renderDiagram(id);
}

function closeModal(modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

function initModals() {
    document.querySelectorAll("[data-open-modal]").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal(btn.getAttribute("data-open-modal"));
        });
    });
    document.querySelectorAll(".close-modal").forEach((btn) => {
        btn.addEventListener("click", () => {
            closeModal(document.getElementById(btn.getAttribute("data-modal")));
        });
    });
    document.querySelectorAll(".modal").forEach((modal) => {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            document.querySelectorAll(".modal.open").forEach(closeModal);
        }
    });

    /* Tabs dentro del modal Causal Fillups */
    document.querySelectorAll(".modal-tab").forEach((tab) => {
        tab.addEventListener("click", () => {
            const modalContent = tab.closest(".modal-content");
            modalContent.querySelectorAll(".modal-tab").forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            const target = tab.getAttribute("data-tab");
            modalContent.querySelectorAll(".modal-tab-content").forEach((panel) => {
                panel.style.display = panel.getAttribute("data-content") === target ? "block" : "none";
            });
        });
    });
}

/* ============ Floating CTA ============ */
function initFloatingCta() {
    const cta = document.getElementById("floatingCta");
    const hero = document.querySelector(".hero");
    if (!cta || !hero) return;
    const threshold = hero.offsetHeight * 0.7;
    window.addEventListener("scroll", () => {
        cta.classList.toggle("visible", window.scrollY > threshold);
    });
}

/* ============ Toast + copy email ============ */
function showToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

function initEmailCopy() {
    document.querySelectorAll(`a[href^="mailto:"]`).forEach((link) => {
        link.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(EMAIL);
                showToast();
            } catch (err) {
                console.error("No se pudo copiar el email:", err);
            }
        });
    });
}

/* ============ Init ============ */
document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
    initTheme();
    initHamburger();
    initReveal();
    initModals();
    initFloatingCta();
    initEmailCopy();
});
