function handleSubmit(event) {
    event.preventDefault(); // stop page reload
    const name = document.getElementById("name").value;
    alert(`Thank You for contacting us ${name}! Stay connected for more wellness tips and updates.`);
  }
    // Mobile Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const topMenu = document.querySelector('.top');
    menuToggle.addEventListener('click', () => {
      topMenu.classList.toggle('show');
    });

     

    // Testimonials Slider
    let index = 0;
    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    function showSlide() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }
    function nextSlide() {
      index = (index + 1) % totalSlides;
      showSlide();
    }
    function prevSlide() {
      index = (index - 1 + totalSlides) % totalSlides;
      showSlide();
    }
  