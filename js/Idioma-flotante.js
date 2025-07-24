// Integración del interruptor visual con i18next flotante
    document.addEventListener('DOMContentLoaded', function() {
        var langToggle = document.getElementById('lang-toggle');
        // Estado inicial según idioma
        function setSwitchByLang(lng) {
            langToggle.checked = (lng === 'en');
        }
        // Esperar a que i18next esté disponible y que updateContent esté definido
        function waitI18n(cb) {
            if (window.i18next && typeof updateContent === 'function') cb();
            else setTimeout(function(){waitI18n(cb);}, 50);
        }
        waitI18n(function() {
            setSwitchByLang(i18next.language);
            langToggle.addEventListener('change', function() {
                var newLang = langToggle.checked ? 'en' : 'es';
                i18next.changeLanguage(newLang, function(){
                    setSwitchByLang(newLang);
                    updateContent();
                });
            });
            // Si el idioma cambia por otro medio, actualizar el switch y los textos
            i18next.on('languageChanged', function(lng){
                setSwitchByLang(lng);
                updateContent();
            });
        });
    });
