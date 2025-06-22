    document.getElementById('menuToggle').addEventListener('click', function() {
      const navMenu = document.getElementById('navMenu');
      navMenu.classList.toggle('show');
    });
const images = [
      'url("pictures/images1.jpg")',
      'url("pictures/images2.jpg")',
      'url("pictures/images3.jpg")',
      'url("pictures/images4.jpg")',
      'url("pictures/images5.jpg")',
      'url("pictures/images6.jpg")',
      'url("pictures/images7.jpg")',
      'url("pictures/images8.jpg")',
      'url("pictures/images9.jpg")'
      
    ];

  // Preload images
  images.forEach(imgUrl => {
    const img = new Image();
    img.src = imgUrl.slice(5, -2); // strip url("...") for actual path
  });

  let index = 0;

  function changeBackground() {
    const sections = document.querySelectorAll('.parallax');
    sections.forEach(section => {
      section.style.backgroundImage = images[index];
    });
    index = (index + 1) % images.length;
  }

  setInterval(changeBackground, 3000); // every 3 seconds
  changeBackground(); // initial set