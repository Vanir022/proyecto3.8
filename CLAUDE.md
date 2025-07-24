# CodeViz Research Context

> **Note**: This file contains research context from CodeViz. Most recent contexts are at the bottom.

---

## Research Query

.

*Session: 7ccc8ed30da313e83469622e3c34289a | Generated: 6/7/2025, 23:49:47*

### Analysis Summary

# Project Overview

This project is a web application primarily built with HTML, CSS, and JavaScript for the frontend, and PHP for backend form processing. It appears to be a website for a transportation or logistics company, featuring sections for services, destinations, contact information, and a complaint book.

## High-Level Architecture

The application follows a traditional client-server architecture. The **Frontend** handles user interaction, content display, and dynamic UI elements, while the **Backend** processes form submissions. Static assets like images and audio are served directly.

*   **Frontend**: Comprises HTML pages for structure and content, CSS for styling, and JavaScript for interactivity.
*   **Backend**: Consists of PHP scripts that handle server-side logic, primarily for processing user input from forms.
*   **Assets**: Includes images and audio files used across the website.

## Core Components

### **HTML Structure**

The HTML files define the content and layout of the website. They are organized into a main directory and subdirectories for specific sections.

*   **Purpose**: To provide the structural foundation and content for all web pages.
*   **Internal Parts**:
    *   **Main Pages**:
        *   [index.html](index.html): Likely the primary landing page of the website.
        *   [index1.html](index1.html): Potentially an alternative or secondary landing page.
    *   **Navigation Pages**:
        *   [html/destinos.html](html/destinos.html): Displays information about various destinations.
        *   [html/servicios.html](html/servicios.html): Outlines the services offered by the company.
    *   **Footer-Related Pages**: These pages are typically linked from the website's footer.
        *   [html/footer/acerca.html](html/footer/acerca.html): Provides information "About Us".
        *   [html/footer/contactenos.html](html/footer/contactenos.html): Contains contact details and a contact form.
        *   [html/footer/Libro de reclamaciones.html](html/footer/Libro de reclamaciones.html): A digital "Complaint Book" for user feedback.
    *   **Service-Specific Pages**: Detailed pages for individual services.
        *   [html/servicios/carga_pesadas.html](html/servicios/carga_pesadas.html): Information on heavy cargo services.
        *   [html/servicios/internacional.html](html/servicios/internacional.html): Details on international services.
        *   [html/servicios/mercancias_peligrosas.html](html/servicios/mercancias_peligrosas.html): Information regarding hazardous materials transport.
        *   [html/servicios/mudanzas.html](html/servicios/mudanzas.html): Details on moving services.
        *   [html/servicios/peligro.html](html/servicios/peligro.html): Potentially a page related to dangerous goods or safety.
    *   **Destination-Specific Pages**:
        *   [Destinos/1lugar.html](Destinos/1lugar.html): A specific page detailing a particular destination.
*   **External Relationships**: HTML files link to CSS files for styling, JavaScript files for interactivity, and PHP scripts for form submissions. They also embed images and audio.

### **CSS Styling**

The `css/` directory contains all stylesheets responsible for the visual presentation of the website.

*   **Purpose**: To define the visual appearance, layout, and responsiveness of the web pages.
*   **Internal Parts**:
    *   **Global Styles**: [css/style_Globales.css](css/style_Globales.css) likely contains overarching styles applied across the entire site.
    *   **Layout & Component-Specific Styles**:
        *   [css/style_Header.css](css/style_Header.css), [css/header-anim.css](css/header-anim.css), [css/Hamburguesa.css](css/Hamburguesa.css), [css/style_Navigation.css](css/style_Navigation.css): Styles for the header, navigation menu, and responsive hamburger icon.
        *   [css/style_Hero Section.css](css/style_Hero Section.css): Styles for the main hero banner.
        *   [css/carrucel_principal.css](css/carrucel_principal.css), [css/probando.css](css/probando.css): Styles related to carousels or sliders.
        *   [css/style_Footer.css](css/style_Footer.css): Styles for the website footer.
    *   **Page/Section-Specific Styles**:
        *   [css/style_acerca.css](css/style_acerca.css), [css/style_Audio.css](css/style_Audio.css), [css/style_Contactenos.css](css/style_Contactenos.css), [css/style_destinos.css](css/style_destinos.css), [css/style_reclamaciones.css](css/style_reclamaciones.css), [css/style_Services.css](css/style_Services.css), [css/style_values.css](css/style_values.css), [css/style_Vision-Mission.css](css/style_Vision-Mission.css): Styles tailored for specific content sections or pages.
    *   **Utility/Feature Styles**:
        *   [css/IDIOMA.css](css/IDIOMA.css): Styles for language selection elements.
        *   [css/pantallacarga.css](css/pantallacarga.css): Styles for a loading screen or animation.
    *   **Service-Specific Styles**: [css/servicion/cargapesada.css](css/servicion/cargapesada.css): Styles specific to the heavy cargo service page.
