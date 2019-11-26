
/*
LittleToaster v 0.16
Shows toasters for a limited duration "à la Chrome-tabs look" 
Copyright (C) Philippe Meyer 2019
Distributed under the MIT License
v0.16 : Call back does not fire twice (on click and timer)
https://github.com/PhilippeMarcMeyer/LittleToaster
*/

function LittleToaster() {
    let factory = this;
    let toastId = null;
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
    "cursor:pointer",
    "width:260px",
    "box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.4)"
    ];

    const prefixId = "littleToaster_";
    const parentPrefixId = "littleToasterP_";

    let maxIdOffset = 0;

    let allReady = document.querySelectorAll("[id^='" + prefixId + "']");

    if (allReady.length > 0) {
        allReady.forEach(function (x) {
            let arr = x.id.split("_");
            if (arr.length == 2) {
                let cnt = parseInt(arr[1]);
                if (!isNaN(cnt)) {
                    if (cnt > maxIdOffset) {
                        maxIdOffset = cnt;
                    }
                }
            }
        });
    }

    toastId = prefixId + (maxIdOffset + 1);

    this.callBack = null;
    this.style = styles.join(";")
    this.html = "<div id='" + toastId + "' style='" + this.style + "'></div>";

    let htmlZone = parentPrefixId + (maxIdOffset + 1);
    this.Pointer = document.createElement("div");
    this.Pointer.setAttribute("id", htmlZone);

    document.body.insertAdjacentElement("beforebegin", this.Pointer);

    this.ToastPtr = null;
    if (this.Pointer) {
        this.Pointer.innerHTML = this.html;
        this.ToastPtr = document.getElementById(toastId);
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
    // fires a timer to hide the toast
    this.showFor = function (millisecs, callBack) {
        factory.callBack = callBack;
        if (factory.ToastPtr) {
            factory.ToastPtr.style.display = "block";
            factory.ToastPtr.addEventListener("click", factory._handleClick,false);
            setTimeout(function () {
                factory.ToastPtr.removeEventListener("click",factory._handleClick);
                factory.hide();
                factory._destroy();
            }, millisecs);
        }
    }
    this._handleClick = function(){
        factory.hide();
        event.preventDefault();
        if (factory.callBack) factory.callBack();
    }
    this._destroy = function () {
        if (factory.Pointer) {
            factory.Pointer.remove();
        }
    }
    // set the text (you can use html)
    this.text = function (text) {
        if (factory.ToastPtr) {
            factory.ToastPtr.innerHTML = text;
        }
    }
}
