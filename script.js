// ===== Language data =====
const translations = {
  es: {
    pageTitle: "Angelica Navarrete — Analista de Datos Ambiental",
    metaDesc: "Portafolio de Angelica Navarrete: bioquímica ambiental especializada en tratamiento de agua, en transición hacia data science.",
    navProfile: "Perfil",
    navExperience: "Trayectoria",
    navSkills: "Habilidades",
    navProjects: "Proyectos",
    navContact: "Contacto",
    heroEyebrow: "Recursos hídricos · Cumplimiento ambiental · Análisis de datos",
    heroLede: "Bioquímica ambiental con cinco años dirigiendo proyectos de tratamiento de agua y trámites regulatorios en el sector energético, ahora sumando análisis de datos para tomar mejores decisiones sobre los recursos que sostienen todo lo demás.",
    btnProjects: "Ver proyectos",
    btnContact: "Escríbeme",
    statYears: "años en tratamiento de agua y gestión regulatoria",
    statCert: "certificación en análisis de datos",
    aboutTitle: "Perfil",
    aboutP1: "Pasé cinco años en el sector energético mexicano gestionando permisos ante entidades regulatoria y elaborando informes técnicos para proyectos de extracción de gas natural, además de trabajar directamente en tratamiento de agua. Ese trabajo me enseñó que las decisiones ambientales serias dependen de datos bien manejados, no solo de buenas intenciones.",
    aboutP2: "Hoy estoy completando un bootcamp de análisis de datos para llevar esa misma disciplina técnica a herramientas más modernas: Python, SQL y visualización de datos aplicados a problemas de agua, cumplimiento normativo y sostenibilidad.",
    aboutP3: "Busco roles híbridos donde la ciencia ambiental y los datos se encuentren, en Latinoamérica o Estados Unidos.",
    experienceTitle: "Trayectoria",
    t1date: "2026", t1title: "Bootcamp de Análisis de Datos",
    t1desc: "Formación intensiva en Python, SQL, visualización de datos y fundamentos de machine learning, con proyectos aplicados a problemas ambientales.",
    t2date: "2018–2023", t2title: "Gestión de Proyectos y Permisos Regulatorios",
    t2desc: "Secretaría de Energía, sector de extracción de gas natural, México. Elaboración de informes de gestión de proyectos y trámite de permisos ante la entidad regulatoria correspondiente.",
    t3date: "2018–2023", t3title: "Tratamiento de Agua",
    t3desc: "Cinco años de experiencia técnica en procesos de tratamiento de agua dentro del sector energético en México.",
    t4date: "Universidad", t4title: "Bioquímica Ambiental",
    t4desc: "Formación de base en bioquímica ambiental, el fundamento técnico detrás de todo el trabajo posterior en agua y cumplimiento normativo.",
    timelineNote: "* Reemplaza los nombres de instituciones y fechas exactas con tu información completa.",
    skillsTitle: "Habilidades",
    skillsColEnv: "Ambiental & regulatorio",
    skillEnv1: "Tratamiento y calidad de agua",
    skillEnv2: "Bioquímica ambiental",
    skillEnv3: "Gestión de permisos regulatorios",
    skillEnv4: "Informes técnicos de proyecto",
    skillEnv5: "Cumplimiento normativo, sector energético",
    skillsColData: "Datos & análisis",
    skillData1: "Python (pandas, análisis exploratorio)",
    skillData2: "SQL",
    skillData3: "Visualización de datos",
    skillData4: "Estadística aplicada",
    skillData5: "Fundamentos de machine learning",
    projectsTitle: "Proyectos",
    projectsNote: "Los proyectos abajo son marcadores de posición — reemplázalos con tus entregables reales del bootcamp cuando los tengas listos.",
    tagPlaceholder: "Marcador de posición",
    p1title: "Panel de calidad de agua",
    p1desc: "Dashboard exploratorio sobre indicadores de calidad de agua en una cuenca hidrográfica, identificando tendencias y valores fuera de norma a lo largo del tiempo.",
    tagViz: "Visualización",
    p2title: "Predicción de cumplimiento normativo",
    p2desc: "Modelo exploratorio para anticipar riesgo de incumplimiento en plantas de tratamiento a partir de datos históricos de inspección.",
    p3title: "Análisis de consumo de agua industrial",
    p3desc: "Estudio de patrones de consumo de agua en procesos industriales, con recomendaciones basadas en datos para reducir desperdicio.",
    tagStats: "Estadística",
    viewRepo: "Ver repositorio →",
    contactTitle: "Hablemos.",
    contactLede: "Abierta a roles híbridos entre medio ambiente y tecnología, en Latinoamérica o Estados Unidos.",
    contactLinkedin: "LinkedIn — reemplaza con tu URL",
    contactGithub: "GitHub — reemplaza con tu usuario",
    footerNote: "Angelica Navarrete · Hecho a mano, sin plantillas."
  },
  en: {
    pageTitle: "Angelica Navarrete — Environmental Data Analyst",
    metaDesc: "Portfolio of Angelica Navarrete — environmental biochemist specializing in water treatment, transitioning into data science.",
    navProfile: "Profile",
    navExperience: "Experience",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Contact",
    heroEyebrow: "Water resources · Environmental compliance · Data analysis",
    heroLede: "Environmental biochemist with five years leading water treatment projects and regulatory permitting in the energy sector, now adding data analysis to make better decisions about the resources everything else depends on.",
    btnProjects: "View projects",
    btnContact: "Get in touch",
    statYears: "years in water treatment and regulatory management",
    statCert: "data analytics certification",
    aboutTitle: "Profile",
    aboutP1: "I spent five years in Mexico's energy sector managing permits with regulatory authorities and writing technical reports for natural gas extraction projects, alongside hands-on work in water treatment. That work taught me that serious environmental decisions depend on well-handled data, not just good intentions.",
    aboutP2: "I'm now completing a data analytics bootcamp to bring that same technical discipline to more modern tools — Python, SQL, and data visualization — applied to problems in water, regulatory compliance, and sustainability.",
    aboutP3: "I'm looking for hybrid roles where environmental science and data meet, across Latin America and the U.S.",
    experienceTitle: "Experience",
    t1date: "2026", t1title: "Data Analytics Bootcamp",
    t1desc: "Intensive training in Python, SQL, data visualization, and machine learning fundamentals, with projects applied to environmental problems.",
    t2date: "2018–2023", t2title: "Project Management & Regulatory Permitting",
    t2desc: "Secretaría de Energía, natural gas extraction sector, Mexico. Prepared project management reports and managed permitting processes with the relevant regulatory authority.",
    t3date: "2018–2023", t3title: "Water Treatment",
    t3desc: "Five years of hands-on technical experience in water treatment processes within Mexico's energy sector.",
    t4date: "University", t4title: "Environmental Biochemistry",
    t4desc: "Foundational training in environmental biochemistry — the technical basis for all the water and compliance work that followed.",
    timelineNote: "* Swap in your actual institution names and exact dates.",
    skillsTitle: "Skills",
    skillsColEnv: "Environmental & regulatory",
    skillEnv1: "Water treatment & quality",
    skillEnv2: "Environmental biochemistry",
    skillEnv3: "Regulatory permitting",
    skillEnv4: "Technical project reporting",
    skillEnv5: "Regulatory compliance, energy sector",
    skillsColData: "Data & analytics",
    skillData1: "Python (pandas, exploratory analysis)",
    skillData2: "SQL",
    skillData3: "Data visualization",
    skillData4: "Applied statistics",
    skillData5: "Machine learning fundamentals",
    projectsTitle: "Projects",
    projectsNote: "The projects below are placeholders — swap them out for your real bootcamp deliverables once they're ready.",
    tagPlaceholder: "Placeholder",
    p1title: "Water Quality Dashboard",
    p1desc: "Exploratory dashboard tracking water quality indicators across a river basin, surfacing trends and out-of-range readings over time.",
    tagViz: "Visualization",
    p2title: "Regulatory Compliance Prediction",
    p2desc: "Exploratory model to flag compliance risk at treatment plants based on historical inspection data.",
    p3title: "Industrial Water Consumption Analysis",
    p3desc: "Study of water consumption patterns in industrial processes, with data-backed recommendations to reduce waste.",
    tagStats: "Statistics",
    viewRepo: "View repository →",
    contactTitle: "Let's talk.",
    contactLede: "Open to hybrid roles between environment and technology, across Latin America and the U.S.",
    contactLinkedin: "LinkedIn — add your URL",
    contactGithub: "GitHub — add your username",
    footerNote: "Angelica Navarrete · Handcrafted, no templates."
  }
};
 
let currentLang = "es";
 
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
 
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = translations[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });
 
  document.title = translations[lang].pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", translations[lang].metaDesc);
 
  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.classList.toggle("is-active", opt.getAttribute("data-lang") === lang);
  });
}
 
const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "es" ? "en" : "es");
  });
}
// Resalta el enlace de navegación de la sección visible actualmente
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.topbar nav a');

const setActive = () => {
  let current = '';
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });
  navLinks.forEach((link) => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--deep)' : '';
  });
};

window.addEventListener('scroll', setActive, { passive: true });
setActive();
