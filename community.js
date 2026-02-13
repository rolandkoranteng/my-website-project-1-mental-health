// Responsive Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if(navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
    
    // Close menu when a link is clicked (for better mobile UX)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('show');
      });
    });
  }
  
  // Handle window resize - hide mobile menu on larger screens
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && navMenu) {
      navMenu.classList.remove('show');
    }
  });
});

function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name")?.value.trim();
  const age = document.getElementById("age")?.value;
  const email = document.querySelector('.contact-form input[type="email"]')?.value.trim();
  const phone = document.querySelector('.contact-form input[placeholder="Your phone number"]')?.value.trim();
  const message = document.querySelector('.contact-form textarea')?.value.trim();
  const formMsg = document.getElementById("formMsg");

  if (!formMsg) return;

  // Basic validation
  if (!name || !email || !phone || !age || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "#d32f2f";
    return;
  }
  
  const ageNum = parseInt(age);
  if (isNaN(ageNum) || ageNum <= 0) {
    formMsg.textContent = "Please enter a valid age 😎";
    formMsg.style.color = "#d32f2f";
    return;
  }
  
  if (ageNum < 16) {
    formMsg.textContent = `You must be at least 16 years to contact a counsellor 😊. Your age is ${ageNum} years.`;
    formMsg.style.color = "#d32f2f";
    return;
  }
  
  // Success
  formMsg.textContent = `Thanks for contacting us ${name}! We'll get back to you soon.`;
  formMsg.style.color = "#2e7d32";
  
  // Optionally reset form
  e.target.reset();
}

function connect(name) {
  if (name) {
    alert(`✅ You are now connected with ${name}!`);
  }
}

function connectUser(email) {
  if (email) {
    // Trigger email client
    window.location.href = `mailto:${email}`;
    // Show alert
    alert(`✅ You are now connected with ${email}`);
  }
}

// Add smooth scrolling for anchor links (if any)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Handle touch events for better mobile interaction
if ('ontouchstart' in window) {
  document.body.classList.add('touch-device');
}

// Lazy loading images for better performance
if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach(img => {
    img.loading = 'lazy';
  });
} else {
  // Fallback for browsers that don't support lazy loading
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
  document.body.appendChild(script);
}