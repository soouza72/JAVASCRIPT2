//script.js
//-----------------------
// Funções
// Função declarativa
function saudacao(){
    console.log("Olá")
}

saudacao() //Executando/chamando a função

// Função com parâmetro e retorno
function dobrar(numero) {
    return numero * 2
}
let resultado = dobrar(5)
console.log(resultado)


// Função Anônima
let mostrarMensagem = function() {
    console.log("Função anônima")
}
mostrarMensagem()

// Arrow Function
const somar = (a, b) => {
    return a + b
}
console.log(3, 7)

//------------------------
// Manipulação do DOM
let paragrafo = document.getElementById("mensagem")
paragrafo.innerText = "Texto Alterado"

let titulo = document.getElementById("titulo")
titulo.style.color = "blue"
titulo.style.fontSize = "30px"

let novoItem = document.createElement("li")
novoItem.innerText = "Novo item"
document.body.appendChild(novoItem)

//Apagando um elemento no HTML
let apagar = document.getElementById("apagar")
apagar.remove()

// Eventos do DOM
let botao = document.getElementById("botao")

botao.addEventListener("click", function() {
    alert("Você clicou no botão")
})

function mostrarNome() {
    let nome = document.getElementById("nome").value
    document.getElementById("resposta").innerText = "Você digitou: " + nome
}
function mudarCor() {
    document.getElementById("caixa").style.backgroundColor = "blue";
    document.getElementById("caixa").innerText = "Passou o mouse";
}

function corOriginal() {
    document.getElementById("caixa").style.backgroundColor = "red";
    document.getElementById("caixa").innerText = "Passou o mouse";
}