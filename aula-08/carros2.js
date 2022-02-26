console.log("=== CARROS ===");

// PREMISSAS
// 1 - Armazenar dados em um objeto
// 2 - Colocar o objeto dentro de um array
// 3 - Exibir tudo que for cadastrado dentro do console.table

// let carro = {
//     modelo: " ",
//     ano: " ",
//     cor: " ",
//     situacao: " "
// };

// MEU PROGRAMA - não completo

// let carro = { 
//     modelo:" ",
//     ano: " ",
//     cor: " ",
//     situacao: " "
// }

// const carros = [carro];

// function cadastro_carro() {

//    carro = {
//         modelo: document.getElementById("modelo").value,
//         ano: parseInt(document.getElementById("ano").value),
//         cor: document.getElementById("cor").value,
//         situacao: document.getElementById("situacao").value
//     };

//     carros.push(carro);
//     console.table(carros);
// }

// CÓDIGO PROFESSOR

function adicionar() {
    //entrada
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");

    // console.log(situacao.options[situacao.selectedIndex].value);

    // console.table(modelo.value, ano.value, cor.value, situacao.value);

    const carro = {
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value
    };

// processamento
console.log(carro);
carros.push(carro);  

// saída
console.table(carros);
}





