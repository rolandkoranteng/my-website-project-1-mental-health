// Responsive Nav Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  if(navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('show');
    });
  }
});
function submitForm(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;
  const email = document.querySelector('.contact-form input[type="email"]').value.trim();
  const phone = document.querySelector('.contact-form input[placeholder="Your phone number"]').value.trim();
  const message = document.querySelector('.contact-form textarea').value.trim();
  const formMsg = document.getElementById("formMsg");

  // Basic validation
  if (!name || !email || !phone || !age || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "#d32f2f";
    return;
  }
  if (age <= 0) {
    formMsg.textContent = `Please your age cannot be negative or 0 😎`;
    formMsg.style.color = "#d32f2f";
    return;
  }
  if (age > 0 && age < 16) {
    formMsg.textContent = `You must be at least 16 years to contact a counsellor 😊. Your age is ${age} years.`;
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
    alert("Connected with " + name + "!");
  }


  function connectUser(email) {
    // Trigger email client
    window.location.href = `mailto:${email}`;
    // Show alert
    alert(`✅ You are now connected with ${email}`);
  }