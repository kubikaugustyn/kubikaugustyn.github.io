console.log('userGuideMaker.js...')

//var navodcopy = navod

var navodLenght

//put navod.length to var navodLenght
var navodLenghtOk = 0
for (var i = 0; i<1000; i++) {
    if (navod[i]) {
        //console.log("i",i)
    }
    else {
        if (navodLenghtOk === 0) {
            navodLenght = i
            //console.log("navod length is ", navodLenght)
        }
        navodLenghtOk++
    }
}

function loadUserGuide() {
    for (i = 0; i < navodLenght; i++) {
        var iA1 = i+1
        //console.log(navod[i])
        if (navod[i]["kostky"] === "" && navod[i]["pocet"] === "") {
            navod[i]["img"] = "../src/img/postup/" + navod[i]["img"] + ".JPG"
            document.getElementById('strany').innerHTML += "" +
                "<span style='visibility: hidden' id='page" + i + "'>" +
                "<img height='100px' width='100px' src='" +
                navod[i]["img"] +
                "' alt='" + navod[i]["img"] +
                "'>" +
                "<button onclick='page(\"next\")' id='buttonPage" + i + "'>&gt;</button>" +
                "<br>" +
                "Strana " + iA1 +
                "</span>"// +
                //"<hr>"
        }
        else {
            var kostkyLenght = navod[i]["kostky"].split(";").length
            function loadImgName() {
                for (var index = 0; index < kostkyLenght; index++) {
                    var navodCopy
                    //console.error("Next...")
                    if (index === 0) {navodCopy = ""}
                    //console.log(index, navodCopy)
                    //console.log(navod[i]["kostky"].split(";")[index])
                    if (index === 0) {
                        navodCopy += "../src/img/kostky/" + navod[i]["kostky"].split(";")[index] + ".JPG"
                    }
                    else {
                        navodCopy += ";../src/img/kostky/" + navod[i]["kostky"].split(";")[index] + ".JPG"
                    }
                    //console.log(index, navodCopy)
                    //console.warn(index, navod[i]["kostky"])
                    if (index === kostkyLenght-1){
                        //console.error("Ending...")
                        navod[i]["kostky"] = navodCopy
                    }
                }
            }
            loadImgName()
            navod[i]["img"] = "../src/img/postup/" + navod[i]["img"] + ".JPG"
            var items = navod[i]["kostky"].split(";")

            if(items.length === navod[i]["pocet"].split(";").length) {
                //console.log("OK")
            } else {
                console.error("ERR", navod[i])
            }

            //console.log("items.length, items:", items.length, items)
            if (items.length === 0){
                document.getElementById('strany').innerHTML = "ERR"
                console.error("ERR", navod[i])
            }
            else if (items.length === 1){
                document.getElementById('strany').innerHTML += "" +
                    "<span style='visibility: hidden' id='page" + i + "'>"
                document.getElementById('page' + i).innerHTML += "" +
                    "<table>" +
                    "<tbody>" +
                    "<tr>" +
                    "<td>" +
                    "<img height='50px' width='50px' src='" +
                    navod[i]["kostky"] +
                    "' alt='" + navod[i]["kostky"] +
                    "'>" +
                    navod[i]["pocet"] +
                    "X" +
                    "</td>" +
                    "</tr>" +
                    "</tbody>" +
                    "</table>" +
                    "<br>"
            }
            else if (items.length > 1){
                document.getElementById('strany').innerHTML += "" +
                    "<span style='visibility: hidden' id='page" + i + "'>"
                document.getElementById('page' + i).innerHTML += "" +
                    "<table>" +
                    "<tbody>" +
                    "<tr id='trTable" + i + "'>"
                for (var ind = 0; ind<items.length;ind++) {
                    document.getElementById('trTable' + i).innerHTML += "" +
                        "<td>" +
                        "<img height='50px' width='50px' src='" +
                        navod[i]["kostky"].split(";")[ind] +
                        "' alt='" + navod[i]["kostky"].split(";")[ind] +
                        "'>" +
                        navod[i]["pocet"].split(";")[ind] +
                        "X" +
                        "</td>" +
                        "<br>"
                }
                document.getElementById('strany').innerHTML += "" +
                    "</tr>" +
                    "</tbody>" +
                    "</table>"
            }

            document.getElementById('page' + i).innerHTML += "" +
                "<button onclick='page(\"back\")' id='buttonPage" + i + "'>&lt;</button>" +
                "<img height='100px' width='100px' src='" +
                navod[i]["img"] +
                "' alt='" + navod[i]["img"] +
                "'>" +
                "<button onclick='page(\"next\")' id='buttonPage" + i + "'>&gt;</button>" +
                "<br>" +
                "Strana " + iA1 +
                "</span>"// +
                //"<hr>"
        }
    }
    document.getElementById('page0').style.visibility = "visible"
}

function page(to) {
    var srcId = parseInt(window.event.srcElement.id.split("buttonPage")[1])
    var srcIdMin1 = srcId - 1
    var srcIdPlu1 = srcId + 1
    if (to === "back") {
        //console.log("Back page")
        document.getElementById('page' + srcIdMin1).style.visibility = "visible"
        document.getElementById('page' + srcId).style.visibility = "hidden"
    }
    else if (to === "next") {
        //console.log("Next page")
        if (document.getElementById('page' + srcIdPlu1)) {
            document.getElementById('page' + srcIdPlu1).style.visibility = "visible"
            document.getElementById('page' + srcId).style.visibility = "hidden"
        }
    }
}