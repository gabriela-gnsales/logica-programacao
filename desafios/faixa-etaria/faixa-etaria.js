console.log("=== FAIXA ETÁRIA ===");

function faixa_etaria() {
    let idade = parseInt(document.getElementById("idade").value);
    console.log("idade:", idade, "| type:", typeof idade);

    // if (idade >= 60) {
    //     resp = "Você é idoso!";
    // } else if (idade < 18) {
    //     resp = "Você é criança!"; 
    // } else {
    //     resp = "Você é adulto!";
    // }

    // Math.abs

    // if (idade >= 60) {
    //     resp = "Você é idoso!";
    // } else if (idade >= 18 && idade < 60) {
    //     resp = "Você é adulto!"; 
    // } else if (idade < 12) {
    //     resp = "Você é criança!";
    // } else {
    //     resp = "Você é adolescente!"
    // }

    if (idade >= 60) {
        resp = "Você é idoso!";
    } else if (idade >= 18 && idade < 60) {
        resp = "Você é adulto!"; 
    } else if (idade >= 12 && idade < 18) {
        resp = "Você é adolescente!";
    } else if (idade < 0) {
        resp = "Idade inválida! Digite um nº acima de 0!"
    } else {
        resp = "Você é adolescente!"
    }

    document.getElementById("resposta").value = resp;
}