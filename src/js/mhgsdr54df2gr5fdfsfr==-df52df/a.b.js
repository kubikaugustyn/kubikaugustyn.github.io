var loadingInner
var loadingIco1 = "|";
var loadingIco2 = "/";
var loadingIco3 = "-";
var loadingIco4 = "\\"
var loadingIco5 = "|";
var loadingIco6 = "/";
var loadingIco7 = "-";
var loadingIco8 = "\\"
var loadingIndex = 1

var timeout = 100

function onLoad(){
    loadingFunction()
    document.getElementById("loading").style.left = window.innerWidth/2 + "px"
    document.getElementById("loading").style.top = window.innerHeight/2 + "px"
}

function loadingFunction() {
    switch (loadingIndex) {
        case 1:
            loadingInner = loadingIco1
            break
        case 2:
            loadingInner = loadingIco2
            break
        case 3:
            loadingInner = loadingIco3
            break
        case 4:
            loadingInner = loadingIco4
            break
        case 5:
            loadingInner = loadingIco5
            break
        case 6:
            loadingInner = loadingIco6
            break
        case 7:
            loadingInner = loadingIco7
            break
        case 8:
            loadingInner = loadingIco8
            break
        default:
            loadingInner = "error"
    }

    loadingIndex++
    if(loadingIndex > 8) {
        loadingIndex = 1
    }

    document.getElementById("loading").innerHTML = loadingInner

    setTimeout(function(){loadingFunction()}, timeout)
}