
        var correctAnswers = 0;
        var incorrectAnswers = 0;
        var number = 5;
        var intervalId;
        var answered = false; //havent used this var yet. Was for an "if" statement to determine if the question was answered.
        var userAnswer;
        var questionCounter = 0;

        var questions = [
            {
                question: "The Red Wings are located in Detroit, MI.",  
                answer: [77, 4], //HAD TO CHANGE VALUE BC TRUE/FALSE WAS NOT WORKING CORRECT WITH ON CLICK 
                correct: 77,
                image: 'assets/images/detroit.jpg',
                sound: ("")
            },

            {
                question: "The Red Wings play at the Joe Lewis Arena.",
                answer: [77, 4],
                correct: 4,
                image: 'assets/images/areana.gif',
                sound: ("")
            },

            {
                question: "The Red Wings are a baseball team",
                answer: [77, 4],
                correct: 4,
                image: 'assets/images/fight.gif',
                sound: ("")
            },

            {
                question: "Mr. Hockey's name is Wayne Gretzky",
                answer: [77, 4],
                correct: 4,
                image: 'assets/images/howe.jpeg',
                sound: ("")
            },
            {
                question: "Henrik Zetterberg is the current captain.",  
                answer: [77, 4], 
                correct: 77,
                image: 'assets/images/zatterberg.gif',
                sound: ("")
            },

            {
                question: "The Red Wings made it to the play-offs 25years in a row until 2016-2017 season.",
                answer: [77, 4],
                correct: 77,
                image: 'assets/images/streak.jpeg',
                sound: ("")
            },

            {
                question: "Dylan Larkin is a Canadian.",
                answer: [77, 4],
                correct: 4,
                image: 'assets/images/larkin.jpg',
                sound: ("")
            },

            {
                question: "The Red Wings are apart of the original 6 NHL teams.",
                answer: [77, 4],
                correct: 77,
                image: 'assets/images/six.jpg',
                sound: ("")
            },
            {
                question: "The octopus is the Red Wings play-off mascot.",
                answer: [77, 4],
                correct: 77,
                image: 'assets/images/mascot.jpg',
                sound: ("")
            },
            {
                question: "The founder of Little Cesar's also once owned the Red Wings.",
                answer: [77, 4],
                correct: 77,
                image: 'assets/images/ilitch.png',
                sound: ("")
            },
            { question: false },
        ]
        var img = $('<img />',
             { src: questions[questionCounter].image, 
             })
             

        //START OF CODE//

        function showQuestion() {
            
            $("#show-question").html(questions[questionCounter].question).hide().delay(500).fadeIn(1400);
            $(".button1").slideDown();
            $(".button2").slideDown();
            run();
        }
        function startBtn() {
            $(".start").html('<button type="button" class="btn btn-secondary btn-md">Start</button>');
            $(".start").on("click", function () {
                $(".start").slideUp();
                $(".button1").slideDown();
                $(".button2").slideDown();
                showQuestion();
            })
        }

        var tBtn = $(".button1").html('<button type="button" class="btn btn-dark btn-lg" value="77">True</button>');
        $(tBtn).on("click", function () {
            $(tBtn).val(77);
            userAnswer = 77;
            stop();
            if (userAnswer === questions[questionCounter].correct) {
                $("#show-number").html("<h2>Correct</h2>");
               $(img).appendTo($('#picture'));
                correctAnswers++;
            }
            else {
                $("#show-number").html("<h2>Incorrect</h2>");
                $(img).appendTo($('#picture'));
                incorrectAnswers++;
            }
            questionCounter++;
            results();
            console.log(questionCounter);
        })

        var fBtn = $(".button2").html('<button type="button" class="btn btn-secondary btn-lg" value="4">False</button>');
        $(fBtn).on("click", function () {
            $(fBtn).val(4);
            userAnswer = 4;
            stop();
            if (userAnswer === questions[questionCounter].correct) {
                $("#show-number").html("<h2>Correct</h2>");
                $(img).appendTo($('#picture'));
                correctAnswers++;
            }
            else {
                $("#show-number").html("<h2>Incorrect</h2>");
                $(img).appendTo($('#picture'));
                incorrectAnswers++;
            }
            questionCounter++;
            results();
            console.log(questionCounter);
        })

        function results() {
            stop();
            if (questions[questionCounter].question === false) {
                $("#results").html("RESULTS");
                $("#results2").html("Correct Answers: " + correctAnswers);
                $("#results3").html(" Incorrect Answers: " + incorrectAnswers);
                $("#show-question").hide();
                $(".button1").hide();
                $(".button2").hide();
                $("h2").hide();
                questionCounter = 0;

                restart();
            }

            else {
                showQuestion();
            }
        }
        function restart() {
            $(".restart").html('<button type="button" class="btn btn-danger btn-lg">RESTART</button>');
            $(".restart").on("click", function () {
                location.reload();
            })
        }
        //timer
        function run() {
            intervalId = setInterval(decrement, 1000);
            number = 6;
        }
        function stop() {
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
                questionCounter++;
                setTimeout(showQuestion, 4000);
                if ((questions[questionCounter].question === false) && (number === 0)) {
                    results();
                    stop();
                }
            }
        }

        $(".button1").hide();
        $(".button2").hide();
        startBtn();




//TO DO:
//add timer delay
//add images and sound
//style.

  