const navLinks = document.querySelectorAll('.site-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(field => {
  field.addEventListener('focus', () => {
    field.parentElement?.classList.add('focus');
  });
  field.addEventListener('blur', () => {
    field.parentElement?.classList.remove('focus');
  });
});

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', event => {
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();
    if (!name || !email || !message) {
      event.preventDefault();
      alert('Please complete every field before sending your message.');
    }
  });
}
