// Script del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = 'gracias.html';
      } else {
        UI.showNotification('Hubo un problema al enviar el formulario.', 'error');
      }
    }).catch(error => {
      console.error('Error:', error);
      UI.showNotification('Error al enviar el formulario.', 'error');
    });
  });
});
