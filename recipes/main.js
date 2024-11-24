import { recipes } from './recipes.mjs';

// Random number generator
function random(num) {
    return Math.floor(Math.random() * num);
}

// Get a random recipe from the list
function getRandomListEntry(list) {
    const randomIndex = random(list.length);
    return list[randomIndex];
}

// Generate tags template
function tagsTemplate(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

// Generate ratings template
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? '⭐️' : '☆';
    }
    html += `</span>`;
    return html;
}

// Generate recipe template
function recipeTemplate(recipe) {
    return `
        <section class="recipe">
            <img src="${recipe.image}" alt="${recipe.name}">
            <div class="recipe-info">
                <div class="tags">
                    ${tagsTemplate(recipe.category.split(', '))}
                </div>
                <h2>${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="description">${recipe.description}</p>
            </div>
        </section>
    `;
}

// Render recipes
function renderRecipes(recipeList) {
    const container = document.querySelector('main');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    container.innerHTML = recipesHTML;
}

// Filter recipes based on search input
function filterRecipes(query) {
    const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.category.toLowerCase().includes(query)
    );
    return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

// Handle search event
function searchHandler(e) {
    e.preventDefault();
    const query = document.querySelector('#search').value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Initialize the app
function init() {
    // Display a random recipe on load
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]);

    // Attach search handler
    const searchForm = document.querySelector('.search-form');
    searchForm.addEventListener('submit', searchHandler);
}

// Run the initialization function
init();
