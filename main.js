noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}


function draw()
{
    background('#666666');
    document.getElementById("text_side").innerHTML = "Width and Height of the text will be = " + difference + "px";
    fill('#FFA500');
    textSize(35);
    stroke('#FFA500');
    text('Saanvi', noseX, noseY, difference)
}

function modelLoaded()
{
    console.log(" Posenet is Initialized! ")
}

function gotPoses(result)
{
    if(result.length > 0 )
    {
        console.log(result)
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}