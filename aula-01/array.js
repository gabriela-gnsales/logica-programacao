console.log("=== ARRAY ===");

// Antipadrão
const carro1 = "Gol";
const carro2 = "Corsa";
const carro3 = "Fox";

// Array literal
const carros = ["Gol", "Corsa", "Fox"];
// contexto.comando();
carros.push("Corolla"); // add item no final
carros.unshift("Marea"); // add item no começo
carros.splice(1, 1); // splice (x,y) = remove y itens na posição x 
carros.splice(0, 1, "BMW"); // substitui item na posição x
carros.splice(2, 0, "Fusca", "Golf");
carros.pop(); // remove item do final
carros.shift(); // remove item do início
carros.sort(); // ordena itens
carros.reverse(); // inverte itens

document.write("- ", carros[0], "<br>");
document.write("- ", carros[1], "<br>");
document.write("- ", carros[2], "<br>");
document.write("- ", carros[3], "<br>");

document.write("<hr>");

for (let i = 0; i < carros.length; i++) {
    document.write("- ", carros[i], "<br>");
}

document.write("<hr>");

// Implementação 1
// Função nomeada
function pegaCarro(modelo, pos) {
    console.log("pegou", modelo, pos);
    document.write("1 => ", modelo, "<br>");
}

carros.forEach(pegaCarro); // executa a função (que está entre parênteses) para cada elemento do array / lista - lopp de todas as posições (0 a lenght)
// Saída:
// pegou Golf 0
// pegou Fusca 1
// pegou Fox 2
// pegou Corsa 3

document.write("<hr>");

// Implementação 2
// Função anônima
carros.forEach(function(carro, i) { // value, index
    console.log("funfa", carro, i);
    document.write("2 => ", carro, "<br>")
});

console.log(carros);
console.log(carros.length);

// AULA DIA 25/02/2022

document.write("<hr>");

let numeros = [32, 21, 25, 17, 1];

console.log("====");

// numeros.forEach(console.log);

// numeros.forEach(function(numero) {
//     console.log(arguments[0]); // arguments mostra todos os argumentos que a função está recebendo, só existe para as funções
//     // document.write(arguments[0], "<br>");
//     document.write(numero, "<br>");
// })

numeros.forEach(function(value, index, numero) { // default = value, index, name
    // document.write(value, "<br>");
    // document.write(index, "<br>");
    document.write(numero, "<br>");
})

// não faz diferença ter um 'return' no 'forEach', pq a função dele é só passar por cada linha da função

// FILTER / MAP / REDUCE

// FILTER funciona do mesmo jeito que o FOREACH
// se colocar um 'return' no 'forEach' -> aparece 'undefined'
// já o filter percorre todos os valores igual o forEach, mas ele aplica uma transformação nos dados (um filtro), mas não altera o valor original
// FILTER só é usado para VALORES LÓGICOS
// o filter é como se fosse o for de um array com um if (dando return talvez)

console.log(
numeros.filter(function(numero) {
    // console.log("exec?", arguments[2]);
    console.log("filter?", numero);
    return numero < 25;
}));

console.log(numeros);

// MAP é utilizado para remapear informações, aplicar transformação de dados

console.log(
    numeros = numeros.map(function(numero) {
        console.log("map?", numero);
        return numero * 5;
    })
);

console.log(numeros);



// function() { ... }(32, 0, numeros);
// function() { ... }(21, 1, numeros);
// function() { ... }(25, 2, numeros); ...

