if(screen.width<768){var lastScrollTop=0,delta=15;$(window).scroll((function(a){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(e>lastScrollTop&&lastScrollTop>0?($(".header-main").css("top","-170px"),$(".header-main").addClass("announcement-hide")):($(this).scrollTop()>70?($(".announcement-bar").hasClass("setCookie"),$(".header-main").css("top",0+"px"),$(".header-main").addClass("announcement-hide")):($(".announcement-bar").hasClass("setCookie")?($(".header-main").css("top","0px"),$(".header-main").addClass("announcement-hide")):($(".header-main").hasClass("announcement-bar-off")?$(".header-main").css("top","0px"):$(".header-main").css("top",announcementHeight+"px"),$(".header-main").removeClass("announcement-hide")),$(".header-main.remove__top").css("top","0px")),$(".header-main.remove__top").css("top","0px")),lastScrollTop=e)}))}else{lastScrollTop=0,delta=15;$(window).scroll((function(a){var e=$(this).scrollTop();Math.abs(lastScrollTop-e)<=delta||(e>lastScrollTop&&lastScrollTop>0?$(".header-main").css("top","-170px"):($(this).scrollTop()>70?($(".announcement-bar").hasClass("setCookie"),$(".header-main").css("top","0px")):($(".announcement-bar").hasClass("setCookie")||$(".header-main").hasClass("announcement-bar-off")?$(".header-main").css("top","0px"):$(".header-main").css("top",announcementHeight+"px"),$(".header-main.remove__top").css("top","0px")),$(".header-main.remove__top").css("top","0px")),lastScrollTop=e)}))}

