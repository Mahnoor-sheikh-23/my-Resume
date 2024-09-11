
// Function to toggle visibility of skills list
function toggleSkills(): void {
    const skillsList = document.getElementById('skillsList')!;
    const toggleButton = document.querySelector('.toggle-button')!;

    if (skillsList && toggleButton) {
        if (skillsList.style.display === 'none' || skillsList.style.display === '') {
            skillsList.style.display = 'block';
            toggleButton.textContent = 'Hide Skills';
        } else {
            skillsList.style.display = 'none';
            toggleButton.textContent = 'Show Skills';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initially hide skills list if needed
    document.getElementById('skillsList')!.style.display = 'none';
});
