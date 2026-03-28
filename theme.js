(function() {
    const themeToggle = document.querySelector('.theme-toggle') || document.getElementById('themeBtn');
    if (!themeToggle) return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light');
        themeToggle.textContent = '🌙';
    } else {
        document.body.classList.remove('light');
        themeToggle.textContent = '☀️';
    }
    themeToggle.addEventListener('click', () => {
        const isLight = document.body.classList.toggle('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.textContent = isLight ? '🌙' : '☀️';
    });
})();
