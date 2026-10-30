document.addEventListener("DOMContentLoaded", () => {
    console.log("Early Bird Technologies frontend loaded successfully.");
    
    // Add smooth scrolling for anchor links if needed
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});