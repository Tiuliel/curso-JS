"use strict"

const lista = document.querySelector("#lista-de-musicas");
const reprodutor = document.querySelector("audio");

/* Monitorando o evento de mudanças de opções na lista <select> */
lista.addEventListener("change", function(){
    let musicaSelecionada = lista.options[lista.selectedIndex];
console.log(musicaSelecionada);

reprodutor.src = musicaSelecionada.value;

reprodutor.play();
})