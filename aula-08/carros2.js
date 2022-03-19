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

const carros = [];

function adicionar() {
    //entrada
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");

    console.log(modelo.value, ano.value, cor.value, situacao.value);

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
carros.push(carro); // adiciona no array

// saída
console.table(carros);

const lista = document.getElementById("lista");

// carros.forEach(function() {
    // console.log("executou?", arguments);
    // console.log("executou?", carro.modelo);

// let array = [];

// lista.innerHTML = ``;

// carros.forEach(function(carro) {
    // debugger
    // array.push(`<tr>
    //     <td>${carro.modelo}</td>
    //     <td>${carro.ano}</td>
    //     <td>${carro.cor}</td>
    //     <td>${carro.situacao}</td>
    // </tr>`);

// EXIBIR A TABELA
lista.innerHTML = 
    carros
        .filter(function(carro) {
            return carro.ano === '2015'
        })
        .map(function(carro) {
            return `<tr>
                <td>${carro.modelo}</td>
                <td>${carro.ano}</td>
                <td>${carro.cor}</td>
                <td>${carro.situacao}</td>
            </tr>`;
    })
    .join("");

// LIMPAR OS CAMPOS
modelo.valeu = '';
ano.value = '';
cor.value = '#000000';
// situacao.value = '';

// DAR FOCO NO PRIMEIRO CAMPO
modelo.focus();
}

// function ordenar() {
//     console.log("click");
//     lista.innerHTML = carros.sort();
// }


// o MAP percorre e traz uma nova informação, faz uma 1ª transformação
// o JOIN faz uma 2ª transformação

// console.log(array);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
//     lista.innerHTML = element;    
// }

// lista.innerHTML = array.join("");

// o innerHTML degrada a performance do programa -> NUNCA UTILIZAR DENTRO DE UM LOOP







