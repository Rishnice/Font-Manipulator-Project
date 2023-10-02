leftWristX = 0;
rightwristX = 0;

function preload() 
{

}

function setup() 
{
    canvas = createCanvas(350 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(canvas, 0, 0, 300, 300);
    image(moustache, moustacheX, moustacheY, 30, 30);
    background("blue");
    textSize("30");
    fill("red");
    text("Hello" , 40 , 50);
}

function modelLoaded() 
{
    console.log("Model Loaded!");
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftwrist.X -15;
        rightWristX = results[0].pose.rightwrist.X -10;
        console.log("leftWrist x = " + leftWristX);
        console.log("rightWrist y = " + rightwristX);
    }
}