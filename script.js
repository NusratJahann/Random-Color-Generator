var a = document.getElementsByTagName("span")
var b = document.getElementsByTagName("svg")

function randomColorBox() {
    var color, code;
    color = "#";
    code = "0123456789ABCDEF";

    for (i = 0; i < 6; i++) {
        color = color + code[Math.floor(Math.random() * 16)]
    }

    document.getElementById("colorBox").style.backgroundColor = color;

    a[0].innerHTML = color;
    b[0].style.display = "none";

}

function copy() {
    navigator.clipboard.writeText(a[0].innerHTML);
}