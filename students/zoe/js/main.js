$("document").ready(function() {
	// Your javascript goes here...

	var box = $("#box");


  var button = $("#button");

  $("#color-form").submit(function(obj) { changecolor(); });


  var changecolor = function() {
  	var colorchange = $("#colorname").val();
  	
  	if (colorchange === "hide") {
  		console.log("hide this!");
  		box.fadeOut();
  	} else if (colorchange === "down") { 
  		console.log("go down!");

      box.animate({
        "top": "+=100"
      }, 2000);

  	} else if (colorchange === "up") { 
      console.log("go up!");
     
      //box.css("top", "-=100");

      box.animate({
        "top": "-=100"
      }, 2000);

    } else {
  		box.fadeIn();

  		
  		console.log("color changed!");
  		box.css("background-color", colorchange);
  	}  

  };

  button.click(changecolor);



});