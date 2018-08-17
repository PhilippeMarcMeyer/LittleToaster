# LittleToaster
shows a little message for a given duration (à la Iphone)

instantiate :

var toast = new LittleToaster("toaster") // init : toater is a id of a div : <div id="toaster"></div>

toast.text("Hello World !"); // set text

var w2 = window.innerWidth/2;

toast.moveAt(w2 - 150, 100); // set an absolute position (if you need it)

toast.showFor(3000, function () { // Show for x seconds

			// you can provide a call-back
			
});

