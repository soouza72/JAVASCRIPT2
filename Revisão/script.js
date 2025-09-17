// SCRIPT.JS 

// Variáveis
let nome = "Manuela"
let idade = 17 
let valor = prompt("Digite um valor: ")

// Concatenação 
console.log("Meu nome é", nome," e tenho", idade," anos")
console.log(valor)

// Operadores Aritméticos 
let num1 = 3 
let num2 = 2 

let soma = num1 + num2 
let subtracao = num1 - num2 
let mutiplicacao = num1 * num2 
let divisao = num1 / num2 
let resto = num1 % num2

console.log(soma)
console.log(subtracao)
console.log(mutiplicacao)
console.log(divisao)
console.log(resto)

let valor1 = 10 
let valor2 = 5

console.log(valor1 > valor2)
console.log(valor1 >= valor2)
console.log(valor1 < valor2)
console.log(valor1 <= valor2)
console.log(valor1 == valor2)
console.log(valor1 != valor2)

// Estrutura Condicional 
let idade1 = Number(prompt("Qual sua idade?"))
if(idade1 >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

let numero = Number(prompt("Digite um número: "))


// Operadores Lógicos 
let alunoSesi = true 
let ensinoMedio = true 
if (alunoSesi && ensinoMedio) {
    console.log("Pode fazer o técnico") 
} else {
    console.log("Não pode fazer o técnico")
}

let numero1 = Number(prompt("Informe um número"))
if(numero1 >= 10 && numero1 <= 20) {
    console.log("Está entre 10 e 20")
}    // tudo tem que ser verdade

let numero2 = Number(prompt("Informe um número"))
if (numero2 == 10 || numero2) {}