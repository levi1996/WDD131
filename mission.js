
const themeSelector = document.getElementById('theme-selector');
const logo = document.querySelector('.logo');


function changeTheme() {
    
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        logo.src = 'content/byui-logo_blue.webp'; 
    } else {
        document.body.classList.remove('dark');
        logo.src = 'content/byui-logo_blue.webp'; 
    }
}


themeSelector.addEventListener('change', changeTheme);
