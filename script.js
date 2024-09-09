// scripts.ts
// Function to toggle visibility of skills list
function toggleSkills() {
    var skillsList = document.getElementById('skillsList');
    var toggleButton = document.querySelector('.toggle-button');
    if (skillsList && toggleButton) {
        if (skillsList.style.display === 'none' || skillsList.style.display === '') {
            skillsList.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        }
        else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    }
}
// Initialize the visibility states when the page loads
document.addEventListener('DOMContentLoaded', function () {
    // Initially hide skills list if needed
    document.getElementById('skillsList').style.display = 'none';
});
