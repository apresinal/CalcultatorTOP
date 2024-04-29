// Variables para almacenar números, operador y resultado
let firstNumber = '';
let operator = '';
let secondNumber = '';

// Seleccionar elementos del DOM
const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');

// Función para actualizar la pantalla de la calculadora
function updateDisplay(value) {
  display.textContent = value;
}

// Función para realizar la operación
function operate(operator, num1, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        return 'Error';
      }
      return num1 / num2;
    default:
      return 'Error';
  }
}

// Event listener para los botones de números
numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operator === '') {
      firstNumber += number.value;
      updateDisplay(firstNumber);
    } else {
      secondNumber += number.value;
      updateDisplay(secondNumber);
    }
  });
});

// Event listener para los botones de operadores
operators.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', () => {
    operator = operatorBtn.value;
  });
});

// Event listener para el botón de igual
equals.addEventListener('click', () => {
  if (firstNumber !== '' && secondNumber !== '') {
    const result = operate(operator, firstNumber, secondNumber);
    updateDisplay(result);
    firstNumber = result;
    secondNumber = '';
    operator = '';
  }
});

// Event listener para el botón de clear
clear.addEventListener('click', () => {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  updateDisplay('0');
});
