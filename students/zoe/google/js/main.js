$("document").ready(function() {
	// Your javascript goes here...

  var showSlide = function(id) {
      $(".slide").removeClass("active");
      $(id).addClass("active");
  }

  $("#Q1Y").click(function() {
    showSlide("#slide2");
  });

  $("#Q1N").click(function() {
    showSlide("#slide5");
  });



  $("#Q2Y").click(function() {
    showSlide("#slide3");
  });

  $("#Q2N").click(function() {
    showSlide("#slide5");
  });



  $("#Q3Y").click(function() {
    showSlide("#slide4");
  });

  $("#Q3N").click(function() {
    showSlide("#slide5");
  });


});




















































