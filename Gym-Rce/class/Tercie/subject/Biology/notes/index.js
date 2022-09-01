var __author__ = "kubik.augustyn@post.cz"

var hours_names = $$.Data.http("GET", "hours.array").responseText.replaceAll("\r\n", "\n").replaceAll("\r", "\n").split("\n")

var hours = []

for (var hour_name of hours_names) {
    if (hour_name.length) hours.push(new Hour(hour_name))
}

function renderHours(container, hours) {
    console.log("Render hours:", hours)
    container.innerHTML = ""
    for (var hour of hours) {
        container.appendChild(hour.div)
    }
}

renderHours(document.getElementById("notes"), hours)
document.body.removeChild(document.getElementById("loading"))
window.scrollTo(0, document.body.scrollHeight)