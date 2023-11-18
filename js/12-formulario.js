'use strict'

// Selecionando o formulario e seus elementos
const formulario = document.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");

// Selecionando a tabela e seus elementos
const tabela = document.querySelector("table");
const corpoTabela = tabela.querySelector("tbody");

formulario.addEventListener("submit", function(event){
event.preventDefault();

/* Verificando se a tabela esta ociulta, ou seja, se ela ytem o atributo hidden */
if (tabela.hasAttribute("hidden")) {
    
/* se estiver, então removemos o atributo e com isso a tabela volta a aparecer */
    tabela.removeAttribute("hidden");
} 

//capturando os dados digitados
let nome = campoNome.value;
let nota1 = parseFloat(campoNota1.value);
let nota2 = parseFloat(campoNota2 .value);

//calculo da média das notas
let media = (nota1 + nota2) / 2;

let situacao;
let classe;

if (media >= 7) {
    situacao = "Aprovado(a)"
    classe = "aprovado"
    
    

} else {
    situacao = "Reprovado(a)"
    classe = "reprovado";
}

/* rotinas para criar uma nova linha e colunas para exibição dos dados no corpo da tabela */

// 1) criar elemento
let linha = document.createElement("tr");

// 2) montar o conteúdo elemento
linha.innerHTML = `<td>${nome}</td>
                    <td>${media}</td>
                    <td>${situacao}</td>`;

// 3) adicionar na áreada página desejada
corpoTabela.appendChild(linha);
linha.classList.add(classe);
//resetar formulario
formulario.reset();

// devolver o foco/cursor para o nome
campoNome.focus();

console.log(nome, nota1,nota2, media, situacao, classe);
});