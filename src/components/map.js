// Function to initialize the map
function initMap() {
  // Check if Leaflet is loaded
  if (typeof L === 'undefined') {
    console.error('Leaflet library is not loaded.');
    return;
  }

  // Check if the map container exists
  const mapContainer = document.getElementById('map');
  if (!mapContainer) {
    console.warn('Map container with ID "map" not found. Skipping map initialization.');
    return;
  }

  // Initialize the map
  const map = L.map('map').setView([-1.1022, 37.0128], 15); // Traqo Lounge Coordinates

  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Add marker for Juja Mabati Factory
  L.marker([-1.1261, 37.0036])
    .addTo(map)
    .bindPopup('Juja Mabati Factory')
    .openPopup();
}

// Run map initialization only when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  initMap();
});
