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
function funcionSumatoria() {
    const input = document.getElementById('problema1');
    const numero = parseInt(input.value);
    const resultado = document.getElementById('resultadoProblema1');

    if (numero >= 100|| isNaN(numero) || numero <= 0) {
        resultado.textContent = 'Ingrese un número entero mayor que 0 y menor que 100';
        return
    }

    let sumatoria = 0;
    for (let i =1; i<= numero; i++) {
        sumatoria +=i;
        resultado.innerHTML = `<p>La suma de los números es ${sumatoria}</p>`
        console.log(`La suma de los números es ${sumatoria}`);
        }
}
//Problema 2
function funcionPrimo() {
    const input = document.getElementById('problema2');
    const numero = parseInt(input.value);
    const resultado = document.getElementById('resultadoProblema2');

    if (isNaN(numero) || numero <= 0) {
        resultado.textContent = 'Ingrese un número válido';
        return
    }
    if (numero <=1) {
        console.log(`El número ${numero} no es un número primo`);
        resultado.innerHTML = `<p>El número ${numero} no es un número primo</p>`
        return;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            console.log(`El número ${numero} no es un número primo`);
            resultado.innerHTML = `<p>El número ${numero} no es un número primo</p>`
            return;
        } else {
            console.log(`El número ${numero} es un número primo`);
            resultado.innerHTML = `<p>El número ${numero} es un número primo</p>`
            return;
        }
    }

}
//Problema 3
function cuentaRegresiva() {
    const input = document.getElementById('problema3');
    const numero = parseInt(input.value);
    const resultado = document.getElementById('resultadoProblema3');

    if (numero >= 100|| isNaN(numero) || numero <= 0) {
        resultado.textContent = 'Ingrese un número entero mayor que 0 y menor que 100';
        return
    }

    const arregloRegresivo = [];
    for (let i = numero; i >=1 ; i--) {
        arregloRegresivo.push(i);
        }

    resultado.textContent = arregloRegresivo.join(', ');
    console.log({arregloRegresivo})
}

//Problema 4
function sumatoriaPares() {
    const input = document.getElementById('problema4');
    const numero = parseInt(input.value);
    const resultado = document.getElementById('resultadoProblema4');

    if (isNaN(numero) || numero < 10 || numero > 1000) {
        resultado.textContent = 'Ingrese un número entero mayor que 10 y menor que 1000';
        return;
    }
    let sumatoria = 0;
    for (let i = 11; i <= numero; i++) {
        if (i % 2 === 0) {
            sumatoria += i
        }
    }
    console.log(`La sumatoria de los números pares es ${sumatoria}`);
    resultado.innerHTML = `<p>La sumatoria de los números pares es ${sumatoria}</p>`
}

//Problema 5
function tablaMultiplicar() {
    const input = document.getElementById('problema5');
    const numero = parseInt(input.value);
    const resultado = document.getElementById('resultadoProblema5')

    if (isNaN(numero)) {
        resultado.textContent = 'Ingrese un número válido';
        return;
    }
    let tabla = ''
    for (let i = 1; i <= 12; i++) {
        tabla += `
        <p> ${numero} x ${i} = ${numero*i}</p>`;
        }
    console.log(tabla);        
    resultado.innerHTML = tabla;
}

//Problema 6
function ordenarArreglo() {
    const arreglo = document.getElementById('problema6');
    const resultado = document.getElementById('resultadoProblema6');

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