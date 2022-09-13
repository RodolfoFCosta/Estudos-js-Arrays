const data = [
    { name: "Joao", age: 33, sallary: 2000, driverLicense: true },
    { name: "Gigoga", age: 23, sallary: 1500, driverLicense: true },
    { name: "Leopoldo", age: 55, sallary: 5000, driverLicense: false },
    { name: "Raphaella", age: 22, sallary: 7200, driverLicense: true },
    { name: "Gi", age: 15, sallary: 0, driverLicense: false },
];

// 1 - Reverse  Ex.. filtros ordenar do > para < mais novos para os mais antigos

const reverseData = data.reverse()

console.log(reverseData);

// 2 - find Ex.. Pesquisar, (encontrar) algo no Array
const highSallary = 5000

const higheSallary = data.find((user) => user.sallary > highSallary)
console.log(higheSallary)

// 3 - findIndex Ex.. vai encontrar um indice de um item que correspondem a alguma logica de funcao
const menorSalario = data.findIndex((user) => user.sallary > 0 && user.sallary < 2000)

console.log(menorSalario)