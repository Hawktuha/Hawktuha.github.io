let count = 0

document.getElementById("mogus").onclick = function sigma () {
    count = count + 1
    document.getElementById("count-el").innerHTML = (count)
    console.log (count)
}