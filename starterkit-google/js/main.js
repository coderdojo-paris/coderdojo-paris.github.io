$("document").ready(function() {
  // Your javascript goes here...
  
  $("#q1-oui").click(function() {
    $(".slide").removeClass("active");
    $("#slide-2").addClass("active");
  });

  $("#q1-non").click(function() {
    $(".slide").removeClass("active");
    $("#slide-4").addClass("active");
  });
  
  
});