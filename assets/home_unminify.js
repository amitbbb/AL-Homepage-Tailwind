$(document).ready(function(){
  
  if($('.banner-slide').length > 1) { 
    $('.main-hero-slider').slick({ 
      arrows: false,
      dots: true,
      autoplay: true,
      infinite: true,
      fade: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }
  
  if($('.best-sellers').length > 0) {
    $('.best-sellers .main-grid').slick({ 
      arrows: true,
      dots: false,
      infinite: false,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 2,
      
        responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true
        }
      }
    ]
    });
  }
  
  
  $(document).ajaxComplete(function(){
    	setTimeout(function(){
		$.getJSON('/cart.js', function(cart){ 
			var prod_count = cart.item_count;
            $(".cart-popup__cta-link span").html(prod_count);
          if($(".site-header__cart-count").hasClass("hide")){
            $(".site-header__cart-count").removeClass("hide");
           }
          $("#CartCount > [data-cart-count]").text(prod_count);
		});
	},300);
  });

  $('.cart-popup__close').click(function(){
      $(".cart-popup-wrapper").addClass("cart-popup-wrapper--hidden");
      $(".cart-popup-item__image-wrapper").addClass("hide");
  });
$('.featured-collection .add-cart').click(function(event){
    event.preventDefault(); 
    if(!$(".cart-popup-wrapper").hasClass("cart-popup-wrapper--hidden")){
      $(".cart-popup-wrapper").addClass("cart-popup-wrapper--hidden");
      $(".cart-popup-item__image-wrapper").addClass("hide");
    }
  
    var img_url = $(this).prev("input").attr("data-src");
    var product_title = $(this).prev("input").attr("data-title");

    $(".cart-popup-item").html("<div class='cart-popup-item__image-wrapper' data-cart-popup-image-wrapper='' data-image-loading-animation=''><img src='"+ img_url +"'></div><div class='cart-popup-item__description'><div><h3 class='cart-popup-item__title' data-cart-popup-title=''>"+ product_title +"</h3><ul class='product-details' aria-label='Product details' data-cart-popup-product-details=''><li class='product-details__item product-details__item--variant-option'></li></ul></div><div class='cart-popup-item__quantity'><span class='visually-hidden' data-cart-popup-quantity-label=''>Quantity: 1</span><span aria-hidden='true'>Qty:</span><span aria-hidden='true' data-cart-popup-quantity=''>1</span></div></div>");
    
    setTimeout(function() {
      $(".cart-popup-wrapper.cart-popup-wrapper--hidden").removeClass("cart-popup-wrapper--hidden");
      $(".cart-popup-item__image-wrapper").removeClass("hide");
      }, 1500);
    var prodID =  $(this).attr("data-prod-id");
    addItemToCart( prodID, 1);    
  });

  function addItemToCart(variant_id, qty, frequency, unit_type) {
    data = {
      "id": variant_id,
      "quantity": qty
    }
     
    jQuery.ajax({
      type: 'POST',
      url: '/cart/add.js',
      data: data,
      dataType: 'json',
      success: function() { 
        document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
          bubbles: true  //this code is for prestige theme, is to refresh the cart
       }));
      }
    });
    document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
    	bubbles: true    // same code for prestige theme   
 	 }));
  }

/*Homepage Klaviyo Popup*/
 
 setTimeout(function(){
  	$("<button class='close-btn'><img src='https://cdn.shopify.com/s/files/1/0573/2201/2880/t/41/assets/nclose-button.png?v=1657965878'></button>").prependTo(".klaviyo-form-WL57uW");
  }, 2000);
  
  $("body").on("click", "#myDIV .popup-overlay", function(){
    $("#myDIV").removeClass("popup-active");
    $("body").removeClass("overflow");
    setTimeout(function(){
      $("#myDIV").hide();      
      
    }, 1000)
  });
  
  $("body").on("click", "#myDIV .close-btn", function(){
    $("#myDIV").removeClass("popup-active");
    $("body").removeClass("overflow");
    setTimeout(function(){
      $("#myDIV").hide();      
      
    }, 1000)
  });

/*Homepage Klaviyo Popup*/
   
});



window.addEventListener("klaviyoForms", function(e) { 
    if (e.detail.type == 'submit' && e.detail.formId == 'VpkmRK' ) {
      $('.klaviyo-form-VpkmRK form').addClass('form-submit');
    }
});


$(document).on("scroll", function () {
    var pageTop = $(document).scrollTop()
    var pageBottom = pageTop + $(window).height()
    var tags = $(".fadein")

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i]

      if ($(tag).offset().top < pageBottom) {
        $(tag).addClass("visible")
      } else {
        $(tag).removeClass("visible")
      }
    }
  })