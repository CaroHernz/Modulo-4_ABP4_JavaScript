//Visualizar problema

function visualizarProblema(e) {
    e.preventDefault();

    document.querySelectorAll('.problema').forEach(problema => {
        problema.classList.add('visually-hidden');
    })

    const numeroProblema = e.target.getAttribute('data-problema');

    const problemaMostrado = document.querySelector(`.problema[data-id="${numeroProblema}"]`);
    if (problemaMostrado) {
        problemaMostrado.classList.remove('visually-hidden')
    }
}

//Problema 1
function crearArreglo() {
    const input = document.getElementById('problema1');
    const resultado = document.getElementById('resultadoProblema1');

    const longitud = parseInt(input.value);

    if (longitud <= 0 || isNaN(longitud)) {
        resultado.textContent = 'Ingrese un número mayor a 0';
        return
    }
    const arreglo = [];
    let valor = 1;
    for (let i=0; i < longitud; i++) {
        arreglo.push(valor);
        valor *= 2;
    }

    console.log(arreglo);
    resultado.innerHTML = `<p>[${arreglo}]</p>`
}
//Problema 2
function numeroMayor() {
    const arreglo = document.getElementById('problema2');
    const resultado = document.getElementById('resultadoProblema2');

    if (!arreglo.value.trim()) {
        resultado.textContent = 'Ingrese 10 números separados por comas';
        return;
    }

    const numerosText = arreglo.value.split(',');
    const arregloNumeros = numerosText.map(num => {
        const numeros = num.trim();
        return numeros ? Number(numeros) : NaN;
        }).filter(num => !isNaN(num));

    if (arregloNumeros.length !== 10) {
        resultado.textContent = 'Ingrese 10 números válidos';
        return;
    }
    const nroMayor = Math.max(...arregloNumeros);
    console.log(nroMayor);
    resultado.innerHTML = `<p>El número mayor es ${nroMayor}</p>`
}

//Problema 3
function diaDeLaSemana() {
    const input = document.getElementById('problema3');
    const resultado = document.getElementById('resultadoProblema3');
    const numero = parseInt(input.value);

    if (isNaN(numero) || numero == 0 || numero > 7)  {
        resultado.textContent = 'Ingrese un número del 1 al 7';
        return;
    }
    const dias = {1: "Lunes", 2: "Martes", 3: "Miércoles", 4: "Jueves",
    5: "Viernes", 6: "Sábado", 7: "Domingo"};
    
    const dia = dias[numero];
    console.log(dia);
    resultado.innerHTML = `<p>El número ${numero} corresponde al día <strong>${dia}</strong></p>`
}
//Problema 4
function buscarElemento() {
    const arreglo = document.getElementById('arreglo4');
    const buscarNro = document.getElementById('buscarProblema4');
    const resultado = document.getElementById('resultadoProblema4');

    if (!arreglo.value.trim() || !buscarNro.value.trim()) {
        resultado.textContent = 'Ingrese números separados por comas';
        return;
    }
    const numerosText = arreglo.value.split(',');
    const arregloNumeros = numerosText.map(num => {
        const numeros = num.trim();
        return numeros ? Number(numeros) : NaN;
        }).filter(num => !isNaN(num));

    if (arregloNumeros.length > 100) {
        resultado.textContent = 'La cantidad de números ingresados supero el máximo permitido';
        return
    }
    const numeroBuscar = Number(buscarNro.value.trim());
    if (isNaN(numeroBuscar)) {
        resultado.textContent = 'Ingrese un número válido para buscar';
        return;
    }
    const posicion = arregloNumeros.indexOf(numeroBuscar);
    if (posicion === -1) {
        console.log('El número no se encuentra en el arreglo');
        resultado.innerHTML = 'El número no se encuentra en el arreglo';
        return;
    } else {
        console.log(posicion);
        resultado.innerHTML = `<p>El número ${numeroBuscar} se encuentra en la posición ${posicion}</p>`
    }
}

//Problema 5
function ordenarArreglo() {
    const arreglo = document.getElementById('problema5');
    const resultado = document.getElementById('resultadoProblema5');

    if (!arreglo.value.trim()) {
        resultado.textContent = 'Ingrese números separados por comas';
        return;
    }

    const numerosText = arreglo.value.split(',');
    const arregloDesordenado = numerosText.map(num => {
        const numeros = num.trim();
        return numeros ? Number(numeros) : NaN;
        }).filter(num => !isNaN(num));

    if (arregloDesordenado.length === 0) {
        resultado.textContent = 'Ingrese al menos un número';
        return
    }
    const arregloOrdenado = arregloDesordenado.sort((a,b) => a-b);
    console.log(arregloOrdenado);
    resultado.innerHTML = `<p>[${arregloOrdenado.join(', ')}]</p>`
}