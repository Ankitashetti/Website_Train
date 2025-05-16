// Array of ad image paths
const ads = [
    "image/1711019579673.avif",
    "image/1711019658191.avif",
    "image/1731579839502.avif",
    "image/1731579869722.avif"
];


const displayDuration = 5000; 


let currentAdIndex = 0;


function updateAd() {
    const adImage = document.getElementById('adImage');

   
    adImage.src = ads[currentAdIndex];

    
    currentAdIndex = (currentAdIndex + 1) % ads.length;

    
    setTimeout(updateAd, displayDuration);
}


// window.onload = updateAd;
window.addEventListener('load', updateAd);

