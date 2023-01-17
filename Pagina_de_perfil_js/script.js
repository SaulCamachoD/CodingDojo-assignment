var text1 = document.querySelector("#cambio");
var user1 = document.querySelector(".card-list-item1");
var user2 = document.querySelector(".card-list-item2");
var counta = 2;
var countb = 500;
var restconnect = document.querySelector(".badge1");
var plusconnect = document.querySelector(".badge2");

function change(){
    text1.innerText = 'Julia Alvarez';
}
function hiden1(){
    user1.remove();
}
function hiden2(){
    user2.remove();
}
function connect(){
    counta--;
    restconnect.innerText = counta;
    console.log(counta);
}
function connect1(){
    countb++;
    plusconnect.innerText = countb + "+";
    console.log(countb);
}