$(document).ready(function () {

  // JS equivalent of JQuery .hasClass()
  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  $(".nav-slideout").hide();

  // Apply .selected class to current page main menu item
  var mainNavList = document.getElementById("main-ul");
  var mainListItems = mainNavList.getElementsByTagName("li");
  for (var i=0; i < mainListItems.length; i++) {
    if(hasClass(mainListItems[i], currPage)){
      mainListItems[i].setAttribute("class", "main-menu-item selected");
    } else {
      mainListItems[i].setAttribute("class", "main-menu-item");
    }
  }

  // Apply .selected class to current page slideout menu item
  var slideoutNavList = document.getElementById("slideout-ul");
  var slideoutListItems = slideoutNavList.getElementsByTagName("li");
  for (var i=0; i < slideoutListItems.length; i++) {
    if(hasClass(slideoutListItems[i], currPage)){
      slideoutListItems[i].setAttribute("class", "slideout-menu-item selected");
    } else {
      slideoutListItems[i].setAttribute("class", "slideout-menu-item");
    }
  }

  // Replace selected page's "O" letter with a droplet in main menu
  var selectedMainItemText = $(".main-menu-item.selected a").text();
  $(".main-menu-item.selected a").html(selectedMainItemText.replace(/o/g, "&#x1f4a7;"));

  // Replace selected page's "O" letter with a droplet in slideout menu
  var selectedSlideoutItem = $(".slideout-menu-item.selected a");
  selectedSlideoutItem.html("&#8213; " + selectedSlideoutItem.text() + " &#8213;");

  // Accent menu icon on hover
  $('.menu-icon').on({
    mouseenter: function() {
        $(".menu-icon div").stop().fadeTo("fast", 0.2);
    },
    mouseleave: function() {
        $(".menu-icon div").stop().fadeTo("fast", 0);
    }
  });

  // Toggle slideout menu
  var slideoutOpen = false;
  $('.menu-icon').on('click', function() {
    if(!slideoutOpen) {
      // Open
      $(".nav-slideout").show();
      $(".header").animate({height: "+=540"}, 400);
      $(".content").animate({top: "+=540"}, 400);
      $(".nav-main").animate({top: "+=540"}, 400);
      slideoutOpen = true;
    } else {
      // Close
      $(".header").animate({height: "-=540"}, 400);
      $(".content").animate({top: "-=540"}, 400);
      $(".nav-main").animate({top: "-=540"}, 400, function() {
        $(".nav-slideout").hide();
      });
      slideoutOpen = false;
    }
  });


  var $window = $(window);
  var $pane = $('#pane1');

  function checkWidth() {
    var windowsize = $window.width();
    //$('.round-logo').css('z-index', $('.round-logo').css('z-index'));
    if (windowsize > 750) {
      $(".header").animate({height: "60px"}, 400);
      $(".content").animate({top: "60px"}, 400);
      $(".nav-main").animate({top: "10px"}, 400);
      slideoutOpen = false;
    }
  }

  // Execute on load
  // checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);

});
