// Toggle mobile menu
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Explore Now Button Alert
document.getElementById('exploreBtn').addEventListener('click', function() {
    alert('Welcome to Cricket World! Let\'s explore the world of cricket together.');
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    this.reset(); // Reset the form after submission
});
