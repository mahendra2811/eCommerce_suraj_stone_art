const imageContainer = document.querySelector('.image-container');

imageContainer.addEventListener('mouseenter', () => {
    imageContainer.style.animationPlayState = 'paused';
});

imageContainer.addEventListener('mouseleave', () => {
    imageContainer.style.animationPlayState = 'running';
});


// photo grid js start 
document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.grid-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeBtn = document.getElementById('close');

    gridItems.forEach(item => {
        item.addEventListener('click', function () {
            const imgSrc = this.querySelector('img').src;
            lightboxContent.src = imgSrc;
            lightbox.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });
});

// photo grid js end

