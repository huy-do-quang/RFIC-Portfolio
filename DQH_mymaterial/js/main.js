// Defines scroll distance (Adjust this value if one click scrolls too far/not far enough)
const SCROLL_AMOUNT = 380; 

/**
 * Scrolls a specific container horizontally.
 */
function scrollCards(direction, containerId) {
    const container = document.getElementById(containerId);
    
    if (container) {
        container.scrollBy({ 
            left: direction * SCROLL_AMOUNT, 
            behavior: 'smooth' 
        });
    }
}


// Wait until the entire HTML page is fully loaded before executing the rest of the script.
window.onload = function() {
    
    // --- 1. Progress Bar Logic (Checks if element exists before use) ---
    const progressBar = document.getElementById("progress-bar");

    if (progressBar) {
        function updateProgressBar() {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;

            // Only run if the page is scrollable
            if (totalHeight > 0) {
                 const progress = (scrolled / totalHeight) * 100;
                 progressBar.style.width = progress + "%";
            } else {
                 progressBar.style.width = "0%";
            }
        }

        window.addEventListener("scroll", updateProgressBar);
        updateProgressBar();
    }


    // --- 2. Hamburger Menu Logic (Checks if elements exist before use) ---
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
};