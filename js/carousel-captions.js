document.addEventListener('DOMContentLoaded', function() {
   let carouselItems = document.querySelectorAll('.carousel-item');

   carouselItems.forEach(function(item) {
      let img = item.querySelector('img');
      let caption = item.querySelector('.carousel-caption h5');
      let overlay = item.querySelector('.overlay');

      if (img && caption) {
         let src = img.src;
         let text = new URL(src).searchParams.get('text');

         if (text) {
            caption.textContent = text.replace(/\+/g, ' ').replace(/-/g, ' '); // Replace '+' and '-' with spaces
         }
      }

      if (overlay) {
         setInterval(function() {
            let hueRotation = Math.floor(Math.random() * 360); // Random hue rotation between 0 and 360
            overlay.style.backgroundColor = `hsla(${hueRotation}, 100%, 50%, 0.3)`; // Apply a semi-transparent hue
         }, 5000); // Change hue every 5 seconds
      }
   });
});
