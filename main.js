var song1 = "";
var song2 = "";
rightWristX = 0;
rightWristY = 0;
leftWristX = 0;
leftWristY = 0;

function preload() {

song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3");

}

function setup() {

    canvas = createCanvas(300,250);
    canvas.position(800,275);
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
    
    }

    function draw() {

        image(video,0,0,300,250);
        
        }

        function modelLoaded(){
            console.log("poseNet Is Initialized");
        }
        
        function gotposes(results){
            if(results.length > 0){
                console.log(results);
                 
                leftWristX = results[0].pose.leftWrist.x;
                leftWristY = results[0].pose.leftWrist.y;
                console.log("left Wrist X = "+leftWristX+" leftWrist_y = "+leftWristY);
        
                rightWristX = results[0].pose.rightWrist.x;
                rightWristY = results[0].pose.rightWrist.y;
                console.log("rightWrist X = "+rightWristX+" rightWrist X = "+rightWristY);
            }
        }