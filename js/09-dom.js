"use strict";

/* Funções/Métodos de seleção de elementos no DOM

- document.getElementById()
Seleciona UM elemento através do ID

- querySelector()
Seleciona UM elemento através de SELETORES (mesma lógica do CSS)

- querySelectorAll()
Seleciona VÁRIOS elementos através de SELETORES (mesma lógica do CSS)
*/

// Exemplo de seleção do DOM

//Exemplo 1: getElementById
const legenda = document.getElementById("legenda");
console.log(legenda);

// Exemplo 2: querySelector()
const titulo = document.querySelector("h1");
const sobreFront = document.querySelector("#sobre");

console.log(titulo, sobreFront);



const backEnd = document.querySelector(".back");
console.log(backEnd);

const editores = document.querySelector("div h2");
console.log(editores);

// Exemplo 3: querySekectorAll()
// obs: o retorno dessa função é como um ARRAY
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

const varios = document.querySelectorAll("p, a");

console.log(varios);

/*  Modificando elementos no DOM
(Conteúdo, mudança de tag, cores, criação de elementos) */

// Alterando o conteúdo (APENAS texto)
legenda.textContent = "DOM - Hierarquia Geral";

// alterando com suporte á HTML
sobreFront.innerHTML = "<i>Front-End</i>";

// CSS INLINE via JavaScript

backEnd.style.color = "red";
backEnd.style.textAlign = "center";

// CSS usando classes via JavaScript
titulo.classList.add("destaque")

let listaDeEditores = [
    "VSCode",
    "notepad++",
    "Sublime Text",
    "Atom",
    "Dreamweaver",
    "PyCharm",
    "Xampp"
];

const lista = document.querySelector(".lista");
console.log(lista);

// Percorrer o ARRAY usando o LOOP FOR/OF

for (let programa of listaDeEditores) {

    // 1) Criar um novo elemento <li>
    let item = document.createElement("li");

    // 2) Adicionar conteúdo ao novo elemento
    item.innerHTML = programa;

    // 3)adicionar à lista
    lista.appendChild(item);
}

/* Adicionando atributo à diversos elementos */
const linksReferencias = document.querySelectorAll(".referencias li a");
console.log(linksReferencias);

for (let link of linksReferencias ){
    // 'setando/colocando' o atributo "target" com o valor "_blank"
    link.setAttribute("target", "_blak");

}