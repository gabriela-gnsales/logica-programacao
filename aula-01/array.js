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

