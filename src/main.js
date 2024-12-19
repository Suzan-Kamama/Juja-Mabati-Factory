import { navigationTemplate, initNavigation } from './components/navigation.js';
import { mainContentTemplate, initMainContent } from './components/main-content.js';
import { initHeroSlider } from './components/hero-slider.js';
import { initProducts } from './components/products.js';
import { initContact } from './components/contact.js';
import { contactTemplate } from './components/contact.js';
import { footerTemplate } from './components/footer.js';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML = `
    ${navigationTemplate()}
    ${mainContentTemplate()}
    ${contactTemplate()}
    ${footerTemplate()}
  `;

  initNavigation();
  initMainContent();
  initHeroSlider();
  initProducts();
  initContact();
});