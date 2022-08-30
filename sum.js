const inputRent = document.getElementById("rent");
const inputWater = document.getElementById("water");
const inputElectricity = document.getElementById("electricity");
const inputGas = document.getElementById("gas");
const inputInternet = document.getElementById("internet");
const inputTv = document.getElementById("tv");
const inputLoan = document.getElementById("loan");
const inputInsurance = document.getElementById("insurance");
const inputFuel = document.getElementById("fuel");
const inputTransport = document.getElementById("transport");
const inputTotal = document.getElementById("totalexpenses");

function calculateCompoundE(rent, water, electricity, gas, internet, tv, loan, insurance, fuel, transport, ) {
    return (rent / 1) + (water / 1) + (electricity / 1) + (gas / 1) + (internet / 1) + (tv / 1) + (loan / 1) + (insurance / 1) + (fuel / 1) + (transport / 1);

}

document.getElementById("inputGroup").addEventListener("click", function() {
    let rent = inputRent.value;
    let water = inputWater.value;
    let electricity = inputElectricity.value;
    let gas = inputGas.value;
    let internet = inputInternet.value;
    let tv = inputTv.value;
    let loan = inputLoan.value;
    let insurance = inputInsurance.value;
    let fuel = inputFuel.value;
    let transport = inputTransport.value;
    let result = calculateCompoundE(rent, water, electricity, gas, internet, tv, loan, insurance, fuel, transport, );
    inputTotal.value = result;

})