*   **External Relationships**: CSS files are linked and applied by HTML documents.

### **JavaScript Functionality**

The `js/` directory contains JavaScript files that add interactivity and dynamic behavior to the website.

*   **Purpose**: To enhance user experience through dynamic content, animations, form validation, and client-side logic.
*   **Internal Parts**:
    *   **Header & Navigation**:
        *   [js/header.js](js/header.js): General header functionality.
        *   [js/header-anim.js](js/header-anim.js): Handles header animations.
        *   [js/Menu-responsivo.js](js/Menu-responsivo.js): Manages the responsive navigation menu (hamburger menu).
    *   **Carousels**:
        *   [js/carrusel.js](js/carrusel.js): Core carousel logic.
        *   [js/Carrusel-Infinito.js](js/Carrusel-Infinito.js): Implements an infinite carousel.
    *   **Language & Translation**:
        *   [js/Idioma-flotante.js](js/Idioma-flotante.js): Controls a floating language selection element.
        *   [js/Traducciones/indexT.js](js/Traducciones/indexT.js): Contains translation data or logic for the `index.html` page.
    *   **Data Management**: [js/destinosData.js](js/destinosData.js): Likely provides data for the destinations pages, possibly loaded dynamically.
*   **External Relationships**: JavaScript files are executed by HTML documents and can interact with the DOM, fetch data, and send requests to PHP backend scripts.

### **PHP Backend**

The `php/` directory contains PHP scripts that handle server-side processing, primarily for forms.

*   **Purpose**: To process data submitted from frontend forms, such as contact inquiries, complaints, or reservations.
*   **Internal Parts**:
    *   [php/enviar_contacto.php](php/enviar_contacto.php): Processes submissions from the contact form.
    *   [php/enviar_reclamo.php](php/enviar_reclamo.php): Handles submissions to the complaint book.
    *   [php/reserva.php](php/reserva.php): Manages reservation requests.
*   **External Relationships**: These scripts receive data via HTTP POST requests from HTML forms and typically send emails or store data in a database (though database interaction is not explicitly visible from the file names).

### **Assets**

The `audio/` and `images/` directories store multimedia files used throughout the website.

*   **Purpose**: To provide visual and auditory content to enhance the user experience.
*   **Internal Parts**:
    *   **Audio**: [audio/audio.mp3](audio/audio.mp3): An audio file, possibly for background music or sound effects.
    *   **Images**: [images/](images/) contains various image files (e.g., [images/hero.png](images/hero.png), [images/logo.png](images/logo.png), [images/Icono.ico](images/Icono.ico), and several user/team photos like [images/Fer.jpg](images/Fer.jpg), [images/Jolby.jpg](images/Jolby.jpg), [images/Octavio.jpg](images/Octavio.jpg), [images/Vanir.jpg](images/Vanir.jpg)).
*   **External Relationships**: These assets are embedded or referenced within HTML and CSS files.

---

## Research Query

que este en español

*Session: 5e295809290d3c4cb9a5f03c72142ff4 | Generated: 6/7/2025, 23:51:25*

### Analysis Summary

# Sistema de Traducción de Idiomas

El sistema de traducción de idiomas de este proyecto permite a los usuarios cambiar el contenido de la página entre español (ES) e inglés (EN). La funcionalidad principal se basa en la librería `i18next` y se implementa a través de archivos JavaScript y CSS dedicados.

## Componente Principal: Traducción con i18next

El corazón del sistema de traducción reside en el archivo [indexT.js](js/Traducciones/indexT.js).

### Propósito
Este archivo es responsable de:
*   Cargar la librería `i18next` dinámicamente si no está disponible.
*   Inicializar `i18next` con las traducciones para español (`es`) e inglés (`en`).
*   Definir las cadenas de texto que serán traducidas en la aplicación.
*   Actualizar el contenido de la página cuando el idioma cambia, buscando elementos con el atributo `data-i18n`.

