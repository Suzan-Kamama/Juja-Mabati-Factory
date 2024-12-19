export function initMap() {
  const mapScript = document.createElement('script');
  mapScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
  mapScript.async = true;
  mapScript.defer = true;
  mapScript.addEventListener('load', () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -1.1022, lng: 37.0128 }, // Coordinates for Juja
      zoom: 15,
    });
    new google.maps.Marker({
      position: { lat: -1.1022, lng: 37.0128 },
      map,
      title: 'Juja Mabati Factory'
    });
  });
  document.head.appendChild(mapScript);
}