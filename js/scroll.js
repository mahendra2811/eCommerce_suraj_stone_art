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


// for pdf download start 
function downloadCustomCatalog() {
    // Replace 'path-to-your-catalog.pdf' with the actual path to your PDF file
    const pdfPath = '../images/Catelog_suraj_stone_art.pdf';
  
    // Create an anchor element
    const link = document.createElement('a');
  
    // Set the href attribute to the path of the PDF file
    link.href = pdfPath;
  
    // Set the download attribute to specify the default filename
    link.download = 'custom-catalog.pdf';
  
    // Append the link to the document
    document.body.appendChild(link);
  
    // Trigger a click on the link to start the download
    link.click();
  
    // Remove the link from the document
    document.body.removeChild(link);
}
// for pdf download end 


