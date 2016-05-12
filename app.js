var counter = 0;
var userName = prompt('State your name');
alert('Hey there ' + userName + '. We\'re gonna play a little guessing game. Let\'s get started!');
console.log('The user\'s name is and they are mad funky.');
var questions = ['Do I have a favorite football team?', 'Alright, question numero dos. Am I left-handed?',
              'Question 3: Am I a vegan?', 'Do I have more than one pet?', 'Does Biggie Smalls love it when you call him Big Papa?'];
var responses = ['New York Giants all day.', 'Yup, I\'m a righty!', 'Eh I tried.. but  my friend, the vegan life is not for me.',
                'Yeah, just one is more than enough for me to handle right now. Maybe someday!', '"Throw ya hands in the air, if yous a true playaaa"'];
var answers = ['yes', 'no', 'no', 'no', 'yes'];
function yesNoQuestions(){
  for(var i = 0; i < 5; i++){
    console.log(questions[i]);
    var qes = prompt(questions[i]);
    if(qes === answers[i] || qes === answers[i][0]){
      alert('Great! ' + responses[i]);
      counter++;
    } else {
      alert('Nope! The correct answer is ' + responses[i]);
    }
  }
}
yesNoQuestions();
//+++++++++++++++++++++++++++++++++
var answer6 = 2;
if (answer6 < 2) {
  alert('Too low!');
} else if (answer6 > 2){
  alert('Too high!');
} else {
  alert('Correct!');
}

var userAttempt = 0;
while (userAttempt < 4) {
  var response6 = parseInt(prompt('How many siblings do I have?'));
  if (response6 < 2) {
    alert('Too low');
    console.log('User answered too low');
  } else if (response6 > 2) {
    alert('Too high');
    console.log('User answered too high');
  } else {
    alert('Correct!');
    (counter += 1);
    break;
    console.log('User answered correctly');
  }
  userAttempt++;
}

var cars = ['jeep','ford','toyota'];
var userGuess = 0;
while (userGuess < 6) {
  var response7 = prompt('Can you guess a MAKE of car that I have driven?').toLowerCase();
  if (response7 === cars[0]){
    alert('Correct!');
    (counter += 1);
    break;
  } else if (response7 === cars[1]){
    alert('Correct!');
    (counter += 1);
    break;
  } else if (response7 === cars[2]){
    alert('Correct!');
    (counter += 1);
    break;
  } else {
    alert('Sorry, that\'s wrong!');
  }
  userGuess++;
}

alert('Thanks for playing, ' + userName + '! You earned a score of ' + counter + ' out of 7 possible points!');

if (counter === 7) {
  alert('PERFECT SCORE OVER HERE!');
} else if (counter < 7) {
  alert('Hit command + r to try again!');
}
