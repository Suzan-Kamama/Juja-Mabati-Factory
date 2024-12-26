import { IMAGES } from './constants.js';

export function mainContentTemplate() {
  return `
    <main>
      <!-- Hero Section -->
      <section id="home" class="relative">
        <div class="hero-slider swiper-container h-[600px]">
          <div class="swiper-wrapper">
            ${IMAGES.HERO.map(image => `
              <div class="swiper-slide relative">
                <img src="${image}" alt="Roofing" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div class="text-center text-white px-4">
                    <h1 class="text-4xl md:text-6xl font-bold mb-4">Welcome to Juja Mabati Factory</h1>
                    <p class="text-xl md:text-2xl mb-6">Home to Quality Roofing Sheets</p>
                    <p class="text-lg md:text-xl mb-8">The Forever Roof</p>
                    <div class="bg-blue-600 text-white inline-block py-2 px-6 rounded-full text-lg font-semibold">
                      FREE DELIVERY COUNTRYWIDE WITHIN 48HRS
                    </div>
                    <a href="#contact" class="order-now-btn mt-8 bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors inline-block">
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
          <div class="max-w-3xl mx-auto text-gray-600">
            <p class="mb-6">
              At Juja Mabati Factory, we take pride in delivering top-quality roofing solutions that stand the test of time. As one of Kenya's leading roofing manufacturers, we specialize in providing durable, reliable, and aesthetically pleasing roofing materials for both residential and commercial projects.
            </p> 
            <p>Our extensive range of roofing sheets, including pre-painted, galvanized, and aluminum options, ensures that we meet the diverse needs of our customers. With a commitment to excellence and unmatched craftsmanship, Juja Mabati Factory has earned its reputation as a trusted name in the roofing
              industry across Kenya.
            </p>
            <p>
              With state-of-the-art manufacturing facilities and a team of skilled professionals, we ensure that every 
              roofing sheet meets the highest standards of quality and durability.
            </p>
            <p>
            Whether you're building a new home, renovating an existing structure, or undertaking a large-scale commercial project, 
            we provide the best roofing solutions that guarantee long-lasting protection and value for your property.
            </p>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section id="products" class="py-20">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Our Products</h2>
          <div class="grid md:grid-cols-3 gap-8"></div>
        </div>
      </section>
    </main>
  `;
}

// Initialize smooth scrolling for the Order Now button
export function initMainContent() {
  document.querySelector('.order-now-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    
    // Focus on the message input after scrolling
    setTimeout(() => {
      document.querySelector('#message')?.focus();
    }, 1000);
  });
}
