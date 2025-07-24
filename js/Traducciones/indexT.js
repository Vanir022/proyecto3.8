// js/Traducciones/indexT.js
// Configuración de i18next para traducción ES/EN

// Cargar i18next desde CDN si no está incluido en el HTML


(function loadI18next() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (!window.i18next) {
                var script = document.createElement('script');
                script.src = 'https://unpkg.com/i18next@23.10.0/dist/umd/i18next.min.js';
                script.onload = initI18n;
                document.head.appendChild(script);
            } else {
                initI18n();
            }
        });
    } else {
        if (!window.i18next) {
            var script = document.createElement('script');
            script.src = 'https://unpkg.com/i18next@23.10.0/dist/umd/i18next.min.js';
            script.onload = initI18n;
            document.head.appendChild(script);
        } else {
            initI18n();
        }
    }
})();

function initI18n() {
    // Detectar idioma guardado o usar español por defecto
    var savedLang = localStorage.getItem('lang') || 'es';
    i18next.init({
        lng: savedLang,
        debug: false,
        resources: {
            es: {
                translation: {
                    'Transportes Chasqui S.A.': 'Transportes Chasqui S.A.',
                    'INICIO': 'INICIO',
                    'SERVICIOS': 'SERVICIOS',
                    'CONTACTENOS': 'CONTACTENOS',
                    'Carga Pesada': 'Carga Pesada',
                    'Internacional': 'Internacional',
                    'Mudanzas': 'Mudanzas',
                    'Mercancías Peligrosas': 'Mercancías Peligrosas',
                    'DESTINOS': 'DESTINOS',
                    'Transporte terrestre de calidad': 'Transporte terrestre de calidad',
                    'Conectando destinos con seguridad y puntualidad desde 1995': 'Conectando destinos con seguridad y puntualidad desde 1995',
                    'Nuestros Servicios': 'Nuestros Servicios',
                    'Visión': 'Visión',
                    'Ser la empresa líder en transporte terrestre, reconocida por su puntualidad, seguridad y excelencia en el servicio.': 'Ser la empresa líder en transporte terrestre, reconocida por su puntualidad, seguridad y excelencia en el servicio.',
                    'Misión': 'Misión',
                    'Brindar soluciones de transporte confiables y eficientes, superando las expectativas de nuestros clientes con un equipo comprometido y profesional.': 'Brindar soluciones de transporte confiables y eficientes, superando las expectativas de nuestros clientes con un equipo comprometido y profesional.',
                    'NUESTRAS RUTAS': 'NUESTRAS RUTAS',
                    'Nuestros Valores': 'Nuestros Valores',
                    'Seguridad': 'Seguridad',
                    'Priorizamos la seguridad en cada viaje': 'Priorizamos la seguridad en cada viaje',
                    'Puntualidad': 'Puntualidad',
                    'Respetamos el tiempo de nuestros clientes': 'Respetamos el tiempo de nuestros clientes',
                    'Confianza': 'Confianza',
                    'Construimos relaciones duraderas': 'Construimos relaciones duraderas',
                    'Calidad': 'Calidad',
                    'Excelencia en cada servicio': 'Excelencia en cada servicio',
                    'Enlaces Rápidos': 'Enlaces Rápidos',
                    'Libro de Reclamaciones': 'Libro de Reclamaciones',
                    'Contáctenos': 'Contáctenos',
                    'Acerca de': 'Acerca de',
                    'Contacto': 'Contacto',
                    'Síguenos': 'Síguenos',
                    'Av. Principal 123, Trujillo': 'Av. Principal 123, Trujillo',
                    'Más rápido, más seguro!': '¡Más rápido, más seguro!',
                }
            },
            en: {
                translation: {
                    'Transportes Chasqui S.A.': 'Transport Chasqui S.A.',
                    'INICIO': 'HOME',
                    'SERVICIOS': 'SERVICES',
                    'CONTACTENOS': 'CONTACT US',
                    'Carga Pesada': 'Heavy Cargo',
                    'Internacional': 'International',
                    'Mudanzas': 'Moving',
                    'Mercancías Peligrosas': 'Dangerous Goods',
                    'DESTINOS': 'DESTINATIONS',
                    'Transporte terrestre de calidad': 'Quality land transport',
                    'Conectando destinos con seguridad y puntualidad desde 1995': 'Connecting destinations with safety and punctuality since 1995',
                    'Nuestros Servicios': 'Our Services',
                    'Visión': 'Vision',
                    'Ser la empresa líder en transporte terrestre, reconocida por su puntualidad, seguridad y excelencia en el servicio.': 'To be the leading land transport company, recognized for punctuality, safety, and service excellence.',
                    'Misión': 'Mission',
                    'Brindar soluciones de transporte confiables y eficientes, superando las expectativas de nuestros clientes con un equipo comprometido y profesional.': 'Provide reliable and efficient transport solutions, exceeding our clients’ expectations with a committed and professional team.',
                    'NUESTRAS RUTAS': 'OUR ROUTES',
                    'Nuestros Valores': 'Our Values',
                    'Seguridad': 'Safety',
                    'Priorizamos la seguridad en cada viaje': 'We prioritize safety on every trip',
                    'Puntualidad': 'Punctuality',
                    'Respetamos el tiempo de nuestros clientes': 'We respect our clients’ time',
                    'Confianza': 'Trust',
                    'Construimos relaciones duraderas': 'We build lasting relationships',
                    'Calidad': 'Quality',
                    'Excelencia en cada servicio': 'Excellence in every service',
                    'Enlaces Rápidos': 'Quick Links',
                    'Libro de Reclamaciones': 'Complaints Book',
                    'Contáctenos': 'Contact Us',
                    'Acerca de': 'About',
                    'Contacto': 'Contact',
                    'Síguenos': 'Follow Us',
                    'Av. Principal 123, Trujillo': 'Av. Principal 123, Trujillo',
                    'Más rápido, más seguro!': 'Faster, safer!'
                }
            }
        }
    }, function(err, t) {
        updateContent();
        // Sincronizar el estado visual del botón flotante de idioma
        var langToggle = document.getElementById('lang-toggle');
        if (langToggle) {
            langToggle.checked = (i18next.language === 'en');
        }
    });

    // Manejar el cambio de idioma con el botón flotante personalizado
    var langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('change', function(e) {
            var lang = langToggle.checked ? 'en' : 'es';
            localStorage.setItem('lang', lang);
            i18next.changeLanguage(lang, updateContent);
        });
    }
}

// Actualiza los textos traducibles
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
    });
}
