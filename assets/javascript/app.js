



var number = 2000;
var running = false;
var intervalId;

var nextOneEndsit = false;

var points = 0;
var answered = 0;

var gameStart = false;

var questionTarget = 100;
var questionText = "";
var answerSelect = "";

var askable  = [];

var possibleAnswers = [];
 
var questions = [

	{
		number: 1,
		text: "What year was the original Super Smash Bros. released?",
		imageUrl: "assets/images/64.png",
		answer: "1999",
		wrongAnswers: ["2000", "1998", "2001"],


		},

	{
		number: 2,
		text: "Who is considered the best character in Super Smash Bros. Melee?",
		imageUrl: "assets/images/fox.jpg",
		answer: "Fox",
		wrongAnswers: ["Falco", "Marth", "Pikachu"],

		},

	{
		number: 3,
		text: "Who is the creator of the Super Smash Bros. series?",
		imageUrl: "assets/images/sakurai.jpg",
		answer: "Masahiro Sakurai",
		wrongAnswers: ["Shigeru Miyamoto", "Charles Martinet", "Hideo Kojima"],

		},	

	{
		number: 4,
		text: "Which of these playable characters was featured in only one Smash Bros. title?",
		imageUrl: "assets/images/snake.jpg",
		answer: "Snake",
		wrongAnswers: ["Ice Climbers", "Mr. Game and Watch", "Meta Knight"],

		},	

		{
		number: 5,
		text: "Who was the winner of EVO 2016 for Super Smash Bros. Melee?",
		imageUrl: "assets/images/hbox.jpg",
		answer: "Hungrybox",
		wrongAnswers: ["Armada", "Mango", "Mew2King"],

		},

		{
		number: 6,
		text: "Which of these characters has been in every Smash Bros. title?",
		imageUrl: "assets/images/pika.png",
		answer: "Pikachu",
		wrongAnswers: ["Megaman", "Falco", "Peach"],

		},


		{
		number: 7,
		text: "Which is the only character that has ever been banned from competitive play?",
		imageUrl: "assets/images/mk.jpg",
		answer: "Meta Knight",
		wrongAnswers: ["Fox", "Mewtwo", "Diddy Kong"],

		},


]

var questionCount = 0;
for (var k in questions) {
    if (questions.hasOwnProperty(k)) {
       ++questionCount;

      ;

    }
}

for (var i = 0; i < questionCount; i++) {

	 askable.push(questions[i].text);

	 //bookmark
		
	//askable.remove(questions[2].text);
		//alert(askable);

}



var alreadyAsked =[];





//alert(questions[1].number);

$("#startButton").on("click", function () {


run();
gameStart = true;
	$(this).slideUp()
	.css("display: none");

	nextQuestion();

});



function nextQuestion() {

	
	gameStart = true;
	

		
	questionTarget = questions[Math.floor(Math.random()*questionCount)].number - 1;

	
	
	
	questionText = questions[questionTarget].text;
	answerSelect = questions[questionTarget].answer;
	questionUrl  = questions[questionTarget].imageUrl;

	if (alreadyAsked.indexOf(questionText) > -1 && alreadyAsked.length < questionCount ) {

		console.log("Needs another")
		nextQuestion();
		
	}

	else if (alreadyAsked.length < questionCount) { 

	console.log(questionText);

	number = 2000;

	alreadyAsked.push(questionText); //make sure we don't ask the same question twice

	possibleAnswers = questions[questionTarget].wrongAnswers;


	if (possibleAnswers.indexOf(answerSelect) < 0)  {

	possibleAnswers.push(answerSelect);  };

		

	shuffle(possibleAnswers);



	$("#answerHolder").html("");

	for (var i = 0; i < possibleAnswers.length; i++) {
	

	$("#answerHolder").append('<div class = "row"><div class = "col-md-8 col-md-offset-2"><div id = "answers'+i+'" class = "panel prev"><h3 id = "answer'+i+'">'+possibleAnswers[i]+'</h3></div></div></div>');
	$("#questionText").html('<h2>' + questionText +'</h2>');
	//IMPORTANT FIX!!

					}

	for (var i = 0; i < possibleAnswers.length; i++) {

	if (possibleAnswers[i] === answerSelect) {

		
		$("#answers"+i).data("isCorrect", true);
	}

	else {

		$("#answers"+i).data("isCorrect", false);

	}

	//if (number < 1) { 

	//nextQuestion();   }

				$("#answers"+i).on("click", function(){
				if (gameStart && answered < questionCount) {



					
						if ($(this).data("isCorrect")) {

							points ++;
							answered ++;
							console.log("Correct! Score: " + points + " out of " + answered);




							stop();
							displayImage();

							if (gameStart && answered < questionCount) {
							setTimeout(run, 3000);
							setTimeout(nextQuestion, 3000);
						}
						

							
						}
				
						else if(!$(this).data("isCorrect")) {

							answered++;
								console.log("WRONG! Score: " + points + " out of " + answered);
								

							stop();
							displayLoss();
							if (gameStart && answered < questionCount) {
							setTimeout(run, 3000);
							setTimeout(nextQuestion, 3000);
						}
						}

						if (answered === questionCount){

							/*if () {

								$("#questionText").html('<h2 id = "questionText">Correct!</h2>')
								$("#questionText").append("<img src=" + questionUrl + " width='400px'>");

							}
							else if() {

								$("#questionText").html('<h2 id = "questionText">Nope! The correct answer is '+answerSelect+'.</h2>')
							}*/

							stop();
							$("#stopwatch").html("");
							$("#questionText").append('<h2 id = "questionText">You answered '+ points +' out of '+ questionCount +' questions correctly.</h2>');
							$("#buttonHolder").html('<div id = "buttonHolder" style="text-align: center" class = "row"><button style=" width: 30%;" id = "resetButton" type="button" class="btn btn-success">Play Again</button></div>');
							$("#answerHolder").html("");

							/*for (var i = 0; i < 4; i++) {
								$("answers" + i).html("");
							} */

							$("#resetButton").on("click", function () {

									$(this).slideUp()
									.css("display: none");

									reset();

							});
							
						}


				}

				


	});






	
	}


		}


		
	
	}



