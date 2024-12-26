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
              <li>🕾 0769600200</li>
              <li>📧 gakurumuraguri@gmail.com</li>
              <li>📍 Kenyatta Road, Next to Traqo Lounge</li>
              <li>📮 P.O. Box 57920, Nairobi, Kenya</li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-semibold mb-4">Follow Us</h4>
            <div class="flex space-x-4">
              <a href="https://www.facebook.com/PreciseGeotech?mibextid=ZbWKwL" class="hover:text-blue-300 transition-colors" aria-label="Facebook">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.17.5C10.24.5,9.1,3.3,9.1,5.47V7.46H5.5v3.4h3.6V20.5h5.4V10.86h3.47l.5-3.4"/></svg>
              </a>
              <a href="#" class="hover:text-blue-300 transition-colors" aria-label="Twitter">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44,4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96,1.32-2.02-.88.52-1.86.9-2.9,1.1-.82-.88-2-1.43-3.3-1.43-2.5,0-4.55,2.04-4.55,4.54,0,.36.03.7.1,1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6,1.45-.6,2.3,0,1.56.8,2.95,2,3.77-.74-.03-1.44-.23-2.05-.57v.06c0,2.2,1.56,4.03,3.64,4.44-.67.2-1.37.2-2.06.08.58,1.8,2.26,3.12,4.25,3.16C5.78,18.1,3.37,18.74,1,18.46c2,1.3,4.4,2.04,6.97,2.04,8.35,0,12.92-6.92,12.92-12.93,0-.2,0-.4-.02-.6.9-.63,1.96-1.22,2.56-2.14z"/></svg>
              </a>
              <a href="https://www.instagram.com/jujamabatifactory?igsh=MTB4cm9pd3Z0ejdjMA==" class="hover:text-blue-300 transition-colors" aria-label="Instagram">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58.01,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85,0,3.2-.01,3.58-.07,4.85-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07-3.2,0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85,0-3.2.01-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.17,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33.01,7.05.07c-4.27.2-6.78,2.71-6.98,6.98C0.01,8.33,0,8.74,0,12s.01,3.67.07,4.95c.2,4.27,2.71,6.78,6.98,6.98,1.28.06,1.69.07,4.95.07s3.67-.01,4.95-.07c4.27-.2,6.78-2.71,6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.27-2.71-6.78-6.98-6.98C15.67.01,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
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
