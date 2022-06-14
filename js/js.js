/*global $, alert, console*/

$(document).ready(function () {
  "use strict";

  //trigger nice scroll
  $("html").niceScroll({
    cursorwidth: 10,
    zindex: 99999,
    cursorcolor: "rgb(17, 171, 176)",
    background: "#636363",
    cursorborder: 0,
    cursorborderradius: 0,
  });

  //play scrolltop
  var scrol = $("#scrollTop");

  $(window).ready(function () {
    if ($(window).scrollTop() >= 550) {
      scrol.fadeIn();
    } else {
      scrol.fadeOut();
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 550) {
      scrol.fadeIn();
    } else {
      scrol.fadeOut();
    }
  });

  scrol.click(function () {
    $("html, body").animate({ scrollTop: 0 }, 3000);
  });

  //selected section

  $(".header .side li").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
  });

  //animate to sections
  $(".header .side li, .header .arrow").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).data("scroll")).offset().top,
      },
      1000
    );
  });

  //nav toggle show

  $(".menu").click(function () {
    $(".side").slideToggle(1000);
    $(".menu").toggleClass("menu-close");
    $(".menu .icon-bar:first").toggleClass("icon1");
    $(".menu .icon-bar:nth-of-type(2)").fadeToggle();
    $(".menu .icon-bar:last").toggleClass("icon2");
  });

  //play mixit

  $("#porto").mixItUp();

  //play bxslider
  $(".bxslider").bxSlider({
    pager: false,
  });

  //show more

  $(".portofolio .up button").click(function () {
    $(".portofolio .mon").toggleClass("none");

    if ($(".portofolio .mon").hasClass("none")) {
      $(".portofolio .mon").slideUp();
      $(".portofolio .up button").text("show more");
    } else {
      $(".portofolio .mon").slideDown();
      $(".portofolio .up button").text("show less");
    }
  });
});
