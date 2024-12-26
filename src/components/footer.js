export function footerTemplate() {
  return `
    <footer class="bg-blue-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold mb-4">Juja Mabati Factory</h3>
            <p class="mb-4">The Forever Roof</p>
            <p class="text-blue-300">FREE DELIVERY COUNTRYWIDE WITHIN 48HRS</p>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#home" class="hover:text-blue-300 transition-colors">Home</a></li>
              <li><a href="#about" class="hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="#products" class="hover:text-blue-300 transition-colors">Products</a></li>
              <li><a href="#contact" class="hover:text-blue-300 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
            <ul class="space-y-2">
              <li>📞 0769600200</li>
              <li>📧 gakurumuraguri@gmail.com</li>
              <li>📍 Kenyatta Road, next to Traqo Lounge</li>
              <li>📮 P.O. Box 57920, Nairobi, Kenya</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="#" class="hover:text-blue-300 transition-colors" aria-label="Facebook">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="https://www.instagram.com/jujamabatifactory?igsh=MTB4cm9pd3Z0ejdjMA=="/></svg>
              </a>
              <a href="#" class="hover:text-blue-300 transition-colors" aria-label="Twitter">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14z"/></svg>
              </a>
              <a href="#" class="hover:text-blue-300 transition-colors" aria-label="Instagram">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="https://www.facebook.com/PreciseGeotech?mibextid=ZbWKwL"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        <div class="border-t border-blue-800 mt-8 pt-8 text-center">
          <p>&copy; ${new Date().getFullYear()} Juja Mabati Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
