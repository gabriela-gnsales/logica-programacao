console.log("=== OBJETOS ===");

// const carro1 = ["Gol", 2010, "vermelho", "usado"];
// const carro2 = ["Fox", 2015, "preto", "zero"];
// const carro3 = ["Uno", 2000, "verde", "usado"];

// const carros = [carro1, carro2, carro3];

// for(let index = 0; index < carros.length; index++) {
//     // console.log(carros);
//     // console.log(carros[index]);
//     console.log(carros[index][0]);
//     document.write(
//         carros[index][0], // modelo
//         " - ",
//         carros[index][2], // cor
//         "<br>"
//     )
// }

// SOLUÇÃO
// const carro1 = ["Gol", 2010, "vermelho", "usado"];

// objeto literal

// const carro1 = {
//     modelo: "Gol",
//     ano: 2010,
//     cor: "vermelho",
//     situacao: "usado"
// };

// const carro2 = {
//     modelo: "Fox",
//     ano: 2015,
//     cor: "preto",
//     situacao: "zero"
// };

// const carros = [carro1, carro2];

// console.log(carro1);
// console.log(carro2);

// carros.forEach(function(carro) {
//     console.log(carro.modelo, carro.situacao);
// });

// OUTRA MANEIRA

const carros = [
    {
        modelo: "Fox",
        ano: 2015,
        cor: "preto",
        situacao: "zero"
    },
    {
        modelo: "Gol",
        ano: 2010,
        cor: "vermelho",
        situacao: "usado"
    },
    {
        modelo: "Uno",
        ano: 2000,
        cor: "verde",
        situacao: "usado"
    }
];

// carros.filter(function(name) {
//     // console.log("exec?", arguments[2]);
//     // console.log("filter?", numero);
//     return situacao == "usado";
// });

carros.forEach(function(carro) {
    console.log(carro.modelo, carro.situacao);
});

console.table(carros);
console.log("===");

let usados = carros.filter(function(carro) {
    return carro.situacao == "usado";
});

console.table(usados);