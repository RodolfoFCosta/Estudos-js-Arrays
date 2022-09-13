// filter, map, reduce
// Retorne os numeros maiores que 10

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 2, 27];

// const n1 = numeros.filter (valor => valor >10);
//  console.log(n1);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo o nome termine com a

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 35},
    {nome: 'Eduardo', idade: 22},
    {nome: 'Rosana', idade: 52},
    {nome: 'Will', idade: 82},
    {nome: 'Cafe', idade: 62},
];

const p2 = pessoas.filter(obj => obj.nome.length >= 5);

const p3 = pessoas.filter(obj => obj.idade < 50);

const p4 = pessoas.filter(obj => {
   return obj.nome.toLowerCase().endsWith('a');
}) 
console.log(p4);