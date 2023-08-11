let num1 = null;
let num2 = null;
let currOperator = "";

let operatorPressed = false;

let displayText = document.getElementById("display-text"); 
let clear = document.getElementById("clear");
let equals = document.getElementById("="); 

let operators = document.getElementsByClassName('operatorbutton');
let operatorsArray = [...operators];

let numbers = document.getElementsByClassName('numbutton');
let numbersArray = [...numbers];

numbersArray.forEach((num) => {
	num.addEventListener("click", () => {
		if (!operatorPressed) {
			displayText.textContent += num.id;
		}
		else {
			operatorPressed = false;
			displayText.textContent = num.id;
		}
	})
})

operatorsArray.forEach((operator) => {
	operator.addEventListener("click", () => {
		operatorPressed = true;
		if (!(num1 || num2)) { return; }
		if (num1 === null) {
			num1 = parseInt(displayText.textContent);
			currOperator = operator.id;
		}
		else {
			num2 = parseInt(displayText.textContent);
			num1 = operate(num1, num2, currOperator);
			displayText.textContent = num1; 
			currOperator = operator.id;
			return;
		}
		displayText.textContent = currOperator;
	})
})

clear.addEventListener("click", () => {
	num1 = null;
	num2 = null;
	displayText.textContent = '';
})

equals.addEventListener("click", () => {
	num2 = parseInt(displayText.textContent);
	displayText.textContent = operate(num1, num2, currOperator);
	operatorPressed = true;
	num1 = null;
	num2 = null;
})

function add(a, b){
	return a + b;
}

function subtract(a, b){
	return a - b;
}

function multiply(a, b){
	return a * b;
}

function divide(a, b){
	return a / b;
}

function operate(a, b, operator){
	a = parseInt(a);
	b = parseInt(b);
	
	switch(operator){
		case '+':
			return add(a,b);
		case '-':
			return subtract(a,b);
		case '*':
			return multiply(a,b);
		case '/':
			return divide(a,b);
	}
}
