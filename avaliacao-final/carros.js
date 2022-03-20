/*
AVALIAÇÃO
1 - Fazer uma cópia do exercício da loja de carros
2 - Adicionar uma coluna com um ID (ao lado do modelo)
3 - Adicionar no formulário um campo para receber o preço
4 - Exibir uma coluna com o preço
5 - Exibir o total de todos os veículos cadastrados (requisito -> USAR REDUCE)
*/

console.log("=== CARROS ===");

const carros = [];

function adicionar() {

    const id = carros.length + 1;
    const modelo = document.getElementById("modelo");
    const ano = document.getElementById("ano");
    const cor = document.getElementById("cor");
    const situacao = document.getElementById("situacao");    
    const preco = document.getElementById("preco");
    const precoTotal = document.getElementById("precoTotal");

    console.log(id, modelo.value, ano.value, cor.value, situacao.value, preco.value, precoTotal.value);

    const carro = {
        id: id, 
        modelo: modelo.value,
        ano: ano.value,
        cor: cor.value,
        situacao: situacao.value,
        preco: parseFloat(preco.value),
    };
    
    carros.push(carro);
    console.table(carros);  

    let total = carros.reduce((precoTotal , carro) => precoTotal  + carro.preco, 0);

    precoTotal.innerHTML = `R$ ${total.toFixed(2)}`
   
    const lista = document.getElementById("lista");

    lista.innerHTML = carros.map(function(carro) {
        return `<tr>
            <td>${carro.id}</td>
            <td>${carro.modelo}</td>
            <td>${carro.ano}</td>
            <td>${carro.cor}</td>
            <td>${carro.situacao}</td>
            <td>R$ ${carro.preco.toFixed(2)}</td>
        </tr>`;
    }).join("");

    modelo.value = '';
    ano.value = '';
    cor.value = '#000000';
    situacao.value = '';
    preco.value = '';

    modelo.focus();
};





