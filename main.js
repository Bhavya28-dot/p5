function preload(){

} 
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110, 250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(tint_color);
    circle(30, 30, 50);
    rect(55, 10, 540, 40);
    circle(620, 30, 50);

    rect(55, 430, 540, 40);
    circle(30, 450, 50);
    circle(620, 450, 50);
    let c = color(255, 0, 68);
fill(c);
}
function take_snapshot(){
    save("birthday_pic.png");
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
