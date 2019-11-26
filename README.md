# LittleToaster v 0.16
### shows a little message for a given duration with optional callback, inpired by minimalistic toast that appear below the Chrome tabs

![screen shot](https://raw.githubusercontent.com/PhilippeMarcMeyer/LittleToaster/master/Caption2.png)

Demo : https://philippemarcmeyer.github.io/LittleToaster/index.html

#### Instantiate :

``` 
let btn = document.getElementById("btnToast");
btn.addEventListener("click",function(e){ // use the event to show the message relative to the button
	let rect = e.target.getBoundingClientRect();

	let toast = new LittleToaster() // init
	toast.text("<b>Message</b><br/>Hello World !"); // set text

	toast.moveAt(rect.right +20, rect.top -15 ); 
	toast.showFor(3000, function () {

	});
});

let btn2 = document.getElementById("btnToastCentered");
btn2.addEventListener("click",function(){

	let toast = new LittleToaster() // init
	toast.text("<b>Message</b><br/>Hello World !"); // set text

	let w2 = window.innerWidth/2;
	let h2 = window.innerHeight/2;
	toast.moveAt(w2-120, h2); 
	toast.showFor(3000, function () {

	});
});
``` 

#### History :

v 0.01 : Ugly first experiment

v 0.10 : Better css inpired by minimalistic toast that appear below the Chrome tabs

v 0.15 : Multiple toasts at the same time. No more arguments

v 0.16 : Call back does not fire twice (on click and timer)



