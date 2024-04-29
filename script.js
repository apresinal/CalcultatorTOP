// Definir variables para los números y operador de la calculadora
let firstNumber = ''; // Primer número de la operación
let operator = ''; // Operador matemático seleccionado
let secondNumber = ''; // Segundo número de la operación

// Seleccionar elementos del DOM
const display = document.querySelector('.display'); // Seleccionar el display de la calculadora
const numbers = document.querySelectorAll('.number'); // Seleccionar los botones de números
const operators = document.querySelectorAll('.operator'); // Seleccionar los botones de operadores
const equals = document.querySelector('.equals'); // Seleccionar el botón de igual
const clear = document.querySelector('.clear'); // Seleccionar el botón de limpiar

// Función para actualizar el contenido del display
function updateDisplay(value) {
  display.textContent = value; // Actualizar el texto del display con el valor proporcionado
}

// Función para realizar operaciones matemáticas
function operate(operator, num1, num2) {
  num1 = parseFloat(num1); // Convertir el primer número a flotante
  num2 = parseFloat(num2); // Convertir el segundo número a flotante
  switch (operator) {
    case '+':
      return num1 + num2; // Sumar los números
    case '-':
      return num1 - num2; // Restar los números
    case '*':
      return num1 * num2; // Multiplicar los números
    case '/':
      if (num2 === 0) {
        return 'Error'; // Evitar la división por cero
      }
      return num1 / num2; // Dividir los números
    default:
      return 'Error'; // Retornar error en caso de operador no reconocido
  }
}

// Event listener para los botones de números
numbers.forEach(number => {
  number.addEventListener('click', () => {
    if (operator === '') {
      firstNumber += number.value; // Agregar el número al primer número de la operación
      updateDisplay(firstNumber); // Actualizar el display con el primer número
    } else {
      secondNumber += number.value; // Agregar el número al segundo número de la operación
      updateDisplay(firstNumber + operator + secondNumber); // Actualizar el display con la operación completa
    }
  });
});

// Event listener para los botones de operadores
operators.forEach(operatorBtn => {
  operatorBtn.addEventListener('click', () => {
    operator = operatorBtn.value; // Almacenar el operador seleccionado
    if (firstNumber !== '') {
      updateDisplay(firstNumber + operator); // Actualizar el display con el primer número y el operador
    }
  });
});

// Event listener para el botón de igual
equals.addEventListener('click', () => {
  if (firstNumber !== '' && secondNumber !== '') {
    const result = operate(operator, firstNumber, secondNumber); // Calcular el resultado de la operación
    updateDisplay(result); // Mostrar el resultado en el display
    firstNumber = result; // Almacenar el resultado como primer número para operaciones posteriores
    secondNumber = ''; // Reiniciar el segundo número
    operator = ''; // Reiniciar el operador
  }
});

// Event listener para el botón de limpiar
clear.addEventListener('click', () => {
  firstNumber = ''; // Reiniciar el primer número
  operator = ''; // Reiniciar el operador
  secondNumber = ''; // Reiniciar el segundo número
  updateDisplay('0'); // Restablecer el display a cero
});
