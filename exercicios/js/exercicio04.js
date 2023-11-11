const pagina = document.querySelector("body")
const significado = document.querySelector("#significado")
const cor1 = document.querySelector("#cor1")
const cor2 = document.querySelector("#cor2")
const cor3 = document.querySelector("#cor3")

cor1.addEventListener("click", function(){
    significado.innerHTML="A cor roxa está muitas vezes associado à espiritualidade, ao mistério e ao misticismo";
    significado.style.color="red"
    pagina.style.backgroundColor= "purple";
    pagina.style.transition="1s";
})
cor2.addEventListener("click", function(){
    significado.innerHTML="Rosa é a cor do romantismo e da delicadeza.";
    significado.style.color= "purple"
    pagina.style.backgroundColor="#ff41d0";
    pagina.style.transition="1s";
})
cor3.addEventListener("click", function(){
    significado.innerHTML="Vermelho simboliza a paixão e o amor.";
    significado.style.color="#ff41d0"
    pagina.style.backgroundColor="red";
    pagina.style.transition="1s";
})
