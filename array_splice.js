const nomes = ['maria', 'joao', 'eduardo', 'gabriel', 'jim'];

// nomes.splice (0, 0) indice, delete, add;  
const remo = nomes.splice(2, 3, 'motorhead');
console.log(nomes, remo);