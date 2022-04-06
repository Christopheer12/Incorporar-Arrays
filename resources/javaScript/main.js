const ESPACIO = (" ");


let $banco = document.getElementById('banco');
let bancos = ['Santander taza UVA', 'Santander taza ESPECIAL', 'Santander taza tradicional', 'IUDU MILA SUPERVILLER']
console.log(bancos)
function mostrarBancos(arreglo, lugar) {
    let elementos = '<option selected disables>--Seleccione--</option>'
    for (let i = 0; i < arreglo.length; i++) {
        elementos += '<option value="' + arreglo[i] + '"> ' + arreglo[i] + ' </option>'
    }
    lugar.innerHTML = elementos
}

mostrarBancos(bancos, $banco);

$banco.addEventListener( function () {
    let valor = $banco.value
    switch (valor) {
        case 'Santander taza UVA':
            let UVA  = 18 / 100;
            break

        case 'Santander taza ESPECIAL':

            let taza_especial = 30 / 100;
            break

        case 'Santander taza tradicional':
            let taza_fija_santa = 55.5 / 100;
            break

        case 'IUDU MILA SUPERVILLER':
            let taza_fija_mila = 52 / 100;
            break
    }

})


//santander uva
function tazaDel18() {
    let plata = parseInt(document.getElementById("dinero_a_prestar").value);
    let cuotas = parseInt(document.getElementById("cantidad_de_cuotas").value);
    let cuotas_por_mes = plata / cuotas;
    let interes = cuotas_por_mes * valor;
    let final_por_mes_18 = cuotas_por_mes + interes;

    if ((cuotas >= 1) && (cuotas <= 60) && (document.getElementById("santander_taza_UVA"))) {
        alert(`tu cuotas mensuales serian de ${ESPACIO}` + final_por_mes_18 + `En caso de ser cuota UVA, recuerde que las cuotas pueden aumentar segun la inflacion del pais`);

    }

    else {
        alert("Los creditos prendarios solo van de 1 a 60")
    }
}

tazaDel18();
