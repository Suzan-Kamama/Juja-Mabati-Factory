import { initMap } from './map.js';
import { initContactForm } from './contact-form.js';

export function initContact() {
  const contactSection = document.querySelector('#contact');
  if (!contactSection) return;

  initMap();
  initContactForm();

  // Add hover effects to contact cards
  document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.querySelector('.contact-icon').classList.add('animate-bounce');
    });
    card.addEventListener('mouseleave', () => {
      card.querySelector('.contact-icon').classList.remove('animate-bounce');
    });
  });
}

export function contactTemplate() {
  return `
    <section id="contact" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div class="grid md:grid-cols-2 gap-12">
          <div class="space-y-6">
            <div class="grid grid-cols-2 gap-4 mb-8">
              <div class="contact-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="contact-icon text-blue-600 mb-4">
                  <svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-center mb-2">Call/WhatsApp</h3>
                <a href="tel:0769600200" class="text-blue-600 hover:text-blue-800 text-center block transition-colors">0769600200</a>
              </div>

              <div class="contact-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="contact-icon text-blue-600 mb-4">
                  <svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-center mb-2">Email</h3>
                <a href="mailto:gakurumuraguri@gmail.com" class="text-blue-600 hover:text-blue-800 text-center block transition-colors break-all">gakurumuraguri@gmail.com</a>
              </div>

              <div class="contact-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="contact-icon text-blue-600 mb-4">
                  <svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-center mb-2">Location</h3>
                <p class="text-gray-600 text-center">Kenyatta Road, next to Traqo Lounge</p>
              </div>

              <div class="contact-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div class="contact-icon text-blue-600 mb-4">
                  <svg class="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-lg font-semibold text-center mb-2">Postal Address</h3>
                <p class="text-gray-600 text-center">P.O. Box 57920, Nairobi, Kenya</p>
              </div>
            </div>
            
            <div id="map" class="h-64 rounded-lg shadow-md overflow-hidden"></div>
          </div>

          <div class="bg-white p-8 rounded-lg shadow-md">
            <h3 class="text-2xl font-bold mb-6">Send us a Message</h3>
            <form id="contact-form" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" name="name" required
                  class="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" name="email" required
                  class="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" id="phone" name="phone" required
                  class="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors">
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" required
                  class="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"></textarea>
              </div>
              <button type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}