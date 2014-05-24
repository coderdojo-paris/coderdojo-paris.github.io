$("document").ready(function() {
  // Your javascript goes here...
  $("#q1-oui").click(function() {
	$("#slide1").removeClass("active");
	$("#slide2").addClass("active");
  });
  
  $("#q1-non").click(function() {
	$("#slide1").removeClass("active");
	$("#slide2").addClass("active");
  });
  
  $("#q2-oui").click(function() {
	$("#slide2").removeClass("active");
	$("#slide3").addClass("active");
	$("#slide5").removeClass("active");
  });
  
  $("#q2-non").click(function() {
	$("#slide2").removeClass("active");
	$("#slide5").addClass("active");
  });
  
  $("#q3-oui").click(function() {
	$("#slide3").removeClass("active");
	$("#slide4").addClass("active");
	$("#slide5").removeClass("active");
  });
  
  $("#q3-non").click(function() {
	$("#slide3").removeClass("active");
	$("#slide5").addClass("active");
  });
  
  
});