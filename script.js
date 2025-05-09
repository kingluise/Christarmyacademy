const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('.section');
const applyButton = document.querySelector('.apply-button');

// Function to handle navbar transparency on scroll
function handleScroll() {
    if (window.scrollY > 100) {
        navbar.classList.add('semi-transparent');
    } else {
        navbar.classList.remove('semi-transparent');
    }
}

// Function to toggle mobile navigation menu
function toggleMobileNav() {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('mobile-active');
}

// Function to handle section appearance on scroll
function handleSectionAppearance() {
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        if (scrollY > sectionTop - windowHeight + sectionHeight / 4) {
            section.classList.add('appear');
        }
    });
}

// Function to handle Apply Now button behavior
function handleApplyButtonClick(event) {
    const button = event.target;
    button.classList.add('loading'); // Add loading class

    // Simulate an asynchronous operation (e.g., sending data)
    setTimeout(() => {
        button.classList.remove('loading'); // Remove loading class
        button.classList.add('clicked'); // Add clicked class

        // After a short delay, remove the clicked class
        setTimeout(() => {
            button.classList.remove('clicked');
            // Redirect to the application page (replace with your actual URL)
            window.location.href = 'admissions.html';
        }, 1000); // 1 second delay
    }, 2000); // Simulate a 2-second operation
}

// Event Listeners
window.addEventListener('scroll', () => {
    handleScroll();
    handleSectionAppearance();
});
navToggle.addEventListener('click', toggleMobileNav);
applyButton.addEventListener('click', handleApplyButtonClick);

// Mobile menu links - close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('mobile-active')) {
            toggleMobileNav(); // Close the menu
        }
    });
});

// Initial call to handle scroll in case the page is loaded below the threshold
handleScroll();
handleSectionAppearance();
