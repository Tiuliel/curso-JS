let salario = 3000;
let novoSalario;

if (salario < 1500){
    novoSalario = salario * 1.15;
} else if (salario <= 3000) {
    novoSalario =   salario * 1.10;
} else {novoSalario = salario * 1.05};

console.log(`Salario antigo era de ${salario} e o salario atual é de ${novoSalario.toFixed(2)} `);