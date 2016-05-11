var userName = prompt('State your name');
alert('Hey there ' + userName + '. We\'re gonna play a little guessing game. Let\'s get started!');
console.log('The user\'s name is ' + userName + ' and they are mad funky.');

var response1 = prompt('Do I have a favorite football team?').toLowerCase();
var answer1 = 'yes';

//if (the user is correct){
  //tell them they got it right
//} else {
  //tell them they got it wrong
//}

if (response1 === answer1 || response1 === answer1[0]) {
  alert('You betcha, ' + userName + '! New York Giants all day.');
  console.log('....lucky guess');
} else {
  alert('Actually, I do. It\'s the New York Giants!');
  console.log('lolnicetry');
}

var response2 = prompt('Alright, question numero dos. Am I left-handed?').toLowerCase();
var answer2 = 'no';

if (response2 === answer2 || response2 === answer2[0]) {
  alert('Yup, I\'m a righty!');
  console.log('fun fact: I throw like a 4 year old girl with my left hand');
} else {
  alert('No way, exclusively right-handed!');
  console.log('..you tried');
}

var response3 = prompt('Question 3: Am I a vegan?').toLowerCase();
var answer3 = 'no';

if (response3 === answer3 || response3 === answer3[0]) {
  alert('That\'s right!');
  console.log('mmmm...steak');
} else {
  alert('Eh I tried.. but ' + userName + ', my friend, the vegan life is not for me.');
  console.log('mmmm...steak');
}

var response4 = prompt('Do I have more than one pet?').toLowerCase();
var answer4 = 'no';

if (response4 === answer4 || response4 === answer4[0]) {
  alert('Yeah, just one is more than enough for me to handle right now. Maybe someday!');
} else {
  alert('Incorrect. I\'m a one dog guy as of right now.');
}

var response5 = prompt('Does Biggie Smalls love it when you call him Big Papa?').toLowerCase();
var answer5 = 'yes';

if (response5 === answer5 || response5 === answer5[0]) {
  alert('"Throw ya hands in the air, if yous a true playaaa"');
} else {
  alert('Aw cmon, I know you know it!');
}

var answer6 = 2;

/*if (answer6 < 2) {
  alert('Too low!');
} else if (answer6 > 2){
  alert('Too high!');
} else {
  alert('Correct!');
}*/

var userAttempt = 0;
while (userAttempt < 5) {
  var response6 = prompt('How many siblings do I have?');
  if (response6 < 2) {
    alert('Too low');
    console.log('User answered too low');
  } else if (response6 > 2) {
    alert('Too high');
    console.log('User answered too high');
  } else {
    alert('Correct!');
    break;
    console.log('User answered correctly');
  }
  userAttempt++;
}
alert('Thanks for playing!');
