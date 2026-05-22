// Interaction setup for Dark Mode / High Contrast Toggle
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    
    toggleButton.addEventListener('click', () => {
        // Toggle the style sheet state class on the body elements
        document.body.classList.toggle('high-contrast');
        
        // Dynamically shift the button copy text and styles
        if (document.body.classList.contains('high-contrast')) {
            toggleButton.textContent = '👁️ Premium Dark Mode';
            toggleButton.className = 'btn btn-dark fw-bold';
        } else {
            toggleButton.textContent = '👁️ High Contrast Mode';
            toggleButton.className = 'btn btn-outline-vortex fw-bold';
        }
    });
});