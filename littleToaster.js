   
//
/*
https://github.com/PhilippeMarcMeyer/LittleToaster v 0.1
 shows a little message for a given duration 
 
var toast = new LittleToaster("toaster") // init
toast.text("<b>Message</b><br/>Hello World !"); // set text
var w2 = window.innerWidth/2;
toast.moveAt(w2 - 150, 100); // set an absolute position
toast.showFor(3000, function () {

});
 */
 
function LittleToaster(htmlZone, toastId) {
	let styles = [
	"display:none",
	"z-index:5000",
	"font-size:13px",
	"font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji",
	"position:absolute",
	"padding:10px 10px 10px 25px ",
	"line-height:20px;",
	"color:rgba(0, 0, 0, 0.9)",
	"background-color:rgba(254, 254, 254, 1)",
	"border-radius:8px",
	"text-align:left",
	"border: 1px solid #D5D6D7",
	"vertical-align: middle",
	"width:260px",
	"box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4)"
	];
	
    if (!toastId) toastId = "littleToasterMsg";
    this.style = styles.join(";")
    this.html = "<div id='" + toastId + "' style='" + this.style + "'></div>";
		
    this.Pointer = document.getElementById(htmlZone);

    this.ToastPtr = null;
    if (this.Pointer) {
        this.Pointer.innerHTML = this.html;
        if (this.Pointer.querySelectorAll) {
            this.ToastPtr = this.Pointer.querySelectorAll("#" + toastId)[0];
        } else {
            this.ToastPtr = document.getElementById(toastId);
        }
    }
    // We need to stay absolute
    if (this.ToastPtr) {
        this.ToastPtr.style.position = "absolute";
    }
    // ------- methods
    this.hide = function () {
        if (this.ToastPtr) {
            this.ToastPtr.style.display = "none";
        }
    }
    this.show = function () {
        if (this.ToastPtr) {
            this.ToastPtr.style.display = "block";
        }
    }
    // If you don't move and dont provide a style left and top attribute in the style parametre
    // then without moveAt the toast will appear at its relative position
    // If you use moveAt, location is absolute 
    this.moveAt = function (x, y) {
        var w = document.body.offsetWidth;
        if (x < 0) x = 0;
        if (x > w - 300) x = w - 300;

        if (this.ToastPtr) {
            this.ToastPtr.style.left = 0;
            this.ToastPtr.style.top = 0;
            this.ToastPtr.style.marginLeft = x + "px";
            this.ToastPtr.style.marginTop = y + "px";
        }
    }
    // fires a timer to hide the toest
    this.showFor = function (millisecs,callBack) {
        if (this.ToastPtr) {
            this.ToastPtr.style.display = "block";
            var self = this;
            this.ToastPtr.addEventListener("click", function (event) {
                self.hide();
                if (callBack) callBack();
                event.preventDefault();
            });
            setTimeout(function () {
                self.hide();
                if (callBack) callBack();

            }, millisecs);

        }
    }
    // set the text (you can use html)
    this.text = function (text) {
        if (this.ToastPtr) {
            this.ToastPtr.innerHTML = text;
        }
    }
}
