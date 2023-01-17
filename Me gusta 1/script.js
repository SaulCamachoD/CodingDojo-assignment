var num = 1;
var addlike = document.querySelector("#liketext");
function counter(){
    num++;
    addlike.innerText = num + " Like(s)";
    console.log(num);
}