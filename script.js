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

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formStatus) {
      formStatus.textContent = 'Thanks for reaching out!';
      formStatus.hidden = false;
    }
    contactForm.reset();
  });
}
