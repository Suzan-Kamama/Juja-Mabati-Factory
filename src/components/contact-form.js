export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Construct email body with form data
    const emailBody = `
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Message:
${data.message}
    `.trim();

    // Create mailto link with form data
    const mailtoLink = `mailto:gakurumuraguri@gmail.com?subject=Inquiry from ${encodeURIComponent(data.name)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Reset form
    form.reset();
  });
}