$("document").ready(function() {
  // Your javascript goes here...
  
  $("#q1-oui").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-2").addClass("active");
  });
  
  $("#q1-non").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-5").addClass("active");
  });
  
   $("#q2-oui").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-3").addClass("active");
  });

    $("#q3-oui").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-4").addClass("active");
  });

     $("#q2-non").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-5").addClass("active");
  });

      $("#q3-non").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-5").addClass("active");
  });

      $("#q5-oui").click(function(){
  	$(".slide").removeClass("active");
  	$("#slide-1").addClass("active");
  }); 
});