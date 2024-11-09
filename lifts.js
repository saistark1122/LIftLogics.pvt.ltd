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

    // Apply the theme when the page loads
    window.onload = applyThemeBasedOnTime;


