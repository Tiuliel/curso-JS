const pagina = document.querySelector("body")
const significado = document.querySelector("#significado")
const cor1 = document.querySelector("#cor1")
const cor2 = document.querySelector("#cor2")
const cor3 = document.querySelector("#cor3")

cor1.addEventListener("click", function(){
    significado.innerHTML="<h3>A cor roxa está muitas vezes associado à espiritualidade, ao mistério e ao misticismo</h3>";
    significado.style.color="red"
    pagina.style.backgroundColor= "purple";
    pagina.style.transition="1s";
})
cor2.addEventListener("click", function(){
    significado.innerHTML="<h3>Rosa é a cor do romantismo e da delicadeza.</h3>";
    significado.style.color= "purple"
    pagina.style.backgroundColor="palevioletred";
    pagina.style.transition="1s";
})
cor3.addEventListener("click", function(){
    significado.innerHTML="<h3>Vermelho simboliza a paixão e o amor. </h3>";
    significado.style.color="palevioletred"
    pagina.style.backgroundColor="red";
    pagina.style.transition="1s";
})
