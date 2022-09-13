const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const n1 = numeros
    .filter(valor => valor % 2 === 0)
    .map(valor => valor * 2)
    .reduce((ac, valor) => ac + valor);
    
console.log(n1);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 35},
    {nome: 'Eduardo', idade: 22},
    {nome: 'Rosana', idade: 52},
    {nome: 'Will', idade: 82},
    {nome: 'Cafe', idade: 62},
];