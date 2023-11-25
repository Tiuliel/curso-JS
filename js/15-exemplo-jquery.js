const titulo = $("h1");
const subtitulos = $("h2");

console.log(titulo);
console.log(subtitulos);

//titulo.text("Bem-vindo jQuery!")
titulo.html("<i> Bem-vindo jQuery!</i>");

console.log( $(subtitulos).eq(0).text()); 
console.log( $(subtitulos).eq(1).text()); 

const sub1 = $(subtitulos).eq(0);
const sub2 = $(subtitulos).eq(1);

sub1.css("color", "red");
sub2.css("text-transform", "uppercase")

titulo.css({
    "color" : "purple",
    "text-align": "center",
    "font-family": "Geneva"
});

const classicRock = $("h3");
classicRock.addClass("destaque")


//exemplo 2

const pagina = $("body");
const formulario = $("form");
const nome = $("#nome");
const tema = $("#tema");


formulario.on("submit", function(event){
    event.preventDefault();
    


let usuario = nome.val();
let cor = tema.val();
let textoDaCor = tema.find("option:selected").text();

console.log(usuario, cor, textoDaCor);

pagina.css("background-color", cor)

titulo
.hide()
.html(`Olá <b>${usuario}</b>, você escolheu ${textoDaCor}`)
.fadeIn(600);

});