function reset () {


run();

running = true;

number = 2000;



nextOneEndsit = false;

points = 0;
answered = 0;

gameStart = false;

questionTarget = 100;
questionText = "";
questionUrl = "";
answerSelect = "";

askable  = [];
possibleAnswers = [];

alreadyAsked =[];



	nextQuestion();

}



function displayImage() {
$("#questionText").html('<h2 id = "questionText">Correct!</h2>')
$("#questionText").append("<img src=" + questionUrl + " width='300px'>");
$("#stopwatch").html("");
$("#answerHolder").html("");

			}

function displayLoss () {

	$("#questionText").html('<h2 id = "questionText">Nope! The correct answer is '+answerSelect+'.</h2>')
	$("#stopwatch").html("");
	$("#answerHolder").html("");


}

function run() {
      if (!running ){
      intervalId = setInterval(decrement, 10); }
      running = true;
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number = number - 1;

      //  Show the number in the #show-number tag.
      $("#stopwatch").html("<h2>Time Left: " + (number / 100).toFixed(2) + "</h2>");


      //  Once number hits zero...

      if (number < 1) {

      		stop();
      		
      		answered++;

      		$("#questionText").html('<h2 id = "questionText">Nope! The correct answer is '+answerSelect+'.</h2>')
			$("#stopwatch").html("");
			$("#answerHolder").html("");

			if (gameStart && answered < questionCount) {

      		setTimeout(nextQuestion, 3000);
      		setTimeout(run, 3000);
						}

      		if (answered === questionCount){

						
							stop();
							
							$("#questionText").html('<h2 id = "questionText">You answered '+ points +' out of '+ questionCount +' questions correctly.</h2>');
							$("#questionText").prepend('<h2 id = "questionText">Nope! The correct answer is '+answerSelect+'.</h2>')
							$("#stopwatch").html("");
							$("#buttonHolder").html('<div id = "buttonHolder" style="text-align: center" class = "row"><button style=" width: 30%;" id = "resetButton" type="button" class="btn btn-success">Play Again</button></div>');
							$("#answerHolder").html("");

							/*for (var i = 0; i < 4; i++) {
								$("answers" + i).html("");
							} */

							$("#resetButton").on("click", function () {

									$(this).slideUp()
									.css("display: none");

									reset();

							});
							
						}
      }
      
    }

    function stop() {

      if (running) {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
      running = false;

    }

  function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}





/*var numberx = 902398756329856239586239825692856

var isPrime = true;

for (var i = 2; i <= Math.floor(numberx/2); i++) {


if (numberx % i === 0) {

	isPrime = false;

	alert("Your number is not prime!");

	break;

}
else	alert("Your number is prime!");
	break;

}


var files = ["pavans_first_birthday.mov",
"owens_asleep_at_the_computer.jpg",
"michael_fights_a_polar_bear.mp4",
"nate_road_rage.avi",
"ruby_skydiving.jpeg",
"ken_getting_his_black_belt.png",
"dan_winning_underground_street_race.mov",
"its_hard_to_come_up_with_file_names.gif",
"seriously_this_is_taking_too_long.mpg",
"i_wonder_how_many_of_these_i_should_have.png",
"probably_a_few_more.avi",
"nutmeg_is_clawing_my_sneakers_again.mp4",
"cat_i_will_destroy_you.gif",
"i_wish_we_had_a_dog.jpeg",
"stop_looking_at_me_like_that_nutmeg.mpeg",
"aww_i_cant_hate_you.png",
"omg_my_sneakers.avi",
"cat_you_are_the_worst.mp4"
];

var videos = []; 
var images = [];

for (var i = 0; i < files.length; i++) {

 var lastFour = files[i].substr(files[i].length - 4);

 if (lastFour.includes("m")  || lastFour.includes("avi")) 
 	{videos.push(files[i]);}
 
 else {images.push(files[i]);}

}
console.log(videos);
console.log(images);

*/