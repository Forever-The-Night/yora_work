var scrollFunc = function (e) {
    var direct = 0;
    e = e || window.event;
    if (e.wheelDelta) {          
        if (e.wheelDelta < -120) {
            document.getElementById("backid").style.height = "10vh";
        }
        if (e.wheelDelta > -120) {
            document.getElementById("backid").style.height = "20vh";
        }
    }
    ScrollText(direct);
}
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
window.onmousewheel = document.onmousewheel = scrollFunc;