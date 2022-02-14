console.log("=== CALCULADORA ===")

function calcular() {
    console.log("CLICK!!!")
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    // const num1 = document.querySelector("input#num1").value;
    // const num2 = document.querySelector("input#num2").value;
    console.log(num1, num2);
    
    // const number1 = parseInt(num1);
    // const number2 = parseInt(num2);
    // console.log("number1:", typeof number1, "| number2:", typeof number2);

    // const soma = number1 + number2;
    const soma = parseInt(num1) + parseInt(num2);
    console.log("soma:", soma);
    document.querySelector(".resultado").innerHTML = soma;
    // return soma;
}






