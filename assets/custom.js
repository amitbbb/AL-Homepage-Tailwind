function showAccountInfo(){$(".account-nav li").removeClass("active"),location.href.indexOf("account-details")>-1&&($(".account-details-nav").addClass("active"),$(".grid__item.myaccount__order-history").removeClass("active"),$(".grid__item.account_details").addClass("active")),location.href.indexOf("orderhistory")>-1&&($(".order-history-nav").addClass("active"),$(".grid__item.account_details").removeClass("active"),$(".grid__item.myaccount__order-history").addClass("active"))}$(window).on("hashchange",function(e){console.log(location.href),showAccountInfo()});var clicks=0;function addCartNote(){var e="";$(".notes-controls .radio-group input[type='radio']:checked").each(function(){void 0!==$(this).val()&&(e+=$(this).prev("label").text()+": "+$(this).val()+"\n")}),""!=$("#flights-stairs").val()&&(e+="No. of flights/stairs: "+$("#flights-stairs").val()),$("#CartSpecialInstructions").val(e)}$(document).on("click",".cart__submit-controls",function(e){0==clicks&&($(".checkout-popup").addClass("active"),$(".checkout-popup-wrapper").addClass("active"),$(this).addClass("active"),$("body").addClass("overflow")),++clicks}),$(document).on("click",".checkout-popup-wrapper.active",function(e){$(".checkout-popup").removeClass("active"),$(this).removeClass("active"),$("body").removeClass("overflow")}),$(document).on("change","#flights-stairs, .notes-controls .radio-group input[type='radio']",function(){addCartNote()});var descMaxHeight=150;function setDescription(){$(".product-description").length>0&&($(".product-description").height()>=descMaxHeight?($(".readDesc").remove(),$("<p class='readDesc'>Read more</p>").insertAfter(".product__Brand")):$(".readDesc").remove())}function setJettiDescription(){console.log("setting jetti");var e="";$("select.single-option-selector-product-template").each(function(o){o>0?e+="-"+$(this).val().toLowerCase().replace(" ","-"):e=$(this).val().toLowerCase().replace(" ","-")}),e=e.replace(" ","-").replace(":","").replace('"',"").replace(" ","-"),$("[data-ul-nav]").css({display:"none"}),$("[data-ul-nav='"+e+"']").css({display:"block"}),$("[data-ul-content]").css({display:"none"}),$("[data-ul-content='"+e+"']").css({display:"block"}),$("[data-ul-content='"+e+"'] div:eq(0)").show();var o=$(".product-form__variants.no-js").val(),i=$(".product-form__variants.no-js option[value='"+o+"']").data("title"),t=$("#var-skus li[data-var='"+i+"']").data("sku");$("[data-currentsku]").text(t)}if($(document).ready(function(){var e=navigator.appVersion.toLowerCase().match(RegExp("iphone|ipad|windows|mac|linux"));e&&$("body").addClass(e[0]),$(".slider").slick({infinite:!0,autoplay:!0,autoplaySpeed:1500,centerMode:!0,centerPadding:"50px",speed:500,fade:!0,cssEase:"linear"}),$(".product-single__thumbnails-slider-track").length>0&&$(".product-single__thumbnails-slider-track").slick({vertical:!0,infinite:!1,dots:!1,slidesToShow:7,slidesToScroll:2}),descMaxHeight=$(window).width()>767?150:195,$("body").on("click",".readDesc",function(){$(".product__Brand").hasClass("activeRead")?($(".product__Brand").removeClass("activeRead"),$(".readDesc").text("Read more")):($(".product__Brand").addClass("activeRead"),$(".readDesc").text("Read less"))}),$("body").hasClass("template-collection")&&$(".main-content").addClass("collection-main"),$(".brand-table-slider").length>0&&$(".brand-table-slider .shg-row").slick({dots:!1,arrows:!0,infinite:!1,slidesToShow:1,slidesToScroll:1})}),$(function(){$("body").on("click",".js-mobile-nav-toggle",function(){$("body").toggleClass("overflow")}),showAccountInfo(),$("body").on("click",".colorSwatch span",function(){if(!$(this).hasClass("active")){let e=$.trim($(this).data("value"));$(".variant-type-color select").val(e);let o=$(".variant-type-color select").attr("id");document.getElementById(o).dispatchEvent(new Event("change")),$(".colorSwatch span").removeClass("active"),$(this).addClass("active")}}),setJettiDescription(),$("body").on("change","select.single-option-selector-product-template",function(){setJettiDescription()})}),$(window).on("resize",function(){$(".carousel__button.is-next").length>0&&setCarouselArrow(),descMaxHeight=$(window).width()>767?150:195}),$(window).on("load",function(){$(".bestSellerSlider").length>0&&$(".bestSellerSlider > .shg-row").slick({dots:!1,arrows:!1,infinite:!1,slidesToShow:2.5,slidesToScroll:2,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:991,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}}]})}),$(function(){$("body").on("click",".close__announcement-bar",function(){$("#announcement-bar").css("display","none"),$(".header-main").css("top",0),$(".shop-form").css("display","none"),$("body").css("overflow","auto"),$("header").addClass("remove__top")})}),screen.width<768){var e=0,o=15;$(window).scroll(function(i){var t=$(this).scrollTop();Math.abs(e-t)<=o||(t>e&&e>0?($(".header-main").css("top","-170px"),$(".header-main").addClass("announcement-hide")):($(this).scrollTop()>70?($(".announcement-bar").hasClass("setCookie"),$(".header-main").css("top","0px"),$(".header-main").addClass("announcement-hide")):($(".announcement-bar").hasClass("setCookie")?($(".header-main").css("top","0px"),$(".header-main").addClass("announcement-hide")):($(".header-main").css("top","0px"),$(".header-main").removeClass("announcement-hide")),$(".header-main.remove__top").css("top","0px")),$(".header-main.remove__top").css("top","0px")),e=t)})}else{var e=0,o=15;$(window).scroll(function(i){var t=$(this).scrollTop();Math.abs(e-t)<=o||(t>e&&e>0?$(".header-main").css("top","-170px"):($(this).scrollTop()>70?($(".announcement-bar").hasClass("setCookie"),$(".header-main").css("top","0px")):($(".announcement-bar").hasClass("setCookie"),$(".header-main").css("top","0px"),$(".header-main.remove__top").css("top","0px")),$(".header-main.remove__top").css("top","0px")),e=t)})}function similar_products(){var e;$(".main-recommendations .prod_slider li").length<7?$(".main-recommendations .next-available").length>0&&(e=$(".main-recommendations .next-available a").attr("href"),$.ajax({url:e,type:"get",beforeSend:function(){},success:function(e){var o=$(e).find("ul.recommanded-list").html();$(".main-recommendations .prod_slider").append(o)},complete:function(){$(".main-recommendations .prod_slider li.grid__item").length<7&&(console.log("fucntion done"),add_more_similer_products()),similar_products_slider()}})):similar_products_slider()}function add_more_similer_products(){$(".main-recommendations .prod_slider.slick-initialized").slick("unslick"),$(".grid.recommanded-list").append($(".dummy-products").html())}function similar_products_slider(){801>$(window).width()?($(".main-recommendations .prod_slider.slick-initialized").slick("unslick"),$(".main-recommendations .prod_slider").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:2,slidesToScroll:1})):($(".main-recommendations .prod_slider").hasClass("slick-initialized")&&$(".main-recommendations .prod_slider").slick("unslick"),$(".main-recommendations .prod_slider").slick({dots:!1,arrows:!0,infinite:!0,slidesToShow:5,slidesToScroll:2}))}$(function(){$("body").on("click",".site-nav a[href='#']",function(){$(".shop-form").addClass("formDisplay"),$("body").addClass("shop-popup")}),$("body").on("click","#MobileNav a[href='#']",function(){$(".shop-form").addClass("formDisplay"),$("body").addClass("shop-popup")}),$("body").on("click","span.close",function(){$(".shop-form").removeClass("formDisplay"),$("body").removeClass("shop-popup")}),$("body").on("click","#announcement-bar",function(){$(".shop-form").addClass("formDisplay"),$("body").addClass("shop-popup")}),$("body").on("click","span.close",function(){$(".shop-form").removeClass("formDisplay"),$("body").removeClass("shop-popup")}),$(".page-width.brand-landing .article__grid-image-container").mouseenter(function(){$(this).children(".article__grid-excerpt").addClass("active")}),$(".page-width.brand-landing .article__grid-image-container").mouseleave(function(){$(this).children(".article__grid-excerpt").removeClass("active")}),$("body").on("click",".desc-readmore",function(){$(this).prevAll(".wrapDescText").stop().toggle("fast"),$(this).hasClass("activeRead")?($(this).text("Read more"),$(this).removeClass("activeRead"),$(this).parent().children(".desc-text-wrap:eq(0)").removeClass("expand")):($(this).parent().children(".desc-text-wrap:eq(0)").addClass("expand"),$(this).text("Read less"),$(this).addClass("activeRead"))})}),$(window).on("load",function(){$(".home-product-slider > .shg-row > .shg-c-lg-3 .shg-row >.shg-c-lg-6").appendTo(".home-product-slider > .shg-row > .shg-c-lg-3:nth-child(1) .shg-row"),$(".new-design-sliders > .shg-row > .shg-c-lg-3").not(":first").remove(),setTimeout(function(){$("#recently-viewed-products > div").wrapAll('<div class="recent-slider"></div>'),$("#recently-viewed-products > h2").prependTo("#shopify-section-template--15141388517584__recently-viewed")},3e3),$(window).width()>800&&setTimeout(function(){$(".collection.clearfix").addClass("importantRule"),$("#recently-viewed-products .recent-slider .product").length>5&&$("#recently-viewed-products .recent-slider").slick({arrows:!0,dots:!1,infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:819,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]})},3e3),800>=$(window).width()&&setTimeout(function(){$(".collection.clearfix").addClass("importantRule"),$("#recently-viewed-products ").length>0&&($("#recently-viewed-products .recent-slider .product").length<2&&$(".recent-slider .product").addClass("only-one"),$("#recently-viewed-products .recent-slider .product").length>2&&$("#recently-viewed-products .recent-slider").slick({arrows:!0,dots:!1,infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:819,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:800,settings:{slidesToShow:2,slidesToScroll:1}}]}))},3e3),$(".home-product-slider").length>0&&$(".home-product-slider > .shg-row > .shg-c-lg-3 .shg-row").slick({arrows:!0,dots:!1,infinite:!1,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}}]})}),$(window).on("load",function(){$('.collection-hero__title:contains("DECOR")').length>0&&$("body").addClass("h1-color-white"),$("[data-fancybox]").length>0&&Fancybox.bind("[data-fancybox]",{buttons:["close"]}),$("body").on("click","[data-fancybox]",function(){setTimeout(function(){!function e(){if($(window).width()>1024){var o=$(".carousel__track").offset().left;$(".carousel__button.is-prev").css({left:o-45+"px"}),$(".carousel__button.is-next").css({right:o-45+"px"})}}()},100)}),$("body").on("click",".product-single__media-group .left-arrow",function(){if($(".product-single__media-group").find(".product-single__media-wrapper").not(".hide").prev(".product-single__media-wrapper").length>0)$(".product-single__media-group").find(".product-single__media-wrapper").not(".hide").addClass("hide").prev(".product-single__media-wrapper").removeClass("hide");else{var e=parseInt($(".product-single__media-group").children(".product-single__media-wrapper").length-1);$(".product-single__media-group").find(".product-single__media-wrapper").not(".hide").addClass("hide"),$(".product-single__media-group").find(".product-single__media-wrapper:eq("+e+")").removeClass("hide"),console.log(e)}}),$("body").on("click",".product-single__media-group .right-arrow",function(){$(".product-single__media-group").find(".product-single__media-wrapper").not(".hide").next(".product-single__media-wrapper").length>0?$(".product-single__media-group").find(".product-single__media-wrapper").not(".hide").addClass("hide").next(".product-single__media-wrapper").removeClass("hide"):($(".product-single__media-group").find(".product-single__media-wrapper").not(".hide").addClass("hide"),$(".product-single__media-group").find(".product-single__media-wrapper:eq(0)").removeClass("hide"))});var e=$(".template-collection .collection-main div#Collection .collection-right-section .custom .boost-pfs-filter-product-item"),o=$(".collection_load_more"),i=e.length;e.hide(),i>9&&o.show(),e.slice(0,9).show(),o.click(function(t){t.preventDefault();var s=e.filter(":visible").length;e.slice(s-1,s+9).fadeIn(),e.filter(":visible").length>=i&&o.hide()})}),screen.width<768&&$(document).ready(function(){$(".grid--uniform").length>0&&$(".brand-landing .grid--uniform").slick({infinite:!1,dots:!1,arrow:!1,slidesToShow:1,slidesToScroll:1})}),$(document).ready(function(){setTimeout(function(){var o=$(".brand-template-shop-now a"),i=$(".homepage-final-read-story a"),t=e.length;console.log("is"+t),e.hide(),i.hide(),t>2&&o.show(),e.slice(0,2).show(),o.click(function(s){s.preventDefault();var n=e.filter(":visible").length;e.slice(n-1,n+t).fadeIn();var a=e.filter(":visible").length;a=2,o.hide(),i.show()})},2e3),$(".main-recommendations").length>0&&similar_products()}),$(window).on("load",function(){}),$(function(){function e(e){for(var o=e+"=",i=document.cookie.split(";"),t=0;t<i.length;t++){for(var s=i[t];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(o))return s.substring(o.length,s.length)}return null}function o(e){document.cookie=e+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"}document.querySelector(".close__announcement-bar");var i=document.getElementById("announcement-bar");e("AfterNoon Light")&&i.classList.add("setCookie"),$("body").on("click",".close__announcement-bar",function(){(function e(o,i,t){var s="";if(t){var n=new Date;n.setTime(n.getTime()+864e5*t),s="; expires="+n.toUTCString()}document.cookie=o+"="+(i||"")+s+"; path=/"})("AfterNoon Light","announcement-bar",1),e("AfterNoon Light")?i.classList.add("setCookie"):i.classList.remove("setCookie"),$(".site-header.header-main").css("top","0")});var i=document.getElementById("announcement-bar");0>document.cookie.indexOf("AfterNoon Light")&&$("#announcement-bar").show()}),$(document).ready(function(){setTimeout(function e(){if(!$(".collection-swatch-wrap").length){var o=new CustomEvent("csp:render:swatches");window.dispatchEvent(o)}},3e3)}),$(window).on("load",function(){$(".title-wrapper").length>0&&$(".homepage-final-bottom-column .shg-c-lg-6").each(function(){$(this).find(".prod-price").appendTo($(this).find(".vendor_name"))});var e=setInterval(function(){$(".zbodytitle .zprice").length<1?$(".ZoomyWishlistPageGrid").each(function(){$(this).find(".zprice").insertAfter($(this).children(".zbodytitle").children(".vendor"))}):clearInterval(e)},1500);setTimeout(function(){$("#ZoomyWishlistPage .ZoomyWishlistPageGrid").each(function(){var e=$(this).children(".zbodypimg").children("a").attr("href")+".json",o=$(this);jQuery.getJSON(e,function(e){o.find(".zbodytitle").prepend("<div class='vendor'>"+e.product.vendor+"</div>")})})},800)}),$(document).ready(function(){$(".custom-list-img").mouseenter(function(){$(this).find(".new-custom-blog-text").addClass("active")}),$(".custom-list-img").mouseleave(function(){$(this).find(".new-custom-blog-text").removeClass("active")})}),$(document).ready(function(){window.location.href.indexOf("contact_posted=true")>-1&&$("html, body").animate({scrollTop:$(".mybtnn").offset().top},1e3),$(".vendor-list li").each(function(){$('[title="Zassenhaus"]').remove(),$('[title="Thuma"]').remove(),$('[title="Woll"]').remove(),$('[title="Cilio"]').remove(),$('[title="Ja"]').remove(),$('[title="Kuchenprofi"]').remove()})}),$(document).on("click",".boost-pfs-filter-product-item-vendor",function(){var e=$(this).prev().attr("href");window.location.href=e}),$(document).on("click","body.template-customers-addresses ul.address-list .address ul.list--inline li button.btn.btn--small.address-edit-toggle",function(){$("p.add_address_btn").toggle()}),$(document).on("click","#ZoomyWishlistPage a.zmsg",function(e){$("#ZoomyWishlistPage a.zmsg,#ZoomyWishlistPage p.zmsg,.template-zooomywishlist .section-header.text-center ").hide(),$("#wishlist_login").show(),e.preventDefault()});

$(window).on('resize', function(){
    var win = $(this); //this = window
    if (win.width() < 768) {
          if($(".template-product").length > 0) {
            $(".product__Brand").appendTo(".product-form .product-form__controls-group.variants");
          }
      }
});

$(window).on("load",function(){
   if($(".swiper-container").length > 0) {
    $(".header-main").addClass("announcement-bar-on");
  }
   else{
     $(".header-main").addClass("announcement-bar-off");
   }  
  $(".shg-category-grid .shg-category-row .shg-category-col").wrapAll("<div class='collection-slider'></div>");
  
  
  setTimeout(function () {
  if($(".collection-slider").length > 0) {
    $(".collection-slider .shg-category-col").each(function(){
      $(this).find('.prod-price').appendTo($(this).find(".vendor_name"));
    }); 
  }

}, 2000);

if($(".class_remove").length > 0) {
  $(".class_remove").remove();
}

setTimeout(function () {
  if($('.collection-slider').length > 0) {
    $('.collection-slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
      speed: 800,
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
  
  $(".home-product-collection").show();
  
  }, 1000);

setTimeout(function () {  

  $(".collection-slider .shg-category-col").each(function(){
    var get_url = $(this).find('.shg-product-image-wrapper > a').attr('href') + '.json';
    var pro_url = $(this).find('.shg-product-image-wrapper > a').attr('href');
    var new_url = get_url.split('?', 1)[0];
    
    var this2 = $(this);
    jQuery.getJSON(new_url, function(product) {
      this2.find(".vendor_name h6 a").attr('href', pro_url);
      this2.find(".vendor_name h6 a").html(product.product.vendor);
    });
    
  });
   }, 2000);
  
});

$(document).ready(function() {
  setTimeout(function(){
$(".vendor-list > li").wrapAll("<ul class='ul-margin'></ul>");  
$(".vendor-list li").each(function(){  
  $(this).mouseenter(function() {
    var attr_url = $(this).attr("data-img-src");
    $(".right-img-block").children('img').attr('src', attr_url);
    $(".right-img-block").children('img').css('display', 'block');
    $(this).addClass("active");
  });
  $(this).mouseleave(function() {
    var attr_url = $(this).attr("data-img-src");
    $(".right-img-block").children('img').attr('src', '');
    $(".right-img-block").children('img').css('display', 'none');
    $(this).removeClass("active");
  });
  
});
  }, 1000);
})





/********Email Popup Homepage*************/

$(document).ready(function(){
  
  setTimeout(function(){
  	$("<button class='close-btn'><img src='https://cdn.shopify.com/s/files/1/0573/2201/2880/t/41/assets/nclose-button.png?v=1657965878'></button>").prependTo(".klaviyo-form-WL57uW");
  }, 2000);
  
  $("body").on("click", "#myDIV .popup-overlay", function(){
    $("#myDIV").removeClass("popup-active");      
    setTimeout(function(){
      $("#myDIV").hide();      
      
    }, 1000)
  });
  
  $("body").on("click", "#myDIV .close-btn", function(){
    $("#myDIV").removeClass("popup-active");
    setTimeout(function(){
      $("#myDIV").hide();      
      
    }, 1000)
  });
  
});



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

var newBtn = document.querySelector(".popup-main button.go3894874857");
  var announce__bar = document.getElementById("myDIV");





$("body").on("click", ".popup-main button.go3894874857", function(){
  
setCookie('Amit','announcement-bar',1);
  
setTimeout(function(){  
var x = getCookie('Amit');  
  console.log(x);
  if(x){
        announce__bar.classList.add("setCookie");
		console.log("Cookie set!");
        
    }
    else{
        announce__bar.classList.remove("setCookie");
        console.log("Cookie not set!");
    }
  
}, 3000);
  
  
});  

var announce__bar = document.getElementById("myDIV");
console.log(announce__bar);

let checkCookies = document.cookie.indexOf("Amit");
  console.log("cookiee" + checkCookies);
  setTimeout(function(){ 
  if(checkCookies < 0){
    
    if ($("body").hasClass("template-index")) {
      $("#myDIV").addClass("popup-active");
    }
  }
  else{
    $("#myDIV").removeClass("popup-active");
  }
  }, 4000);
  
//checkCookies != 1 ? announce__bar.classList.remove("setCookie"): announce__bar.classList.add("setCookie");  
  
  
});



$(document).ready(function(){

  /*setTimeout(function(){

      var list = $(".blog-list-view .another-blog-list");
      var numToShow = 2;
      var button = $(".brand-template-shop-now a");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();

      button.click(function(event){
          event.preventDefault();
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numInList).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
      });
    
  }, 2000);*/
  
/*setTimeout(function(){
  
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
  }, 3000);*/

  //$( "#blogs-content" ).load( "/blogs/stories/ .home-stories .blog-list-view.blog-list" );
  
     $("[data-price-value]").addClass("hide-elem");
    var price_value = parseInt($("[data-price-value]").attr("data-price-value"));
    //console.log(price_value);
    //console.log((price_value)/100);
     
    price_value = (price_value/100).toFixed(2);
  
    //var f_price_value = price_value.replace(".00", '');
    $("[data-price-value]").text('$' + price_value);
    $("[data-price-value]").removeClass("hide-elem");
  
  
$("body").on('change', '.swatches-type-products .swatch-selector', function() {
  setTimeout( function(){
    var id_new = $(".product-form__variants option:selected").attr("data-v-price");
    var price_value_new = id_new;

    price_value_new = (price_value_new/100).toFixed(2);
        console.log(price_value_new);
    $("[data-price-value]").attr("data-price-value", price_value_new);
    //var f_price_value_new = price_value_new.replace(".00", '');
    setTimeout( function(){
	$("[data-price-value]").text('$' + price_value_new);
  }, 1000);

  }, 1000);
  

});
                
	$(".test_price").each(function(){
      var costs = ($(this).text());
      var divide_num = Number(costs)/100;
      var two_decimals = (divide_num.toFixed(2));
      console.log(two_decimals);
      $(this).text("$ " + two_decimals);
				
  });

  if($(".vendor-list").length > 0) {
      $('<li id="w" class="wallquest" title="wallquest" data-img-src="https://cdn.shopify.com/s/files/1/0573/2201/2880/t/38/assets/wallquest.jpg?v=1661407904"><a href="https://afternoonlight.com/pages/wallquest"><span>Wallquest</span></a></li>').insertBefore("#w");
  }
                
	$(".cart-subtotal__price.cart_custom_total_price").each(function(){
      var costs = ($(this).text());
      var divide_num = Number(costs)/100;
      var two_decimals = (divide_num.toFixed(2));
      console.log(two_decimals);
      $(this).text("$ " + two_decimals + " USD");
				
  });
  
  let bsb=$(".variant-type-color select").attr("id"),c=document.getElementById(bsb);c.dispatchEvent(new Event("change"));
});


/******* gift registry add class ********/
$(document).ready(function(){
    var as = "Registry Owner Address";
    $(".aaagift-manage-regi table tr th, .aaagift-manage-regi table tr td ").each(function(asd, a){
        var de = a.innerHTML.toLowerCase();
       if(de.indexOf(as.toLowerCase()) > -1){
          /* $(this).addClass("hide_table_data") */
         $(this).hide();
           console.log(de)
       }
        
    })
})
/******* end  ********/
  
/****** newsletter *****/
$(function(){
    let setEmail = setInterval(function(){
      if($(".newsletter-page input[type='email']").length > 0) {
        $(".newsletter-page input[type='email']").attr("placeholder", "ENTER YOUR EMAIL");
        clearInterval(setEmail);
      }
    }, 1000);
  }); 