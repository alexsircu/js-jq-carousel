$(document).ready(
  function() {

  $(".prev").click(
    function() {
      prevImage();
    }
  );

  $(".next").click(
    function() {
      nextImage();
    }
  );

  $(".nav i.fas").click(
    function() {
      circleClickActive();
    }
  );

  $(document).keydown(
    function() {
      if (event.which == 37) {
        prevImage();
      } else if (event.which == 39) {
        nextImage();
      }
    }
  );

  }
);

function nextImage() {
  var activeImage = $(".images img.active");
  var activeCircle = $(".nav i.active");
  activeImage.removeClass("active");
  activeCircle.removeClass("active");

  if(activeImage.hasClass("last")) {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  } else {
    activeImage.next().addClass("active");
    activeCircle.next().addClass("active");
  }
}

function prevImage() {
  var activeImage = $(".images img.active");
  var activeCircle = $(".nav i.active");
  activeImage.removeClass("active");
  activeCircle.removeClass("active");

  if (activeImage.hasClass("first")) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  } else {
    activeImage.prev().addClass("active");
    activeCircle.prev().addClass("active");
  }
}

function circleClickActive() {
  $(".nav i.fas").click(
    function() {
      var activeImage = $(".images img.active");
      var activeCircle = $(".nav i.active");
      var positionCircle = $(this).index();

      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      activeImage.removeClass("active");
      $(".images img").eq(positionCircle).addClass("active");
    }
   );
}
