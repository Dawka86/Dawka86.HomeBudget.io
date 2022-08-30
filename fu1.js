
const txt1 = document.getElementById("total-value");
const txt2 = document.getElementById("totalexpenses");
const txt3 = document.getElementById("totalexp")
const btn1 = document.getElementById("press");
const out1 = document.getElementById("output");
const inc1 = document.getElementById("przy");
const wyd1 = document.getElementById("wyda");

function fun1 (){
    inc1.innerHTML = txt1.value;
    wyd1.innerHTML= Number(txt2.value) + Number(txt3.value);
    out1.innerHTML = Number(txt1.value - wyd1.innerHTML);
    


}
btn1.addEventListener("click", fun1);
