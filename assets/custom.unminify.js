$(window).on('hashchange', function(e){
  console.log(location.href);
  showAccountInfo();
});

function showAccountInfo() {
  $(".account-nav li").removeClass("active");
  if(location.href.indexOf("account-details") > -1) {
    $(".account-details-nav").addClass("active");
    $(".grid__item.myaccount__order-history").removeClass("active");
    $(".grid__item.account_details").addClass("active");
  }
  if(location.href.indexOf("orderhistory") > -1) {
    $(".order-history-nav").addClass("active");
    $(".grid__item.account_details").removeClass("active");
    $(".grid__item.myaccount__order-history").addClass("active");
  }
}

var clicks = 0;
$(document).on("click", ".cart__submit-controls", function(e){
  if (clicks == 0){
       
  $(".checkout-popup").addClass("active");
  $(".checkout-popup-wrapper").addClass("active");
  $(this).addClass("active");
  $("body").addClass("overflow");
  } else{
	
  }
  ++clicks;
  
});

$(document).on("click", ".checkout-popup-wrapper.active", function(e){
  $(".checkout-popup").removeClass("active");
  $(this).removeClass("active");
  $("body").removeClass("overflow");
  
});

$(document).on("change", "#flights-stairs, .notes-controls .radio-group input[type='radio']", function(){
	addCartNote();
});

function addCartNote() {
  var isBusiness = "No";
  var isResedential = "No";
  var req_for = "";
  $(".notes-controls .radio-group input[type='radio']:checked").each(function(){
    if(typeof($(this).val()) != "undefined") {
    	req_for += $(this).prev("label").text() + ": " + $(this).val()+"\n";
    }
  });
  
  //var line1 = "No. of flights/stairs: "+$("#flights-stairs").val();
  if($("#flights-stairs").val() != "") {
  	req_for += "No. of flights/stairs: "+$("#flights-stairs").val();
  }
  
  //req_for += "\nBusiness or Residential: "+req_for;
  $("#CartSpecialInstructions").val(req_for);
}

var descMaxHeight = 150;

$(document).ready(function() {
  
  // Get OS and add to body
    var os = [
        'iphone',
        'ipad',
        'windows',
        'mac',
        'linux'
    ];
    var match = navigator.appVersion.toLowerCase().match(new RegExp(os.join('|')));
    if (match) {
        $('body').addClass(match[0]);
    };
   
  $('.slider').slick({
  
//   autoplay:true,
//   autoplaySpeed:2000,
      infinite: true,
      autoplay:true,
      autoplaySpeed:1500,
      centerMode: true,
      centerPadding: '50px',
      speed: 500,
      fade: true,
      cssEase: 'linear'
  });
  if($(".product-single__thumbnails-slider-track").length > 0) {
    $(".product-single__thumbnails-slider-track").slick({
      vertical: true,
      infinite: false,
      dots: false,
      slidesToShow: 7,
      slidesToScroll: 2
    });
  }
  
  if($(window).width() > 767) {
    descMaxHeight = 150;
  }
  else {
    descMaxHeight = 195;
  }
  //setDescription();
  
  $("body").on("click", ".readDesc", function(){
    if($(".product__Brand").hasClass("activeRead")) {
      $(".product__Brand").removeClass("activeRead");
      $(".readDesc").text("Read more");
    }
    else { 
      $(".product__Brand").addClass("activeRead");
      $(".readDesc").text("Read less");
    }
  });
  
  if($("body").hasClass("template-collection")) {
      $(".main-content").addClass("collection-main");
  }
  
  if($(".brand-table-slider").length > 0) {
    $(".brand-table-slider .shg-row").slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  
});

function setDescription() {
  if($(".product-description").length > 0) {
      if($(".product-description").height() >= descMaxHeight) {
        $(".readDesc").remove();
        $("<p class='readDesc'>Read more</p>").insertAfter(".product__Brand");
      }
      else {
        $(".readDesc").remove();
      }
    }
}

function setJettiDescription() {
  console.log("setting jetti");
  var fVar = "";
    $("select.single-option-selector-product-template").each(function(index){
      if(index > 0) {
        fVar += "-"+$(this).val().toLowerCase().replace(" ", "-");
      }
      else {
        fVar = $(this).val().toLowerCase().replace(" ", "-");
      }
    });
  fVar = fVar.replace(" ", "-").replace(":", "").replace('"', "").replace(" ", "-");
    //console.log(fVar);
  $("[data-ul-nav]").css({"display":"none"});
  $("[data-ul-nav='"+fVar+"']").css({"display":"block"});
  $("[data-ul-content]").css({"display":"none"});
  $("[data-ul-content='"+fVar+"']").css({"display":"block"});
  $("[data-ul-content='"+fVar+"'] div:eq(0)").show();
  
  var val = $(".product-form__variants.no-js").val();
  var vari = $(".product-form__variants.no-js option[value='"+val+"']").data("title");
  var sku = $("#var-skus li[data-var='"+vari+"']").data("sku");
  $("[data-currentsku]").text(sku);
}


/*** Menu ***/

$(function(){
  
  $("body").on("click", ".js-mobile-nav-toggle", function(){
    $("body").toggleClass("overflow");
  });
  showAccountInfo();
  
  $("body").on("click", ".colorSwatch span", function(){
    if(!$(this).hasClass("active")) {
      let val = $.trim($(this).data("value"));
      $(".variant-type-color select").val(val);
      let elemId = $(".variant-type-color select").attr("id");
      let elem = document.getElementById(elemId);
      elem.dispatchEvent(new Event("change"));
      $(".colorSwatch span").removeClass("active");
      $(this).addClass("active");
      
    }
  });
  
  
  setJettiDescription();
  $("body").on("change", "select.single-option-selector-product-template", function(){
    setJettiDescription();
  });

});

$(window).on("resize", function(){
  if($(".carousel__button.is-next").length > 0) {
    setCarouselArrow();
  }
  
  if($(window).width() > 767) {
    descMaxHeight = 150;
  }
  else {
    descMaxHeight = 195;
  }
  //setDescription();
});

$(window).on("load", function(){
  if($(".bestSellerSlider").length > 0) {
      $(".bestSellerSlider > .shg-row").slick({
        dots: false,
        arrows: false,
        infinite: false,
        slidesToShow: 2.5,
        slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]

      });
  }
  
});

