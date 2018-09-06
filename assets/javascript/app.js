
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var number = 15;
    var intervalId;
    var answered = false; //havent used this var yet. Was for an "if" statement to determine if the question was answered.
    var userAnswer;
    var questionCounter = 0;

    var questions = [
        {question: "stop signs are black",  //CHANGE QUESTIONS ONCE GAME WORKS
        answer: [3, 4], //HAD TO CHANGE VALUE BC TRUE/FALSE WAS NOT WORKING CORRECT WITH ON CLICK 
        correct: 4,
        image: (""),
        sound: ("")},
   
        {question: "stop signs are red",
        answer: [3, 4],
        correct: 3,
        image: (""),
        sound: ("")},  
        
        {question: "stop signs are blue",
        answer: [3, 4],
        correct: 4,
        image: (""),
        sound: ("")}
        ]

//START OF CODE//

 
       function game(){            
            $("#show-question").hide 
            $(".button1").hide(trueBtn);    
            $(".button2").hide(falseBtn);                
    }
       //timer
        function run() {
            intervalId = setInterval(decrement, 1000);    
    }
        function stop(){
            clearInterval(intervalId)
    }
        function decrement() {
            number--;
            $("#show-number").html("<h2>" + number + "</h2>");
            if (number === 0) {
                stop();
                $("#show-number").html("<h2>Time's Up</h2>");         
                $(".button1").hide();
                $(".button2").hide(); 
                incorrectAnswers++;
                nextBtn();
                
            }
    }
    //buttons
    function trueBtn(){
            $(".button1").html('<button type="button" class="btn btn-primary btn-lg" value="3">True</button>');                  
            $(".button1").on("click", function(){
                $(".button1").val(3);
                $(".button1").slideUp();
                $(".button2").slideUp();
                userAnswer = 3;
                if(userAnswer === questions[questionCounter].correct){
                    $("#show-number").html("<h2>Correct</h2>");
                    correctAnswers++;
                    questionCounter++;
                    stop();
                    nextBtn();
                    }
                else{
                    $("#show-number").html("<h2>Incorrect</h2>");
                    incorrectAnswers++;
                    questionCounter++;
                    stop();
                    nextBtn();

                    }
                
                }) 
            }
    function falseBtn(){
            $(".button2").html('<button type="button" class="btn btn-secondary btn-lg" value="4">False</button>');    
            $(".button2").on("click", function(){
                $(".button2").val(4);
                $(".button1").slideUp();
                $(".button2").slideUp();
                userAnswer = 4;
                
                if(userAnswer === questions[questionCounter].correct){  //need a for loop somewhere but do not know where or how.
                    $("#show-number").html("<h2>Correct</h2>");
                    correctAnswers++;
                    questionCounter++;
                    stop();
                    nextBtn();
                   }
                else{
                    $("#show-number").html("<h2>Incorrect</h2>")
                    incorrectAnswers++;
                    correctAnswers++;
                    stop();
                    nextBtn();
                    } 
                    
                })
            }
        function nextBtn(){
            $(".next").html('<button type="button" class="btn btn-secondary btn-md">Next</button>');
            $(".next").on("click",function(){
               $("#show-question").html(questions[questionCounter].question); //this should loop through the index of questions somehow
               $(".next").slideUp();
               $(".button1").slideDown();    
               $(".button2").slideDown();
               questionCounter++;
               console.log("Question Count is : " + questionCounter);
               intervalId = setInterval(decrement, 1000); 
               console.log("Correct Answers: " +correctAnswers);
               console.log("Incorrect Answers: " +incorrectAnswers);
           })
        }
    
        //start button starts the game and shows question 1. 
        function startBtn(){
            game();
            $(".start").html('<button type="button" class="btn btn-secondary btn-md">Start</button>');
            $(".start").on("click",function(){
                $(".start").slideUp();
                $(".button1").slideDown();    
                $(".button2").slideDown();
                run(); 
                $("#show-question").html(questions[0].question);

              })           
    }
startBtn();//called to start the game. 

    
    //Buggy code>>> ISSUES BELOW

 // 1. I have coded myself into a loop. True/False buttons only return the correct answer for the first question
 // this is probably because I need a "for loop" to cycle through the questions array and compare answers in 
 // "if" statements. I do not know how to do this. 

 // 2. Seems like there is too much code. I do not know how to simplify. 

 // 3. Next button has too much functionality. Need to simplify. It should just prompt the next question. 

 // 4. Timer decrements too much after the first question. Probably because of how it is looped through the next button

 // 5. Still need to make a results function that shows number of correct and incorrect questions answered.

 // 6. Add better questions. Add images and sound effects once big issues are fixed. 

 // 7. Need to style it. It is ugly.




    