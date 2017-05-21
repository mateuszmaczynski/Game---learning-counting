var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

document.getElementById("buttonStarReset").onclick = function(){
    if(playing == true){
        location.reload();
    }else{
        playing = true;
        score = 0;
        document.getElementById("scoreValue").innerHTML = score;
        show("timeRemaining");
        timeremaining = 60;
        document.getElementById("timeRemainingValue").innerHTML = timeremaining;
        hide("gameOver");
        document.getElementById("buttonStarReset").innerHTML = "Reset Game";
        startCountdown();
        generateQA();
    }
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            score++;
            document.getElementById("scoreValue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            generateQA();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
        }
    }
}   
}

function startCountdown(){
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeRemainingValue").innerHTML = timeremaining;
        if(timeremaining == 0){// game over
            stopCountdown();
            show("gameOver");
         document.getElementById("gameOver").innerHTML = "<p>Game over!</p><p>Your score is " + score + ".</p>";   
            hide("timeRemaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("buttonStarReset").innerHTML = "Start Game";
        }
    }, 1000);    
}


function stopCountdown(){
    clearInterval(action);   
}

function hide(Id){
    document.getElementById(Id).style.display = "none";   
}

function show(Id){
    document.getElementById(Id).style.display = "block";   
}

function generateQA(){

    var typeOperation = 2;
    if(typeOperation == 0){
    
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
        }
    else if(typeOperation == 1){
        
    var x = 1+ Math.round(49*Math.random());
    var y = 1+ Math.round(49*Math.random());
    correctAnswer = x+y;
    document.getElementById("question").innerHTML = x + "+" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(50*Math.random()))+(50+ Math.round(9*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
        }
        
    else if (typeOperation == 2) {
    do{    
    var x = 1+ Math.round(99*Math.random());
    var y = 1+ Math.round(99*Math.random());
    }while(x<y)
         
    correctAnswer = x-y;
    document.getElementById("question").innerHTML = x + "-" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(100*Math.random()))-(1+ Math.round(100*Math.random()));//a wrong answer
                if (wrongAnswer<0){
                    wrongAnswer=-wrongAnswer;
                }
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
        }
        
      else if (typeOperation == 3) {
   
    do{    
    var x = 1+ Math.round(99*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x/y;    
    } while( x % y !== 0)
    document.getElementById("question").innerHTML = x + "/" + y;
    var correctPosition = 1+ Math.round(3*Math.random());
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer; //fill one box with the correct answer

    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        if(i != correctPosition) {
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(49*Math.random())); //a wrong answer
            }while(answers.indexOf(wrongAnswer)>-1)
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
        }
    
        
    
}