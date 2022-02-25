console.log("=== CÁLCULO CUSTO ENTREGAS ===");

function calcular() {
    const diasTrabalhados = 20; // dias
    const precoGas = 5.5; // R$
    const volTanqueGas = 40.0; // litros
    const distIdaVolta = 20; // km
    const kmLitroCarro = 12;

    let totalKmMes= 0.0;
    let totalValorGastoMes = 0.0;

    let numEntregas = document.getElementById("numEntregas").value;
    let distEntregas = parseFloat(document.getElementById("distEntregas").value);

    const totalKmDia = (numEntregas * distEntregas * 2) + distIdaVolta;
    const totalKmMes = totalKmDia * diasTrabalhados;
    const custoGasInicial = volTanqueGas * precoGas;
    const quantoCarroAnda = volTanqueGas * kmLitroCarro;

    console.log("totalKmDia:", typeof totalKmDia);

    for (let cont = 0; cont <= numEntregas; cont++) {
        
    }



}