console.log("=== COMPARAÇÃO ===");

function comparacao1() {
    console.log("Usando função Comparação1() ...");
    
    const n1 = parseInt(document.getElementById("n1").value);
    console.log("n1:", n1, "| type:", typeof n1);
    console.log(n1.value);

    const n2 = parseInt(document.getElementById("n2").value);
    console.log("n2:", n2, "| type:", typeof n2);
    
    const result = n1 > n2;
    console.log("resultado:", result, "| type:", typeof result);

    // if (cowomp == true){
    //     document.getElementById("result").value = "Verdadeiro";

    // }else{
    //     document.getElementById("result").value = "Falso"
    // }

    document.getElementById("resultado").value = result;
}

function comparacao2() {
    console.log("Comparando Maior Que...");

    // entrada
    const n1 = document.getElementById("n1");
    console.log(n1.value);

    const n2 = document.getElementById("n2");
    console.log(n2.value);

    // processamento
    const result = n1.value > n2.value;
    console.log(result);

    // saída
    document.getElementById("resultado").value = result;
}