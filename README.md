# LittleToaster v 0.10 
### shows a little message for a given duration, inpired by minimalistic toast that appear below the Chrome tabs

![screen shot](https://raw.githubusercontent.com/PhilippeMarcMeyer/LittleToaster/master/Caption2.png)

Demo : https://philippemarcmeyer.github.io/LittleToaster/index.html

#### Instantiate :

``` 
const toast = new LittleToaster("toaster") 

// init : toater is a id of a existing hidden div : <div id="toaster"></div>

toast.text("Hello World !"); // set text or html

let w2 = window.innerWidth/2;

toast.moveAt(w2 - 150, 100); // set an absolute position (if you need it)

toast.showFor(3000, function () { // Show for x seconds

			// you can provide a call-back
});

``` 

#### History :

v 0.01 : Ugly first experiment
v 0.10 : Better css inpired by minimalistic toast that appear below the Chrome tabs

Todo : Create the divs dynamicaly with unique ids
