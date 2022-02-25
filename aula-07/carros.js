
// DICA 1: apenas no input
// document.getElementById("modelo").value = "Preencher";

// DICA 2: tags em geral
// document.getElementById("qtde").textContent = 0;

// Critérios de aceite

// PREMISSA: USE ARRAY

// 1 - Ao cadastrar um carro, incrementar a quantidade
// 2 - Limpar o campo para o próximo preenchimento
// 3 - Ao alcançar 10 carros, exibi-los na tela

console.log("=== LOJA DE CARROS ===");

const carros = [];

function cadastro_carro() {
    let car =  document.getElementById("modelo").value;

    console.log("modelo carro:", car, typeof(car));

    carros.push(document.getElementById("modelo").value);

    document.getElementById("modelo").value = "";

    console.log(carros);

    if(carros.length == 10) {
        carros.forEach(function(valor){
            document.write("<p>- ", valor, "<p>");
        }
    }
}

// innerHTML innerText
