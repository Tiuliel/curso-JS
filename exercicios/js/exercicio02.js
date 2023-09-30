let pedido = {
    codigo:"0214",
    data:  "23/09/2023",
    produtos:  ["PC", "Celular", "Tablet"],
    preco: 7500,
    prazo:  7
};

console.log(`codigo do seu pedido ${pedido.codigo} seus produtos são ${pedido.produtos} e o valor é de ${ new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.preco)} `);

