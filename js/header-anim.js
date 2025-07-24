// Efecto de desvanecimiento y deslizamiento del header (fade+slide)
let lastScroll = 0;
const header = document.getElementById('main-header');
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
    } else if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.remove('fade-in');
        header.classList.add('fade-out');
    } else {
        header.classList.remove('fade-out');
        header.classList.add('fade-in');
    }
    lastScroll = currentScroll;
});
