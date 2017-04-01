var url = 'http://api.icndb.com/jokes/random'; //full address to jokes

//Button listener and function which dwondload random joke.
var button = document.getElementById('get-joke');
button.addEventListener('click', function() {  //click listener
	getJoke();
});

//assignment paragraph with DOM element which responsible for the display
var paragraph = document.getElementById('joke');

//function getJoke();
function getJoke() {
	var xhr = new XMLHttpRequest();  // new instance of object XMLHttpRequest
	xhr.open('GET', url); // open connection with address
	xhr.addEventListener('load', function(){  //listener for answer from server
		var response = JSON.parse(xhr.response); //JSON JavaScript Object Notation, Parse for changing text to JS object
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}