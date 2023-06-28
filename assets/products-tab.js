$(function() {
  $('.desc-tab .tabs-nav a').click(function() {

    // Check for active
    $('.tabs-nav li').removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    let currentTab = $(this).attr('href');
    $('.tabs-content > div').hide();
    $(currentTab).show();

    return false;
  });
  
  
/*var $zoom;
$(document).ready(function() {
if ($(window).width() < 768) {
  
  $zoom = $('.product-featured-media').magnify({
      afterLoad: function() {
        console.log('Magnification powers activated!');
      }
    });
  }
});*/
 
  
  $("#coll-filter").click(function(){
  $(this).toggleClass("arrowdown");
    $(".filter-show").slideToggle();
});
  
});



