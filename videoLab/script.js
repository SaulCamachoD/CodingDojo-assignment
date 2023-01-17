var myvideo = document.getElementById(video1);

function play(){
    if(myvideo.paused){
        video1.play();
    }
}
function pause(){
    video1.pause();
}
function muteon(){
    video1.muted = true;
}
function muteoff(){
    video1.muted = false;
}