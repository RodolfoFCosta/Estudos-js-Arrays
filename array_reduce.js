const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 2, 27];

// const n1 = numeros.reduce( function(acumulador, valor, indice, array){
//     acumulador += valor;
//     return acumulador;
// },0);
// console.log(n1);






const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 35},
    {nome: 'Eduardo', idade: 22},
    {nome: 'Rosana', idade: 52},
    {nome: 'Will', idade: 82},
    {nome: 'Cafe', idade: 62},
];

const nome = pessoas.reduce(function(acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(nome);