/************************ header search js  ********************/



$(function(){
$("body").on("click", ".close__announcement-bar", function(){
    $("#announcement-bar").css("display","none");
    $(".header-main").css("top",0);
    $(".shop-form").css("display","none");
  $("body").css("overflow", "auto");
    $("header").addClass("remove__top");
    
});
});

if (screen.width < 768) {
      var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
        if ((st > lastScrollTop) && (lastScrollTop> 0)) {
               // downscroll code
              $(".header-main").css("top","-170px");
          	  $(".header-main").addClass("announcement-hide");

           }
       else {
         
          // upscroll code
         if($(this).scrollTop() > 70) {
           if ($(".announcement-bar").hasClass("setCookie")) {
             $(".header-main").css("top","0px");
             $(".header-main").addClass("announcement-hide");
           }
           else{
            $(".header-main").css("top","0px");
             $(".header-main").addClass("announcement-hide");
           }
         }
         else {
           if ($(".announcement-bar").hasClass("setCookie")) {
             	$(".header-main").css("top","0px");
             $(".header-main").addClass("announcement-hide");
             }
           else{
             $(".header-main").css("top","0px");
             $(".header-main").removeClass("announcement-hide");
           }
           $(".header-main.remove__top").css("top","0px");
         }
         $(".header-main.remove__top").css("top","0px");
       }
       lastScrollTop = st;
    });
}
else{
  var lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= delta)
          return;
        if ((st > lastScrollTop) && (lastScrollTop> 0)) {
               // downscroll code
              $(".header-main").css("top","-170px");

           }
       else {
          // upscroll code
         if($(this).scrollTop() > 70) {
           if ($(".announcement-bar").hasClass("setCookie")) {
             $(".header-main").css("top","0px");
           }
           else{
             $(".header-main").css("top","0px");
           }
         }
         else {
           
           if ($(".announcement-bar").hasClass("setCookie")) {
             	$(".header-main").css("top","0px");
             }
           else{
             $(".header-main").css("top","0px");
           }
           $(".header-main.remove__top").css("top","0px");
         }
         $(".header-main.remove__top").css("top","0px");
       }
       lastScrollTop = st;
    });
}
/************** 3Dec ***************/


