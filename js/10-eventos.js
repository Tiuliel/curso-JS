"use strict";
// Selecionando elementos
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body"); // ou document.body

// Detectando um evento de clique
exemplo01.addEventListener("click", function(){
    mensagem01.innerHTML = "beleza!";
    mensagem01.style.fontSize = "32px"
    pagina.style.fontFamily = "verdana"

    // removendo um elemento
    //exemplo01.remove();

    //escondendo um elemento
    exemplo01.style.display = "none";
});

const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function(){
    exemplo01.style.display = "block";
    mensagem01.textContent = "Oi sumido";
});

//exemplo 02

const mensagem02 = document.querySelector("#mensagem02");
const janela = document.querySelector("#janela-modal");
const botaoFechar = document.querySelector("#janela-modal button");

//document.addEventListener("mouseout", function (event){
    /*  É necessário verificar se a posição do mouse (no eixo vertical) está fora/acima da área do documento. Se estiver, aí mostramos/fazemos alguma ação */
   // if(event.clientY < 0){
//alert( " ta pensando msm em sair ?");
/* mensagem02.innerHTML = "<i>Vai vazar msm ?</i>🤬 ";
mensagem02.style.background = "pink";
mensagem02.style.color = "white";
mensagem02.style.fontSize = "50px" */
//janela.showModal();
//    }
//});

document.addEventListener("mouseout", verificaSaida);
function verificaSaida(event){
    if (event.clientY < 0) {
        janela.showModal();
        // desativando o monitor de evento/função
        document.removeEventListener("mouseout", verificaSaida);
    }

};
botaoFechar.addEventListener("click", function(){
janela.close();
})

//exemplo 03
const botaoNoturno = document.querySelector("#noturno");

botaoNoturno.addEventListener("click", function(){
    pagina.classList.toggle("modo-noturno");

    /* Se o modo noturno estiver "ativado", ou seja,
    se a c classe "modo-noturno" ESTÁ aplicada na página */

    if  (pagina.classList.contains("modo-noturno") ) {
        //Então, mudamos o texto do botão para Desativar
        botaoNoturno.textContent = "Desativar"
    } else {
// Senão, mantemos o texto como ativar

botaoNoturno.textContent = "Ativar"
    }
});