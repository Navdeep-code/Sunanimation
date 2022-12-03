window.onload=pageload;

function pageload(){
    var btn=document.getElementById("btnplay");
    var ball=document.getElementById("ball");
    var stage=document.getElementById("stage");
    ball.classList.add("sun");
    stage.classList.add("day");
    btn.onclick=play;

    function play(){
        ball.classList.toggle("stop");
        stage.classList.toggle("stop")
    }
}