$(function(){
 $("body").on("click", ".site-nav a[href='#']", function(){
   $(".shop-form").addClass("formDisplay");
   $("body").addClass("shop-popup");
});
  
 $("body").on("click", "#MobileNav a[href='#']", function(){
   $(".shop-form").addClass("formDisplay");
   $("body").addClass("shop-popup");
});
  
  $("body").on("click", "span.close", function(){
     $(".shop-form").removeClass("formDisplay");
   $("body").removeClass("shop-popup");
     
  });
  

 $("body").on("click", "#announcement-bar", function(){
   $(".shop-form").addClass("formDisplay");
   $("body").addClass("shop-popup");
});
  
 $("body").on("click", "span.close", function(){
     $(".shop-form").removeClass("formDisplay");
   $("body").removeClass("shop-popup");
     
  });
  
  $('.page-width.brand-landing .article__grid-image-container').mouseenter(function(){
    $(this).children(".article__grid-excerpt").addClass("active");
  });
  $('.page-width.brand-landing .article__grid-image-container').mouseleave(function(){
    $(this).children(".article__grid-excerpt").removeClass("active");
  });
  
  $("body").on("click", ".desc-readmore", function(){
    $(this).prevAll(".wrapDescText").stop().toggle("fast");
    if($(this).hasClass("activeRead")) {
      $(this).text("Read more");
      $(this).removeClass("activeRead");
      $(this).parent().children(".desc-text-wrap:eq(0)").removeClass("expand");
    }
    else {
      $(this).parent().children(".desc-text-wrap:eq(0)").addClass("expand");
      $(this).text("Read less");
      $(this).addClass("activeRead");
    }
  });
});

 $(window).on("load", function(){

      $('.home-product-slider > .shg-row > .shg-c-lg-3 .shg-row >.shg-c-lg-6').appendTo('.home-product-slider > .shg-row > .shg-c-lg-3:nth-child(1) .shg-row');      
      $('.new-design-sliders > .shg-row > .shg-c-lg-3').not(':first').remove();

setTimeout(function(){     
$('#recently-viewed-products > div').wrapAll('<div class="recent-slider"></div>');   
$("#recently-viewed-products > h2").prependTo("#shopify-section-template--15141388517584__recently-viewed");
},3000);
   
if ($(window).width() > 800){
setTimeout(function(){   
 $('.collection.clearfix').addClass('importantRule');
  if($('#recently-viewed-products .recent-slider .product').length > 5) {
    $('#recently-viewed-products .recent-slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      
        responsive: [
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }


    ]
      
      
    });
    
     }
 },3000);
}

   if ($(window).width() <= 800){
     setTimeout(function(){   
    
 $('.collection.clearfix').addClass('importantRule');       
if($('#recently-viewed-products ').length > 0) {
  if($('#recently-viewed-products .recent-slider .product').length < 2) {
    $('.recent-slider .product').addClass('only-one');
  }
 if($('#recently-viewed-products .recent-slider .product').length > 2) {  
    $('#recently-viewed-products .recent-slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      
        responsive: [
      {
        breakpoint: 819,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }


    ]
      
    });
   }
  }
    
     },3000);
   } 

if($('.home-product-slider').length > 0) {
    $('.home-product-slider > .shg-row > .shg-c-lg-3 .shg-row').slick({
      arrows: true,
      dots: false,
      infinite: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      
        responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      }


    ]
      
      
    });
  }
   
 });
 


 
 /******* collection load more ***********/

