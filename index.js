var readlineSync = require("readline-sync");

var chalk = require('chalk');


var score = 0;
var userName = readlineSync.question(chalk.italic.blueBright("What is your name? "));
console.log(chalk.italic.blueBright("Hi " + userName + "! Welcome to GangsOfWassepur-QUIZ!"));

//rules
console.log(chalk.bold.yellowBright("\nPlease carefully read these rules: \n1] This quiz contains a total of 5 questions.\n2] Type 1,2,3 OR 4 AS THE CORRECT ANSWERS. \n3] Correct answer will get you 10 points and for a wrong answer 5 points will be deducted."))


console.log('\n');
console.log(chalk.yellowBright("------------------Chaliye shuru kaarte hai-------------------"));


var highestScores = [{
  name: "Atri",
  sCore: "30"
}, {
  name: "Monty:",
  sCore: "15"
}, {
  name: "Suyash:",
  sCore: "20"
}, {
  name: "Manticore",
  sCore: "40"
}]


function play(question, answer, options) {
  var yourAnswer = readlineSync.question(chalk.whiteBright(question, options));
  if (yourAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.bold.inverse.greenBright("Yay! You are right! "));
    score = score + 10;
  } else {
    console.log(chalk.bold.inverse.redBright("Oh no! You are wrong! "));
    console.log(chalk.bold.inverse.greenBright("Correct answer is: ",answer," "));
    score = score - 5;
  }
  console.log(chalk.bold.inverse.cyanBright("Your score is : ", score," "));
  console.log(chalk.yellowBright("--------------------------"));
}


var questions = [{
  question: "1. What was the name of the character played by Rajkummar Rao? ",
  answer: "1",
  options: "\n1] Shamshad Alam \n2] Shamsher Alam \n3] Salim Alam \n4] Shahid Alam \nYour Answer: "
}, {
  question: "2. Who is the director of Gangs of Wasseypur?",
  answer: "2",
  options: "\n1] Tigmanshu Dhulia \n2] Anurag Kashyap \n3] Kabir Khan \n4] Imtiaz Ali \nYour Answer: "
}, {
  question: "3. What was the name of Sardar Khan's second wife?",
  answer: "3",
  options: "\n1] Lakshmi \n2] Parvati \n3] Durga \n4] Saraswati \nYour Answer: "
}, {
  question: "4. What was the name of the character played by Manoj Bajpayee",
  answer: "1",
  options: "\n1] Sardar khan \n2] Pathan \n3] Definite \n4] Sultana Daku \nYour Answer: "
}, {
  question: "What is the name of Sardar Khan's father?",
  answer: "2",
  options: "\n1] Faizal Khan \n2] Shahid Khan \n3] Danish Khan \n4] Pehelwan Khan \nYour Answer: "
}]



for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer, currentQuestion.options);
}



console.log(chalk.whiteBright("The highestscores obtained are: "))
for (var l = 0; l < highestScores.length; l++) {
  console.log(chalk.blueBright(highestScores[l].name));
  console.log(chalk.magentaBright(highestScores[l].sCore));
}


if (score >= highestScores[3].sCore) {
  console.log(chalk.green("Congratulations " + userName + "! You have scored the highest! "));
  
}
console.log(chalk.bold.italic.yellowBright("Thanks " + userName + " for taking part in my GOW quiz! Have a nice day!"));