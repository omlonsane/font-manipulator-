
leftwristX=0;
rightwristX=0;
difference=0;


function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);


    canvas=createCanvas(550,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
    
}

function modelLoaded()
{
    console.log("poseNet is initialised");

}

function draw()
{
    background('#969A97');
    fill('#ffff00');
    stroke('#ffff00');
    text('Om',50,400);
    textSize(difference);

    document.getElementById("square_sides").innerHTML="font size of text will be="+difference;

}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX );
        console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);




    }
}