$(window).on("load", function(){
   
  if ($('.collection-hero__title:contains("DECOR")').length > 0)
   {
     $("body").addClass("h1-color-white");
   }   
  if($("[data-fancybox]").length > 0) {
  Fancybox.bind("[data-fancybox]", {

    buttons: [
      //"zoom",
      //"share",
      //"slideShow",
      //"fullScreen",
      //"download",
      //"thumbs",
      "close"
    ]

  });

  }
   
   function setCarouselArrow() {
     if($(window).width() > 1024) {
       var left = $(".carousel__track").offset().left;
       $(".carousel__button.is-prev").css({"left": (left-45)+"px"});
       $(".carousel__button.is-next").css({"right": (left-45)+"px"});
     }
   }
  
$("body").on("click", "[data-fancybox]", function(){
  setTimeout(function(){
    setCarouselArrow();
  },100);
});

$("body").on("click", ".product-single__media-group .left-arrow", function(){

  if($('.product-single__media-group').find('.product-single__media-wrapper').not('.hide').prev('.product-single__media-wrapper').length > 0){
    $('.product-single__media-group').find('.product-single__media-wrapper').not('.hide').addClass('hide').prev('.product-single__media-wrapper').removeClass('hide'); 
  }
  else{
    var last = parseInt($('.product-single__media-group').children('.product-single__media-wrapper').length - 1);
    $('.product-single__media-group').find('.product-single__media-wrapper').not('.hide').addClass('hide');
    $('.product-single__media-group').find('.product-single__media-wrapper:eq('+ last +')').removeClass('hide');
    console.log(last);
  }
  
});

$("body").on("click", ".product-single__media-group .right-arrow", function(){

 if($('.product-single__media-group').find('.product-single__media-wrapper').not('.hide').next('.product-single__media-wrapper').length > 0){
    $('.product-single__media-group').find('.product-single__media-wrapper').not('.hide').addClass('hide').next('.product-single__media-wrapper').removeClass('hide'); 
  }
  else{
    $('.product-single__media-group').find('.product-single__media-wrapper').not('.hide').addClass('hide');
    $('.product-single__media-group').find('.product-single__media-wrapper:eq(0)').removeClass('hide');
    
  }
  
});
      var list = $(".template-collection .collection-main div#Collection .collection-right-section .custom .boost-pfs-filter-product-item");
      var numToShow = 9;
      var button = $(".collection_load_more");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
   list.slice(0, numToShow).show();

      button.click(function(e){
        e.preventDefault();
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numToShow).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
      });

});

if(screen.width < 768) {
  $(document).ready(function() {

    if($(".grid--uniform").length > 0) {
      $(".brand-landing .grid--uniform").slick({
        infinite: false,
        dots: false,
        arrow: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }

  });
  
}

/************** Homepage final  ********/
$(document).ready(function(){
  
setTimeout(function(){
  
      var list = $(".home-blog-section .blog-list-view.blog-list .another-blog-list");
      var numToShow = 2;
      var button = $(".brand-template-shop-now a");
      var readButton = $(".homepage-final-read-story a");
                
      var numInList = list.length;
  console.log('is'+ numInList);
      list.hide();
    readButton.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();

      button.click(function(e){
          e.preventDefault();
          var showing = list.filter(':visible').length;
            
          list.slice(showing - 1, showing + numInList).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing = 2) {
              button.hide();
        	readButton.show();            
          }

      });
  }, 2000);
  
  if($(".main-recommendations").length > 0) {
      similar_products();
  }
});


$(window).on("load", function() {
  
});

function similar_products() {
  var nextLink;
  if($(".main-recommendations .prod_slider li").length < 7) {
    if($(".main-recommendations .next-available").length > 0) {
      nextLink = $(".main-recommendations .next-available a").attr("href");
      $.ajax({
        url: nextLink,
        type: 'get',
        beforeSend: function(){
          
        },
        success: function(data){
          var html_dom = $(data).find("ul.recommanded-list").html();
          $(".main-recommendations .prod_slider").append(html_dom);
        },
        complete: function(){
          
          if($(".main-recommendations .prod_slider li.grid__item").length < 7) {
            console.log("fucntion done");
            	add_more_similer_products();
          }
          
          similar_products_slider();
            
        }
      });
    }
  }
  else {
    similar_products_slider();
  }
}

function add_more_similer_products(){
  //$(".dummy-products").html().appendTo(".grid.recommanded-list");
  $(".main-recommendations .prod_slider.slick-initialized").slick('unslick');
  $(".grid.recommanded-list").append($(".dummy-products").html());
}

function similar_products_slider(){
  if($(window).width() < 801){
    $(".main-recommendations .prod_slider.slick-initialized").slick('unslick');
       $(".main-recommendations .prod_slider").slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1
       });  
  }
  else{
    if($(".main-recommendations .prod_slider").hasClass("slick-initialized")) {
    	$(".main-recommendations .prod_slider").slick('unslick');
        $(".main-recommendations .prod_slider").slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 2
        });
      }
    else {
      $(".main-recommendations .prod_slider").slick({
          dots: false,
          arrows: true,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 2
        });
    }
  }
}

