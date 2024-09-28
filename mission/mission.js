
const themeSelector = document.getElementById('theme-selector');
const logo = document.querySelector('.logo');


function changeTheme() {
    // Check the selected value
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'content/byui-logo_blue.webp'; // Update this with the correct path to your white logo
    } else {
        document.body.classList.remove('dark');
        logo.src = 'content/byui-logo_blue.webp'; // Original logo
    }
}

// Add event listener to the select element
themeSelector.addEventListener('change', changeTheme);
