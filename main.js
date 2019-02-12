console.log("konjo!");

var gallery = document.querySelector(".gallery");
var galleryContainer = document.querySelectorAll(".js-gallery-item");
console.log(galleryContainer);

var slideCount = galleryContainer.length;
var slideWidth = galleryContainer[0].offsetWidth;
console.log(slideWidth);

var transitionSlide = function() {
  var timer = setInterval(() => {
    console.log("Konjo");
  }, 5000);
};

transitionSlide();

var currentSlide = 1;

var transitionSlide = function() {
  var timer = setInterval(() => {
    console.log("Konjo!");
    if (currentSlide < slideCount) {
      var delta = currentSlide * slideWidth * -1;
      gallery.style.transform = `translateX(${delta}px)`;
      currentSlide += 1;
    } else {
      gallery.style.transform = "translateX(0)px";
      currentSlide = 1;
    }
  }, 5000);
};

transitionSlide();
