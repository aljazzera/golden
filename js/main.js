// menu.onclick = function myFunction() {
//     var x = document.getElementById('myTopnav');
   
//     if (x.className === "header-nav") {
//      x.className += " responsive";
//      } else {
//          x.className = "header-nav";
//     }
// }
$(function() { 
  $('.header-nav-btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('header-nav-btn__active');
      $('.link').toggleClass('header-item__active');
    });
  });