/****** 17 March ******/





/*** 19 march *****/

$(function(){
  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

var newBtn = document.querySelector(".close__announcement-bar");
  var announce__bar = document.getElementById("announcement-bar");


var x = getCookie('AfterNoon Light');
  if(x){
        announce__bar.classList.add("setCookie");
        
    }  
  
  
$("body").on("click", ".close__announcement-bar", function(){
  
setCookie('AfterNoon Light','announcement-bar',1);
var x = getCookie('AfterNoon Light');  
  
  if(x){
        announce__bar.classList.add("setCookie");
        
    }
    else{
        announce__bar.classList.remove("setCookie");

    }
  
  $(".site-header.header-main").css("top", "0");
});  

var announce__bar = document.getElementById("announcement-bar");


let checkCookies = document.cookie.indexOf("AfterNoon Light");
  if(checkCookies < 0){
    $("#announcement-bar").show();
  }
  
});




$(document).ready(function(){
  function load_swatches(){
    if(!$('.collection-swatch-wrap').length){
  		var evt = new CustomEvent("csp:render:swatches");
		window.dispatchEvent(evt);
    }
  }
  
  const myTimeout = setTimeout(load_swatches, 3000);
  
});






$(window).on("load", function() {
  if($(".title-wrapper").length > 0) {
    $(".homepage-final-bottom-column .shg-c-lg-6").each(function(){
      $(this).find('.prod-price').appendTo($(this).find(".vendor_name"));
    }); 
  }
  if($("#blogs-content").length > 0) {
  	$("#blogs-content").load("/blogs/stories/ .blog-list-view.blog-list");
  }
  
  var wishlistPrice = setInterval(function(){
    if($(".zbodytitle .zprice").length < 1 ) {
  		$('.ZoomyWishlistPageGrid').each(function(){
        $(this).find('.zprice').insertAfter($(this).children('.zbodytitle').children('.vendor'));
      });
    }
    else {
      clearInterval(wishlistPrice);
    }
  }, 1500);
  
  setTimeout(function(){
      $("#ZoomyWishlistPage .ZoomyWishlistPageGrid").each(function() {
        var p_handle = $(this).children(".zbodypimg").children("a").attr('href') + '.json';
        
        var this1 = $(this); 
        jQuery.getJSON(p_handle, function(product) {      
	      this1.find(".zbodytitle").prepend("<div class='vendor'>" + product.product.vendor + "</div>");
        });
      });
  }, 800);  
  
  
});


$(document).ready(function(){
$('.custom-list-img').mouseenter(function(){
  $(this).find(".new-custom-blog-text").addClass("active");
});
$('.custom-list-img').mouseleave(function(){
  $(this).find(".new-custom-blog-text").removeClass("active");
});
});



$(document).ready(function (){
    if (window.location.href.indexOf("contact_posted=true") > -1) {
    	
      $('html, body').animate({
        scrollTop: $(".mybtnn").offset().top
      }, 1000);
      
     }
  
  $(".vendor-list li").each(function(){
    $('[title="Zassenhaus"]').remove();
    $('[title="Thuma"]').remove();
    $('[title="Woll"]').remove();
    $('[title="Cilio"]').remove();
    $('[title="Ja"]').remove();
    $('[title="Kuchenprofi"]').remove();
  });
  
  
  
});

$(document).on("click", ".boost-pfs-filter-product-item-vendor", function(){
	var hhref = $(this).prev().attr('href');
  	window.location.href = hhref;
  	
});


$(document).on("click", "body.template-customers-addresses ul.address-list .address ul.list--inline li button.btn.btn--small.address-edit-toggle", function(){
    $("p.add_address_btn").toggle();
  
});

$(document).on("click", "#ZoomyWishlistPage a.zmsg", function(e){
    $("#ZoomyWishlistPage a.zmsg,#ZoomyWishlistPage p.zmsg,.template-zooomywishlist .section-header.text-center ").hide();  
	$("#wishlist_login").show();
    e.preventDefault()
});