// SCRIPT.JS
// Entrada de Dados
let nome = prompt("Qual seu nome? ")
console.log("Meu nome é", nome)
// Entrada de Dados - value
const input = document.getElementById("input")
const botao = document.getElementById("botao")
const mensagem = document.getElementById("mensagem")

botao.addEventListener("click", () => {
    mensagem.innerText = "Olá " + input.value
})
//-------------------------------
// Conversor de tipos
const valor = document.getElementById("valor")
const converter = document.getElementById("converter")
const resultado = document.getElementById("resultado")

converter.addEventListener("click", () => {
    let texto = valor.value
    let numero = Number(texto)
    let dobro = numero * 2
    resultado.innerText = "O dobro é " + dobro
})
//-----------------------------
// Funções de Texto
let frase = "Eu gosto de a Metamorfose"
console.log(frase)
console.log(frase.length) // conta letras e espaços
console.log(frase.toUpperCase()) // tudo maiúsculo
console.log(frase.toLowerCase()) // tudo minúsculo
console.log(frase.includes("gosto")) // se tem na frase
console.log(frase.charAt(5)) // O que tem nessa posição
console.log(frase.replace("gosto de", "amo")) // troca
// Funções Matemáticas
let arredondado1 = Math.round(4.6)
let arredondado2 = Math.round(4.2)

let arredondado3 = Math.floor(5.8) // arredonda para baixo
let arredondado4 = Math.ceil(5.2)  // arredonda para cima

console.log("round 4.6", arredondado1)
console.log("round 4.2", arredondado2)
console.log("floor 5.8", arredondado3)
console.log("ceil 5.2", arredondado4)

let maior = Math.max(5, 10, 8, 6, 2, 30)
let menor = Math.min(5, 10, 8, 6, 2, 30)
console.log("Maior valor: ", maior)
console.log("Menor valor: ", menor)

let raiz = Math.sqrt(25)
let absoluto = Math.abs(-8)
console.log(raiz)
console.log(absoluto)

// Gerar número entre 1 e 10
let aleatorio = Math.floor(Math.random() * 10) + 1
console.log(aleatorio)
//-----------------------------
// DATAS
const data = document.getElementById("data")
const dataAtual = document.getElementById("dataAtual")

data.addEventListener("click", () => {
    const agora = new Date()
    const dataFormatada = agora.getDate() + "/" + (agora.getMonth() + 1) + "/" + agora.getFullYear()
    dataAtual.innerText = "Hoje é: " + dataFormatada
})