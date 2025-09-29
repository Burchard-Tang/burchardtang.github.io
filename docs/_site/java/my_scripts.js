let slideIndex = [0,0];
let slideBaseName = "slide";
let slideBaseBarName = "slider-bar";

function shiftSlide(n, idx){
    showSlides(slideIndex[idx] += n, idx);
}

function setSlide(n, idx){
    showSlides(slideIndex[idx] = n, idx);
}

function showSlides(n,idx){
    let i;
    let slides = document.getElementsByClassName(slideBaseName + idx);
    let bars = document.getElementsByClassName(slideBaseBarName + idx);
    if (n >= slides.length) {slideIndex[idx] = 0;}
    if (n < 0) {slideIndex[idx] = slides.Length - 1;}
    
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        bars[i].style.backgroundColor = "grey";
    }

    slides[slideIndex[idx]].style.display = "block";
    bars[slideIndex[idx]].style.backgroundColor = "white";
}