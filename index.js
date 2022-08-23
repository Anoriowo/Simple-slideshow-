(function(){
var currentImage = 0;
const container = document.getElementById('content');
const myPhotos = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('previous');

nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    currentImage++;
     
     if(currentImage > myPhotos.length-1){ currentImage = 0}
        theSlide()
});

prevBtn.addEventListener('click', function(e){
    e.preventDefault();
    currentImage--;
     if(currentImage < 0 ){ currentImage = myPhotos.length-1}
        theSlide()
});

function theSlide() {
    let newSlide = document.createElement('img');
    newSlide.className = ('fadeinimg');
    newSlide.src = `slides/${myPhotos[currentImage]}`;
    container.appendChild(newSlide)
        //removing files
    if(container.children.length > 2){container.removeChild(container.children[0])}
    
}
})();

