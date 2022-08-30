const inputGifs = document.getElementById("gifts");
const inputMedicine = document.getElementById("medicine");
const inputDoc = document.getElementById("visit");
const inputHolliday = document.getElementById("holidays");
const inputRen = document.getElementById("renovation");
const inputClot = document.getElementById("clothes");
const inputMot = document.getElementById("mot");
const inputO = document.getElementById("other");
const totalOneOff = document.getElementById("totalexp");

function totalSumOff(gifts, medicine, visit, holidays, renovation, clothes, mot, other) {
    return (gifts / 1) + (medicine / 1) + (visit / 1) + (holidays / 1) + (renovation / 1) + (clothes / 1) + (mot / 1) + (other / 1);

}
document.getElementById("inputGrou").addEventListener("click", function() {
    let gifts = inputGifs.value;
    let medicine = inputMedicine.value;
    let visit = inputDoc.value;
    let holidays = inputHolliday.value;
    let renovation = inputRen.value;
    let clothes = inputClot.value;
    let mot = inputMot.value;
    let other = inputO.value;
    let result = totalSumOff(gifts, medicine, visit, holidays, renovation, clothes, mot, other, );
    totalOneOff.value = result;
})