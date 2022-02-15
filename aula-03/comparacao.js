console.log("=== COMPARAÇÃO ===");

function comparacao() {
    console.log("Comparando Maior Que...");
    
    const n1 = parseInt(document.getElementById("n1").value);
    console.log("n1:", n1, "| type:", typeof n1);
    console.log(n1.value);

    const n2 = parseInt(document.getElementById("n2").value);
    console.log("n2:", n2, "| type:", typeof n2);
    
    const result = n1 > n2;
    console.log("resultado:", result, "| type:", typeof result);

    document.getElementById("resultado").value = result;
}

function comparacao2() {
    console.log("Usando função Comparação2() ...");
    
    const n1 = document.getElementById("n1");
    console.log("n1:", n1.value, "| type:", typeof n1.value);
    // console.log(n1.value);

    const n2 = document.getElementById("n2");
    console.log("n2:", n2.value, "| type:", typeof n2.value);
    
    const result = n1.valeu > n2.value;
    console.log("resultado:", result, "| type:", typeof result);

    document.getElementById("resultado").value = result;
}