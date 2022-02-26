console.log("=== REPETIÇÃO ===");

// document.write("<h3>Números: 1 à 10</h3>");

// let inicial = 1; // VALOR INICIAL
// const final = 10;

// while (inicial <= final) { // CONDIÇÃO LÓGICA
//     console.log("inicial:", inicial);    
//     document.write(inicial, " ");
//     // inicial = inicial + 1;
//     // inicial += 1;
//     inicial++; // INCREMENTO unitário (apenas de 1 em 1)
// }

// document.write("<hr>");

// document.write("<h3>Números: 50 à 1</h3>");

// let num_i = 50;
// const num_f = 1;

// while (num_i >= num_f) {
//     console.log("num_i:", num_i);
//     document.write(num_i, ", ");
//     // num_i = num_i - 1;
//     num_i -= 1; // num_i-- tbm funciona
// }

// document.write("<hr>");

// document.write("<h3>Números pares: 0 ao 100</h3>");

// var ni = 0;
// var nf = 100;

// while (ni <= nf) {
//     if (ni % 2 == 0) {
//         console.log("ni:", ni);
//         document.write(ni, " ");
//     }
//     ni += 1;
// }

// document.write("<hr>");

// document.write("<h3>Números ímpares: 99 à 1</h3>"); 
// // 99 - 97 - 95 ... 3 - 1

// var ni = 99;
// var nf = 1;

// while (ni >= nf) {
//     if (ni % 2 != 0 && ni > nf) {
//         document.write(ni, " - "); 
//     } 
//     if (ni == nf) {
//         document.write(ni); 
//         }
//     ni -= 1;
// }

// i = 99


// outras formas de resolução: 
// while (i >= 1) {

//     switch (i) {
//         case 1:
//             document.write(i)
//             break;
    
//         default:
//             document.write(i, ' - ')
//             break;
//     }
//     i -= 2
// }

// ixtarti = 99;
// finau = 1;

// while (ixtarti >= finau) {
//     if(ixtarti % 2 == 1){
//         if (ixtarti == finau){
//             document.write(ixtarti);
//         } else {
//             document.write(ixtarti," - ");
//         }
// }
//     ixtarti--;
// }

// document.write("<hr>");

// document.write("<h3>Desafio WHILE</h3>"); 

// Criar um programa que receba nºs
// DICA: use o prompt()
// Rodar o programa infinitamente, recebendo e mostrando os nºs digitados
// Quando o nº inserido for ZERO (0), encerrar o programa!

// num = prompt("Digite um número (zero para sair): ");

// var num;
// document.write("Números digitados: ");

// while (num != 0) {
//     num = parseFloat(prompt("Digite um número (zero para sair): "));
//     // num = prompt("Digite um número (zero para sair): ");
//     console.log(num, typeof num);
//     if (num != 0) {
//         document.write(`<p>${num}</p>`); 
//     }  
// }

// let loop = true;
// let num;

// while (loop) {
//     num = prompt("Digite um número:");
//     console.log(num);
//     if (num == 0) {
//         console.log("Fim!");
//         loop = false;
//     }
//     document.write(num, " ");    
// }

// document.write("<hr>");

// document.write("<h3>FOR</h3>"); 


// for (valor_inicial; condicao_logica; incremento) {

// }

// for (let cont = 1, limit = 10; cont <= limit; cont += 1)

// for (let cont = 1; cont <= 10; cont++) {
//     document.write(cont, " ");
// }

// document.write("<hr>");

// document.write("<h3>Desafio FOR</h3>"); 

// Solicite ao usuário um número e imprima a quantidade de asteriscos na tela referente ao nº informado

// const quant = parseInt(prompt("Quantos asteriscos?"));

// for (let index=0; index < quant; index++) {
//     document.write("* ");
// }

// document.write("<hr>");

// const quant1 = parseInt(prompt("Quantas linhas?")); 
// const quant2 = parseInt(prompt("Quantos asteriscos?"));

// for (let lin=0; lin < quant1; lin++) {
    
//     for (let col=0; col < quant2; col++) {
//         document.write("*");
//     }  
//     document.write("<br>");  
// }

// document.write("<hr>");

// document.write("<h3>Desafio 2 - FOR</h3>"); 

// for (let lin = 1; lin <= 10; lin++) {
//     for (let col = 0; col < lin; col++) {
//         document.write("*");
//     }
//     document.write("<br>");
// }

// document.write("<hr>");

document.write("<h3>Desafio 3 - para casa</h3>"); 
// mandar o GitHub para o professor
// 1ª linha = 20 colunas

// let x = 0;
// const ast = "*";

// console.log(ast, typeof ast);
// for (let y = 20; y > 0; y = y -2) {
//     for (let x = 1; x <=20; x++) {
//         console.log(y)
//         let lin_borda = x*ast;
//         console.log(lin_borda);
//         let lin_meio = "="*y;
//         console.log(lin_mei);
//         // document.write(lin);
//     }
// }

for (let lin = 20; lin >= 1; lin--) {
    for (let col = 0; col < lin; col++) {
        // for (let x = 0; x < 20; x++) {
            // document.write("=");
            for (let y = 1; y < 20; y++){
                let esp = "a";
                document.write(esp);
                for (let x = 20; x >= 1; x--) {
                    document.write("=");
                }
                document.write(esp);
                document.write("<br>");
                esp = esp + "a";
            }     
    }
        // document.write("<br>");
}

// *=================*
//  *===============*
//   *=============*  
//    *===========*
//     *=========*
//      *=======*
//       *=====*
//        *===*
//         *=*
//          *

// &nbsp; -> representa um espaço vazio

// CÓDIGO COLEGA CURSO

let esp = 0
let lin = prompt("quantas linhas?:")
if (lin >= 40) {
    lin = 40;
    document.write("maximo 40 linhas<br>");
}
let fim = lin-1
let pir = fim+fim-1
for (let index = 0; index < lin; index++) {
    for (let index = 0; index < esp; index++) {
        document.write("&ensp;");
    }
    document.write("*");
    if (fim != esp) {
        for (let index = 0; index < pir; index++) {
            document.write("=");
        }   
        document.write("*<br>");
        esp++;
        pir = pir-2;
    }
    
}


