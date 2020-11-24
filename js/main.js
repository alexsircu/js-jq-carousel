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

// function circleClickActive() {
//   var activeImage = $(".images img");
//   var toActiveCircle = $(".nav i.fas");
//   toActiveCircle.click(
//     function() {
//       toActiveCircle.removeClass("active");
//       $(this).addClass("active");
//
//       if(toActiveCircle.hasClass("active")) {
//         activeImage.addClass("active");
//       }
//     }
//   )
// }

// function circleClickActive() {
//   var blueCircle = $(".nav i.fas");
//   activation(blueCircle);
//   console.log(activation(blueCircle).indexOf(activation(blueCircle)));
//
//   if (blueCircle.hasClass("active")) {
//
//   }
// }
//
// function activation(element) {
//   element.click(
//     function() {
//       $(this).addClass("active");
//       $(this).siblings().removeClass("active");
//     }
//   )
// }