### Partes Internas
*   **`loadI18next()`**: Función anónima que verifica la existencia de `i18next` y lo carga desde un CDN si es necesario [indexT.js](js/Traducciones/indexT.js:4-11).
*   **`initI18n()`**: Inicializa `i18next` con las configuraciones de idioma y las traducciones. Contiene objetos `translation` para `es` y `en` con pares clave-valor para las cadenas traducibles [indexT.js](js/Traducciones/indexT.js:13-100).
*   **`updateContent()`**: Itera sobre todos los elementos HTML que tienen el atributo `data-i18n` y actualiza su `innerHTML` con la traducción correspondiente obtenida de `i18next.t()` [indexT.js](js/Traducciones/indexT.js:109-112).
*   **Manejador de Eventos**: Un `EventListener` en el elemento con `id='lang-switch'` (que se asume es un `select` o similar) detecta cambios para invocar `i18next.changeLanguage()` [indexT.js](js/Traducciones/indexT.js:103-106).

## Componente de Interfaz de Usuario: Selector de Idioma Flotante

La interacción del usuario para cambiar el idioma se gestiona a través del archivo [Idioma-flotante.js](js/Idioma-flotante.js).

### Propósito
Este archivo se encarga de:
*   Controlar el estado visual de un interruptor de idioma (toggle switch) basado en el idioma actual.
*   Manejar los eventos de cambio en el interruptor para actualizar el idioma a través de `i18next`.
*   Sincronizar el interruptor visual con los cambios de idioma que puedan ocurrir por otros medios.

### Partes Internas
*   **`DOMContentLoaded` Listener**: Asegura que el script se ejecuta una vez que el DOM está completamente cargado [Idioma-flotante.js](js/Idioma-flotante.js:2).
*   **`setSwitchByLang(lng)`**: Función que actualiza la propiedad `checked` del elemento `langToggle` (un checkbox) según el idioma (`es` o `en`) [Idioma-flotante.js](js/Idioma-flotante.js:4-6).
*   **`waitI18n(cb)`**: Función recursiva que espera a que `i18next` y la función `updateContent` estén disponibles antes de ejecutar un callback [Idioma-flotante.js](js/Idioma-flotante.js:8-12).
*   **Manejador de Eventos del Interruptor**: Un `EventListener` en `langToggle` detecta cambios y llama a `i18next.changeLanguage()` para cambiar el idioma y luego actualiza el interruptor y el contenido [Idioma-flotante.js](js/Idioma-flotante.js:16-21).
*   **`i18next.on('languageChanged')`**: Escucha el evento `languageChanged` de `i18next` para asegurar que el interruptor visual y el contenido se actualizan si el idioma cambia programáticamente [Idioma-flotante.js](js/Idioma-flotante.js:23-26).

## Estilos Visuales: CSS del Idioma

Los estilos para el selector de idioma flotante y las banderas se definen en el archivo [IDIOMA.css](css/IDIOMA.css).

### Propósito
Este archivo proporciona la apariencia visual para el botón flotante de idioma, el interruptor (slider) y las banderas de los idiomas.

### Partes Internas
*   **`.lang-float-btn`**: Estilos para el contenedor principal del botón flotante, incluyendo posicionamiento fijo, sombreado y transiciones [IDIOMA.css](css/IDIOMA.css:8-22).
*   **`.lang-toggle-label`**: Estilos para la etiqueta que contiene el interruptor, definiendo su apariencia y comportamiento [IDIOMA.css](css/IDIOMA.css:23-34).
*   **`.lang-slider`**: Estilos para el "deslizador" dentro del interruptor, que cambia de posición para indicar el idioma seleccionado [IDIOMA.css](css/IDIOMA.css:35-43).
*   **`#lang-toggle:checked + .lang-toggle-label .lang-slider`**: Regla CSS que mueve el deslizador cuando el checkbox (`#lang-toggle`) está marcado (indicando inglés) [IDIOMA.css](css/IDIOMA.css:44-46).
*   **`.flag`, `.flag-es`, `.flag-en`**: Estilos para las banderas de los idiomas, incluyendo el tamaño y las imágenes de fondo para las banderas de España y Estados Unidos [IDIOMA.css](css/IDIOMA.css:47-56).
*   **`@media (max-width: 600px)`**: Reglas de medios para hacer el botón de idioma responsivo en pantallas más pequeñas [IDIOMA.css](css/IDIOMA.css:57-62).

---

## Research Query

Muéstrame un mapeo de mi pagina web, y como se conectan los css y js con el html, (por cierto, damelo en español)

*Session: 121a7922dc671644e9b67bdde72edf04 | Generated: 6/7/2025, 23:56:10*

### Analysis Summary

# Mapeo de la Estructura del Sitio Web

Este informe detalla la estructura de su sitio web, enfocándose en cómo los archivos HTML se conectan con los archivos CSS y JavaScript para construir las diferentes páginas.

## Estructura General del Sitio Web

