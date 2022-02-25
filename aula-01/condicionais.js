console.log("=== CONDICIONAIS ===");

// entrada

const aluno = prompt("Digite o nome do aluno:");
const nota = prompt("Digite a nota (0-10):");
console.log("Aluno:", aluno, "Nota:", nota);

// processamento

let resp = null;

/*
if (nota >= 6) {
    console.log("Aprovado!");
}

if (nota >= 6) console.log("Aprovado!");
if (nota >= 4 && nota < 6) console.log("Recuperação!");
if (nota < 4) console.log("Reprovado!");

if (nota >= 6) {
    // document.write("Aprovado");
    resp = "Aprovado";
} else if (nota >= 4 && nota < 6) {
    resp = "Recuperação!";  
} else {
    resp = "Reprovado!";
}

if (nota >= 6) {
    resp = "Aprovado";
} else {
    if (nota < 4) {
        resp = "Reprovado!";  
    } else {
        resp = "Recuperação!";
    }
}
*/

// Usando IF / ELSE (melhor forma de resolver)

if (nota >= 6) {
    resp = "Aprovado";
} else if (nota < 4) {
    resp = "Reprovado!"; 
} else {
    resp = "Recuperação!";
}

// Usando SWITCH / CASE (não usar nesse caso!!!)
/*
switch (nota) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
        resp = "Reprovado!";
        break;
    case "5":
        resp = "Recuperação!";
        break;
    case "6":
        resp = "Aprovado!";
        break;
    default:
        resp = "Nem um nem outro";
        break;
} */

// Exemplo SWITCH / CASE - prático
let dia = null;
const diaSemana = promp("Digite o dia da semana (1 a 7):")
switch(diaSemana) {
    case "1":
        dia = "DOM";
        break;
    case "2":
        dia = "SEG";
        break;
    case "3":
        dia = "TER";
        break;
    case "4":
        dia = "QUA";
        break;
    case "5":
        dia = "QUI";
        break;
    case "6":
        dia = "SEX";
        break;
    case "7":
        dia = "SÁB";
        break;
    default:
        resp = "Entrada inválida! Digite um nº de 1 a 7.";
        break;
}

// saída

console.log(resp);

// document.write(aluno, "<br>", resp);

// document.write(`Aluno: ${aluno} <br> Situação: ${resp}`);

document.write(`
Aluno: ${aluno} <br>
Nota: ${nota} <br>
Situação: ${resp} <br>
Dia da semana: ${dia}`);



