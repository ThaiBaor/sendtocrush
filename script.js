let slideIndex = 0;
const slides = document.querySelectorAll(".slides");
let intervalID = undefined;
const showSlides = () => {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 };
  slides[slideIndex - 1].classList.add("active");

}

const startSlideshow = () => {
  intervalID = setInterval(showSlides, 2000);
}

const stopSlideshow = () => {
  clearInterval(intervalID);
}
startSlideshow();
slides.forEach(slide => {
  slide.addEventListener('mouseover', stopSlideshow);
  slide.addEventListener('mouseout', startSlideshow);

})


// Function to generate a random color
function getRandomColor() {
  // Generate random values for red, green, and blue components
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  // Convert the values to hexadecimal format
  var hexColor = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return hexColor;
}

// Apply random color to the text
let header = document.getElementById("header");
setInterval(() => {
  header.style.color = getRandomColor();
}, 2000);



