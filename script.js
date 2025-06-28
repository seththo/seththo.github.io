const toggleButton = document.getElementById('theme-toggle');
const root = document.documentElement;
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const currentTheme = root.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    toggleButton.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    toggleButton.setAttribute('aria-label', newTheme === 'dark' ? 'Toggle light mode' : 'Toggle dark mode');
  });
}

const customCursor = document.getElementById('custom-cursor');
if (customCursor) {
  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => customCursor.classList.add('active'));
    el.addEventListener('mouseleave', () => customCursor.classList.remove('active'));
  });
}

