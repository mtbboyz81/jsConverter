// Input variable defined //

let inputN = document.getElementById("input-n").value


// output variables defined //
let lengthEl = document.getElementById("length-el")

let volumeEl = document.getElementById("volume-el")

let massEl = document.getElementById("mass-el")

// Calculate Button Function //

function calculate() {
    let meters = Math.round(document.getElementById("input-n").value * 0.3048 * 1000) / 1000
    let feet = Math.round(document.getElementById("input-n").value * 3.28084 * 1000) / 1000
    console.log(meters)
    console.log(feet)
    
    lengthEl.textContent = document.getElementById("input-n").value + " meters" + " = " + feet + " feet" + "  |  " + document.getElementById("input-n").value + " feet" + " = " + meters + " meters"
    
    let gallons = Math.round(document.getElementById("input-n").value * 0.264172 * 1000) / 1000
    let liters = Math.round(document.getElementById("input-n").value * 3.78541 * 1000) / 1000
    console.log(gallons)
    console.log(liters)
    
    volumeEl.textContent = document.getElementById("input-n").value + " liters" + " = " + gallons + " gallons" + "  |  " + document.getElementById("input-n").value + " gallons" + " = " + liters + " liters"
    
    let pounds = Math.round(document.getElementById("input-n").value * 2.20462 * 1000) / 1000
    let kilos = Math.round(document.getElementById("input-n").value * 0.453592 * 1000) / 1000
    console.log(pounds)
    console.log(kilos)
    massEl.textContent = document.getElementById("input-n").value + " kilos" + " = " + pounds + " pounds" + "  |  " + document.getElementById("input-n").value + " pounds" + " = " + kilos + " kilos"
}