var list_todo = []
var cmd = prompt("What would you like to do?");

window.setTimeout(function() {
	while(cmd!== "quit"){
	
		if (cmd == "new") {
			var newToDo = prompt("Enter a new todo");
			list_todo.push(newToDo);
		}
		else if (cmd == "list") {
			console.log(list_todo);
		}
		cmd = prompt("What would you like to do?");

	}
}, 500);




console.log("OK, YOU QUIT THE APP");