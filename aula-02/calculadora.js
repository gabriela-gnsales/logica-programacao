console.log("=== CALCULADORA ===")

function calcular() {
    console.log("CLICK!!!")
    // entrada (captura) de dados
    const num1 = parseInt(document.getElementById("num1").value); // sempre pega o dado como string
    const num2 = parseInt(document.getElementById("num2").value);
    // há tbm o parseFloat() e o Number()

    // const num1 = document.querySelector("input#num1").value;
    // const num2 = document.querySelector("input#num2").value;
    console.log(num1, num2);
    
    // const number1 = parseInt(num1);
    // const number2 = parseInt(num2);
    console.log("num1:", typeof num1, "| num2:", typeof num2);

    // processamento
    // const soma = number1 + number2;
    const soma = num1 + num2;
    console.log("soma:", soma);

    // saída (exibir) dados
    // document.querySelector("#resultado").innerHTML = soma;
    document.getElementById("resultado").value = soma;
    // return soma;
}

// operador + tem 2 funções: adição de 2 números ou concatenação de 1 string e mais outra string ou nº (n~so precisa ser 2 textos pra concatenar)





