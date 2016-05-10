var userName = prompt('State your name');
alert('Hey there ' + userName + '. I\'m going to ask you some questions. Is that ok? Doesn\'t matter.');
console.log('The user\'s name is ' + userName + ' and they are mad funky.');

var response1 = prompt('Do I have a dog?').toLowerCase();
var answer1 = 'yes';

//if (the user is correct){
  //tell them they got it right
//} else {
  //tell them they got it wrong
//}

if (response1 === answer1 || response1 === answer1[0]) {
  alert('You betcha, ' + userName + '!');
} else {
  alert('Nope, I really do have a dog! Her name is Gatsby.');
}
