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
			displayText.textContent += num.id; } else { operatorPressed = false;
			displayText.textContent = num.id;
		}
	})
})

operatorsArray.forEach((operator) => {
	operator.addEventListener("click", () => {
		if(!operatorPressed){
			num1 = parseInt(displayText.textContent);
			currOperator = operator.id;
			displayText.textContent = currOperator;
			operatorPressed = true;
			return;
		}
		operatorPressed = true;
		num2 = parseInt(displayText.textContent);
		if(num2 == 0 && currOperator == '/'){
			alert("no dividing by zero");
			displayText.textContent = '';
			num1 = null;
			num2 = null;
			return;
		}
		num1 = operate(num1, num2, currOperator);
		displayText.textContent = num1; 
		currOperator = operator.id;
		return;
	})
})

clear.addEventListener("click", () => {
	num1 = null;
	num2 = null;
	displayText.textContent = '';
})

equals.addEventListener("click", () => {
	num2 = parseInt(displayText.textContent);
	if(num2 == 0 && currOperator == '/'){
		alert("no dividing by zero");
		displayText.textContent = '';
		num1 = null;
		num2 = null;
		return;
	}
	displayText.textContent = isNaN(operate(num1, num2, currOperator)) ? (num1 || displayText.textContent) : operate(num1, num2, currOperator);
	operatorPressed = false;
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
