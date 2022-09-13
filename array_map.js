const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 2, 27];

// const n2 = numeros.map(valor => valor *2);
// console.log(n2);


const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 35},
    {nome: 'Eduardo', idade: 22},
    {nome: 'Rosana', idade: 52},
    {nome: 'Will', idade: 82},
    {nome: 'Cafe', idade: 62},
];

// const nome = pessoas.map(obj => obj.nome );
// const nome = pessoas.map(obj => ({ idade: obj.idade }));
const nome = pessoas.map(function(obj, indice){
    const NovoObj = {... obj};
    NovoObj.id = indice;
    return NovoObj;
})

console.log(nome);

