http://127.0.0.1:5500/desafios/custo-entregas.html {
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    console.log("altura:", altura, "| peso:", peso);

    let imc = peso / Math.pow(altura, 2);
    console.log("imc:", imc);
    document.getElementById("imc").value = imc.toFixed(2);

    let resp;

    if (imc >= 40) {
        resp = "Obesidade grau 3 (mórbida)";
    } else if (imc >= 35 && imc < 40) {
        resp = "Obesidade grau 2 (severa)";
    } else if (imc >= 30 && imc < 35) {
        resp = "Obesidade grau 1";
    } else if (imc >= 25 && imc < 30) {
        resp = "Sobrepeso";
    } else if (imc < 18.5) {
        resp = "Magreza";
    } else {
        resp = "Saudável";
    }

    console.log("Classificação:", resp);
    document.getElementById("classificacao").value = resp;    
}

// if (idade >= 60) {
//     resp = "Você é idoso!";
// } else if (idade >= 18 && idade < 60) {
//     resp = "Você é adulto!"; 
// } else if (idade >= 12 && idade < 18) {
//     resp = "Você é adolescente!";
// } else if (idade < 0) {
//     resp = "Idade inválida! Digite um nº acima de 0!"
// } else {
//     resp = "Você é adolescente!"
// }

// document.getElementById("resposta").value = resp;