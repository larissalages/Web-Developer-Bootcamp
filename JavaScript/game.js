
var secret_number = "7";

var guess = prompt("Guess a number");

if (guess > secret_number){
	alert("too high");
}
else if (guess < secret_number){
	alert("too low")
}
else{
	alert("YOU ARE SO SMART!! YOU GUESS THE RIGHT NUMBER!!")
}