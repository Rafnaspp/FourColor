// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

document.addEventListener("DOMContentLoaded", () => {
    const images = [
      "images/BANNER IMAGE.png",
      "https://t4.ftcdn.net/jpg/04/14/22/55/360_F_414225555_k4FE9n2fjaBen0QlOW1kSjaQBWfjfCjF.jpg",
      "https://png.pngtree.com/thumb_back/fh260/background/20230629/pngtree-white-background-3d-gadget-design-illustration-image_3705858.jpg",
      "https://t4.ftcdn.net/jpg/06/91/17/95/360_F_691179587_QSctAaNAIbYMjexjEV3w8clmvzcXmJuU.jpg",
    ];
    let currentIndex = 0;
    const sliderImage = document.querySelector(".slider-image");
  
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      sliderImage.style.opacity = 0; // Fade out
      setTimeout(() => {    
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 1; // Fade in
      }, 500); // Match this to the transition duration in CSS
    }
  
    setInterval(changeImage, 3000); // Change image every second
  });
  