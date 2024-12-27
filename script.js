// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the clicked section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
}

// Initially show the Home section when the page loads
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});

