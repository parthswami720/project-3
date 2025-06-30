let  btn = document.querySelector("#btn");
let  studentname = document.querySelector("#studentname");
let = document.querySelectorAll("td");
let mk1= document.querySelector("#mk1");
let mk2= document.querySelector("#mk2");
let mk3= document.querySelector("#mk3");
let mk4= document.querySelector("#mk4");
let mk5= document.querySelector("#mk5");
let name= document.querySelector("#name");
let  totalmk= document.querySelector("#total");



btn.addEventListener("click",() => {
    let result;
    let inVal = studentname.value;
    let mk1Val =parseInt(mk1.value);
    let mk2Val =parseInt(mk2.value);
    let mk3Val =parseInt(mk3.value);
    let mk4Val =parseInt(mk4.value);
    let mk5Val =parseInt(mk5.value);

    let total = mk1Val + mk2Val + mk3Val + mk4Val + mk5Val;

    name.innerHTML = inVal;
    totalmk.innerHTML = total;

    if ()
})