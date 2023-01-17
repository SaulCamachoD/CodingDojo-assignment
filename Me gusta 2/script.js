var num = [9,12,9];
var addlike1 = document.querySelector("#liketext1");
var addlike2 = document.querySelector("#liketext2");
var addlike3 = document.querySelector("#liketext3");
function counter1(){
    num[0]++;
    addlike1.innerText = num[0]+ " Like(s)";
    console.log(num);
}
function counter2(){
    num[1]++;
    addlike2.innerText = num[1]+ " Like(s)";
    console.log(num);
}
function counter3(){
    num[2]++;
    addlike3.innerText = num[2]+ " Like(s)";
    console.log(num);
}