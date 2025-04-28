//For loops

//Print numbers 1 - 10 through a for loop
for (let i = 0; i < 10; i++) {
	console.log(i);
}

//Print even numbers 1-20 in a for loop
for (let i = 0; i < 20; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}

//For loop that iterates 1-50 and prints current number to total variable
let total = 0;
for (let i = 0; i < 50; i++) {
	total = i;

	console.log(total);
}

//While loop that counts down from 5 and prints blast off to the terminal
let countDown = 5;
while (countDown > 0) {
	countDown--;
	console.log(countDown);
}
console.log('Blast off!');

//For loop to loop through an array of colors and print each color to the console
let colors = ['red', 'green', 'blue', 'purple', 'orange', 'yellow', 'scarlet'];

for (let i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}
colors.push('turkis');
console.log(colors);


//For loop that creates a triangle of "#"
let triangle = "";
for (let i = 0; i <= 7; i++) {
	triangle = triangle += "#";
	console.log(triangle);
}


//FizzBuzz game with a for loop and if statement, using the remainder % operator to print fizz buzz

for (let numbers = 1; numbers <= 100; numbers++) {
	if (numbers % 3 === 0 && numbers % 5 === 0) {
		console.log("FizzBuzz");
	} else if (numbers % 5 === 0) {
		console.log('Buzz');
	} else if (numbers % 3 === 0) {
		console.log('Fizz');
	} else {
		console.log(numbers);
	}
}