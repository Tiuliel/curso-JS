// exercicio

let salario = 3000;
let novoSalario;

if (salario < 1500){
    novoSalario = salario * 1.15;
} else if (salario <= 3000) {
    novoSalario =   salario * 1.10;
} else {novoSalario = salario * 1.05};

// .toFixed = fixar em 2 casas decimais
//console.log(`Salario antigo era de R$ ${salario} e o salario atual é de R$ ${novoSalario.toFixed(2)} `);

// Tratar/formatar como moeda em reais
console.log(salario);
console.log(novoSalario.toLocaleString("pt-br", {
    style:"currency",
    currency: "BRL"
}) );
