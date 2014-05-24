$("document").ready(function() {
  // Your javascript goes here...
  $("#q1-oui").click(function() {
  	$(".slide").removeClass("active");
  	$("#slide2").addClass("active");
  });
  
  $("#q1-non").click(function() {
  	$(".slide").removeClass("active");
  	$("#slide5").addClass("active");
  });
 $("#q2-oui").click(function() {
  	$(".slide").removeClass("active");
  	$("#slide3").addClass("active");
   });
 $("#q2-non").click(function() {
  	$(".slide").removeClass("active");
  	$("#slide5").addClass("active");
    });
$("#q3-oui").click(function() {
  	$(".slide").removeClass("active");
  	$("#slide4").addClass("active");
});
  $("#q3-non").click(function() {
  	$(".slide").removeClass("active");
  	$("#slide5").addClass("active");
  });
});