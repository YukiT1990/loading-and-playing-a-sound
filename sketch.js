/*

- Copy your game project code into this file
- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/


*/



var jumpSound;
var isInitialised;


function preload()
{
    soundFormats('mp3','wav');

    //load your sounds here
    jumpSound = loadSound('assets/segway_loop.mp3');
    
}


function setup()
{
	createCanvas(1024, 576);
    textAlign(CENTER);
    
    isInitialised = false;
    
    
    

}

function draw()
{
    background(0);
    fill(255);
    
    if(!isInitialised)
    {
        text("press any key begin", width/2, height/2);
    }
}


function keyPressed()
{
    //jumpSound.play();
//    jumpSound.loop(0,0.5, 0.1,0.1);
    
    if(!isInitialised)
    {
        isInitialised = true;
        jumpSound.setVolume(0.1);
        
        
        var r = map(mouseX, 0, width, 0.5, 4.0);
        jumpSound.loop(0, r);
        
    } 
    else 
    {
        if(key == ' ')
        {
            if(jumpSound.isPaused())
            {
                jumpSound.play();
            }else{
                jumpSound.pause();
            }
            
        }
    }
}
