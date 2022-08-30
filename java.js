const inputPay = document.getElementById("pay");
const inputBonus = document.getElementById("bonus");
const inputTotall = document.getElementById("total-value");




function calculateCompound(pay, bonus) {
    return (pay / 1) + (bonus / 1);
}

document.getElementById("calculate").addEventListener("click", function() {
    let pay = inputPay.value;
    let bonus = inputBonus.value;
    let summ = calculateCompound(pay, bonus);
    inputTotall.value = summ;

});



