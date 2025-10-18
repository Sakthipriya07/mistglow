// === NAVBAR TOGGLE ===//
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("navlist");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// === CONTACT FORM VALIDATION ===//
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const number = document.getElementById("number").value.trim();
  const message = document.getElementById("message").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !number || !message) {
    alert("Please fill out all fields.");
    return;
  }

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (number.length !== 10) {
    alert("Phone number must be 10 digits.");
    return;
  }

  if (message.length < 10) {
    alert("Message should be at least 10 characters long.");
    return;
  }

  alert("Message sent successfully!");
  form.reset();
});
