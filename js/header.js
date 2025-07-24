// Menú responsivo
        const menuToggle = document.getElementById('menu-toggle');
        const navLinks = document.getElementById('nav-links');
        const menuOverlay = document.getElementById('menu-overlay');
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('show');
            menuOverlay.classList.toggle('show');
        });
        menuOverlay.addEventListener('click', function () {
            navLinks.classList.remove('show');
            menuOverlay.classList.remove('show');
        });