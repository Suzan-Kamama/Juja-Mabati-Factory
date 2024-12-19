export function navigationTemplate() {
  return `
    <nav class="bg-white shadow-md sticky top-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
            <a href="#" class="text-xl font-bold text-blue-600">Juja Mabati Factory</a>
          </div>
          
          <button class="mobile-menu-button md:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="nav-link">Home</a>
            <a href="#about" class="nav-link">About Us</a>
            <a href="#products" class="nav-link">Products</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `;
}

export function initNavigation() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const nav = document.querySelector('nav');

  mobileMenuButton?.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu-open');
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement?.scrollIntoView({ behavior: 'smooth' });
    });
  });
}