var announcementHeight = 0;
announcementHeight = $("#shopify-section-announcement-bar").outerHeight();

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function eraseCookie(name) {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
$(function(){
  //setSubmenuPosition();
  $("body").on("click", ".site-hamburger", function(){
    if(!$(this).hasClass("active")) {
      $(this).addClass("active");
      $(".site-nav").addClass("active");
      $("#AccessibleNav, body").addClass("menuActive");
    }
    else {
      $(this).removeClass("active");
      $(".site-nav").removeClass("active");
      $("#AccessibleNav, body").removeClass("menuActive");
    }
  });
  
  $(".search-form__input-wrapper img#header_search").click(function(){
     $(".header_input").show();
    $(".header_input").focus();
    $("img#header_search").hide();
    
  });
  $(".mobile-nav__item.mobile-icon img#header_search").click(function(){
     $(".boost-pfs-search-suggestion-mobile-top-panel").show();
    $(".boost-pfs-search-suggestion-mobile-top-panel #boost-pfs-search-box-mobile").focus();
  });
  if(getCookie('announcement') == "off") {
    $(".announcement-bar").addClass("setCookie");
    $("body").addClass("no-announcement");
  }
  else {
    $(".announcement-bar").addClass("announcementActive").slideDown();
  }
 
  /*announcementHeight = $("#shopify-section-announcement-bar").outerHeight();

  var scrolltop = $(window).scrollTop();
   if(scrolltop > 50){
    $(".site-header.header-main").css({"top":"0px"});
  }
  else{
    $(".site-header.header-main").css({"top": announcementHeight +"px"});
  }*/

});
$(document).on("click", ".close-announcement", function(){
  $("body").addClass("no-announcement");
  $(".announcement-bar").addClass("setCookie").slideUp();
  $(".site-header.header-main").css({"top":"0px"});
  setCookie('announcement','off',1);
});



$(document).on("click", ".js-mobile-nav-toggle", function(){
  $(".boost-pfs-filter-tree-mobile-button").toggle();
  $("body").stop().toggleClass("mobile-menu-active");
});
$(document).on("click", ".js-toggle-submenu .mobile-nav__icon", function(){
  $(this).parent().next().stop().slideToggle();
  $(this).parent().stop().toggleClass("dropdown-active");
});

function setSubmenuPosition() {
  $("#desktopSiteNav > li").each(function(){
    if($(this).hasClass("site-nav--has-dropdown")) {
      let x = $(this).offset().left;
      $(this).children().children(".site-nav__childlist").css({"left": (x-32)+"px"});
    }
  });
}
function setSubmenuWidth() {
  let mainMenuWidth = $("#desktopSiteNav").outerWidth();
  $(".site-nav__childlist").css({"width": mainMenuWidth+"px"});
}
var client_X;
var away = true;
$(document).on("mouseover", function(e){
  client_X = e.clientX;
});
$(document).on("mouseenter", "#desktopSiteNav > li", function(){
    $("#desktopSiteNav").stop().addClass("hovered");
    $(this).stop().addClass("hovered");
});
$(document).on("mouseleave", "#desktopSiteNav > li", function(){
    $("#desktopSiteNav").removeClass("hovered");
    $(this).removeClass("hovered");
});

$(document).on("mouseleave", ".site-nav__childlist", function(){
  //$("#desktopSiteNav > li").removeClass("hovered");
});

$(document).on("mouseover", ".site-nav--has-dropdown.hovered", function(e){
  
    if(e.clientX < $(".site-nav--has-dropdown.hovered .site-nav__childlist").offset().left) {
      $("#desktopSiteNav > li").removeClass("hovered");
      $("#desktopSiteNav").removeClass("hovered");
    }
    if(e.clientX > ($(".site-nav--has-dropdown.hovered .site-nav__childlist").offset().left + $(".site-nav--has-dropdown.hovered .site-nav__childlist").outerWidth())) {
      $("#desktopSiteNav > li").removeClass("hovered")
        $("#desktopSiteNav").removeClass("hovered");;
    }
  
});
$(window).on("load scroll resize", function(){
  if($(this).width() > 990) {
    if($(this).scrollTop() > 50) {
      $(".product-single__media-group .position_sticky").addClass("pSticky");
    }
    else {
      $(".product-single__media-group .position_sticky").removeClass("pSticky");
    }
  }
  $("#desktopSiteNav .site-nav__childlist").each(function(){
    $(this).parent().css({"height": $(this).outerHeight()+"px"});
  });
  setSubmenuWidth();
  //setSubmenuPosition();
});
$(window).on("load", function(){
    $(".aaa_gift_description h2").prependTo("#aaa-gift-manager");
/*  if(document.location == "https://afternoonlight.com/apps/giftregistry") {
    let heading = "REGISTRY";
    let reg_text1 = "Special events call for special gifts - and getting just what you want.";
    let reg_text2 = "Peruse our assortment of thousands of items for your home from hundreds of the best brands and makers, then fill your registry with the special things you'll cherish for years to come. Your friends, family, and home will thank you.";
    let reg_text3 = "Congratulations, best wishes, happy everything.";
    let reg_img = "https://cdn.shopify.com/s/files/1/0573/2201/2880/t/67/assets/monogram.gif?v=1675920806";
    
    $("#aaa-proxy-wishlist").prepend(`<div class="ex-wrapper">
      <h2>${heading}</h2>
      <img src="${reg_img}" alt="Registry"/>
      <div class="para-wrap">
        <p>${reg_text1}</p>
        <p>${reg_text2}</p>
        <p class="space">${reg_text3}</p>
      </div>
    </div>`);
  }
*/

  
  announcementHeight = $("#shopify-section-announcement-bar").outerHeight();
  var scrolltop1 = $(window).scrollTop();
     if(scrolltop1 > 50){
      $(".site-header.header-main").css({"top":"0px"});
    }
    else{
      $(".site-header.header-main").css({"top": announcementHeight +"px"});
    }
});
$(window).on("scroll", function(){
  if($(".boost-pfs-search-suggestion-mobile-top-panel").length > 0) {
    if($(".boost-pfs-search-suggestion-mobile-top-panel").attr("style") && $(".boost-pfs-search-suggestion-mobile-top-panel").attr("style").indexOf("block") > -1) {
      $(".boost-pfs-search-suggestion-mobile-top-panel").hide();
    }
  }
  $(".boost-pfs-search-suggestion-wrapper").removeClass("boost-pfs-search-suggestion-open");
});
if ($(window).width() < 768) {
$(document).on("click", ".boost-pfs-search-btn-clear-suggestion", function(){
    $(".boost-pfs-search-suggestion-mobile-top-panel").hide();
    $("#boost-pfs-search-suggestion-mobile").hide();
});
}


$(document).ready(function(){
    if(document.location == "https://afternoonlight.com/apps/giftregistry") {
      $("#aaa-gift-manager").addClass("bannerActive"); 
      $(".aaa_gift_description").addClass("active");
    }
  $('.aaa-gift-create-btn .btn-block.aaa-gift-create').css('background-color','#242d2d!important');

  $(".tooltip_gf").click( function() {
    alert('You may only create one registry per email address. To create a new or additional registry, please use another email address.');
  });
  //$(".gift_link_header").html("MY REGISTRY");
  //$("#aaa-reg-update-cart").html("ADD TO CART");
  //$("th.aaa-not-user span").html("ADJUST NUMBER BELOW AND ADD TO CART");
  setTimeout(function(){
    $(".gift_link_header").html("MY REGISTRY");
    $('.aaa-gift-create-btn .btn-block.aaa-gift-create').css('background-color','#242d2d!important');
  }, 2000);
});