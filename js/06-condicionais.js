/* Estruturas de Controle Condicional

comandos mais comuns:
-if (SE)
-else (SENÃO)
-else if (SENÃO SE)

operadores relacionais (usandos para comparação):
> maioir que
< menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente
*/

// exemplo 1: condicional SIMPLES (if)
let numero = 5;

if ( numero >= 5) {
    

console.log("Mensagem qlqr....");
console.log(`Foi exibido pq ${numero} é maior ou igual  a 5 (condição especificada)`);
}

// exemplo 2: condicional COMPOSTA (if e else)

let aluno = "Sarah";
let nota1 = 2;
let nota2= 2.5;
let media = (nota1 + nota2) / 2;
let faltas = 2;

const mediaMinima = 7;
const limiteDeFaltas = 10;

console.log(media);

console.log(`Aluno(a): ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média: ${media}`);

let resultado; // indefinidade(undefined)

/* if (media >= mediaMinima) {
    resultado = "Aprovado(a)";
} else {
    resultado = "Reprovado(a)";
} */

// operador LÓGICO && (E/AND)
if (media >= mediaMinima && faltas <= limiteDeFaltas) {
    resultado = "Aprovado(a)";
} else {
    resultado = "Reprovado(a)";
}
console.log(resultado);

//exemplo 3: condicional ENCADEADA (if, else if, else)

/* Dsempenhos
- Média menor que 3? PÉSSIMO
- Média menor que 5? RUIM
- Média menor que 7? REGULAR
- Média menor que 9? BOM
- Nenhuma das condições anteriores? ÓTIMO
*/

if (media < 3) {
    console.log("PÉSSIMO");
} else if (media < 5) {
    console.log("RUIM");
} else if (media < 7) {
    console.log("REGULAR");
} else if (media < 9) {
    console.log("BOM");
} else {
    console.log("ÓTIMO");
}

/*  IGUAIS
= IGUAL ÚNICO  -> serve para ATRIBUIR/COLOCAR VALOR

== IGUAL DUPLO  -> serve para COMPARAR VALORERS

=== IGUAL TRIPLO  -> serve para COMPARAR VALORES E TIPOS DE DADOS
 */

let a = 10;
let b = 10;
console.log( a == b);