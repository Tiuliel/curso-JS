"use strict"

const lista = document.querySelector("#lista-de-musicas");
const reprodutor = document.querySelector("audio");
const figureCapa = document.querySelector("figure");
const imagemCapa = figureCapa.querySelector("img");
const tituloMusica = figureCapa.querySelector("figcaption");



/* Monitorando o evento de mudanças de opções na lista <select> */
lista.addEventListener("change", function(){
if (figureCapa.hasAttribute("hidden")) {
    figureCapa.removeAttribute("hidden");
}

    let musicaSelecionada = lista.options[lista.selectedIndex];
console.log(musicaSelecionada);

reprodutor.src = musicaSelecionada.value;

tituloMusica.textContent = musicaSelecionada.textContent;

imagemCapa.src = musicaSelecionada.getAttribute("data-imagem");

if(musicaSelecionada.value !== "")
{reprodutor.play();}
})