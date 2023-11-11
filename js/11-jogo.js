'use strict';

const pagina = document.querySelector("body");
const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");
const image = document.querySelector("#imagem");

let faustao = "faustao.gif";
let miseravi = "miseravi.gif"

/* Gerar valores aleatórios
Usamos math.random() * 11 para gerar valores entre 0 e 10, e passamos o valor para parseInt para descartar a parte "quebrada" do número, mantendo apenas o valor inteiro 
*/
let numeroAleatorio = parseInt(Math.random() * 11);
console.log(numeroAleatorio);

/* Detectando o acionamento do formulário para capturar e analisar o palpite */
formulario.addEventListener("submit", function(event){
    //Anulando o comportamento padrão do evento
    event.preventDefault();

    // capturando o palpite (valor do campo)
    let palpite = campoPalpite.value;
    console.log(palpite);

    // Comparando o palpite com o numero aleatorio do computador

    if (palpite == numeroAleatorio) {
        resultado.textContent = "acerto mizeravi👍";
        resultado.style.color = "blue";
        pagina.style.background = "lightblue";
        //image.setAttribute("src", "miseravi.gif");
        image.src = miseravi;
        resultado.style.animation = "tada 3s"


        //Redirecionamento usando "location"
        //location = "http://www.sp.senac.br"
    } else {
        resultado.textContent = "errrouuuu👎";
        resultado.style.color = "red";
        pagina.style.background = "salmon";
        //image.setAttribute("src", "faustao.gif");
        image.src = faustao;
        resultado.style.animation = "flash 2s"
        //location = "http://www.kkkk.com.br"
    }

});