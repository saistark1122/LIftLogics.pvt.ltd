    function applyThemeBasedOnTime() {
        const currentHour = new Date().getHours();
        const body = document.body;

        // Assuming light mode from 6 AM to 6 PM and dark mode otherwise
        if (currentHour >= 6 && currentHour < 18) {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        } else {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        }
    }
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    let index = 0;

    function showNextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(showNextImage, 3000);
});
    // Apply the theme when the page loads
    window.onload = applyThemeBasedOnTime;


