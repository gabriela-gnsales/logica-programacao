console.log("=== COMPARAÇÃO ===");

function comparacao3() {
    console.log("Usando função Comparação3...");
    
    const n1 = parseInt(document.getElementById("n1").value);
    console.log("n1:", n1, "| type:", typeof n1);

    const n2 = parseInt(document.getElementById("n2").value);
    console.log("n2:", n2, "| type:", typeof n2);

    let operador = document.getElementById("operador").value;
    console.log("operador:", operador, "| type:", typeof operador);

    let result;

    switch(operador){
        case '==':
            result = n1 == n2;
            console.log('resul =', n1 == n2);
            break;
        case '!=':
            result = n1 != n2;
            console.log('resul =', n1 != n2);
            break;
        case '<':
            result = n1 < n2;
            console.log('resul =', n1 < n2);
            break;
        case '<=':
            result = n1 <= n2;
            console.log('resul =', n1 <= n2);
            break;
        case '>':
            result = n1 > n2;
            console.log('resul =', n1 > n2);
            break;
        case '>=':
            result = n1 >= n2;
            console.log('resul =', n1 >= n2);
            break;
        default:
            console.log('Esse não é um valor válido');
            break;       
    }        
    
    console.log("resultado:", result, "| type:", typeof result);

    document.getElementById("resultado").value = result;
}