El sitio web está organizado en varias secciones principales, con un archivo [index.html](index.html) como página de inicio y directorios dedicados para [HTML](html/), [CSS](css/), [JavaScript](js/), [imágenes](images/), [audio](audio/), y [archivos PHP](php/).

### Páginas Principales HTML

Las páginas HTML son los contenedores de contenido y la estructura de cada vista del sitio.

*   **[index.html](index.html)**: La página principal o de inicio del sitio.
*   **[index1.html](index1.html)**: Una página alternativa o de prueba, posiblemente una versión anterior o en desarrollo de la página de inicio.
*   **[html/destinos.html](html/destinos.html)**: Página dedicada a mostrar información sobre destinos.
*   **[html/servicios.html](html/servicios.html)**: Página que detalla los servicios ofrecidos.
*   **[html/footer/acerca.html](html/footer/acerca.html)**: Página con información "Acerca de nosotros".
*   **[html/footer/contactenos.html](html/footer/contactenos.html)**: Página de contacto.
*   **[html/footer/Libro de reclamaciones.html](html/footer/Libro de reclamaciones.html)**: Página para el libro de reclamaciones.
*   **[html/servicios/carga_pesadas.html](html/servicios/carga_pesadas.html)**: Página específica para el servicio de carga pesada.
*   **[html/servicios/internacional.html](html/servicios/internacional.html)**: Página para servicios internacionales.
*   **[html/servicios/mercancias_peligrosas.html](html/servicios/mercancias_peligrosas.html)**: Página para el servicio de mercancías peligrosas.
*   **[html/servicios/mudanzas.html](html/servicios/mudanzas.html)**: Página para el servicio de mudanzas.
*   **[html/servicios/peligro.html](html/servicios/peligro.html)**: Página relacionada con servicios de peligro (posiblemente mercancías peligrosas).
*   **[Destinos/1lugar.html](Destinos/1lugar.html)**: Una página de detalle para un destino específico.

## Conexión de CSS con HTML

Los archivos CSS definen el estilo y la presentación visual de las páginas HTML. Se enlazan utilizando la etiqueta `<link rel="stylesheet" href="...">` dentro de la sección `<head>` del HTML.

### Archivos CSS Comunes

Varios archivos CSS parecen ser utilizados globalmente o en múltiples páginas para mantener una consistencia visual.

*   **[css/style_Globales.css](css/style_Globales.css)**: Contiene estilos generales aplicables a todo el sitio.
*   **[css/style_Header.css](css/style_Header.css)**: Define el estilo del encabezado de las páginas.
*   **[css/style_Footer.css](css/style_Footer.css)**: Define el estilo del pie de página.
*   **[css/style_Navigation.css](css/style_Navigation.css)**: Estilos para la navegación principal.
*   **[css/Hamburguesa.css](css/Hamburguesa.css)**: Estilos para el menú de hamburguesa en dispositivos móviles.
*   **[css/IDIOMA.css](css/IDIOMA.css)**: Estilos relacionados con la selección de idioma.
*   **[css/pantallacarga.css](css/pantallacarga.css)**: Estilos para una pantalla de carga inicial.

### Mapeo Específico de CSS a HTML

A continuación, se detalla cómo los archivos CSS se conectan con las páginas HTML principales:

#### [index.html](index.html)

Esta página utiliza una variedad de estilos para su diseño principal, incluyendo:

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Hero Section.css](css/style_Hero Section.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_values.css](css/style_values.css)
*   [css/style_Vision-Mission.css](css/style_Vision-Mission.css)
*   [css/style_Footer.css](css/style_Footer.css)
*   [css/carrucel_principal.css](css/carrucel_principal.css)
*   [css/header-anim.css](css/header-anim.css)

#### [index1.html](index1.html)

Similar a `index.html`, pero podría tener variaciones o ser una versión de prueba.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Hero Section.css](css/style_Hero Section.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_values.css](css/style_values.css)
*   [css/style_Vision-Mission.css](css/style_Vision-Mission.css)
*   [css/style_Footer.css](css/style_Footer.css)
*   [css/carrucel_principal.css](css/carrucel_principal.css)
*   [css/header-anim.css](css/header-anim.css)

#### [html/destinos.html](html/destinos.html)

Esta página incorpora estilos específicos para la visualización de destinos.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_destinos.css](css/style_destinos.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/servicios.html](html/servicios.html)

Utiliza estilos para la presentación de los servicios.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/footer/acerca.html](html/footer/acerca.html)

Página "Acerca de nosotros" con estilos específicos.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_acerca.css](css/style_acerca.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/footer/contactenos.html](html/footer/contactenos.html)

Página de contacto con estilos dedicados.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Contactenos.css](css/style_Contactenos.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/footer/Libro de reclamaciones.html](html/footer/Libro de reclamaciones.html)

