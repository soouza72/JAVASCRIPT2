//1
function multiplicarTresNumeros(a, b, c) {
  return a * b * c;
}

//2
function dividir(a, b) {
  if (b === 0) {
    return "Não é possível dividir por 0";
  }
  return a / b;
}

//3
function celsiusFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

function fahrenheitCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

//4
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

//5
function contarCaracteres(texto) {
  return texto.length;
}

//6
function calculadora(a, b, operador) {
  switch (operador) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Não é possível dividir por 0";
    default:
      return "Operador inválido";
  }
}

// Testes de exemplo:
console.log("Ex1:", multiplicarTresNumeros(2, 3, 4)); // 24
console.log("Ex2:", dividir(10, 2)); // 5
console.log("Ex2 (erro):", dividir(7, 0)); // "Não é possível dividir por 0"
console.log("Ex3:", celsiusFahrenheit(0)); // 32
console.log("Ex3:", fahrenheitCelsius(32)); // 0
console.log("Ex4:", calcularMedia(3, 4, 5)); // 4
console.log("Ex5:", contarCaracteres("hello")); // 5
console.log("Ex6:", calculadora(4, 2, "+")); // 6
console.log("Ex6:", calculadora(4, 2, "/")); // 2