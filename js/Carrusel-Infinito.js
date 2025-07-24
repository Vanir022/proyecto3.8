
        // Carrusel infinito con autoplay, botones y drag&drop
        const track = document.getElementById('carruselTrack');
        let items = Array.from(document.querySelectorAll('.carrusel-item'));
        const visible = 4;
        let position = visible;
        // Clonar nodos para efecto infinito
        for (let i = 0; i < visible; i++) {
            track.appendChild(items[i].cloneNode(true));
            track.insertBefore(items[items.length - 1 - i].cloneNode(true), track.firstChild);
        }
        items = Array.from(document.querySelectorAll('.carrusel-item'));
        function setInitialPosition() {
            const offset = position * (items[0].offsetWidth + 20);
            track.style.transition = 'none';
            track.style.transform = `translateX(-${offset}px)`;
            setTimeout(() => { track.style.transition = 'transform 0.5s'; }, 20);
        }
        setInitialPosition();
        function moveCarrusel(dir) {
            if (track.isMoving) return;
            track.isMoving = true;
            position += dir;
            const offset = position * (items[0].offsetWidth + 20);
            track.style.transition = 'transform 0.5s';
            track.style.transform = `translateX(-${offset}px)`;
        }
        track.addEventListener('transitionend', () => {
            if (position >= items.length - visible) {
                position = visible;
                track.style.transition = 'none';
                const offset = position * (items[0].offsetWidth + 20);
                track.style.transform = `translateX(-${offset}px)`;
                setTimeout(() => { track.style.transition = 'transform 0.5s'; }, 20);
            }
            if (position < visible) {
                position = items.length - visible * 2;
                track.style.transition = 'none';
                const offset = position * (items[0].offsetWidth + 20);
                track.style.transform = `translateX(-${offset}px)`;
                setTimeout(() => { track.style.transition = 'transform 0.5s'; }, 20);
            }
            track.isMoving = false;
        });
        function autoplayCarrusel() {
            moveCarrusel(1);
        }
        let autoplay = setInterval(autoplayCarrusel, 3000);
        // Pausar autoplay al pasar el mouse
        track.addEventListener('mouseenter', () => clearInterval(autoplay));
        track.addEventListener('mouseleave', () => autoplay = setInterval(autoplayCarrusel, 3000));
        window.addEventListener('resize', setInitialPosition);
        // Botones
        document.getElementById('arrowLeft').onclick = () => moveCarrusel(-1);
        document.getElementById('arrowRight').onclick = () => moveCarrusel(1);
        // Drag & Drop
        let startX = 0, dragging = false;
        track.addEventListener('mousedown', (e) => {
            dragging = true;
            startX = e.pageX;
            track.style.cursor = 'grabbing';
        });
        document.addEventListener('mousemove', (e) => {
            if (!dragging) return;
            const dx = e.pageX - startX;
            if (Math.abs(dx) > 50) {
                moveCarrusel(dx < 0 ? 1 : -1);
                dragging = false;
            }
        });
        document.addEventListener('mouseup', () => {
            dragging = false;
            track.style.cursor = 'grab';
        });
        // Prevenir doble click y selección/arrastre accidental
        items.forEach(item => {
            item.addEventListener('dragstart', e => e.preventDefault());
            item.addEventListener('mousedown', e => { if (e.detail > 1) e.preventDefault(); });
        });
