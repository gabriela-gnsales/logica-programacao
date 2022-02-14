console.log("=== FUNÇÕES ===")

// Declaração de FUNÇÃO NOMEADA
// function name(params) { }
// nem sempre precisa colocar os parâmetros
function soma(n1=0, n2=0) {
    return n1 + n2;
}
//NaN = not a number
console.log(soma); // Ref Func (antes de definir o parâmetro padrão (valor zero para n1 e n2) - DEFAULT PARAMETER)
console.log(soma()); // NaN (antes de definir o parâmetro padrão (valor zero para n1 e n2) - DEFAULT PARAMETER)
console.log(soma(5)); // NaN (antes de definir o parâmetro padrão (valor zero para n1 e n2) - DEFAULT PARAMETER)
console.log(soma(5, 10)); // 15

// var nume1 = parseFloat(prompt("Informe o número: "));
// var nume2 = parseFloat(prompt("Informe o outro número: "));

// function summath(num1,num2){
//     return num1 + num2;
// }

// document.write("O resultado é: ", summath(nume1,nume2));

// // -----

// function soma() {
//     let args = [].slice.call(arguments, 0);
    
//     let soma = 0;

//     for (let i = 0; i < args.length; i += 1) {
//         soma += args[i];
//     };
//     return soma;
// }


// Declaração de FUNÇÃO NÃO NOMEADA (ANÔNIMA)
// tipo de declaração mais utilizada, mas precisa estar associada com um ...?
// function () { }
const sum = function (a=0, b=0) {
    return a + b;
}

console.log(sum);
console.log(sum());
console.log(sum(5));
console.log(sum(5, 10));


