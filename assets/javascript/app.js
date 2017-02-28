
var number = 3000;
var running = false;
var intervalId;

var questionTarget = 100;
var questionText = "";
var answerSelect = "";

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
		imageUrl: "assets/images/fox.jpeg",
		answer: "Fox",
		wrongAnswers: ["Falco", "Marth", "Pikachu"],

		},

	{
		number: 3,
		text: "Who is the creator of the Super Smash Bros. series?",
		imageUrl: "assets/images/sakurai.jpeg",
		answer: "Masahiro Sakurai",
		wrongAnswers: ["Shigeru Miyamoto", "Charles Martinet", "Hideo Kojima"],

		},	

	{
		number: 4,
		text: "Which of these playable characters was featured in only one Smash Bros. title?",
		imageUrl: "assets/images/sakurai.jpeg",
		answer: "Snake",
		wrongAnswers: ["Ice Climbers", "Mr. Game and Watch", "Meta Knight"],

		},	


]

var questionCount = 0;
for (var k in questions) {
    if (questions.hasOwnProperty(k)) {
       ++questionCount;
    }
}



//alert(questions[1].number);

$("#startButton").on("click", function() {

run();

	$(this).slideUp()
	.css("display: none");

	questionTarget = questions[Math.floor(Math.random()*questionCount)].number - 1;
	questionText = questions[questionTarget].text;
	answerSelect = questions[questionTarget].answer;

	possibleAnswers = questions[questionTarget].wrongAnswers;

	possibleAnswers.push(answerSelect);

	shuffle(possibleAnswers);

	
	for (var i = 0; i < possibleAnswers.length; i++) {
	

	$("#answerHolder").append('<div class = "row"><div class = "col-md-8 col-md-offset-2"><div id = "answers" class = "panel"><h3 id = "answer'+i+'">'+possibleAnswers[i]+'</h3></div></div></div>')


	
	
	
	}



});

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


      		alert("Time Up!");
      		stop();
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