const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

function toggleMenu() {
  menu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

function handleResize() {
  if (window.innerWidth > 1000) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // To ensure the menu behaves correctly on page load

function viewerTemplate(pic, alt) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${pic}" alt="${alt}">
        </div>`;
}

function viewHandler(event) {
    const clickedImage = event.target;
    const src = clickedImage.src.split('-')[0];
    const fullImageSrc = `${src}-full.jpeg`;

    document.body.insertAdjacentHTML('afterbegin', viewerTemplate(fullImageSrc, clickedImage.alt));

    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

function closeViewer() {
    document.querySelector('.viewer').remove();
}

document.querySelector('.gallery').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        viewHandler(event);
    }
});
