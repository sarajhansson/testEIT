fetch('sara.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('textContainer').innerText = data.description;
  })
  .catch(error => console.error('Error loading JSON:', error));

  let slideIndex = 1;
showSlides(slideIndex);function plusSlide(n) {
  showSlides(slideIndex += n);
}function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}function prevSlide() {
  plusSlide(-1);
}function nextSlide() {
  plusSlide(1);
}