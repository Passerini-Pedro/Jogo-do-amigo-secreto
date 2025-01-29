//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Supondo que você já tenha um campo de entrada e um botão no HTML

let lista = [];
let quantidadeNome = 0;
let quantidadeLista;
let nome;
let nomeEscolhido;

function exibirTextoNaTela(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}

// Função para capturar o valor e exibir a mensagem
function exibirValor() {
    // Captura o valor do campo de entrada
    let valorString = document.getElementById('amigo').value;
    exibirTextoNaTela('ul', lista); 

    // Verifica se o campo está vazio
    if (valorString === "") {
        console.log("O campo está vazio!");
        alert("Por favor, insira um nome!") // Exibe no console
    } else {       
        lista.push(valorString);
        console.log(lista);
        document.getElementById('amigo').value = '';     
        exibirTextoNaTela('ul', lista);   
        quantidadeNome ++;
        return valorString;
    }
    
}

function sortearAmigo(){
    
    let nomeEscolhido = lista[Math.floor(Math.random() * lista.length)]
    exibirTextoNaTela('ul', '');
    lista = [];
    document.getElementById("resultado").innerHTML = nomeEscolhido;
    console.log(nomeEscolhido);
    
}

// Adiciona um evento de clique ao botão
document.getElementById('addAmigo').onclick = exibirValor;
document.getElementById('sortearAmigo').onclick = sortearAmigo;



