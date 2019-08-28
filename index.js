if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/simplant/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}
