'use strict';
let sNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
// all function start here....
function displayMessage(message) {
     document.querySelector('.message').textContent=message;
}
function displayScore(score) {
    document.querySelector('.score').textContent=score;
}

function displayNumber(sNumber) {
    document.querySelector(".number").textContent=sNumber;
}

function playGameSound(wavFile) {
      let audio = new Audio(wavFile);
audio.play()
}


// all function end here....

// on check button click code start here...
document.querySelector('.check').addEventListener('click',function () {

    const guessNumber=Number(document.querySelector(".guess").value);
    playGameSound("click.wav");
   if(!guessNumber){
       displayMessage("No Number");
   }
   //when guess number is correct
  else if(guessNumber===sNumber){
     displayNumber(sNumber);
     displayMessage("Correct Number");
     document.body.style.backgroundColor="#55a630";
     playGameSound("win.wav");
     if(highScore<score){//highScore=16, score=19
         highScore=score;
         document.querySelector(".highscore").textContent=highScore;
     }

     //when guess number is wrong
   }else if(guessNumber!==sNumber){
       if(score>1){
           displayMessage(guessNumber>sNumber ? 'Too High!' : 'Too Low !');
       score--;
      displayScore(score);
       }else{
        displayNumber("Game Over");
         displayScore(0);
         document.body.style.backgroundColor="red";
         playGameSound("gameover.wav");
       }
          
   }
 
});





document.querySelector(".again").addEventListener('click',function () {
    score=20;
     sNumber=Math.trunc(Math.random()*20)+1;
     displayMessage("start guessing...");
     displayScore(score);
     displayNumber("?");
    document.querySelector(".guess").value='';
    document.body.style.backgroundColor="#222";

})

