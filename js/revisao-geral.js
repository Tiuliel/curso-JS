console.log("Revisão!");

// Variável
let clube = "SPFC";

// constante (valor fixo)

const estado = "SP";

//Saída de dados para testes
console.log(clube);
console.log(estado);

// concatenação
console.log("O "+clube+" é do estado de "+estado);

//Template string/literal (moderna)
console.log(`O ${clube} é do estado de ${estado}`);

//janela de diálogo
/* let nome = prompt("Qual seu nome?");
console.log("Bem-vindo(a) "+nome); */

// Arrays (listas de dados INDEXADOS)
let comidas = ["Paçoca", "Brigadeiro", "Pizza"];
console.log(`Adoro ${comidas[0]} e ${comidas[2]}!`);

// Objeto (listas de dados NÃO INDEXADOS)
// os dados são formados por propriedades com nome/valor
let aluno = {
    nome: "TiuLiel",
    sobrenome: "Silva",
    idade: 18
};

console.log(`${aluno.nome} tem ${aluno.idade} anos`);