Página del libro de reclamaciones.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_reclamaciones.css](css/style_reclamaciones.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/servicios/carga_pesadas.html](html/servicios/carga_pesadas.html)

Página de servicio de carga pesada.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/servicion/cargapesada.css](css/servicion/cargapesada.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/servicios/internacional.html](html/servicios/internacional.html)

Página de servicio internacional.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/servicios/mercancias_peligrosas.html](html/servicios/mercancias_peligrosas.html)

Página de servicio de mercancías peligrosas.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/servicios/mudanzas.html](html/servicios/mudanzas.html)

Página de servicio de mudanzas.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [html/servicios/peligro.html](html/servicios/peligro.html)

Página de servicio de peligro.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_Services.css](css/style_Services.css)
*   [css/style_Footer.css](css/style_Footer.css)

#### [Destinos/1lugar.html](Destinos/1lugar.html)

Página de detalle de un lugar.

*   [css/style_Globales.css](css/style_Globales.css)
*   [css/style_Header.css](css/style_Header.css)
*   [css/style_Navigation.css](css/style_Navigation.css)
*   [css/Hamburguesa.css](css/Hamburguesa.css)
*   [css/IDIOMA.css](css/IDIOMA.css)
*   [css/pantallacarga.css](css/pantallacarga.css)
*   [css/style_destinos.css](css/style_destinos.css)
*   [css/style_Footer.css](css/style_Footer.css)

## Conexión de JavaScript con HTML

Los archivos JavaScript añaden interactividad y funcionalidad dinámica a las páginas HTML. Se enlazan utilizando la etiqueta `<script src="..."></script>`, a menudo al final del `<body>` para asegurar que el HTML se cargue primero.

### Archivos JavaScript Comunes

*   **[js/header.js](js/header.js)**: Script para la funcionalidad del encabezado.
*   **[js/Menu-responsivo.js](js/Menu-responsivo.js)**: Maneja la lógica del menú de navegación responsivo (hamburguesa).
*   **[js/Idioma-flotante.js](js/Idioma-flotante.js)**: Controla la funcionalidad de selección de idioma.
*   **[js/header-anim.js](js/header-anim.js)**: Script para animaciones en el encabezado.

### Mapeo Específico de JavaScript a HTML

A continuación, se detalla cómo los archivos JavaScript se conectan con las páginas HTML principales:

#### [index.html](index.html)

Esta página utiliza varios scripts para su interactividad.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)
*   [js/header-anim.js](js/header-anim.js)
*   [js/carrusel.js](js/carrusel.js)
*   [js/Carrusel-Infinito.js](js/Carrusel-Infinito.js)
*   [js/Traducciones/indexT.js](js/Traducciones/indexT.js)

#### [index1.html](index1.html)

Similar a `index.html`, con scripts para interactividad.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)
*   [js/header-anim.js](js/header-anim.js)
*   [js/carrusel.js](js/carrusel.js)
*   [js/Carrusel-Infinito.js](js/Carrusel-Infinito.js)
*   [js/Traducciones/indexT.js](js/Traducciones/indexT.js)

#### [html/destinos.html](html/destinos.html)

Esta página utiliza scripts para la funcionalidad de destinos.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)
*   [js/destinosData.js](js/destinosData.js)

#### [html/servicios.html](html/servicios.html)

Utiliza scripts para la funcionalidad de servicios.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/footer/acerca.html](html/footer/acerca.html)

Página "Acerca de nosotros".

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/footer/contactenos.html](html/footer/contactenos.html)

Página de contacto.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/footer/Libro de reclamaciones.html](html/footer/Libro de reclamaciones.html)

Página del libro de reclamaciones.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/servicios/carga_pesadas.html](html/servicios/carga_pesadas.html)

Página de servicio de carga pesada.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/servicios/internacional.html](html/servicios/internacional.html)

Página de servicio internacional.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/servicios/mercancias_peligrosas.html](html/servicios/mercancias_peligrosas.html)

Página de servicio de mercancías peligrosas.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/servicios/mudanzas.html](html/servicios/mudanzas.html)

Página de servicio de mudanzas.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [html/servicios/peligro.html](html/servicios/peligro.html)

Página de servicio de peligro.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)

#### [Destinos/1lugar.html](Destinos/1lugar.html)

Página de detalle de un lugar.

*   [js/header.js](js/header.js)
*   [js/Menu-responsivo.js](js/Menu-responsivo.js)
*   [js/Idioma-flotante.js](js/Idioma-flotante.js)
*   [js/destinosData.js](js/destinosData.js)

