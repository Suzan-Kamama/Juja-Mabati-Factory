import { IMAGES } from './constants.js';

export function initProducts() {
  const products = [
    {
      name: 'Box Profile',
      description: 'Modern design with superior strength and water resistance.',
      specs: ['Thickness: 0.32mm - 0.5mm', 'Width: 1060mm', 'Length: Customizable'],
      image: IMAGES.PRODUCTS.BOX_PROFILE
    },
    {
      name: 'Corrugated',
      description: 'Traditional wave pattern perfect for various applications.',
      specs: ['Thickness: 0.30mm - 0.45mm', 'Width: 1050mm', 'Length: Customizable'],
      image: IMAGES.PRODUCTS.CORRUGATED
    },
    {
      name: 'Tile',
      description: 'Elegant tile appearance with metal sheet durability.',
      specs: ['Thickness: 0.35mm - 0.55mm', 'Width: 1080mm', 'Length: Customizable'],
      image: IMAGES.PRODUCTS.TILE
    }
  ];

  const productsContainer = document.querySelector('#products .grid');
  if (!productsContainer) return;

  productsContainer.innerHTML = products.map(product => `
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
      <div class="p-6">
        <h3 class="text-xl font-bold mb-2">${product.name}</h3>
        <p class="text-gray-600 mb-4">${product.description}</p>
        <ul class="space-y-2 mb-4">
          ${product.specs.map(spec => `<li class="text-sm text-gray-500">• ${spec}</li>`).join('')}
        </ul>
        <button class="get-quote-btn w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition-colors" data-product="${product.name}">
          Get Quote
        </button>
      </div>
    </div>
  `).join('');

  // Add click handlers for Get Quote buttons
  document.querySelectorAll('.get-quote-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const productName = button.getAttribute('data-product');
      const contactSection = document.querySelector('#contact');
      const messageInput = document.querySelector('#message');
      
      // Scroll to contact form
      contactSection?.scrollIntoView({ behavior: 'smooth' });
      
      // Pre-fill message with product information
      if (messageInput) {
        setTimeout(() => {
          messageInput.value = `I'm interested in getting a quote for the ${productName} roofing sheets.`;
          messageInput.focus();
        }, 1000);
      }
    });
  });
}